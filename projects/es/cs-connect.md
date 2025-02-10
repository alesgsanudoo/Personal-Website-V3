---
id: 4
title: 'CS-Connect'
description: 'Un script en Bash para facilitar la administración y conexión a los servidores xinu backend de Purdue, con funciones como auto-blacklisting y selección aleatoria de servidores.'
technologies: ['Bash', 'Linux', 'awk', 'grep']
github: 'https://github.com/alesgsanudoo/CS-Connect'
slug: 'cs-connect'
---

## Introducción 🚀

¡Bienvenido a **CS-CONNECT**! Un sencillo script en Bash para administrar y conectarte a los servidores xinu backend de Purdue. Este script está diseñado para hacerte la vida más fácil al lidiar con servidores, listas negras y configuraciones.

PD: Hice este proyecto por diversión y porque estaba aburrido y no quería hacer mi tarea de redes :)

<img align="center" alt="Codificación" width="1000" src="https://raw.githubusercontent.com/alesgsanudoo/alesgsanudoo/refs/heads/main/images/gifs/cs-connect/cc-command.gif">
---

## Visión General 🌟

El script **CS-CONNECT** es una herramienta que te ayuda a:
- Conectarte a servidores aleatorios o específicos. (¡Ya no es necesario usar dos comandos! :D)
- Incluir en la lista negra a servidores rotos o no disponibles.
- Descargar y actualizar automáticamente la lista de servidores rotos a partir de las notas de los TA.
- Personalizar las configuraciones.

---

## Características 🎨

- **Conexión a Servidor Aleatorio**: ¡No pierdas tiempo eligiendo un servidor, deja que el script lo haga por ti!
- **Relleno Automático**: El script descargará tu archivo `xinu.xbin` y la máquina de potencia por ti.
- **Gestión de Lista Negra**: Agrega o elimina servidores de tu lista negra.
- **Actualización Automática de Servidores Rotos**: Mantente al día con la lista más reciente de servidores rotos obtenida de las notas de los TA.