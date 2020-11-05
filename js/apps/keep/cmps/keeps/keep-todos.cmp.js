import keepControls from '../keep-controls/keep-controls.cmp.js'

export default {
    props: ['keep'],
    template: `
        <div class="keep keep-todos">
        <span contenteditable v-text="keep.info.title" @blur="updateTitle"/>
            <br/>
            <ul>
                <li v-for="(todo, idx) in keep.info.todos">
                    <span contenteditable v-text="todo.txt" @blur="updateTodoTxt($event, idx)"/>  
                    <span v-if="todo.doneAt" @click="toggleDoneTodo(todo)">{{todo.doneAt}}</span>    
                    <button v-if="!todo.doneAt" @click="toggleDoneTodo(todo)">Done</button>
                    <button @click="deleteTodo(idx)">Delete</button>
                </li>
            </ul>
            <br/>
            <keep-controls :keep="keep" @remove-keep="removeKeep" @update-keep="updateKeep"/>
        </div>
    `,
    components: {
        keepControls,
    },
    methods: {
        removeKeep() {
            this.$emit('remove-keep', this.keep.id)
        },
        updateKeep(keep) {
            this.$emit('update-keep', keep)
        },
        togglePin() {
            this.keep.isPinned = !this.keep.isPinned
            this.updateKeep(this.keep);
        },
        updateTitle(ev) {
            this.keep.info.title = ev.target.innerText
            this.updateKeep(this.keep)
        },
        updateTodoTxt(ev, idx) {
            this.keep.info.todos[idx].txt = ev.target.innerText
            this.updateKeep(this.keep)
        },
        toggleDoneTodo(todo) {
            todo.doneAt = !todo.doneAt ? Date.now() : null;
            this.updateKeep(this.keep);
        },
        deleteTodo(idx) {
            this.keep.info.todos.splice(idx, 1)
            this.updateKeep(this.keep);
        },
    }
}