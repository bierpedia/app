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
  export default class Changelog extends Vue {
    @Prop() private msg: string = 'Changelog';
  }
</script>

<style scoped></style>
