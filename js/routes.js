import homePage from './pages/home-page-cmp.js';
import booksApp from './pages/books-cmp.js';
import keepApp from './apps/keep/keep-app.js';
import keepList from './apps/keep/cmps/keep-list.cmp.js';
// import about from './pages/about.cmp.js';
import mailApp from './apps/mail/mail-app.cmp.js';
import mailList from './apps/mail/cmps/mail-list.cmp.js';
import mailDetails from './apps/mail/pages/mail-details.cmp.js';
import mailCompose from './apps/mail/pages/mail-compose.cmp.js';
// import keepDetails from './apps/keep/keep-details.cmp.js';
// import bookApp from './pages/book-app.cmp.js';
// import bookDetails from './pages/book-details.cmp.js';


const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/books',
        component: booksApp
    },
    {
        path: '/keep',
        component: keepApp,
        children: [
            {
                path: 'main',
                component: keepList
            },
            {
                path: 'archive',
                component: keepList
            },
        ]
    },
    {
        path: '/mail',
        component: mailApp,
        children: [
            {
                path: 'inbox',
                component: mailList,
            },
            {
                path: 'starred',
                component: mailList,
            },
            {
                path: 'sent',
                component: mailList,
            },
            {
                path: 'compose/:keepId?',
                component: mailCompose
            },
            {
                path: ':mailId',
                component: mailDetails
            },
        ]
    },
]

export const myRouter = new VueRouter({ routes: myRoutes });