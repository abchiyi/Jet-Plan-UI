import {
    mount
} from '@vue/test-utils'

import Avater from '../Avater.vue'

function cssAttrsStringToObj(str) {
    if (str) {
        const temp = {}
        const attrs = str.split(';');
        for (let n = 0; n < attrs.length; n++) {
            if (attrs[n].trim()) {
                let [key, value] = attrs[n].split(':')
                temp[key.trim()] = value.trim();
            }
        }
        return temp
    } else {
        return str
    }

}

function getStyle(wrapper, attr) {
    return cssAttrsStringToObj(
        wrapper.attributes('style')
    )[attr]
}

describe('Avater', () => {
    it("Document test", async () => {
        const wrapper = mount(Avater);
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
        const wrapper = mount(Avater);

        expect(wrapper.classes()).toContain(
            Avater.name
        )

        expect(wrapper.classes()).toContain(
            'j-avater'
        )
        expect(wrapper.classes()).toContain(
            'circle'
        )
        await wrapper.setProps({
            border: true
        });
        expect(wrapper.classes()).toContain(
            'border'
        )
        await wrapper.setProps({
            border: true,
            circle: false
        });
        expect(wrapper.classes()).not.toContain(
            'circle'
        )
    })

    it('Style value', async () => {
        const wrapper = mount(Avater);

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

        const color = {
            color: '#61ff73'
        }
        await wrapper.setProps(color)

        expect(
            getStyle(wrapper, '--color')).toContain(color.color)
    })
})
