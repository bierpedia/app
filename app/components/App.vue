<template android>
  <Page>
    <ActionBar title="Bierpedia.org - App">
      <ActionItem text="Changelog" android.position="popup" @tap="$showModal(creditsPage)" />
      <ActionItem text="Credits" android.position="popup" @tap="$showModal(changelogPage)" />
    </ActionBar>
    <BottomNavigation>
      <TabStrip>
        <TabStripItem>
          <Label text="Frisches"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Finden"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Bewerten"></Label>
        </TabStripItem>
      </TabStrip>
      <TabContentItem>
        <Frame backgroundColor="#00495e">
          <Entrace />
        </Frame>
      </TabContentItem>
      <TabContentItem>
        <Frame backgroundColor="#3c495e">
          <Search />
        </Frame>
      </TabContentItem>
      <TabContentItem>
        <Frame backgroundColor="#00495e">
          <Ratings />
        </Frame>
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

import Credits from "./Modals/Credits";
import Changelog from "./Modals/Changelog";
import Search from "./Search";
import Entrace from "./Entrace";
import Ratings from "./Ratings";

@Component({components: {
    Search,
    Entrace,
    Ratings
  }
})
export default class App extends Vue {
  private creditsPage: any = Credits;
  private changelogPage: any = Changelog;
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
