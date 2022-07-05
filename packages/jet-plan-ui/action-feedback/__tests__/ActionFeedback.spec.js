import ActionFeedback from '../ActionFeedback.vue'

import {
    mount,
} from '@vue/test-utils'

describe('ActionFeedback.vue', () => {
    it('Style test', async () => {
        const wrapper = mount(ActionFeedback, {
            propsData: {
                active: true
            }
        })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({
            active: true,
            hover: true,
        })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({
            active: true,
            hover: true,
            focus: true
        })

        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({
            active: true,
            hover: true,
            focus: true,
        })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({
            colorActive: '#263238',
            colorFocus: '#5a7fa2',
            colorHover: "#a3b3d4"
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('Custom class', async () => {
        const wrapper = mount(ActionFeedback)

        expect(wrapper.vm.name).toEqual('j')

        const newName = 'test'

        await wrapper.setProps({
            name: newName
        })

        expect(wrapper.classes()).toContain(`${newName}-action-feedback`)

        // mousedown & touchstart
        await wrapper.setProps({
            active: true
        })

        await wrapper.vm.handlerActive({
            active: true
        })
        expect(wrapper.classes()).toContain(`active`)

        await wrapper.vm.handlerActive({
            active: false
        })
        expect(wrapper.classes()).not.toContain(`active`)

        // Hover
        await wrapper.setProps({
            hover: true
        })
        await wrapper.vm.handlerHover({
            active: true
        })
        expect(wrapper.classes()).toContain(`hover`)

        await wrapper.vm.handlerHover({
            active: false
        })
        expect(wrapper.classes()).not.toContain(`hover`)

        // Focus
        await wrapper.setProps({
            focus: true
        })
        await wrapper.vm.handlerFocus({
            active: true
        })
        expect(wrapper.classes()).toContain(`focus`)

        await wrapper.vm.handlerFocus({
            active: false
        })
        expect(wrapper.classes()).not.toContain(`focus`)

    })
})
