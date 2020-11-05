import { utilService } from '../../../../service/util-service.js'
import keepControls from '../keep-controls/keep-controls.cmp.js'

export default {
    template: `
        <section class="new-keep new-img">
            <form @submit.prevent="addKeep">
                <input type="text" v-model="keep.info.title" placeholder="Title">
                <input type="text" v-model="keep.info.url" placeholder="Image URL.." required>
                <!-- <span :class="{pinned: keep.isPinned}" @click=" keep.isPinned = !keep.isPinned ">Pin Note</span>
                <label> Color
                    <input type="color" v-model="keep.style.backgroundColor">
                </label> -->
                <keep-controls :keep="keep" @remove-keep="removeKeep" @update-keep="updateKeep"/>
                <input type="submit" value="Add Keep">
            </form>
        </section>
    `,
    components: {
        keepControls,
    },
    data() {
        return {
            keep: {
                id: utilService.makeId(),
                type: 'keep-img',
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
    },
    components: {
        keepControls,
    },
    methods: {
        addKeep() {
            this.$emit('add-keep', this.keep);
            this.keep = {
                id: utilService.makeId(),
                type: 'keep-img',
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
        },
    },
}