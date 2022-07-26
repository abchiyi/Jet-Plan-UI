import jetPlanLight from './lightMode'
import jetPlanDark from './darkMode'

export {
    jetPlanLight,
    jetPlanDark,
}

export default {
    install (jetTheme) {
        jetTheme.installTheme('jetPlanLight', jetPlanLight)
        jetTheme.installTheme('jetPlanDark', jetPlanDark)
        jetTheme.installTheme('jetPlanAuto', jetTheme.toAuto(
            jetPlanLight,
            jetPlanDark
        ))
        jetTheme.setTheme("jetPlanAuto")
    },
}
