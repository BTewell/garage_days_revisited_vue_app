<template>
  <div class="root">
    <h1>Garage Days Revisited</h1>
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="makeImage()">
      <p>URL: <input type="text" v-model="newImageUrl"></p>
      <p>Event ID: <input type="text" v-model="newImageEventId"></p>
      <p>Item ID: <input type="text" v-model="newImageItemId"></p>
      <input type="submit" value="Add New Image">
      <!-- <button>Make a new recipe</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newImageUrl: "",
      newImageEventId: "",
      newImageItemId: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    makeImage: function() {
      console.log('making the new Image');
      // make a request to the api to the create action
      // response = HTTP.get("/api/events")
      // recipes = reponse.parse
      var params = {
        url: this.newImageUrl,
        event_id: this.newImageEventId,
        item_id: this.newImageItemId,
      };
      axios.post("/api/images", params).then(response => {
        console.log('things are going well');
        console.log(response);
        this.$router.push("/events/" + this.$route.params.id, params);
      }).catch(error => {
        console.log('things are going poorly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>