export default {
    props: ['keep'],
    template: `
        <div class="keep keep-note">
            <span>{{keep.info.title}}</span>
            <br/>
            <span>{{keep.info.txt}}</span>
            <br/>
            <button @click="removeKeep(keep.id)">Delete</button>
        </div>
    `,
    methods: {
        removeKeep(keepId) {
            this.$emit('remove-keep', keepId)
        },
    },
}