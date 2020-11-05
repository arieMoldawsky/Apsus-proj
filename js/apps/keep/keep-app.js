import { keepService } from './service/keep-service.js';
import keepFilter from './cmps/keep-filter.cmp.js'
import keepAdd from './cmps/keep-add.cmp.js'
import keepList from './cmps/keep-list.cmp.js'
import { eventBus } from '../../service/event-bus-service.js';

export default {
    template: `
        <main class="keep-app">
            <router-link to="/keep/archive">Archived</router-link>
            <keep-filter @filtered="setFilter"/>
            <keep-add @add-keep="addKeep"/>
            <keep-list @remove-keep="removeKeep"  @update-keep="updateKeep" :keeps="keeps"/>
        </main>
    `,
    components: {
        keepFilter,
        keepAdd,
        keepList,

    },
    data() {
        return {
            keeps: null,
            filterBy: { txt: 'a' },

        }
    },
    methods: {
        getKeeps() {
            this.keeps = keepService.getKeeps()
        },
        addKeep(newKeep) {
            keepService.addKeep(newKeep)
                .then(keeps => this.keeps = keeps)
        },
        removeKeep(keepId) {
            keepService.removeKeep(keepId)
                .then(keeps => this.keeps = keeps);
        },
        updateKeep(keep) {
            keepService.updateKeep(keep)
                .then(keeps => this.keeps = keeps);
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        // filteredKeeps() {
        //     return this.keeps.filter(keep => {
        //         if (keep.type === 'keep-note') {
        //             if (keep.info.txt.toLowerCase().includes(this.filterBy.term) ||
        //                 keep.info.title.toLowerCase().includes(this.filterBy.term))
        //                 return true
        //         } else if (keep.type === 'keep-todo') {
        //             if (keep.info.title.toLowerCase().includes(this.filterBy.term)) return true;
        //             if (keep.info.todos.forEach(todo => {
        //                 if (todo.toLowerCase().includes(this.filterBy.term))
        //                 return true;
        //             })) {
        //                 return true
        //             }
        //         } else return false;
        //     })
        // }

    },
    created() {
        keepService.initKeeps()
        this.getKeeps();
    }
}