const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'homepage';
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About Page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method';
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = "stranger" }  = request.params;
            const { lang } =request.query;

            if (lang === 'id') {
                return `hai, ${name}`;
            }
            return `Hello, ${name}`;
        },
    },
    {
        method: '*',
        path: '/{any}',
        handler: (request, h) => {
            return 'halaman tidak ditemukan';
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const { username, password } = request.payload;
            return `Welcome ${username}`;
        }
    }
];

module.exports = routes;