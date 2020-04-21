<template android>
    <Page>
        <GridLayout columns="*" rows="*">
            <Label :text="msg" col="0" row="0"/>
            <Button @tap="$modal.close()" text="Close" />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        msg: 'Credits'
      }
    }
  }
</script>

<style scoped></style>
