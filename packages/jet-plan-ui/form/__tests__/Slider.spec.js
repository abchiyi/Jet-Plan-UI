import { mount } from '@vue/test-utils'
import Slider from '../Slider.vue'

describe('Slider', () => {
    it('Node map', async () => {
        const wrapper = mount(Slider, {
            propsData: {
                message: 'hello',
                position: 'top'
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })

    it('Name in map', () => {
        const wrapper = mount(Slider, {
            propsData: {
                message: 'hello',
                position: 'top'
            }
        })
        expect(wrapper.find('.j-base-action').classes()).toContain(Slider.name)
    })
})
