<template>
  <div class="root">
    <h1>Garage Days Revisited</h1>
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="makeItem()">
      <p>Name: <input type="text" v-model="newItemName"></p>
      <p>Description: <input type="text" v-model="newItemDescription"></p>
      <p>Price: <input type="text" v-model="newItemPrice"></p>
      <p>Event ID: <input type="text" v-model="newItemEventId"></p>
      <p>User ID: <input type="text" v-model="newItemUserId"></p>
      <input type="submit" value="Add new item">
      <!-- <button>Make a new recipe</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newItemName: "",
      newItemDescription: "",
      newItemPrice: "",
      newItemEventId: "",
      newItemUserId: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    makeItem: function() {
      console.log('making the new item');
      // make a request to the api to the create action
      // response = HTTP.get("/api/events")
      // recipes = reponse.parse
      var params = {
        name: this.newItemName,
        description: this.newItemDescription,
        price: this.newItemPrice,
        event_id: this.newItemEventId,
        user_id: this.newItemUserId,
      };
      axios.post("/api/items", params).then(response => {
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