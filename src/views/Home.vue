<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="event in events">
      <h2>{{ event.title }}</h2>
      <p>{{event.details}}</p>
      <p>{{event.address}}</p>
      <p>{{event.start_date}}</p>
      <p>{{event.end_date}}</p>
      <p>{{event.start_time}} - {{event.end_time}}</p>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" v-for=" (image, idx) in event.images" :class="{active: idx==0}">
          <img v-bind:src="image.url" class="d-block width: 100px, img-align: center" alt="...">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
      <!-- <img v-bind:src="event.images"> -->

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
