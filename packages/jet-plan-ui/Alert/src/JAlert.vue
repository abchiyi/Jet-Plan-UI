<script lang="ts">
import { defineComponent, h, type PropType } from "vue";
import type AlertController from "./AlertController";
import { TransitionScale } from "../../Animations";
import JAlertItem from "./JAlertItem.vue";
import type { customTransition } from "./Alert";

export default defineComponent({
  props: {
    alertController: Object as PropType<AlertController>,
    transition: Function as PropType<customTransition>,
  },
  computed: {
    alert() {
      const alert = this.alertController?.alerts[0];
      if (!alert) return;
      return h(JAlertItem, {
        onClose: () => this.alertController?._$remove(alert),
        class: "j-alert",
        key: alert?.key,
        data: alert,
      });
    },
  },
  render() {
    return this.transition
      ? this.transition(this.alert)
      : h(
          TransitionScale,
          {
            mode: "out-in",
          },
          { default: () => this.alert }
        );
  },
});
</script>
