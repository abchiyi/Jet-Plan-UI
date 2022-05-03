import {
    mount,
    shallowMount
} from '@vue/test-utils'

import baseAction from '../baseAction.vue'
import test from '@test'

const getClass = test.tools.getClass

describe('Base ActionFeedback', () => {

    it('Node Map', async () => {
        const wrapper = mount(baseAction)

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
        expect(wrapper.emitted('active_from')[0][0].active).toBeTruthy()

        wrapper.trigger('mouseup')
        expect(wrapper.emitted('active_to')[0][0].active).not.toBeTruthy()

        // 触摸事件监听
        const onTouch = wrapper.vm.onTouch
        expect(onTouch.ontouchstart).toEqual(wrapper.vm.handlerTouchStartEvent)
        expect(typeof onTouch.ontouchstart).toEqual('function')
        expect(onTouch.ontouchcancel).toEqual(wrapper.vm.handlerTouchOver)
        expect(typeof onTouch.ontouchcancel).toEqual('function')
        expect(onTouch.ontouchend).toEqual(wrapper.vm.handlerTouchOver)
        expect(typeof onTouch.ontouchend).toEqual('function')

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

    it('Hover on touch', async () => {
        const wrapper = mount(baseAction)

        wrapper.vm.handlerTouchOver('')
        expect(wrapper.emitted().active_to)
        expect(wrapper.emitted().hover_to)

    })

})
