# Componentes y UIKit

En Baustack desarrollamos nuestro propio UIKit,
donde se encuentra toda la lógica de diseño. En este
kit encontraremos elementos huecos, meramente estructurales,
conocidos como `Stateless / Dumb component / Presentational`.

Características de un `Stateless component`:
1. Componentes "tontos", pueden manejar polimorfismo para su
   render, pero ninguna lógica de uso.
2. 100% reutilizables.

Atención: existen algunos componentes dentro de UIKit que por
su naturaleza son `stateful`. Estas excepciones son posibles
para cualquier componente que cumpla lo siguiente:
1. Solo existe para generar un vínculo con otra estructura, 
   por ejemplo, el Nav y su interacción con el menú, el
   selector de idioma, etc.
