<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="1200px">
      <template v-slot:activator="{ on, attrs }">
        <v-icon color="warning" v-bind="attrs" v-on="on" right>
          mdi-eye
        </v-icon>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">News Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="4">
                <v-img :src="item.urlToImage" :alt="item.title"></v-img>
              </v-col>
              <v-col cols="8">
                <h1 class="display-1">{{ item.title }}</h1>
                <p class="mt-5">{{ item.description }}</p>

                <p class="mt-5">{{ item.content }}</p>
                <v-chip class="ma-2" v-bind:href="item.url" target="_blank">
                  Read More
                </v-chip>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "DetailsModal",
  props: ["item"],
  data: () => ({
    dialog: false,
  }),
};
</script>
