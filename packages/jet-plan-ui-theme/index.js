import './css'

import light from './lightMode'
import dark from './darkMode'

export {
    dark,
    light
}

export default {
    install(jetTheme) {
        jetTheme.installTheme('jetPlan_light', light)
        jetTheme.installTheme('jetPlan_dark', dark)
        jetTheme.installTheme('jetPlan_auto', jetTheme.toAuto(
            light,
            dark
        ))
        jetTheme.setTheme("jetPlan_light")
    },
}
