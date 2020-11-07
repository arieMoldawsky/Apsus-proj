import { utilService } from '../../../../service/util-service.js'

export default {
    template: `
            <form class="new-keep new-video" @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.title" placeholder="Title">
                <input type="text" v-model="keep.info.url" placeholder="Video URL..." required>
                <input type="submit" value="Save">
            </form>
    `,
    data() {
        return {
            keep: this.makeNewVideo()

        }
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
            this.keep = this.makeNewVideo()
        },
        makeNewVideo() {
            return {
                id: utilService.makeId(),
                type: 'keep-video',
                isPinned: false,
                isArchived: false,
                info: {
                    title: null,
                    url: null,
                },
                style: {
                    backgroundColor: '#ffffff',
                },
            }
        }
    }
}