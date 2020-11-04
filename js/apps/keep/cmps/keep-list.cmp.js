import keepLink from './keeps/keep-link.cmp.js'
import keepImg from './keeps/keep-img.cmp.js'
import keepNote from './keeps/keep-note.cmp.js'
import keepTodos from './keeps/keep-todos.cmp.js'
import keepVideo from './keeps/keep-video.cmp.js'

export default {
    props: ['keeps'],
    template: `
        <section class="keep-list">
            <component v-for="keep in keeps"
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
        keepLink,
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
    },
}