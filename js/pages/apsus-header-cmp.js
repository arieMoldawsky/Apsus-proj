import keepFilter from '../apps/keep/cmps/keep-filter.cmp.js'
import mailFilter from '../apps/mail/cmps/mail-filter.cmp.js'
import { eventBus } from '../service/event-bus-service.js';


export default {
    template: `
    <section class="apsus-header">
        <div @click="goHome" class="header-logo">Apsus<span>.</span></div>
        <keep-filter v-if="keepIsCurr"/>
        <mail-filter v-if="mailIsCurr"/>
        <div class="head-nav">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/mail/inbox">Mail</router-link>
            <router-link to="/keep/main">Keep</router-link>
            <router-link to="/books">Books</router-link>
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: null,
            currApp: null,
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
        
    },
    computed: {
        keepIsCurr() {
            return this.$route.path.startsWith("/keep") ? true : false;
        },
        mailIsCurr() {
            return this.$route.path.startsWith("/mail") ? true : false;
        },
    }
}