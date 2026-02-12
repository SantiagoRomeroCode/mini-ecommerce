# Mini Ecommerce - Prueba Técnica Frontend

Este proyecto consiste en el desarrollo de una aplicación de comercio electrónico a pequeña escala utilizando React. La solución se enfoca en la modularidad del código, la gestión eficiente del estado global y la persistencia de datos en el cliente.

## Arquitectura y Decisiones Técnicas

El desarrollo se fundamenta en los siguientes pilares técnicos para garantizar un código limpio y escalable:

* **Arquitectura de Componentes**: El proyecto se ha estructurado en componentes independientes (Header, ProductList, Cart) localizados en la carpeta `src/components`. Esta separación facilita el mantenimiento y las pruebas unitarias.
* **Estado Global (Context API)**: Se implementó un `CartProvider` utilizando la Context API de React. Esta decisión elimina la necesidad de realizar prop drilling, permitiendo que cualquier componente acceda y modifique el estado del carrito de forma directa y eficiente.
* **Persistencia de Datos**: Se integró el uso de `localStorage` mediante el hook `useEffect`. Esto garantiza que los productos seleccionados por el usuario persistan tras recargar la página o cerrar la sesión del navegador.
* **Manejo de Datos Local**: La información de los productos se consume desde un archivo estructurado en formato JSON (`src/data/products.json`), simulando la estructura de datos de una API REST profesional.

## Estructura del Proyecto


```text
src/
├── components/     # Componentes visuales reutilizables
├── context/        # Lógica de estado global (Context API)
├── data/           # Fuente de datos local (JSON)
├── App.jsx         # Layout principal
└── main.jsx        # Punto de entrada y configuración del Provider
Funcionalidades Implementadas
Catálogo Dinámico: Renderizado de productos a partir de un archivo JSON con manejo de imágenes y metadatos.

Gestión de Carrito:

Agregado de productos con validación de duplicados.

Incremento y decremento de cantidades con actualización automática de subtotales.

Eliminación de ítems específicos.

Cálculo de Totales: Procesamiento en tiempo real del monto total de la compra.

Interfaz Responsiva: Estilos CSS optimizados para una correcta visualización en diferentes resoluciones de pantalla.

Flujo de Compra: Simulación de proceso de pago con feedback al usuario y limpieza selectiva de estados.

Instalación y Ejecución
Siga estos pasos para ejecutar el proyecto en un entorno local:

Clonar el repositorio:

Bash
git clone <url-del-repositorio>
Instalar las dependencias necesarias:

Bash
npm install
Iniciar el servidor de desarrollo:

Bash
npm run dev
La aplicación estará disponible de forma predeterminada en http://localhost:5173/.