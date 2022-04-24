import jetPlanLight from './lightMode'
import jetPlanDark from './darkMode'
import lightEyeProtection from './lightEyeProtection.js'

export {
    jetPlanLight,
    jetPlanDark,
    lightEyeProtection
}

export default {
    install(jetTheme) {
        jetTheme.installTheme('jetPlanLightEP', lightEyeProtection)
        jetTheme.installTheme('jetPlanLight', jetPlanLight)
        jetTheme.installTheme('jetPlanDark', jetPlanDark)
        jetTheme.installTheme('jetPlanAuto', jetTheme.toAuto(
            jetPlanLight,
            jetPlanDark
        ))
        jetTheme.setTheme("jetPlanLight")
    },
}
