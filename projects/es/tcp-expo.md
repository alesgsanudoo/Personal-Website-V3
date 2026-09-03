---
id: 16
title: 'TCP Expo'
description: 'Un algoritmo personalizado de control de congestión TCP para el kernel de Linux que utiliza retroalimentación basada en el retardo.'
technologies: ['C', 'Linux Kernel', 'Bash', 'Python', 'Flent']
github: 'https://github.com/alesgsanudoo/TCP-EXPO'
slug: 'tcp-expo'
---

# Control de congestión TCP Expo

TCP Expo es un algoritmo de control de congestión basado en el retardo que construimos como módulo del kernel para CS536. En lugar de esperar a la pérdida de paquetes para saber que la red está congestionada (como hacen Reno y CUBIC), Expo observa el tiempo de ida y vuelta. Cuando el RTT comienza a aumentar, significa que los paquetes están esperando en las colas de los routers: la red se está llenando aunque todavía no se haya descartado nada.

La idea central es el **impulso**: medimos cuánto se ha inflado el RTT con respecto a la línea base (el RTT más bajo que hemos observado). Si el RTT sigue cerca de la línea base, aumentamos la ventana agresivamente. Si está subiendo rápidamente, reducimos el ritmo. Si supera el 75% de inflación, hacemos una pequeña reducción llamada **Pulso negativo** (siguiendo el consejo del profesor): reducimos la ventana aproximadamente 3% para disminuir la cola sin perder el rendimiento.

Hay tres zonas:
- **Limpia** (inflación del RTT < 30%) — crece rápido, hay espacio en el canal
- **Construcción** (30–75%) — hay algo de cola, crece con cuidado
- **Evento Expo** (> 75%) — hay demasiado retardo, activa un Pulso negativo

Esto permite que Expo llene el canal sin saturarlo. En nuestras pruebas con flent igualó o superó a CUBIC y Reno en rendimiento manteniendo una latencia baja, y obtuvo una equidad casi perfecta (índice de Jain de 0.9998) entre 8 flujos simultáneos.

También quisimos experimentar y divertirnos un poco: comenzamos con una ventana inicial de 20 segmentos en lugar de los 10 predeterminados, lo que mueve los datos más rápido en enlaces de gran ancho de banda. Además, en la zona limpia tenemos un sistema de aceleración: cuanto más tiempo dura la conexión sin encontrar congestión, más rápido permitimos que crezca la ventana (hasta 16 veces la tasa base).

## Resultados (pruebas de 60 segundos)

Flujo único (1 TCP):

| Algoritmo | Rendimiento (Mbps) | RTT promedio (ms) | Ping promedio (ms) |
|-----------|---------------------|-------------------|--------------------|
| CUBIC     | 100.24              | 38.55             | 34.33              |
| RENO      | 97.02               | 37.98             | 33.31              |
| **EXPO**  | **96.41**           | **39.56**         | **35.33**          |
| BBR       | 84.46               | 45.33             | 40.24              |

8 flujos (8 TCP):

| Algoritmo | Rendimiento total (Mbps) | Equidad de Jain | Ping promedio (ms) | RTT promedio (ms) |
|-----------|---------------------------|------------------|--------------------|-------------------|
| CUBIC     | 114.64                    | 0.9904           | 48.77              | 53.56             |
| **EXPO**  | **112.52**                | **0.9998**       | **53.63**          | **59.69**         |
| RENO      | 97.19                     | 0.9931           | 52.90              | 59.63             |
| BBR       | 89.79                     | 0.9884           | 50.60              | 57.93             |

Expo se acerca a CUBIC en rendimiento, pero tiene una equidad mucho mejor entre flujos: el rendimiento por flujo varió de 13.68 a 14.43 Mbps entre los 8 flujos, lo que es prácticamente uniforme.

## Resultados (pruebas de 20 segundos)

Con pruebas más cortas Expo no funciona tan bien porque la aceleración y el envejecimiento de rtt_min necesitan tiempo para calentarse, aunque sigue siendo competitivo.

Flujo único (1 TCP):
| Algoritmo | Rendimiento (Mbps) | RTT promedio (ms) | Ping promedio (ms) |
|-----------|---------------------|-------------------|--------------------|
| EXPO      | 92.43               | 50.43             | 32.84              |
| BBR       | 92.40               | 48.47             | 33.49              |
| CUBIC     | 91.28               | 40.80             | 27.08              |
| RENO      | 90.25               | 42.53             | 26.83              |

8 flujos (8 TCP):
| Algoritmo | Rendimiento total (Mbps) | Equidad de Jain | Ping promedio (ms) | RTT promedio (ms) |
|-----------|---------------------------|------------------|--------------------|-------------------|
| RENO      | 98.71                     | 0.9810           | 36.46              | 58.07             |
| CUBIC     | 97.80                     | 0.8498           | 37.76              | 63.19             |
| EXPO      | 83.41                     | 0.9682           | 45.03              | 72.50             |
| BBR       | 77.32                     | 0.9935           | 37.62              | 59.89             |

A los 20 segundos Expo queda por detrás en rendimiento total en la prueba de 8 flujos, pero conserva una mejor equidad que CUBIC (0.97 frente a 0.85). La ejecución de 60 segundos es donde realmente muestra sus fortalezas.

