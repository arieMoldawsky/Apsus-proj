import { utilService } from '../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-img">
            <pre>{{keep}}</pre>
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.url" placeholder="Image URL..">
                <span :class="{pinned: keep.isPinned}" @click=" keep.isPinned = !keep.isPinned ">Pin Note</span>
                <label> Color
                    <input type="color" v-model="keep.color">
                </label>
                <input type="submit">
            </form>
        </section>
    `,
    components: {
    },
    data() {
        return {
            keep: {
                id: utilService.makeId(),
                url: null,
                type: 'img',
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