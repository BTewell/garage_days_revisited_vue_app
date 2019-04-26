<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="event in events">
      <h2>{{ event.title }}</h2>
      <p>{{event.address}}</p>
    <router-link v-bind:to="'/events/' + event.id">Event Page</router-link>
      <hr>
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
      message: "Garage Days Revisited",
      events: [],
    };
  },
  created: function() {
    axios.get('/api/events').then(response => {
      this.events = response.data;
    });
  },
  methods: {}
};
</script>
