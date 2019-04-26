<template>
  <div class="root">
    Garage Days Revisited
    <p>{{event.details}}</p>
    <p>{{event.start_date}}</p>
    <p>{{event.end_date}}</p>
    <p>{{event.start_time}} - {{event.end_time}}</p>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" v-for=" (image, idx) in event.images" :class="{active: idx==0}">
          <img img v-bind:src="image.url" class="d-block w-100" alt="">
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
    <!-- <div v-for="item in items">
      <h2>{{ item.name }}</h2>
    </div> -->
    <div v-if="currentUser === event.user_id">
    <button v-bind:to="'/events/' + event.id + '/edit'">Edit Event</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      event: {
        title: "",
        address: "",
        details: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: "",
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