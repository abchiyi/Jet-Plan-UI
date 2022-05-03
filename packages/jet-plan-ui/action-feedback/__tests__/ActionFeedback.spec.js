import ActionFeedback from '../ActionFeedback.vue'

import {
    mount,
    // shallowMount
} from '@vue/test-utils'

function cssAttrsStringToObj(str) {
    const temp = {}
    const attrs = str.split(';');
    for (let n = 0; n < attrs.length; n++) {
        if (attrs[n].trim()) {
            let [key, value] = attrs[n].split(':')
            temp[key.trim()] = value.trim();
        }
    }
    return temp
}

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

        const colorData = {
            colorFocusOutline: '#fff',
            colorActive: '#263238',
            colorFocus: '#5a7fa2',
            colorHover: "#a3b3d4"
        }

        await wrapper.setProps(colorData)

        const style = cssAttrsStringToObj(
            wrapper.attributes('style')
        )
        expect(style['--color-focus-out-line']).toEqual(
            colorData.colorFocusOutline
        )
        expect(style['--color-focus']).toEqual(
            colorData.colorFocus
        )
        expect(style['--color-hover']).toEqual(
            colorData.colorHover
        )
    })

    it('mask opacity', async () => {
        const wrapper = mount(ActionFeedback)
        const style = cssAttrsStringToObj(
            wrapper.attributes('style')
        )
        expect(style['--mask-opacity']).toEqual('0.5')

        await wrapper.setProps({
            opacity: 0.2
        })
        expect(cssAttrsStringToObj(
            wrapper.attributes('style')
        )['--mask-opacity']).toEqual('0.2')

    })

    it('Custom class', async () => {
        const wrapper = mount(ActionFeedback)

        expect(wrapper.vm.name).toEqual('j')



    })
})
