import { myRouter } from './routes.js';
// import homePage from './pages/home-page-cmp.js';
import apsusHeader from './pages/apsus-header-cmp.js';
import apsusFooter from './pages/apsus-footer.cmp.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <!-- <section> -->
            <div class="main-app-container">
                <apsus-header/>
                <router-view/>
                <apsus-footer/>
            </div>
        <!-- </section> -->
    `,
    components: {
        // bookApp,
        // homePage,
        apsusHeader,
        apsusFooter,
    },
}

const app = new Vue(options);