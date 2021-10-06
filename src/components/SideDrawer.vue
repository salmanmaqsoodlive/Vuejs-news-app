<template>
  <nav>
    <v-navigation-drawer v-model="drawer" app class="warning">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 white--text">
            News
          </v-list-item-title>
          <v-list-item-subtitle class="white--text caption">
            Vuejs App
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav>
        <v-list-item
          v-for="link in links"
          :key="link.name"
          router
          :to="link.path"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import router from "../router/routes";

const { options } = router;
const { routes } = options;
export default {
  data() {
    return {
      drawer: true,
      links: routes,
    };
  },
};
</script>
