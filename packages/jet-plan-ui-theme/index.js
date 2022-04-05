import './css'

import light from './lightMode'
import dark from './darkMode'

export default {
    install(jetTheme) {
        jetTheme.installTheme('jetPlan_light', light)
        jetTheme.installTheme('jetPlan_dark', dark)
        jetTheme.installTheme('jetPlan_auto', jetTheme.toAuto(
            light,
            dark
        ))
    },
}
