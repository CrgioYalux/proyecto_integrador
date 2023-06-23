# Trabajo integrador

### Requisitos
- Utilizamos [Yarn](https://yarnpkg.com/), que es otro manejador de paquetes como [npm](https://www.npmjs.com/),
para hacer la estructura del proyecto que abarca las aplicaciones **client** y **server**.  
    - Lo instalan ejecutando en cualquier consola:  
        ```
        $ npm install --global yarn
        ```
        o tambien:  
        ```
        $ winget install -e --id Yarn.Yarn
        ```

---

### Git flow
```
$ git branch my_branch // para crear la branch
$ git checkout my_branch
$ git add .
$ git commit -m "feat|docs|fix|chore|ref: commit message"
$ git pull origin master
$ git merge master
$ git push -u origin my_branch
```

---

### Comandos del proyecto
- Para instalar las dependencias del proyecto: `$ yarn install`
- Para iniciar el cliente: `$ yarn run dev:client`
- Para iniciar el servidor: `$ yarn run dev:server` (obviamente junto a mysql funcionando)

---

### Links a cosas útiles
- [PDF en el que encontré traducciones al inglés de conceptos de contabilidad](https://elingua.es/PDF/contabilidad1.pdf)
- [BEM: Una convención para nombrar clases de CSS](https://getbem.com/naming/)
- [Diagrama de Excalidraw](https://excalidraw.com/#room=acfc500c095aee59fe2f,p29P6cAN6qS7IcLzD09tnA)
- [Typescript cheatsheets](https://www.typescriptlang.org/cheatsheets)
- [React Docs](https://react.dev/)
- [Hook useState Docs](https://react.dev/reference/react/useState)
- [Hook useEffect Docs](https://react.dev/reference/react/useEffect)


---

### How to write good commits mesages
- this info is from [freecodecamp](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/    )
    - Specify the type of commit:
        - `feat:` The new feature you're adding to a particular application
        - `fix:` A bug fix
        - `style:` Feature and updates related to styling
        - `refactor:` Refactoring a specific section of the codebase
        - `test:` Everything related to testing
        - `docs:` Everything related to documentation
        - `chore:` Regular code maintenance.[ You can also use emojis torepresent commit types]

    - Separate the subject from the body with a blank line
    - Your commit message should not contain any whitespace errors
    - Remove unnecessary punctuation marks
    - Do not end the subject line with a period
    - Capitalize the subject line and each paragraph
    - Use the imperative mood in the subject line
    - Use the body to explain what changes you have made and why you made them.
    - Do not assume the reviewer understands what the original problem was, ensure you add it.
    - Do not think your code is self-explanatory
    - Follow the commit convention defined by your team

