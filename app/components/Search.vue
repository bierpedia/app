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
export default {
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
        console.log("onItemTap");
    }
  }
};
</script>

<style scoped>
</style>