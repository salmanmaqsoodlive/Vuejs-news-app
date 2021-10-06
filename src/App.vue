<template>
  <v-app>
    <SideDrawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SideDrawer from "../src/components/SideDrawer";
export default {
  name: "App",
  components: { SideDrawer },
  data: () => ({
    //
  }),
};
</script>
