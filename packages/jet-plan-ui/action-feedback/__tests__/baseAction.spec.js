import {
    mount,
    shallowMount
} from '@vue/test-utils'

import baseAction from '../baseAction.vue'
import {
    getClass,
    getLastEvent
} from '@test/tools'
import {
    get
} from 'jquery'


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
        expect(
            getLastEvent(wrapper, 'active_from').active
        ).toBeTruthy()

        wrapper.trigger('mouseup')
        expect(
            getLastEvent(wrapper, 'active_to').active
        ).not.toBeTruthy()

        // 触摸事件监听
        wrapper.vm.handlerTouchEvent({
            type: 'touchstart'
        })
        expect(
            getLastEvent(wrapper, 'active_from').active
        ).toBeTruthy()

        wrapper.vm.handlerTouchEvent({
            type: 'touchend'
        })
        expect(
            getLastEvent(wrapper, 'active_to')
        ).toEqual({
            active: false,
            event: {
                type: 'touchend'
            }
        })
        wrapper.vm.handlerTouchEvent({
            type: 'touchcancel'
        })
        expect(
            getLastEvent(wrapper, 'active_to')
        ).toEqual({
            active: false,
            event: {
                type: 'touchcancel'
            }
        })
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
        expect(
            getLastEvent(wrapper, 'hover_from').active
        ).toBeTruthy()

        wrapper.trigger('mouseleave')
        expect(getLastEvent(wrapper, 'hover_to').active).toBe(false)
    })

    it('Hover on touch', async () => {
        const wrapper = mount(baseAction)

        wrapper.vm.handlerTouchOver('')
        expect(wrapper.emitted().active_to)
        expect(wrapper.emitted().hover_to)

    })

})
