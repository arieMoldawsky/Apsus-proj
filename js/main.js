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
                <div class="screen" v-show="isModalOpen" @click="toggleModal">X</div>
                <apsus-header  @toggle-modal-status="toggleModal"/>
                <router-view :class="{blur:isModalOpen}"/>
                <apsus-footer :class="{blur:isModalOpen}"/>
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
            isModalOpen: false
        }
    },
    methods: {
        toggleModal() {
            this.isModalOpen = !this.isModalOpen;
            eventBus.$emit('toggle-modal-status', this.isModalOpen)
        }
    }
}

const app = new Vue(options);