import {
    shallowMount
} from '@vue/test-utils'

import baseActionFeedback from '../baseActionFeedback.vue'
import test from '@test'

const getClass = test.tools.getClass

describe('Base ActionFeedback', () => {

    it('Node Map', async () => {
        const wrapper = shallowMount(baseActionFeedback)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('Class Map', async () => {
        const wrapper = shallowMount(baseActionFeedback)

        // 类名匹配组件名
        expect(getClass(wrapper)).toContain(
            baseActionFeedback.name
        )

    })

    it('Actions Map', async () => {
        const wrapper = shallowMount(baseActionFeedback)

        expect(getClass(wrapper)).toEqual([
            'j-base-action-feedback'
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


})
