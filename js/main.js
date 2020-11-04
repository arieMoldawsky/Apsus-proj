import { myRouter } from './routes.js';

console.log('Hiiiiii');


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
            <!-- <app-header></app-header> -->
            <!-- <router-view></router-view> -->
        </section>
    `,
    components: {
        // bookApp,
        // homePage,
        // appHeader
    },
}

const app = new Vue(options);