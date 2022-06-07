import { mount, shallowMount } from '@vue/test-utils'
import babble from '../bubble.vue'

describe('Babble', async () => {
    it('Node map', async () => {
        const wrapper = mount(babble)
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello' })
        expect(wrapper.html()).toMatchSnapshot()

    })

    it('Name in map', () => {
        const wrapper = mount(babble)
        expect(wrapper.classes()).toContain(babble.name)
    })

    it('Message', async () => {
        const wrapper = mount(babble)
        await wrapper.setProps(
            {
                message: 'hello'
            }
        )

        expect(wrapper.find('j-button').html()).toContain('hello')


    }
    )


})
