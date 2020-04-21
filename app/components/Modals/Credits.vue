<template android>
    <Page>
        <GridLayout columns="*" rows="*">
            <Label :text="msg" col="0" row="0"/>
            <Button @tap="$modal.close()" text="Close" />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component({})
  export default class Credis extends Vue {
    @Prop() private msg: string = 'Credits';
  }
</script>

<style scoped></style>
