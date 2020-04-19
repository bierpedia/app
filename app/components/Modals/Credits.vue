<!-- TODO: 
  Hier soll ein Creditstext angezeigt werden.
  1. Ein Defaulttext soll statisch mit der App ausgeliefert werden.
  2. Ein dynamischer Text soll won einer webquelle angezeigt werden.

Ideen:
  - Credits an die verwendeten "Frameworks".
  - Sponsoren Liste.
  - Spenden Button.
-->

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
