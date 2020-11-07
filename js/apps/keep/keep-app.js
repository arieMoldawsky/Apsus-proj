import { keepService } from './service/keep-service.js';
import { eventBus } from '../../service/event-bus-service.js';
import keepAdd from './cmps/keep-add.cmp.js'
import keepList from './cmps/keep-list.cmp.js'
import keepNavbar from './cmps/keep-navbar.cmp.js'

export default {
    template: `
        <main class="keep-app">
            <div class="keep-navadd">
                <keep-navbar/>
                <keep-add @add-keep="addKeep"/>
            </div>
            <span class="list-title" :class="{shown:pinnedKeeps.length}">Pinned</span>
            <keep-list @remove-keep="removeKeep"  @update-keep="updateKeep" :keeps="pinnedKeeps"/>
            <span class="list-title" :class="{shown:pinnedKeeps.length}">Others</span>
            <keep-list @remove-keep="removeKeep"  @update-keep="updateKeep" :keeps="notPinnedKeeps"/>
        </main>
    `,
    components: {
        keepAdd,
        keepList,
        keepNavbar,

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
        pinnedKeeps() {
            return this.filteredKeeps.filter(keep => keep.isPinned)
        },
        notPinnedKeeps() {
            return this.filteredKeeps.filter(keep => !keep.isPinned)
        },
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
        eventBus.$on('keeps-filtered', filterBy => this.filterBy = filterBy);
    }
}