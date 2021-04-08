# Baustack Website

### Control
```bash
npm run dev # desarollo
npm run build # genera kit para Node.JS
npm run start # corre sobre Node.JS
```

## Objetivos

Usando como referencia el sitio web https://baustack.com/
1. Se deberán extraer estilos gráficos.
1. Copiar de manera idéntica los componentes, pero utilzando colores y tipografías "variables", que puedan ser cambiadas en un archivo y afectar la totalidad de la aplicación.
1. Las variables deben ser declaradas en styles/index.scss :root (al final de dicha hoja de estilos).

---
## Componentes Baustack:

Se espera que los componentes sean:
1. 100% reutilizables.
1. Polimórficos.
1. Aislados: el comportamiento del componente debe ser autónomo.
1. Formas absolutas, tal y como vienen desde el ejemplo (border, shadow, margin), pero pintados con variables.
1. El árbol de componentes debe respetar la siguiente estructura:
    * Nivel 1: components, carpeta padre.
    * Nivel 2: organismos, conjuntos de componente por contexto funcional "Inputs", "Buttons", "Images", etc. En este nivel declaramos los SASS como módulos (NombreConjunto.module.scss). Se entiende que todas las moléculas dentro comparten elementos comunes, por esa razón, se deberá trabajar SASS utilzando @mixin e @include cada vez que sea posible.
    * Nivel 3: moléculas. Unidades particulares dentro del conjunto.
    * Nivel 4: átomos. Archivos independientes, componentes stateless, stateful, funciones de apoyo, etc.

---
## Librería Baustack:

Se solicita seguir las siguientes buenas prácticas para la librería:

1. Se crea un Set en "baustack-lib/Sets" y se importa desde @lib/Utils/Set (ruta absoluta).
1. El compontent Set recibe 3 atributos: title, docs, properties:
    * title: el título del conjunto, nombre del componente.
    * docs: la descripción del componente, casos de uso, variantes, qué resuelve, etc.
    * properties: se describen propiedades del componente, métodos, argumentos que recibe, etc. Debe ser una lista, <ol> o <ul>
1. Una vez completado un Set, se importa en la ruta "pages/libreria/index.js". Aquí ingresa en la página para poder visualizarlo.