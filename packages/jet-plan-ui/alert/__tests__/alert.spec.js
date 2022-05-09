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

    it('Prop data', () => {
        const wrapper = mount(alert, {
            propsData: {
                data: [{
                    'type': 'info',
                }]
            }
        })
        console.log(
            wrapper.find('.j-alert-item')
        );
        expect(wrapper.findAll('.j-alert-item').length).toBeTruthy()
    })

})
