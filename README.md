# Angular 
## Installation
1. Download and install **Node.js** via this [link](https://nodejs.org/es/download/)

!!!!!!To verify if the installation was correct, type in your Command Prompt(Windows) to check the **Node.js**  and **npm** version

``` 
node --version
```
and
``` 
npm --version
```
2. Donwload and install **TypeScript**, visit this [link](https://www.typescriptlang.org/) or type in your Command Prompt (Windows)

``` 
npm install -g typescript
```
3. Donwload and install **Angular-Cli**, visit this [link](https://cli.angular.io/) or type in your Command Prompt (Windows)

``` 
npm install -g @angular/cli
```
!!!!!!If you want a different version of **Angular-Cli** you can type instead
``` 
npm install -g @angular/cli@{version}

example

npm install -g @angular/cli@7.0.3
```

!!!!!!To verify if the installation was correct, type in your Command Prompt(Windows) to check the **Angular-Cli** version

``` 
ng version
```
4. Download and install an Editor:
- __[Atom](https://atom.io/)__
- __[Visual Studio Code](https://code.visualstudio.com/docs)__
- __[Sublime Text](https://www.sublimetext.com)__

## TypeScript 
- To transcribe a **TypeScript** file into a **Javascript** type on your Command Prompt(Windows)
``` 
tsc {file with extension}
example
tsc Hola.ts
```
and to make it run type
``` 
node {file without extension}
example
node Hola
```
### Example of a Typescript file
``` ts
var texto: string = "Hola"
console.log(texto)
```
## Angular 
``` 
ng help
```
- Create a new project: select your folder file and type on your Command Prompt(Windows)
``` 
ng new {file-name}
example
ng new todo
```
- Build and run an **Angular** application (you need to be inside the Project folder)
``` 
ng serve
```
!!!!!! To stop an **Angular** Application, type Ctrl+C to end the ongoing process (Windows)

- To check if exist any coding standar violation type `ng lint` on your Command Prompt(Windows)
- If you type `ng build` on your Command Prompt(Windows), it creates files that make easy the deployment on a web server, like test enrollment, production, etc. (so you don´t need to attatch all the files to make run the **Angular** Application)
- Type `ng test` to run the unit tests on the **Angula** Application
- Type `ng e2e` to run the entire **Angular** Application