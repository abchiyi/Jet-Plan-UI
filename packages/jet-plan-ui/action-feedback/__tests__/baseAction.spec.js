import {
    shallowMount
} from '@vue/test-utils'

import baseAction from '../baseAction.vue'
import test from '@test'

const getClass = test.tools.getClass

describe('Base ActionFeedback', () => {

    it('Node Map', async () => {
        const wrapper = shallowMount(baseAction)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('Class Map', async () => {
        const wrapper = shallowMount(baseAction)

        // 类名匹配组件名
        expect(getClass(wrapper)).toContain(
            baseAction.name
        )

    })

    it('Actions Map', async () => {
        const wrapper = shallowMount(baseAction)

        expect(getClass(wrapper)).toEqual([
            baseAction.name
        ])

        // Action
        await wrapper.setProps({
            action: true
        })
        expect(getClass(wrapper)).toContain('action')

        await wrapper.setProps({
            action: false
        })
        expect(getClass(wrapper)).not.toContain('action')

        // Hover
        await wrapper.setProps({
            hover: true
        })
        expect(getClass(wrapper)).toContain('hover')

        await wrapper.setProps({
            hover: false
        })
        expect(getClass(wrapper)).not.toContain('hover')

        // Hover
        await wrapper.setProps({
            focus: true
        })
        expect(getClass(wrapper)).toContain('focus')

        await wrapper.setProps({
            focus: false
        })
        expect(getClass(wrapper)).not.toContain('focus')

    })

    it("Prop tag", () => {
        const wrapper = shallowMount(baseAction, {
            propsData: {
                tag: 'p'
            }
        })

        expect(wrapper.element.tagName).toEqual('P')
    })

})
