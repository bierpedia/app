<!-- TODO: 
  Hier soll die Möglichkeit entstehen Biere zu bewerten (erstmal unabhängig von einer Benutzer Authentifizierung):
  1. Benutzer sollen eigene Notizen lokal auf dem Smartphone speichern können.
    - Notiz = Titel (Name des Bieres), Note (Zahl), Freitext, [Foto]
  2. Notizen sollen (lokal) mit bestehenden Bieren verknüpft werden können.
  [3. Integration der Notizen/Bewertungen ins Backend (Erfordert: Benutzer Authentifizierung).]
  [4. Export und import / Backup Lösung für Notizen.]
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
        msg: 'Ratings'
      }
    }
  }
</script>

<style scoped></style>