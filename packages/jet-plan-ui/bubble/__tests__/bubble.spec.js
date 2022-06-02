import { mount } from '@vue/test-utils'
import babble from '../bubble.vue'

describe('Babble', () => {
    it('Node map', async () => {
        const wrapper = mount(babble)
        expect(wrapper.html()).toMatchSnapshot()

    })

    it('Name in map', () => {
        const wrapper = mount(babble)
        expect(wrapper.classes()).toContain(babble.name)
    })


})
