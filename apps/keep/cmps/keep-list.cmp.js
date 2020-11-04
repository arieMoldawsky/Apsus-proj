import keepPreview from './keep-preview.cmp.js'

export default {
    props: ['keeps'],
    template: `
        <section class="keep-list">
            <template v-for="keep in keeps">
                <keep-preview :keep="keep" :key="keep.id" @remove-keep="removeKeep"/>
            </template>
        </section>
    `,
    components: {
        keepPreview,
    },
    methods: {
        removeKeep(keepId) {
            this.$emit('remove-keep', keepId)
        },
    },
}