import homePage from '../pages/home-page-cmp.js';
// import about from './pages/about.cmp.js';
import mailApp from '../apps/mail/mailApp.cmp.js';
// import bookApp from './pages/book-app.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: about
    // },
    {
        path: '/mail',
        component: mailApp
    },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    // {
    //     path: '/book/details/:bookId?',
    //     component: bookDetails
    // }
]

export const myRouter = new VueRouter({ routes: myRoutes });