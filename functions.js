const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];

  
  const userFilter = (specialty) => {
    const userList = usersData.filter(user => user.specialty === specialty);

    const userItems = userList.map(user => `
        <li>
            <span>Id: ${user.id}</span>
            <span>Name: ${user.name}</span>
            <span>Age: ${user.age}</span>
            <span>Specialty: ${user.specialty}</span>
        </li>
    `).join('');

    return `
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

                    ul {
                        list-style: none;
                        padding: 0;
                    }

                    li {
                        margin: 10px 0;
                        padding: 10px;
                        background-color: #B5B2B2;
                        border-radius: 5px;
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
                        <ul>
                            ${userItems}
                        </ul>
                    </section>
                </main>
            </body>
        </html>
    `;
};
 
  module.exports = {
    usersData,
    userFilter,
  }