import keepControls from '../keep-controls/keep-controls.cmp.js'

export default {
    props: ['keep'],
    template: `
        <div class="keep keep-img">
            <img :src="keep.info.url"/>
            <br/>
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
        togglePin() {
            this.keep.isPinned = !this.keep.isPinned
            this.updateKeep(this.keep);
        },
    },
}