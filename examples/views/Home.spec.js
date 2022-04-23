import {
    // mount,
    shallowMount
} from '@vue/test-utils'

import Home from '@/views/Home.vue'


describe('HomePage', () => {
    it('渲染主页标题', () => {
        const wrapper = shallowMount(Home)

        // title
        expect(wrapper.text()).toMatch("Jet UI")

        // slogan
        expect(wrapper.text()).toMatch(
            "适用于移动端和桌面端的 UI 组件库"
        )
    })

    it('GetStart', () => {

    })
})
