import {
    mount
} from '@vue/test-utils'

import {
    Alert,
    AlertData
} from '../../alert'

describe("Component j-alert", () => {

    it('name in class', () => {
        const data = new AlertData()
        const wrapper = mount(Alert, {
            propsData: {
                data: data
            }
        })
        expect(wrapper.classes()).toContain(Alert.name)
    })

    it('Prop data', () => {
        const data = new AlertData()
        data.info('hello')
        data.error('hello')
        data.warning('hello')
        data.success('hello')
        const wrapper = mount(Alert, {
            propsData: {
                data: data
            }
        })
        expect(wrapper.findAll('.j-alert-item').length).toBe(4)
    })

})
