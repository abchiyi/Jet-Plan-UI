import {
    mount
} from '@vue/test-utils'
import shape, {
    baseShape
} from '../../shape'

describe("Component j-shape", () => {
    it("name in class", () => {
        const wrapper = mount(baseShape)
        expect(wrapper.classes()).toContain(baseShape.name)
    })

    it("install", () => {
        expect(shape.install).toBeTruthy()
    })

    it('Prop Border', async () => {
        const wrapper = mount(baseShape)
        expect(wrapper.vm.style.border).not.toBeTruthy()
        await wrapper.setProps({
            border: '2'
        })
        expect(wrapper.vm.style.border).toEqual("2px solid var(--border)")
    })
    it('Prop Round', async () => {
        const wrapper = mount(baseShape)
        await wrapper.setProps({
            round: true
        })
        expect(wrapper.classes()).toContain('round')
        expect(wrapper.vm.dataHeight).toMatch(/.+px/)
    })
})
