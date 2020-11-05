export default {
    template: `
        <section class="filter-section">
            <form >
            <span class="filter-title">Filter:</span>
                <label>
                    By Name:
                    <input type="text" v-model="filterBy.txt" @input="emitFilter"/>
                </label>
                <label>
                    | By Read/Unread :
                    <select @input="emitFilter" v-model=filterBy.read>
                        <option value="all">All</option>
                        <option value="true">Read</option>
                        <option value="false">Unread</option>
                    </select>
                </label>
            </form>
        </section>
    `,
    data() {
        return {
            filterBy: {read: 'all', txt: ''}
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