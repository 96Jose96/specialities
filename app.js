const express = require('express');
const app = express();
const {usersData, userFilter} = require('./functions.js')


app.get('/', (req, res) => {
        const template = `
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f0f0f0;
                    }

                    main {
                        max-width: 800px;
                        padding: 20px;
                        margin: 0 auto;
                        background-color: #fff;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    header {
                        border-bottom: 1px solid #ddd;
                        margin-bottom: 20px;
                        padding-bottom: 10px;
                    }

                    nav {
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                    }

                    nav a {
                        text-decoration: none;
                        color: black;
                        font-weight: bold;
                    }

                    nav a:hover {
                        color: blue;
                    }

                    section {
                        text-align: center;
                    }
                </style>
                <title>Users</title>
            </head>
            <body>
                <main>
                    <header>
                        <nav>
                            <a href="/developers">Developers</a>
                            <a href="/QAs">QAs</a>
                            <a href="/ventas">Ventas</a>
                            <a href="/marketing">Marketing</a>
                        </nav>
                    </header>
                    <section>
                        <ul>
                        </ul>
                    </section>
                </main>
            </body>
        </html>
    `
    res.send(template)
})

app.get('/developers', (req, res) => {
    res.send(userFilter('developers'))
})

app.get('/QAs', (req, res) => {
    res.send(userFilter('QAs'))
})

app.get('/ventas', (req, res) => {
    res.send(userFilter('ventas'))
})

app.get('/marketing', (req, res) => {
    res.send(userFilter('marketing'))
})

app.use((req, res) => {
    res.status(404).send(
        `
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f0f0f0;
                    }

                    main {
                        max-width: 800px;
                        padding: 20px;
                        margin: 0 auto;
                        background-color: #fff;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    header {
                        border-bottom: 1px solid #ddd;
                        margin-bottom: 20px;
                        padding-bottom: 10px;
                    }

                    nav {
                        display: flex;
                        justify-content: center;
                        gap: 15px;
                    }

                    nav a {
                        text-decoration: none;
                        color: black;
                        font-weight: bold;
                    }

                    nav a:hover {
                        color: blue;
                    }

                    section {
                        display: flex;
                        flex-direction: column;
                        text-align: center;
                    }
                    
                    p {
                        font-size: 70px;
                        font-weight: bold;
                    }

                    span {
                        font-size: 100px;
                        font-weight: bold;
                    }

                </style>
                <title>Users</title>
            </head>
            <body>
                <main>
                    <header>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/developers">Developers</a>
                            <a href="/QAs">QAs</a>
                            <a href="/ventas">Ventas</a>
                            <a href="/marketing">Marketing</a>
                        </nav>
                    </header>
                    <section>
                        <section>
                            <p>Página no encontrada</p>
                            <span>Error 404</span>
                        </section>
                    </section>
                </main>
            </body>
        </html>
    `
    )
})

app.listen(3000, () => {
    console.log(`Servidor escuchando en puerto: http://localhost:3000`)
})