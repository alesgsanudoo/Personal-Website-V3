---
id: 5
title: 'EasyAccess'
description: 'La Plataforma Definitiva de Gestión Unificada de Archivos con Asistente IA'
technologies: ["Electron", "Node.js", "Javascript", "MCP Agent", "Cloud Management"]
github: 'https://github.com/alesgsanudoo/EasyAccess'
preview: 'http://easyaccess.dev/'
slug: 'easyaccess'
---

<p align="center">
  La Plataforma Definitiva de Gestión Unificada de Archivos con Asistente IA<br/>
  Gestiona de forma fluida <strong>Google Drive</strong>, <strong>OneDrive</strong>, <strong>Dropbox</strong> y tus <strong>Archivos Locales</strong> Todo en un Solo Lugar.
</p>

---

## Características

### 🌟 Gestión Unificada de Archivos
- Acceso a archivos desde múltiples proveedores de almacenamiento en la nube y directorios locales
- Gestiona archivos en una interfaz tipo canvas en una sola vista
- Transferencias de arrastrar y soltar entre diferentes servicios de almacenamiento
- Sincronización de archivos en tiempo real y seguimiento del progreso

### 🤖 Asistente con Inteligencia Artificial
- Asistente integrado **Claude AI** para operaciones inteligentes de archivos
- Comandos en lenguaje natural para tareas de gestión de archivos
- Capacidades automáticas de organización y búsqueda de archivos

### ☁️ Soporte Multi-Nube
- **Google Drive** – Integración completa con archivos de Google Workspace
- **OneDrive** – Soporte para almacenamiento en la nube de Microsoft
- **Dropbox** – Gestión completa de archivos de Dropbox
- **Archivos Locales** – Acceso nativo al sistema de archivos con controles de permisos

### 🎨 Interfaz Moderna
- Espacio de trabajo **basado en canvas** limpio e intuitivo
- Cajas de almacenamiento redimensionables y arrastrables
- Soporte para tema oscuro/claro
- Diseño responsivo que se adapta a tu flujo de trabajo

---

## Demostración

<div align="center">
  <img src="https://raw.githubusercontent.com/alesgsanudoo/EasyAccess/refs/heads/main/assets/add-accounts.gif" alt="Añadiendo Cuentas en la Nube" width="800"/>
  <img src="https://raw.githubusercontent.com/alesgsanudoo/EasyAccess/refs/heads/main/assets/agent-search-transfer.gif" alt="Búsqueda y Transferencia con Agente IA" width="800"/>
  <img src="https://raw.githubusercontent.com/alesgsanudoo/EasyAccess/refs/heads/main/assets/agent-create-file.gif" alt="Creación de Archivo con Agente IA" width="800"/>
  <img src="https://raw.githubusercontent.com/alesgsanudoo/EasyAccess/refs/heads/main/assets/transfer-file.gif" alt="Demo de Transferencia de Archivos" width="800"/>
  <img src="https://raw.githubusercontent.com/alesgsanudoo/EasyAccess/refs/heads/main/assets/transfer-manager.png" alt="Gestor de Transferencias" width="800"/>
</div>

---

## Configuración

### Requisitos Previos
- **macOS 10.15+** 
- **Node.js 18+** 

### Inicio Rápido
```bash
git clone https://github.com/CSGrinders/EasyAccess/easyaccess.git
npm install
npm run dev
npm start
```

### Configuración
Variables de Entorno para la Integración de **Google Drive**, **OneDrive**, **Dropbox** 
Crea un archivo .env en la raíz del proyecto:

```bash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
ONEDRIVE_CLIENT_ID=your_onedrive_client_id
ONEDRIVE_CLIENT_SECRET=your_onedrive_client_secret
DROPBOX_CLIENT_ID=your_dropbox_client_id
DROPBOX_CLIENT_SECRET=your_dropbox_client_secret
ANTHROPIC_API_KEY=your_anthropic_api_key
```
> ## Nota sobre Credenciales de API y Pruebas de Seguridad
> Por motivos de seguridad y pruebas, las credenciales oficiales de **Google**, **OneDrive** y **Dropbox** **no están incluidas** en este repositorio.  
>  
> **Los usuarios deben proporcionar sus propias claves de API** creando aplicaciones en las respectivas consolas de desarrolladores:  
> - [Configuración OAuth de Google Drive](https://developers.google.com/drive/api/v3/quickstart/js)  
> - [Registro de Aplicación OneDrive](https://learn.microsoft.com/en-us/graph/auth-register-app-v2)  
> - [Consola de Aplicaciones Dropbox](https://www.dropbox.com/developers/apps)  
>  
> ### API del Asistente IA  
> - Por defecto, los usuarios pueden **registrarse con nosotros** para recibir **10 llamadas gratuitas a Claude AI** con fines de demostración.  
> - Como alternativa, establece tu propia `ANTHROPIC_API_KEY` en `.env` para usar tu cuota personal de la API de Claude.

---

## Reconocimientos

Este proyecto incorpora código del repositorio [Model Context Protocol Servers](https://github.com/modelcontextprotocol/servers), que está licenciado bajo la [Licencia MIT](https://github.com/modelcontextprotocol/servers/blob/main/LICENSE). Agradecemos a los autores originales y colaboradores por su trabajo de código abierto.

## Licencia

Licencia MIT - consulta [LICENSE](https://github.com/alesgsanudoo/EasyAccess/blob/main/LICENSE) para más detalles.

---

<p align="center">Hecho con ❤️ usando Electron, React, y Anthropic API</p>
