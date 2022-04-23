import ActionFeedback from '../../../packages/jet-plan-ui/action-feedback/ActionFeedback.vue'

// import ActionFeedbackMask from '@ui/action-feedback/ActionFeedbackMask.vue'

import {
    mount,
    shallowMount
} from '@vue/test-utils'



describe('ActionFeedback.vue', () => {
    it('Classes', () => {
        const wrapper = shallowMount(ActionFeedback, {
            propsData: {
                color: 'var(--mask)',
                opacity: '0.5',
                tag: 'div',
                active: true,
                hover: true,
                focus: true,
                focusOutline: true,
            }
        })

        expect(wrapper.html()).toMatch('j-action-feedback hover focus-outline focus')
    })

    it("Active", async () => {
        const wrapper = mount(ActionFeedback, {
            propsData: {
                active: true,
            }
        })

        expect(wrapper.find('.j-action-feedback').exists()).toBe(true)

        const afk = wrapper.find('.j-action-feedback')

        // 按下3次
        await afk.trigger('mousedown')
        await afk.trigger('mousedown')
        await afk.trigger('mousedown')
        expect(wrapper.findAll('.j-mask').length).toEqual(
            wrapper.vm.key
        )

        // 抬起1次，保证清除全部遮罩
        await afk.trigger('mouseup')
        expect(wrapper.findAll('.j-mask').length).toEqual(0)

    })

    it("Hover", async () => {
        const wrapper = mount(ActionFeedback, {
            propsData: {
                hover: true,
            }
        })

        const afk = wrapper.find('.j-action-feedback')

        // 根节点是否被渲染
        expect(afk.exists()).toBe(true)

        // Mouse
        await afk.trigger('mouseenter')
        await afk.trigger('mouseleave')
        expect(afk.classes().includes('hover')).toBe(true)


        // Touch
        await afk.trigger('ontouchstart')
        await afk.trigger('touchstart')

        // await afk.trigger('touchcancel')
        // await afk.trigger('touchend')


    })

})
