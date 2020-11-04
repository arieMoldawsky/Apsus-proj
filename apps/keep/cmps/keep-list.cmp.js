import { keepService } from '../service/keep-service.js';
import { utilService } from '../../../service/util-service.js'
import keepPreview from './keep-preview.cmp.js'

// import keepList from '../cmps/keep-list.cmp.js'
// import { eventBus } from '../services/event-bus-service.js'

export default {
    props: ['keeps'],
    template: `
        <section class="keep-list">
            <template v-for="keep in keeps">
                <keep-preview :keep="keep" :key="keep.id"/>
            </template>
        </section>
    `,
    components: {
        keepPreview,
    },
    data() {
        return {
            newKeep: {
                keepId: utilService.makeId(),
                keepTxt: null,
                keepType: null,
            }
        }
    },
    methods: {      
        addKeep() {
            keepService.addKeep(this.newKeep);
        },
    },
    computed: {
    },
    created() {
        // keepService.getKeepById(this.$route.params.keepId)
        //     .then(keep => this.keep = keep)
    }
}