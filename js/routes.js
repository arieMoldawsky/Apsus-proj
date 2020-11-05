import homePage from './pages/home-page-cmp.js';
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
        path: '/keep',
        component: keepApp,
        children: [
            {
                path: 'regular',
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
                // children: [
                //     {
                //         path: 'details/:mailId',
                //         component: mailDetails
                //     },
                // ]
            },
            {
                path: 'sent',
                component: mailList,
                // children: [
                //     {
                //         path: 'details/:mailId',
                //         component: mailDetails
                //     },
                // ]
            },
            {
                path: 'compose',
                component: mailCompose
            },
            {
                path: 'details/:mailId',
                component: mailDetails
            },
        ]
    },
]

export const myRouter = new VueRouter({ routes: myRoutes });