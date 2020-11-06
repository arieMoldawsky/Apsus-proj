import { eventBus } from '../../../service/event-bus-service.js';

export default {
    template: `
        <section class="keep-filter">
                <input type="text"
                placeholder="Search Keeps..."
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
            eventBus.$emit('keeps-filtered', this.filterBy);
        }
    }
}