<!-- TODO: 
  Hier soll ein Starscreen entstehen, auf dem zunächst die folgenden Informationen und Funktionen zu finden sind: '
  0. Optional eingeblendeter Text für: News, Sondermeldungen.
  1. Die X zuletzt angelegten Biere.
  2. Statistiken zur Datenbankgröße (#Anzahl: Biere, Brauereien, Biersorten, Abgegebene Noten, Benutzer)

Ideen:
  - Teaser: Bier des Monats von der Redaktion ausgewählt.
  - X Zufällige Biere mit Button, zum neu würfeln.
-->
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
        msg: 'Firsches'
      }
    }
  }
</script>

<style scoped></style>