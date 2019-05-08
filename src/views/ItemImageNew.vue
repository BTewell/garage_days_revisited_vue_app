<template>
  <div class="root">
    <section style="background: url('/img/garage-int-BW.jpg')" class="hero d-flex align-items-center">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="/home">Home</a></li>
          <li class="breadcrumb-item active">Hot Deals</li>
        </ul>
        <h1 class="has-lines">Add New <span class="text-primary"> Images</span></h1>
      </div>
    </section>
    <aside class="col-lg-4">                   
      <div class="widget opening-hours">
        <header>
          <h3 class="has-lines"><small> Hot Deals </small> New Image </h3>
        </header>      
          <div v-for="error in errors">
            {{ error }}
          </div>
          <form class="days" v-on:submit.prevent="makeImage()">
            <div class="day d-flex justify-content-between"><strong>Image URL:</strong><input type="text" v-model="newImageUrl"></div>
            <input type="hidden" v-model="newImageEventId">
            <input type="hidden" v-model="newImageItemId">
            <input type="submit" class="btn btn-primary has-shadow has-wide-padding" value="Add new image">
            <!-- <button>Make a new recipe</button> -->
          </form>
        </div>
    </aside>
  </div>  <!-- <h1>Garage Days Revisited</h1> -->
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      item: {
        name: "",
        description: "",
        price: "",
        event_id: "",
        id:"",
      },
      newImageUrl: "",
      newImageEventId: (this.$route.params.id),
      newImageItemId: (this.$route.params.itemId),
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