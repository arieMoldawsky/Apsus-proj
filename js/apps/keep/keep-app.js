import { keepService } from './service/keep-service.js';
import keepFilter from './cmps/keep-filter.cmp.js'
import keepAdd from './cmps/keep-add.cmp.js'
import keepList from './cmps/keep-list.cmp.js'
import { eventBus } from '../../service/event-bus-service.js';

export default {
    template: `
        <main class="keep-app">
            <!-- <router-link to="/keep/main">Keeps</router-link> -->
            <!-- <router-link to="/keep/archive">Archived</router-link> -->
            <keep-filter @filtered="setFilter"/>
            <keep-add @add-keep="addKeep"/>
            <keep-list @remove-keep="removeKeep"  @update-keep="updateKeep" :keeps="filteredKeeps"/>
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
            filterBy: { term: '' },

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
        filteredKeeps() {
            const term = this.filterBy.term.toLowerCase();
            if (!term) return this.keeps;
            else return this.keeps.filter(keep => {
                if (keep.type === 'keep-note') {
                    if (keep.info.txt.toLowerCase().includes(term) ||
                        keep.info.title.toLowerCase().includes(term)) {
                        return true
                    }
                } else if (keep.type === 'keep-todos') {
                    if (keep.info.title.toLowerCase().includes(term)) return true;
                    if (keep.info.todos.find(todo => todo.txt.toLowerCase().includes(term))) return true;
                }
            })
        }
    },
    created() {
        keepService.initKeeps()
        this.getKeeps();
    }
}