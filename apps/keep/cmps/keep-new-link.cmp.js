import { utilService } from '../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-url">
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.title" placeholder="Title">
                <input type="text" v-model="keep.url" placeholder="Link URL..">
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
                type: 'link',
                isPinned: false,
                info: {
                    url: null,
                    title: null,
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
        },
    },
}