import './css'

import light from './lightMode'
import dark from './darkMode'

export default {
    install(jetTheme) {
        jetTheme.install('jetPlan_light', light)
        jetTheme.install('jetPlan_dark', dark)
        jetTheme.install('jetPlan_auto', jetTheme.toAuto(
            light,
            dark
        ))
    },
}
