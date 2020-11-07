import { myRouter } from './routes.js';
// import homePage from './pages/home-page-cmp.js';
import apsusHeader from './pages/apsus-header-cmp.js';
import apsusFooter from './pages/apsus-footer.cmp.js';
import { eventBus } from './service/event-bus-service.js';

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
    data() {
        return {
            mediaQueryWidth: null,
        }
    },
    methods: {
        mediaQuerySetter(viewportWidth) {
            const desktop = Infinity;
            const tablet = 800;
            const mobile = 600;
            if (viewportWidth <= mobile) eventBus.$emit('media-query-change', 'mobile')
            else if (viewportWidth <= tablet) eventBus.$emit('media-query-change', 'tablet')
            else if (viewportWidth <= desktop) eventBus.$emit('media-query-change', 'desktop')
        },

    },
    created() {
        // media query listener
        window.addEventListener('resize', event => this.mediaQuerySetter(event.target.innerWidth))
        this.mediaQuerySetter(window.innerWidth)
    }
}

const app = new Vue(options);