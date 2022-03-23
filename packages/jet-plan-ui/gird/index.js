import Row from './src/Row.vue'
import Col from './src/Col.vue'


export {
    Row,
    Col
}
export default {
    install(Vue) {
        Vue.component(Row.name, Row)
        Vue.component(Col.name, Col)
    }
}
