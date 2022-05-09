import {
    mount
} from '@vue/test-utils'

import {
    alert
} from '../../alert'
describe("Component j-alert", () => {

    it('name in class', () => {
        const wrapper = mount(alert)
        expect(wrapper.classes()).toContain(alert.name)
    })

})
