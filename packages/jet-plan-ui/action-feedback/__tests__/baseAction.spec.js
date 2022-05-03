import {
    mount,
    shallowMount
} from '@vue/test-utils'

import baseAction from '../baseAction.vue'
import test from '@test'

const getClass = test.tools.getClass

describe('Base ActionFeedback', () => {

    it('Node Map', async () => {
        const wrapper = shallowMount(baseAction)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('Class Map', async () => {
        const wrapper = shallowMount(baseAction)

        // 类名匹配组件名
        expect(getClass(wrapper)).toContain(
            baseAction.name
        )

    })

    it("Prop tag", () => {
        const wrapper = shallowMount(baseAction, {
            propsData: {
                tag: 'p'
            }
        })

        expect(wrapper.element.tagName).toEqual('P')
    })

    it('Actions', async () => {
        const wrapper = mount(baseAction)

        wrapper.trigger('mousedown')
        expect(wrapper.emitted().active_from).toBeTruthy()

        wrapper.trigger('mouseup')
        expect(wrapper.emitted().active_to).toBeTruthy()

        // 触摸事件监听
        const onTouch = wrapper.vm.onTouch
        expect(onTouch.ontouchstart).toEqual(wrapper.vm.activeFrom)
        expect(onTouch.ontouchstart).toBeTruthy()
        expect(onTouch.ontouchcancel).toEqual(wrapper.vm.activeTo)
        expect(onTouch.ontouchcancel).toBeTruthy()
        expect(onTouch.ontouchend).toEqual(wrapper.vm.activeTo)
        expect(onTouch.ontouchend).toBeTruthy()

    })
    it('Actions on touch', async () => {
        const wrapper = mount(baseAction)

        wrapper.vm.isTouch = true

        wrapper.trigger('mousedown')
        expect(wrapper.emitted().active_from).not.toBeTruthy()

        wrapper.trigger('mouseup')
        expect(wrapper.emitted().active_to).not.toBeTruthy()
    })

    it("Hover", async () => {
        const wrapper = mount(baseAction)

        wrapper.trigger('mouseenter')
        expect(wrapper.emitted().hover_from).toBeTruthy()

        wrapper.trigger('mouseleave')
        expect(wrapper.emitted().hover_to).toBeTruthy()
    })

})
