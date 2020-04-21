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
  export default {
    data() {
      return {
        imageUrl: "https://bierpedia.org/wp-content/uploads/2015/03/platzhalter-380x800.jpg",
        beerTitle: "SomeBeer"
      }
    }
  }
</script>

<style scoped></style>