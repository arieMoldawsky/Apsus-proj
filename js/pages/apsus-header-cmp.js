import keepFilter from '../apps/keep/cmps/keep-filter.cmp.js'
import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js'
import { eventBus } from '../service/event-bus-service.js';


export default {
    template: `
    <section class="apsus-header">
        <div @click="goHome" class="header-logo">Apsus<span>.</span></div>
        <component :is="filterForCurrApp">
        </component>
        <nav class="head-nav" :class="showModal" @click="toggleModalStatus">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/mail/inbox">Mail</router-link>
            <router-link to="/keep/main">Keep</router-link>
            <router-link to="/books">Books</router-link>
        </nav>
        <svg :class="rotateBurger" @click="toggleModalStatus" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" height="32px" id="Layer_1"
                style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px"
                xml:space="preserve">
                <path
                    d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
    </section>
    `,
    data() {
        return {
            filterBy: null,
            currApp: null,
            isModalOpen: false
        }
    },
    components: {
        keepFilter,
        mailFilter,
    },
    methods: {
        goHome() {
            this.$router.push(`/`);
        },
        toggleModalStatus() {
            this.isModalOpen = !this.isModalOpen
        }
    },
    computed: {
        filterForCurrApp() {
            if (this.$route.path.startsWith("/keep")) return 'keepFilter';
            if (this.$route.path.startsWith("/mail")) return 'mailFilter';
        },
        showModal() {
            return { 'nav-bar-modal': this.isModalOpen }
        },
        rotateBurger() {
            return { 'hamburger-logo-trans': this.isModalOpen }
        }
    }
}