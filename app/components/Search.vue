<!-- TODO: 
  Die Suche soll Schrittweise erweitert werden:
  1. Suche nach Biertiteln. In den Suchergebnissen werden nur Biere angezeigt.
  2. Erweiterung auf Brauereien. Ergebnisse sollen strukturiert angezeigt werden. (Divider: Biere, Brauereien, etc.)
  3. Erweiterung auf Biersorten.
  [4. Erweiterung auf Volltext in allen Artikeln]
-->

<template android>
  <Page actionBarHidden="true">
      <StackLayout backgroundColor="#3c495e">
    <SearchBar hint="Search hint" v-model="searchQuery" @textChange="onTextChanged" @submit="onSubmit" />
    <ActivityIndicator busy="true" @busyChange="onBusyChanged" />
    <Label>Suchergebnisse für die Anfrage: {{searchQuery}} </Label>
    <ListView ref="" for="item in searchResults" @itemTap="onItemTap">
      <v-template>
        <Label :text="item.text" />
      </v-template>
    </ListView>
      </StackLayout>
  </Page>
</template>

<script lang="ts">
import Beer from './Modals/Beer'
export default {
  components:{
    Beer
  },
  data() {
    return {
      searchQuery: "",
      searchResults: []
    };
  },
  methods: {
    onSubmit() {
      console.log("onSubmit");
      this.searchResults = [{
          text: 'Entry 1'},{
          text: 'Entry 2'},{
          text: 'Entry 3'},{
          text: 'Entry 4'},{
          text: 'Entry 5'}
        ]
    },
    onTextChanged() {
      console.log("onTextChanged");
      
    },
    onItemTap() {
        this.$showModal(Beer);
    }
  }
};
</script>

<style scoped>
</style>