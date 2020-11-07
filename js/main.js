import { myRouter } from './routes.js';
import { eventBus } from './service/event-bus-service.js';
import apsusHeader from './pages/apsus-header-cmp.js';
import apsusFooter from './pages/apsus-footer.cmp.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
            <div class="main-app-container">
                <div class="screen" :class="{open:isModalOpen}" @click="toggleModal"></div>
                <apsus-header  @toggle-modal-status="toggleModal"/>
                <router-view :class="{blur:isModalOpen}"/>
                <apsus-footer :class="{blur:isModalOpen}"/>
            </div>
    `,
    components: {
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