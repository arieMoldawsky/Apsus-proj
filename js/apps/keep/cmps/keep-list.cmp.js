import keepImg from './keeps/keep-img.cmp.js'
import keepNote from './keeps/keep-note.cmp.js'
import keepTodos from './keeps/keep-todos.cmp.js'
import keepVideo from './keeps/keep-video.cmp.js'
import { eventBus } from '../../../service/event-bus-service.js';


export default {
    props: ['keeps'],
    template: `
        <section :style="listStyle()" class="keep-list">
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
    data() {
        return {
            mediaQuery: null,
            renderedKeepCount: null,
            maxColumnCount: null,
        }
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
        listStyle() {
            let nonArchivedKeepCount = (this.keeps.filter((keep) => !keep.isArchived).length)
            this.renderedKeepCount = this.isArchive() ? nonArchivedKeepCount : (this.keeps.length - nonArchivedKeepCount);
            eventBus.$emit
            this.maxColumnCount = this.mediaQuery === 'desktop' ? 4 : this.mediaQuery === 'tablet' ? 3 : 2;
            return {
                columnCount: this.renderedKeepCount < this.maxColumnCount ? this.renderedKeepCount : this.maxColumnCount,
            }
        },
    },
    created() {
        // media query listener
        eventBus.$on('media-query-change', size => this.mediaQuery = size)
    }
}