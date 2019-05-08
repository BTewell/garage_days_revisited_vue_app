<template>
  <div class="root">
    <section style="background: url('/img/garage-int-BW.jpg')" class="hero d-flex align-items-center">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="/home">Home</a></li>
          <li class="breadcrumb-item active">Hot Deals</li>
        </ul>
        <h1 class="has-lines">Add New <span class="text-primary"> Items</span></h1>
      </div>
    </section>
    <aside class="col-lg-4">                   
      <div class="widget opening-hours">
        <header>
          <h3 class="has-lines"><small> Hot Deals </small> New Item </h3>
        </header>      
        <div v-for="error in errors">
          {{ error }}
        </div>
        <form class="days" v-on:submit.prevent="makeItem()">
          <div class="day d-flex justify-content-between"><strong>Item Name:</strong><input type="text" v-model="newItemName"></div>
          <div class="day d-flex justify-content-between"><strong>Item Description:</strong><input type="text" v-model="newItemDescription"></div>
          <div class="day d-flex justify-content-between"><strong>Item Price:</strong><input type="text" v-model="newItemPrice"></div>
          <input type="hidden" v-model="newItemEventId">
          <input type="hidden" v-model="newItemUserId">
          <input type="submit" class="btn btn-primary has-shadow has-wide-padding" value="Add new item">
          <!-- <button>Make a new recipe</button> -->
        </form>
      </div>
    </aside>
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
      newItemEventId: (this.$route.params.id),
      newItemUserId: "",
      errors: []
    };
  },
  created: function() {
    console.log(this.$route.params.id);
  },
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