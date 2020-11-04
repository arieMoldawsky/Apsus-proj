import { myRouter } from './routes.js';
// import homePage from './pages/home-page-cmp.js';
import apsusHeader from './pages/apsus-header-cmp.js';
import apsusFooter from './pages/apsus-footer.cmp.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>

            <apsus-header></apsus-header>
            <router-view></router-view>
            <apsus-footer/>
        </section>
    `,
    components: {
        // bookApp,
        // homePage,
        apsusHeader,
        apsusFooter,
    },
}

const app = new Vue(options);