<!-- TODO: 
  Hier soll ein Changelogtext angezeigt werden:
  1. Es ist zu überlegen, ob der Text statisch mit jedem Update deployed wird oder dynamisch von 
     einer Webquelle geladen wird.
-->
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
