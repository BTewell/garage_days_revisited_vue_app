<template>
  <div class="root">
    <section style="background: url('/img/blog-home-2.jpg') no-repeat;" class="hero">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="/home">Home</a></li>
          <li class="breadcrumb-item active">Hot Deals</li>
        </ul>
        <h1 class="has-lines">Hot <span class="text-primary"> Deals</span></h1>
      </div>
    </section>
    <section class="top-listings">
      <div class="container">
        <!-- <header> -->
          <h2 class="has-lines"><small>Hot Deals</small> Check out these <span class="text-primary">amazing items</span> that are too good to miss!</h2>
        <!-- </header> -->
      </div>
    </section>
      <div class="container">
        <div v-for="item in event.items">
          <div class="has-lines">
            <h2>{{ item.name }}</h2>
            <h4 class="text-primary">Description:</h4><p>{{ item.description }}</p>
            <h4 class="text-primary">Price:</h4><p>{{ item.price }}</p>
          </div>
            <div v-for="image in event.images">
              <div v-if="image.item_id === item.id">
                <p><img img v-bind:src="image.url" class="d-block w-50" alt=""></p>
              </div>
            </div>
          <div v-if="currentUser === event.user_id">
            <ul class="nav nav-pills-template">
              <li class="nav-item"><router-link v-bind:to="'/events/' + event.id + '/items/' + item.id + '/image/new'" class="nav-link active">Add Image</router-link></li>
            </ul>
          </div>
          <hr>
      </div>
    </div>
  </div>
</template>

<style>
img{
  width: 200px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      event: {
        id: "",
        items: "",
        images: "",
        user_id: ""
      },
      items: {
        id: "",
        event_id: "",
        images: "",
      },
      currentUser: ""
    };
  },
  created: function() {
    axios.get("/api/events/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.event = response.data;
      this.currentUser = Number(localStorage.currentUser);
      console.log(this.currentUser);
      console.log(this.event.items);
    });
    // console.log(this.$route.params.id)
  },
  methods: {}
};
</script>