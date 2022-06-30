// 组件
import { ActionFeedback } from './action-feedback'
import { AlertData, Alert } from "./alert"
import {
    TransitionFade, TransitionFolded,
    TransitionScale, TransitionSlide
} from './animations'
import { Avatar } from './avater'
import { Bubble } from "./bubble"
import { Card } from "./card"
import { CodeBox } from "./code_box"
import { Row, Col } from "./gird"
import { CheckBox, Button, Switch, Radio, Input, Slider } from "./inputs"
import {
    Page, Header, Sidebar, ControlBar, FullScreenMask, Drawer
} from "./layout"
import { Mask } from "./mask"
import { Progress } from "./progress"
import { Table } from "./table"
import { AllTheme, Theme as $jetTheme } from "./theme"

// Directives
import {
    ReScreenSize, AutoColor, ScrollTo, Shadow, Focus
} from "./tool/directives"

export {
    ActionFeedback,
    AlertData,
    Alert,
    Avatar,
    TransitionFade,
    TransitionFolded,
    TransitionScale,
    TransitionSlide,
    Bubble,
    Card,
    CodeBox,
    Row, Col,
    CheckBox, Button, Switch, Radio, Input, Slider,
    Page, Header, Sidebar, ControlBar, FullScreenMask, Drawer,
    Mask,
    Progress,
    Table,
    AllTheme,
}
$jetTheme

const COMPONENTS = [
    ActionFeedback,
    AlertData,
    Alert,
    Avatar,
    TransitionFade,
    TransitionFolded,
    TransitionScale,
    TransitionSlide,
    Bubble,
    Card,
    CodeBox,
    Row, Col,
    CheckBox, Button, Switch, Radio, Input, Slider,
    Page, Header, Sidebar, ControlBar, FullScreenMask, Drawer,
    Mask,
    Progress,
    Table,
    AllTheme,
]

const DIRECTIVES = [
    ReScreenSize, AutoColor, ScrollTo, Shadow, Focus
]

import { installComponent, installDirective } from './tool/lib'

// FullInstall
export default {
    install (Vue) {
        // 全局挂载主题控制器
        Vue.config.globalProperties.$jetTheme = $jetTheme
        installDirective(Vue, DIRECTIVES)
        installComponent(Vue, COMPONENTS)
    },
    $jetTheme: $jetTheme
}
