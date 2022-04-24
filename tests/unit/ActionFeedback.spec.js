import ActionFeedback from '../../packages/jet-plan-ui/action-feedback/ActionFeedback.vue'

import {
    mount,
    // shallowMount
} from '@vue/test-utils'

import {
    cssAttrsStringToObj
} from '../index.js'


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
            focusOutline: true,
        })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({
            colorFocusOutline: '#fff',
            colorActive: '#263238',
            colorFocus: '#5a7fa2',
            colorHover: "#a3b3d4"
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    it("Custom color", async () => {

        const wrapper = mount(ActionFeedback)

        expect(wrapper.classes()).not.toContain(
            'custom-color'
        )

        expect(wrapper.attributes('style')).not.toBeTruthy()

        const colorData = {
            colorFocusOutline: '#fff',
            colorActive: '#263238',
            colorFocus: '#5a7fa2',
            colorHover: "#a3b3d4"
        }

        await wrapper.setProps(colorData)

        expect(wrapper.classes()).toContain(
            'custom-color'
        )

        expect(wrapper.attributes('style')).toContain(
            '--color-focus-out-line',
            '--color-active',
            '--color-focus',
            '--color-hover',
        )

        const style = cssAttrsStringToObj(
            wrapper.attributes('style')
        )
        expect(style['--color-focus-out-line']).toEqual(
            colorData.colorFocusOutline
        )
        expect(style['--color-active']).toEqual(
            colorData.colorActive
        )
        expect(style['--color-focus']).toEqual(
            colorData.colorFocus
        )
        expect(style['--color-hover']).toEqual(
            colorData.colorHover
        )

        await wrapper.setProps({
            colorFocusOutline: '',
            colorActive: '',
            colorFocus: '',
            colorHover: ''
        })

        expect(wrapper.classes()).not.toContain(
            'custom-color'
        )

        expect(wrapper.attributes('style')).not.toBeTruthy()
    })
})
