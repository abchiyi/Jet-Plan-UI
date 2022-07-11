import {
    mount
} from '@vue/test-utils'

import Avatar from '../Avatar.vue'

function cssAttrsStringToObj (str) {
    if (str) {
        const temp = {}
        const attrs = str.split(';')
        for (let n = 0; n < attrs.length; n++) {
            if (attrs[n].trim()) {
                let [key, value] = attrs[n].split(':')
                temp[key.trim()] = value.trim()
            }
        }
        return temp
    } else {
        return str
    }

}

describe('Avatar', () => {
    it("Document test", async () => {
        const wrapper = mount(Avatar)
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({
            border: true,
        })
        expect(wrapper.html()).toMatchSnapshot()

        await wrapper.setProps({
            border: true,
            circle: false,
        })
        expect(wrapper.html()).toMatchSnapshot()
        await wrapper.setProps({
            border: true,
            circle: false,
            color: '#61ff73'
        })
        expect(wrapper.html()).toMatchSnapshot()

    })

    it('Class', async () => {
        const wrapper = mount(Avatar)

        expect(wrapper.classes()).toContain(
            Avatar.name
        )

        expect(wrapper.classes()).toContain(
            'j-avatar'
        )
        expect(wrapper.classes()).toContain(
            'circle'
        )
        await wrapper.setProps({
            border: true
        })
        expect(wrapper.classes()).toContain(
            'border'
        )
        await wrapper.setProps({
            border: true,
            circle: false
        })
        expect(wrapper.classes()).not.toContain(
            'circle'
        )
    })

    it('Style value', async () => {
        const wrapper = mount(Avatar)

        const defaultSize = {
            size: '2em'
        }

        expect(
            cssAttrsStringToObj(
                wrapper.attributes('style')
            )['--size']
        ).toContain(defaultSize.size)

        await wrapper.setProps({
            size: 4
        })


        expect(
            cssAttrsStringToObj(
                wrapper.attributes('style')
            )['--size']
        ).toContain('4em')
    })
})
