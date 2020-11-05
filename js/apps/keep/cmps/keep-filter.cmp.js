export default {
    template: `
        <section class="filter-section">
            <!-- <form @submit>
            <span class="filter-title">Filter:</span>
                <label> -->
                    <input type="text" v-model="filterBy.txt" @input="emitFilter"/>
                <!-- </label>
                <label>
                    | By Read/Unread :
                    <select @input="emitFilter" v-model=filterBy.read>
                        <option value="all">All</option>
                        <option value="true">Read</option>
                        <option value="false">Unread</option>
                    </select>
                </label> -->
            <!-- </form> -->
        </section>
    `,
    data() {
        return {
            filterBy: {txt: null}
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