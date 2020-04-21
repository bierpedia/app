<template android>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="*">
            <Label :text="msg" col="0" row="0"/>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component({})
  export default class Ratings extends Vue {
    @Prop() private msg: string = 'Ratings';
  }
</script>

<style scoped></style>