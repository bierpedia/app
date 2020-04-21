<template android>
  <Page actionBarHidden="true">
    <StackLayout backgroundColor="#3c495e">
      <SearchBar
        hint="Search hint"
        v-model="searchQuery"
        @textChange="onTextChanged"
        @submit="onSubmit"
      />
      <ActivityIndicator busy="true" @busyChange="onBusyChanged" />
      <Label>Suchergebnisse für die Anfrage: {{searchQuery}}</Label>
      <ListView ref for="item in searchResults" @itemTap="onItemTap">
        <v-template>
          <Label :text="item.text" />
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Beer from "./Modals/Beer";

@Component({
  components: { Beer }
})
export default class Search extends Vue {
  @Prop() private searchQuery: string = "";
  @Prop() private searchResults = [];

  onSubmit() {
    console.log("onSubmit");
    this.searchResults = [
      {
        text: "Entry 1"
      },
      {
        text: "Entry 2"
      },
      {
        text: "Entry 3"
      }
    ];
  }

  onTextChanged() {
    console.log("onTextChanged");
  }

  onItemTap() {
    this.$showModal(Beer);
  }
}
</script>

<style scoped>
</style>