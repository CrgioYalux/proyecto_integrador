# Trabajo integrador

### Requisitos
- Utilizamos [Yarn](https://yarnpkg.com/), que es otro manejador de paquetes como [npm](https://www.npmjs.com/),
para hacer la estructura del proyecto (monorepo) que abarca las aplicaciones **client** y **server**.  

    ```
    $ npm install --global yarn
    ```  
    o tambien:  
    ```
    $ winget install -e --id Yarn.Yarn
    ```  

- Utilizamos [MySQL 8.0.33](https://dev.mysql.com/downloads/installer/) para la base de datos.
    - Al instalar te pide crear un usuario (`DB_USER`) y contraseña (`DB_PASS`), que serán
    importantes para la conexión a la base de datos.

- Se necesita tener un archivo `.env` en la carpeta `/server` con la siguiente estructura:  

    ```
        DB_HOST="localhost"
        DB_PORT=3306
        DB_USER="user_name"
        DB_PASS="user_password"
        DB_NAME="database_name"
    ```

---

### Comandos del proyecto
- Para instalar las dependencias del proyecto: `$ yarn install`
- Para iniciar el cliente: `$ yarn run dev:client`
- Para iniciar el servidor: `$ yarn run dev:server` (obviamente junto a mysql funcionando)

### Git flow & good commits messages
-
    ```
    $ git branch my_branch // para crear la branch
    $ git checkout my_branch
    $ git add .
    $ git commit -m "feat|docs|fix|chore|ref: commit message"
    $ git pull origin master
    $ git merge master
    $ git push -u origin my_branch
    ```

- Good commits guide from [freecodecamp](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)
    - Specify the type of commit:
        - `feat:` The new feature you're adding to a particular application
        - `fix:` A bug fix
        - `style:` Feature and updates related to styling
        - `refactor:` Refactoring a specific section of the codebase
        - `test:` Everything related to testing
        - `docs:` Everything related to documentation
        - `chore:` Regular code maintenance.
    **You can also use emojis torepresent commit types**
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

### Links a cosas útiles
- [PDF en el que encontré traducciones al inglés de conceptos de contabilidad](https://elingua.es/PDF/contabilidad1.pdf)
- [BEM: Una convención para nombrar clases de CSS](https://getbem.com/naming/)
- [Diagrama de Excalidraw](https://excalidraw.com/#room=acfc500c095aee59fe2f,p29P6cAN6qS7IcLzD09tnA)
- [Typescript cheatsheets](https://www.typescriptlang.org/cheatsheets)
- [React Docs](https://react.dev/)
- [Hook useState Docs](https://react.dev/reference/react/useState)
- [Hook useEffect Docs](https://react.dev/reference/react/useEffect)

### Interesting stuff learned while doing this
- IN, OUT and INOUT params in a stored procedure definition
    - [Stack overflow nice explanation](https://stackoverflow.com/questions/5537978/stored-procedures-in-out-inout-parameters)
    - [A more detailed one](https://www.mysqltutorial.org/stored-procedures-parameters.aspx)
    - TL;DR: pass by value (IN - allows to use the param inside),
    by reference (OUT - allows to modify the param)
    or both (INOUT - allows IN and OUT behaviors at the same time).  

- [Threads of execution in MySQL](https://oracle-base.com/articles/mysql/mysql-killing-threads)  

The following query displays a table with the existant processes in the database called `database_name`.  
```sql
SELECT * FROM information_schema.processlist where DB = 'database_name';
```  
Because we are using `multiple_connections`, MySQL starts creating new threads to run
the different queries passed. This behavior, if used poorly (pretty sure just like I did),
can cause bottlenecks, e.g. a thread waiting for another to finish.  
What I am yet to discover is **why exactly was it causing bottlenecks?**.  
I thought running the starter `create_*.sql` files as transactions should avoid that.  
Another hypothesis is that, because I was constantly changing files, nodemon was detecting
them and re-running the server causing to start multiple sessions with all of them trying to
create all the tables and the stored procedures.  

- [Excalidraw explaining how do the Account, SimpleAccountingEntry and ComplexAccountingEntry tables work](https://excalidraw.com/#json=F15Lhk_lQhyHMi4AuucoS,_NQ5cxaPwmqyCvssBIbdtQ)
