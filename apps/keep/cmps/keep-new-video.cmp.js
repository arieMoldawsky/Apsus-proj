import { utilService } from '../../../service/util-service.js'

export default {
    template: `
        <section class="new-keep new-video">
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.title" placeholder="Title">
                <input type="text" v-model="keep.url" placeholder="Video URL..">
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
                url: null,
                title: null,
                type: 'video',
                color: '#ffffff',
                isPinned: false,
            }
        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
            this.keep = {
                id: utilService.makeId(),
                url: null,
                title: null,
                type: 'video',
                color: '#ffffff',
                isPinned: false,
            }
        },
    },
    computed: {

    }
}