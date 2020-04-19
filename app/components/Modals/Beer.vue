<!-- TODO: 
  Hier sollen alle Infos zu einem Bier dargestellt werden:
  1. Detailansicht für ein Bier (Titel, Sorte, Brauerei, Alc., Durchschnitts-Note, Land, Foto, Allgemeintext, etc.)
  2. Lokale Bewertung/Notiz anzeigen und Button zum anlegen/editieren.
  3. Persönliche Note des Benutzeraccounts (Erforderlich: Benutzer Authentifizierung)
  4. Kommentare und Kommentarfunktion (wie auf Webseite).
-->

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