import {
    mount
} from '@vue/test-utils'

import Table from '../Table.vue'

const data = {
    test: 'test'
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
