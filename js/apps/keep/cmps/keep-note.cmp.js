import { utilService } from '../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-note">
            <pre>{{keep}}</pre>
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.title" placeholder="Title">
                <input type="text" v-model="keep.txt" placeholder="Take a note...">
                <span :class="{pinned: keep.isPinned}" @click=" keep.isPinned = !keep.isPinned ">Pin Note</span>
                <label> Color
                    <input type="color" v-model="keep.color">
                </label>
                <input type="submit">
            </form>
        </section>
    `,
    data() {
        return {
            keep: {
                id: utilService.makeId(),
                title: null,
                txt: null,
                type: 'note',
                color: '#ffffff',
                isPinned: false,
            }
        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
        },
    },
}