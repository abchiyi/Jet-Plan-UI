export default {
    mounted() {
        this.$nextTick(() => {
            try {
                this.refresh()
            } catch (e) {
                console.error("[SIZE]:Cant get the DOM, You Need Set 'ref=self' in root element")
            }
        });
    },
    beforeUpdate() {
        this.refresh()
    },
    updated() {
        this.refresh()
    },
    methods: {
        refresh() {
            try {
                let domRect = this.$refs.self.getBoundingClientRect()
                // domRect = this.$refs.self.firstChild.getBoundingClientRect()

                if (domRect.height) this.size.height = domRect.height + 'px'
                if (domRect.width) this.size.width = domRect.width + 'px'
            } catch (e) {
                console.error(this.$refs)
            }
        }
    },
    data() {
        return {
            size: {
                height: undefined,
                width: undefined,
            }
        }
    }
}
