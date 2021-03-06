import keepImg from './keeps/keep-img.cmp.js'
import keepNote from './keeps/keep-note.cmp.js'
import keepTodos from './keeps/keep-todos.cmp.js'
import keepVideo from './keeps/keep-video.cmp.js'


export default {
    props: ['keeps'],
    template: `
        <section v-show="keeps.length" class="keep-list">
            <component v-for="keep in keeps"
                        v-if="isArchived(keep)"
                        :is="keep.type"
                        :key="keep.id"
                        :style="keep.style"
                        :keep="keep"
                        @remove-keep="removeKeep"
                        @update-keep="updateKeep">
            </component>
        </section>
    `,
    components: {
        keepImg,
        keepNote,
        keepVideo,
        keepTodos,
    },
    methods: {
        removeKeep(keepId) {
            this.$emit('remove-keep', keepId)
        },
        updateKeep(keep) {
            this.$emit('update-keep', keep)
        },
        isArchived(keep) {
            return keep.isArchived === this.isArchive() ? false : true;
        },
        isArchive() {
            return this.$route.path === '/keep/archive' ? false : true;
        },
        
    },
}