<template android>
    <Page actionBarHidden="true">
        <GridLayout columns="*" rows="*">
            <Label :text="msg" col="0" row="0"/>
        </GridLayout>
    </Page>
</template>


<script lang="ts">
  export default {
    data() {
      return {
        msg: 'Ratings'
      }
    }
  }
</script>

<style scoped></style>