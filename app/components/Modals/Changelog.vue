<template android>
    <Page>
        <GridLayout columns="*" rows="*">
            <Label :text="msg2" col="0" row="0"/>
            <Button @tap="$modal.close()" text="Close" />
        </GridLayout>
    </Page>
</template>

<script lang="ts">
  export default {
    data() {
      return {
        msg2: 'Changelog'
      }
    }
  }
</script>

<style scoped></style>
