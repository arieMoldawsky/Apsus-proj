import keepPreview from './keep-preview.cmp.js'

export default {
    props: ['keeps'],
    template: `
        <section class="keep-list">
            <template v-for="keep in keeps">
            <component :is="keep.type" :keep="keep.info" :key="keep.id" @remove-keep="removeKeep"></component>

                <!-- <keep-preview :keep="keep" :key="keep.id" @remove-keep="removeKeep"/> -->
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