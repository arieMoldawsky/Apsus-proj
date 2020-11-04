export default {
    props: ['keep'],
    template: `
        <div class="keep keep-todos">
            <span>{{keep.info.title}}</span>
            <br/>
            <ul>
                <li v-for="(todo, idx) in keep.info.todos">
                <span>{{todo.txt}}</span>    
                <span v-if="todo.doneAt">{{todo.doneAt}}</span>    
                    <button v-if="!todo.doneAt" @click="doneTodo(todo)">isDone</button>
                    <button @click="deleteTodo(idx)">Delete</button>
                </li>
            </ul>
            <br/>
            <button @click="removeKeep">Delete</button>
        </div>
    `,
    methods: {
        doneTodo(todo) {
            todo.doneAt = Date.now();
            this.updateKeep(this.keep);
        },
        deleteTodo(idx) {
            this.keep.info.todos.splice(idx, 1)
            this.updateKeep(this.keep);
        },
        removeKeep() {
            this.$emit('remove-keep', this.keep.id)
        },
        updateKeep() {
            this.$emit('update-keep', this.keep)
        },
    // },
    // computed:
    //     isDoneTodo() {
    //         !todo.doneAt ? 'Done'

    //     }
    }
}