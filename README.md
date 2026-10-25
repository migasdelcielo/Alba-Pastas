# ALBA · Pastas Artesanales 🍝
### Solución Integral de QR, Landing Page Móvil & Etiqueta de Packaging

Este paquete contiene todo lo necesario para que tu clienta lance su emprendimiento con una presentación profesional, minimalista y pensada para la experiencia del cliente al momento de cocinar.

---

## 📁 Archivos Incluidos

1. **`index.html`**:
   - **La Landing Page Web Móvil** que verá el cliente al escanear el paquete.
   - Diseño UI/UX minimalista, cálido, limpio y optimizado para teléfonos.
   - Contiene exactamente todo lo del documento original:
     - Guía de cocción paso a paso (*"El secreto está en la cocción"*).
     - **Temporizador interactivo de 5 minutos** con sonido suave (para quien cocina con el celular al lado de la hornalla).
     - Consejos de conservación (*"Del freezer a tu mesa"*).
     - Recetario de salsas interactivo (*Champiñones, Salsa Rosa, Fileto y Cuatro Quesos*).
     - Botones de **recompra por WhatsApp** y enlace a **Instagram**.

2. **`generador-qr.html`**:
   - Herramienta visual interactiva para ver cómo queda la etiqueta adhesiva del paquete.
   - Permite cambiar el enlace, previsualizar la etiqueta en tiempo real y descargar el QR en alta definición con un solo clic.

3. **`qr-alba.svg` y `qr-alba.png`**:
   - Archivo **vectorial (`.svg`)** para la imprenta (escalable a cualquier tamaño sin pixelarse).
   - Archivo de **alta resolución (`.png`, 1200×1200 px a 300 DPI)** listo para usar en Canva, Illustrator o Photoshop.

4. **`generate-qr.js`**:
   - Script en Node.js por si deseas regenerar el QR por consola pasando cualquier URL:
     ```bash
     node generate-qr.js "https://tu-enlace-final.com"
     ```

---

## 🚀 ¿Cómo publicar la página web gratis en 2 minutos?

Para que el código QR funcione en los celulares de los clientes, el archivo `index.html` debe estar publicado en internet. Las opciones más recomendadas y 100% gratuitas son:

### Opción 1: Netlify Drop (La más fácil y rápida, sin registro técnico)
1. Entrá a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastrá la carpeta completa `Bianca` (o solo el archivo `index.html`).
3. En 10 segundos te dará un enlace público tipo `https://alba-pastas.netlify.app`.
4. ¡Listo! Ese enlace es el que pones en el QR.

### Opción 2: Vercel
1. Ingresá a [vercel.com](https://vercel.com).
2. Subí el proyecto para obtener un dominio gratuito tipo `https://alba-pastas.vercel.app` (o asociar un dominio propio tipo `albapastas.com`).

### Opción 3: GitHub Pages
1. Subí este repositorio a GitHub.
2. En *Settings > Pages*, activá *Deploy from Branch: main*.

---

## 📱 ¿Cómo personalizar el WhatsApp e Instagram?

Abrí el archivo `index.html` en un editor de texto (o bloc de notas) y en las líneas finales verás este bloque fácil de editar:

```javascript
const CONFIG = {
  // Reemplazar con el número de teléfono con código de país (sin '+' ni espacios)
  // Ejemplo Argentina: 5491123456789
  whatsappNumber: "5491100000000",
  
  // Mensaje automático que se abrirá en WhatsApp
  whatsappMessage: "¡Hola ALBA! Probé sus sorrentinos y me encantaron. Quisiera hacer una consulta o pedido.",
  
  // Usuario de Instagram (sin el @)
  instagramUser: "alba.pastas"
};
```

---

## 🏷️ Recomendaciones Técnicas para la Imprenta

Cuando envíen a imprimir las etiquetas adhesivas para las cajas o bandejas de sorrentinos:

1. **Material del adhesivo (¡Muy importante!):**
   - Solicitar **BOPP (Polipropileno) autoadhesivo con laminado mate** o **Vinilo adhesivo**.
   - *¿Por qué?* El papel adhesivo común se humedece y se arruga con el frío del freezer y la condensación al salir. El vinilo/BOPP es impermeable y no se despega ni borra.
2. **Tamaño del QR en la etiqueta:**
   - Mínimo recomendado: **2 cm × 2 cm**.
   - Dejar un margen blanco de al menos 2 a 3 mm alrededor del QR para que la cámara del celular enfoque rápido.
3. **Frase de llamado a la acción (CTA):**
   - Siempre acompañar el QR con un texto visible:
     > *"¡Escaneá aquí con tu celular para ver tiempos de cocción y recetas de salsas!"*
