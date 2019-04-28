<template>
  <div class="root">
    <h1>Garage Days Revisited</h1>
    <h3>{{event.title}}</h3>
    <p>{{event.address}}</p>
    <p>{{event.details}}</p>
    <p>{{event.start_date}}</p>
    <p>{{event.end_date}}</p>
    <p>{{event.start_time}} - {{event.end_time}}</p>
    <div v-for=" (image, idx) in event.images" :class="{active: idx==0}">
      <img img v-bind:src="image.url" class="d-block w-25" alt="">
    </div>  
    <router-link v-bind:to="'/events/' + event.id + '/item'" tag="button">Hot Deals</router-link>
    <hr>
    <div v-if="currentUser === event.user_id">
    <router-link v-bind:to="'/events/' + event.id + '/edit'" tag="button">Edit Event</router-link>
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
        user_id: "",
        items: ""
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