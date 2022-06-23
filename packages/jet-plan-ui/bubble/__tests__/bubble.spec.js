import { mount } from '@vue/test-utils'
import babble from '../bubble.vue'

describe('Babble', () => {
    it('Node map', async () => {
        const wrapper = mount(babble, {
            propsData: {
                message: 'hello',
                position: 'top'
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello', position: 'top-start' })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello', position: 'top-end' })
        expect(wrapper.html()).toMatchSnapshot()



        await wrapper.setProps({ message: 'hello', position: 'bottom' })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello', position: 'bottom-start' })
        expect(wrapper.html()).toMatchSnapshot()
        await wrapper.setProps({ message: 'hello', position: 'bottom-end' })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello', position: 'left' })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello', position: 'left-start' })
        expect(wrapper.html()).toMatchSnapshot()
        await wrapper.setProps({ message: 'hello', position: 'left-end' })
        expect(wrapper.html()).toMatchSnapshot()


        await wrapper.setProps({ message: 'hello', position: 'right' })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello', position: 'right-start' })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello', position: 'right-end' })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({ message: 'hello', position: 'top', show: true })
        expect(wrapper.html()).toMatchSnapshot()


    })

    it('Name in map', () => {
        const wrapper = mount(babble, {
            propsData: {
                message: 'hello',
                position: 'top'
            }
        })
        expect(wrapper.find('.j-base-action').classes()).toContain(babble.name)
    })

    it('Message', async () => {
        const wrapper = mount(babble, {
            propsData: {
                message: 'hello',
                position: 'top'
            }
        })
        await wrapper.setProps(
            {
                message: 'hello'
            }
        )

        expect(wrapper.find('.j-button').html()).toContain('hello')


    }
    )


})
