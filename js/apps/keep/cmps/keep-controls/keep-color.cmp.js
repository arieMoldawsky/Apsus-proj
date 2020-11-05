export default {
    props: ['keep'],
    template: `
        <div class="keep-color-picker">
            <!-- <span class="color-icon">Color</span> -->
            Color
            <div class="keep-colors">
                <span v-for="color in colors"
                    :style="{color}"
                    @click="changeColor(color)">
                    ⬤
                </span>
            </div>
        </div>
    `,
    data() {
        return {
            colors: 
                {
                    'Red': '#ff6b6b',
                    'Blue': '#6bbcff',
                    'Yellow': '#fff06b',
                    'Green': '#7cff6b',
                    'Purple': '#ab6bff',
                    'Pink': '#ff6bdf',
                }
            
        }
    },
    methods: {
        updateKeep(keep) {
            this.$emit('update-keep', keep)
        },
        changeColor(color) {
            this.keep.style.backgroundColor = color;
            this.updateKeep(this.keep);
        }
    },
}