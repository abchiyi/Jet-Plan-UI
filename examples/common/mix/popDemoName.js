export default {
    mounted () {
        this.$emit("md-title", this.$route.name)
    },
}
