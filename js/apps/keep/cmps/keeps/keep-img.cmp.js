import keepControls from '../keep-controls/keep-controls.cmp.js'

export default {
    props: ['keep'],
    template: `
        <div class="keep keep-img">
            <div class="keep-content">
                <div class="img-container">
                    <img :src="keep.info.url"/>
                </div>
                <pre class="keep-title" contenteditable v-text="keep.info.title" @blur="updateTitle"/>
            </div>
            <keep-controls :keep="keep" @remove-keep="removeKeep" @update-keep="updateKeep"/>
        </div>
    `,
    components: {
        keepControls,
    },
    methods: {
        removeKeep(keepId) {
            this.$emit('remove-keep', keepId)
        },
        updateKeep(keep) {
            this.$emit('update-keep', keep)
        },
        updateTitle(ev) {
            this.keep.info.title = ev.target.innerText
            this.updateKeep(this.keep)
        },
        togglePin() {
            this.keep.isPinned = !this.keep.isPinned
            this.updateKeep(this.keep);
        },
    },
}