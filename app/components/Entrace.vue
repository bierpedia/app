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
  export default class Entrace extends Vue {
    @Prop() private msg: string = 'Firsches';
  }
</script>

<style scoped></style>