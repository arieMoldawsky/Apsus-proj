import keepNote from './new-keeps/keep-new-note.cmp.js'
import keepImg from './new-keeps/keep-new-img.cmp.js'
import keepVideo from './new-keeps/keep-new-video.cmp.js'
import keepTodos from './new-keeps/keep-new-todos.cmp.js'

export default {
    template: `
        <section class="keep-add">
            <div class="keep-type-select">
                <span :class="keepTypeNote" @click="keepType='keep-note'">Note</span>
                <span :class="keepTypeTodos" @click="keepType='keep-todos'">Todo</span>
                <span :class="keepTypeImg" @click="keepType='keep-img'">Image</span>
                <span :class="keepTypeVideo" @click="keepType='keep-video'">Video</span>
            </div>
            <component :is="keepType" @add-keep="addKeep" class>
            </component>
        </section>
    `,
    data() {
        return {
            keepType: 'keep-note',
        }
    },
    components: {
        keepNote,
        keepImg,
        keepVideo,
        keepTodos,
    },
    computed: {
        keepTypeNote() {
            return {
                'keep-type': this.keepType === 'keep-note',
            }
        },
        keepTypeImg() {
            return {
                'keep-type': this.keepType === 'keep-img',
            }
        },
        keepTypeVideo() {
            return {
                'keep-type': this.keepType === 'keep-video',
            }
        },
        keepTypeTodos() {
            return {
                'keep-type': this.keepType === 'keep-todos',
            }
        },
    },
    methods: {
        addKeep(keep) {
            this.$emit('add-keep', keep);
        },
    },
}