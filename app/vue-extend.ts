import { Vue } from "vue-property-decorator";

// Inspired by: https://nativescripting.com/posts/nativescript-vue-manual-routing-function-typing (2020-04-22)

declare module "vue-property-decorator" {
  interface Vue {
    $navigateTo(args);
    $showModal(args);
  }
}
