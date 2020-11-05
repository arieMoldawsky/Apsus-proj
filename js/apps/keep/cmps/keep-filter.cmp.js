export default {
    template: `
        <section class="keep-filter">
                <input type="text"
                placeholder="Search..."
                v-model="filterBy.term"
                @input="emitFilter"/>
        </section>
    `,
    data() {
        return {
            filterBy: {
                term: '',
                type: '',
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filterBy);
        }
    },
    computed: {

    },
    created() {
    }
}