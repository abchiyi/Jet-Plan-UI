import Card from './src/Card.vue'

export {
    Card
}

export default {
    install(Vue) {
        Vue.component(Card.name, Card)
    }
}
