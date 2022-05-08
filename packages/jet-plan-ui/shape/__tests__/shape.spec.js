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
})
