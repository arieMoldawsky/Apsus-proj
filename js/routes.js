import homePage from '../pages/home-page-cmp.js';
import keepApp from '../apps/keep/keep-app.js';
// import about from './pages/about.cmp.js';
import mailApp from '../apps/mail/mailApp.cmp.js';
// import bookApp from './pages/book-app.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/keep',
        component: keepApp,
    },
    {
        path: '/mail',
        component: mailApp
    },
]

export const myRouter = new VueRouter({ routes: myRoutes });