import {
    mount,
} from '@vue/test-utils'

import alertItem from '../alertItem.vue'

describe("Component j-alert-item", () => {

    it('name in class', () => {
        const wrapper = mount(alertItem)
        expect(wrapper.classes()).toContain(alertItem.name)
    })
})
