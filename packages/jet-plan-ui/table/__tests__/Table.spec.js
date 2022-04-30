import {
    mount
} from '@vue/test-utils'

import Table from '../Table.vue'

const data = {
    list: [{
        name: 'n1'
    }, {
        name: 'n2'
    }, {
        name: 'n3'
    }]
}

describe('Table', () => {
    it('Table Data', async () => {
        const wrapper = mount(Table, {
            propsData: {
                data: data
            }
        })

        expect(wrapper.vm.data).toEqual(data)

    })
})
