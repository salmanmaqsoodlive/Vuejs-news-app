<template>
  <v-app>
    <v-container>
      <v-card elevation="2" shaped tile>
        <v-card-title>News</v-card-title>
        <v-data-table
          :headers="headers"
          :items="news"
          class="elevation-1"
          hide-default-footer
          disable-pagination
        >
          <template v-slot:item.urlToImage="{ item }">
            <v-img
              :src="item.urlToImage"
              :alt="item.title"
              height="60px"
              width="60px"
            ></v-img>
          </template>
          <template v-slot:item.title="{ item }">
            <div class="font-weight-bold font-italic">{{ item.title }}</div>
            <div class="caption">{{ item.description }}</div>
          </template>
          <template v-slot:item.actions="{ item }">
            <DetailsModal @click="viewDetails(item)" v-bind:item="item" />
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import DetailsModal from "./DetailsModal.vue";

Vue.use(VueAxios, axios);
export default {
  components: {
    DetailsModal,
  },
  data() {
    return {
      data: {},
      news: [],
      headers: [
        {
          text: "Image",
          value: "urlToImage",
          width: "1%",
          sortable: false,
          align: "start",
        },
        {
          text: "Title",
          align: "start",
          sortable: false,
          value: "title",
          width: "50%",
        },
        {
          text: "Author",
          align: "start",
          sortable: false,
          value: "author",
        },
        {
          text: "Actions",
          align: "start",
          sortable: false,
          value: "actions",
        },
      ],
    };
  },
  mounted() {
    Vue.axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=57b9b8518c944fc68405f703b4c8b1e8"
      )
      .then(({ data }) => {
        const { articles } = data;
        this.news = articles;
      });
  },
  methods: {
    viewDetails(selectedItem) {
      this.data = selectedItem;
    },
  },
};
</script>
