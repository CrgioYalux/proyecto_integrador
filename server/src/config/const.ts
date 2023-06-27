const NOT_FOUND_PAGE: string = `
    <!DOCTYPE html>
    <head>
        <title>404</title>
    </head>
    <body>
        <h1>404</h1>
        <style>
            *, *::before, *::after {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                min-height: 100vh;

                display: grid;
                place-items: center;

                background-color: black;
                color: white;

                font-family: 'Arial', sans-serif;
            }
        </style>
    </body>
`;

export { NOT_FOUND_PAGE };
