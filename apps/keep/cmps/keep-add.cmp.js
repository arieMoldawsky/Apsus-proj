import { keepService } from '../service/keep-service.js';
import { utilService } from '../../../service/util-service.js'

// import keepList from '../cmps/keep-list.cmp.js'
// import { eventBus } from '../services/event-bus-service.js'

export default {
    template: `
        <section class="keep-add">
            <form @submit.prevent="addKeep">
                <select v-model="newKeep.type">
                    <option value="note">Note</option>
                    <option value="img">Image</option>
                    <option value="link">Link</option>
                </select>
                <input type="text" v-model="newKeep.title" placeholder="Title">
                <input type="text" v-model="newKeep.txt" placeholder="Take a note...">
                <label> Pinned
                    <input type="checkbox"/>
                </label>
                <label> Color
                    <input type="color" v-model="newKeep.color">
                </label>
                <input type="submit">
            </form>
        </section>
    `,
    components: {
    },
    data() {
        return {
            newKeep: {
                id: utilService.makeId(),
                title: null,
                txt: null,
                type: 'note',
                color: null,
            }
        }
    },
    methods: {
        addKeep() {
            console.log(this.newKeep);
            this.$emit('addKeep', this.newKeep);
        },
    },
    computed: {
    },
    created() {
        // keepService.getKeepById(this.$route.params.keepId)
        //     .then(keep => this.keep = keep)
    }
}