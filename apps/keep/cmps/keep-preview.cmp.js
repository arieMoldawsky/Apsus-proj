export default {
    props: ['keep'],
    template: `
        <section class="keep-preview">
            <span>{{keep.title}}</span>
            <br/>
            <span>{{keep.txt}}</span>
            <br/>
            <img v-if="keep.url" :src="keep.url"/>
            <br/>
            <router-link :to="'/keep/' + keep.id" exact >Details</router-link>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        emitClick() {
            // this.$emit('button-clicked', { keepId: this.keep.id, msg: this.button })
        },
    },
    computed: {
    },
}