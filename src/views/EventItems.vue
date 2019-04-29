<template>
  <div class="root">
    <h1>Garage Days Revisited</h1>
    <div v-for="item in event.items">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <p>{{ item.price }}</p>
      <div v-for="image in event.images">
        <div v-if="image.item_id === item.id">
          <p><img img v-bind:src="image.url" class="d-block w-50" alt=""></p>        
        </div>
      </div>
      <div v-if="currentUser === event.user_id">
        <router-link v-bind:to="'item/image/new'" tag="button">Add Image</router-link>
      </div>
    </div>
<!--     <router-link v-bind:to="'/items/show' + event.item.id" tag="button">Item Details</router-link> -->
    <hr>
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
        items: "",
        images: "",
        user_id: ""
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
    });
    // console.log(this.$route.params.id)
  },
  methods: {}
};
</script>