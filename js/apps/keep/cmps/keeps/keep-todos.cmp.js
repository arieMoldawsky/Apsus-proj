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
            <span :class="{pinned: keep.isPinned}" @click="togglePin">Pin Note</span>
            <br/>
            <button @click="removeKeep">Delete</button>
        </div>
    `,
    methods: {
        removeKeep() {
            this.$emit('remove-keep', this.keep.id)
        },
        updateKeep() {
            this.$emit('update-keep', this.keep)
        },
        togglePin() {
            this.keep.isPinned = !this.keep.isPinned
            this.updateKeep();
        },
        updateTitle(ev) {
            this.keep.info.title = ev.target.innerText
            this.updateKeep()
        },
        updateTodoTxt(ev, idx) {
            this.keep.info.todos[idx].txt = ev.target.innerText
            this.updateKeep()
        },
        toggleDoneTodo(todo) {
            todo.doneAt = !todo.doneAt ? Date.now() : null;
            this.updateKeep();
        },
        deleteTodo(idx) {
            this.keep.info.todos.splice(idx, 1)
            this.updateKeep();
        },
    }
}