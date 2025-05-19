Requisitos:

- [Node.js](https://nodejs.org/)
- [Java](https://adoptium.net/) (para ejecutar ANTLR)
- Archivo `antlr-4.13.2-complete.jar` descargado desde [antlr.org](https://www.antlr.org/download.html)


Instalación y generación de archivos:

1.Clona este repositorio o descarga los archivos.

2.Instala las dependencias de Node.js:
   ```sh
   npm install

3.En la terminal pega y genera los archivos de ANTLR (Lexer, Parser, Listener):

java -jar antlr-4.13.2-complete.jar -Dlanguage=JavaScript -o generated pilagrammar.g4


EJECUCIÓN:
1. Pega en el input.txt uno de los 4 ejemplos que están en el repositorio
2. Ejecútalo con: node analizador.mjs input.txt

3. Si es valido el ejemplo debería aparecer la tabla de lexemas-tokens, el árbol de análisis sintáctico y la interpretación en JavaScript 
