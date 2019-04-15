<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="event in events">
      <h2>{{ event.title }}</h2>
      <img v-bind:src="event.images">
      <p>{{event.details}}</p>
      <p>{{event.address}}</p>
      <p>{{event.start_date}}</p>
      <p>{{event.end_date}}</p>
      <p>{{event.start_time}} - {{event.end_time}}</p>

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