Obviamente, esto se realizó en un entorno pequeño con un único enlace cuello de botella y sin tráfico cruzado, pero es una prueba de concepto interesante sobre cómo puede funcionar el control de congestión basado en el retardo en el kernel. Por eso no podemos decir que supere a los demás, lamentablemente.

### Para más información

Consulta el **PDF del informe TCP Expo**, que incluye experimentos y análisis más detallados. Se encuentra en el repositorio como **report/TCP Expo Report.pdf**.

---

## CONFIGURACIÓN DEL MÓDULO DEL KERNEL

Utilizamos Ubuntu 22.04 para este proyecto. Comienza con una instalación nueva en cualquier máquina o VM.

### Requisitos previos

```
sudo apt update
sudo apt install -y \
  build-essential libncurses-dev libelf-dev libssl-dev \
  bison flex pkg-config dwarves

sudo apt install -y linux-source-5.15.0
```

Después extrae el código fuente del kernel:

```
cd /usr/src
sudo tar xf linux-source-5.15.0.tar.bz2
sudo chown -R $USER:$USER linux-source-5.15.0
```

---

### Configuración del árbol del kernel (una sola vez)

Estos pasos conectan el módulo con el sistema de compilación del kernel. Solo es necesario hacerlos una vez.

1. Edita `net/ipv4/Kconfig` — dentro del bloque `if TCP_CONG_ADVANCED`, añade:

```
source "net/ipv4/tcp_expo/Kconfig.fragment"
```

2. Edita `net/ipv4/Makefile` — añade:

```
obj-$(CONFIG_TCP_EXPO) += tcp_expo/
```

3. Activa el módulo en menuconfig:

```
make menuconfig
```

Ve a `Networking support → Networking options → TCP: advanced congestion control → TCP Expo congestion control` y selecciona `<M>`.

4. Prepara la compilación del kernel (desde la raíz del código fuente):

```
make oldconfig
make prepare
make modules_prepare
```

---

### Compilación y carga

Tenemos dos scripts que gestionan la compilación y la carga para que no tengas que hacerlo manualmente.

**`build.sh`** — sincroniza el código fuente con el árbol del kernel, compila el módulo y descarga la versión anterior. Ten en cuenta que esto termina las conexiones TCP activas porque debe retirar el módulo en ejecución; tendrás que volver a conectarte por SSH después.

Asegúrate de cambiar `LOCAL_DIR` a la ubicación del código fuente de tcp_expo.

```
./build.sh
```

**`change.sh`** — carga el módulo compilado y cambia el sistema para que use expo. Ejecútalo después de volver a conectarte.

```
./change.sh
```

Puedes verificar que está activo con:

```
sysctl net.ipv4.tcp_congestion_control
```

---

## Cómo ejecutar nuestra suite de pruebas

Necesitamos tener instalados flent e iperf3. El servidor de pruebas era netserver en el puerto de control 4444, proporcionado por el profesor.

```
sudo apt install -y flent iperf3 netperf
```

(Asegúrate de que flent sea la última versión: la de apt es antigua y no incluye algunas funciones que usamos. Si es necesario, puedes instalarla desde pip: `pip3 install --user flent`).

`run_flent_tests.sh` ejecuta todo automáticamente: recorre reno, bbr, cubic y expo, ejecuta una prueba de un solo flujo (`tcp_upload`) y otra de 8 flujos (`tcp_8up`) para cada uno, genera gráficos de rendimiento/cwnd/rtt y crea los CSV de comparación.

```
./run_flent_tests.sh
```

La duración se establece al principio del script (`DURATION=60` para 60 segundos). Descubrimos que 60 segundos le da a expo tiempo suficiente para converger; las pruebas más cortas (20 s) no permiten que el envejecimiento de `rtt_min` y la aceleración de `clean_rtts` alcancen todo su ritmo.

Cada prueba:
- Establece el control de congestión mediante `sysctl`
- Ejecuta `flent tcp_upload` (un flujo) o `flent tcp_8up` (8 flujos) contra el servidor de pruebas
- Captura estadísticas de sockets (`--socket-stats`) para los datos de cwnd/RTT
- Genera gráficos `.png` de rendimiento, cwnd y RTT

Después de terminar todas las pruebas, `generate_comparison.py` se ejecuta y produce tres CSV en `plots/`:
- `single_stream_comparison.csv` — rendimiento, RTT, ping y cwnd por algoritmo
- `multi_stream_comparison.csv` — rendimiento total, índice de equidad de Jain y ping por algoritmo
- `multi_stream_per_flow.csv` — desglose por flujo para la prueba de 8 flujos

También puedes regenerar los CSV en cualquier momento sin volver a ejecutar las pruebas:

```
python3 generate_comparison.py
```

#### Estructura de salida:

```
plots/
  single_stream_comparison.csv
  multi_stream_comparison.csv
  multi_stream_per_flow.csv
  reno/
    1tcp/   (throughput.png, cwnd.png, rtt.png)
    8tcp/   (throughput.png, cwnd.png, rtt.png, diagnosis.png)
  bbr/
    1tcp/
    8tcp/
  cubic/
    1tcp/
    8tcp/
  expo/
    1tcp/
    8tcp/
```
