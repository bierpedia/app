<template android>
    <Page>
        <GridLayout columns="*" rows="*">
            <Image :src="imageUrl" stretch="none" />
            <Label :text="beerTitle" col="0" row="0"/>
            <Button @tap="$modal.close()" text="Close" />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component({})
  export default class Beer extends Vue {
    @Prop() private imageUrl: string = "https://bierpedia.org/wp-content/uploads/2015/03/platzhalter-380x800.jpg";
    @Prop() private beerTitle: string = "SomeBeer";
  }
</script>

<style scoped></style>