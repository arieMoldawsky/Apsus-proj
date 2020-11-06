import { eventBus } from '../../../service/event-bus-service.js';

export default {
    template: `
        <section class="mail-filter">
                <input type="text" v-model="filterBy.txt" @input="emitFilter" placeholder="Search Mails..."/>
                <select @input="emitFilter" v-model=filterBy.read>
                    <option value="all">All</option>
                    <option value="true">Read</option>
                    <option value="false">Unread</option>
                </select>
        </section>
    `,
    data() {
        return {
            filterBy: {read: 'all', txt: ''}
        }
    },
    methods: {
        emitFilter() {
            eventBus.$emit('mails-filtered', this.filterBy);
        }
    }
}