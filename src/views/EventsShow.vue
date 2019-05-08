<template>
  <div class="events-show">
    <section style="background: url('/img/photo-top-4.jpg')" class="hero d-flex align-items-center">
      <div class="container">
        <header>
        <div class="container">
          <ul class="breadcrumb">
            <li class="breadcrumb-item"><a href="/home">Home</a></li>
            <li class="breadcrumb-item active">Events</li>
          </ul>
          <h1 class="has-lines">Local <span class="text-primary"> Event</span></h1>
        </div><p class="lead">Check out this amazing sale near you!
          </p>
        </header>    
      </div>
    </section>
    <section class="hero hero-inverse"> 
      <div class="container">
        <h1 class="has-lines">{{event.title}}</h1>
        <h4 class="has-lines">{{event.address}}</h4>
        <p class="lead">{{event.details}}</p>
        <div class="opening-hours">
          <div class="subcategories">
            <p>Start Date: {{event.start_date}}</p>
            <p>End Date: {{event.end_date}}</p>
            <p>Hours: {{event.start_time}} - {{event.end_time}}</p>
          </div>
        </div>    
        <div class="block listing-gallery">
          <header>
            <h3 class="has-lines"><small>Hot Deals</small> Image Gallery </h3>
          </header>
          <div class="gallery row">
            <div class="mix col-lg-4 col-md-6" v-for="image in event.images">
              <div class="item"><a v-bind:href="image.url" data-fancybox="gallery" class="image"><img v-bind:src="image.url" alt="..." class="img-fluid"></a></div>
            </div>
          </div>
        </div>  <!-- <div class="item listing-item"> --> 
        <ul class="nav nav-pills-template">
          <li class="nav-item"><router-link v-bind:to="'/events/' + event.id + '/items'" class="nav-link active">Hot Deals</router-link></li>
        </ul>
        <ul class="nav nav-pills-template">
          <div v-if="currentUser === event.user_id">
            <li class="nav-item"><router-link v-bind:to="'/events/' + event.id + '/edit'" class="nav-link">Edit Event</router-link></li>
            <li class="nav-item"><router-link v-bind:to="'/events/' + event.id + '/items/new'" class="nav-link">Add Item</router-link></li>
          </div>   
        </ul>  
      </div>
    </section>
  </div>
</template>
    
    <!-- <h1>Garage Days Revisited</h1> -->
    <!-- <h3>{{event.title}}</h3>
    <p>{{event.address}}</p>
    <p>{{event.details}}</p>
    <p>{{event.start_date}}</p>
    <p>{{event.end_date}}</p>
    <p>{{event.start_time}} - {{event.end_time}}</p> -->
    <!-- <router-link v-bind:to="'/events/' + event.id + '/item'" tag="button">Hot Deals</router-link>
    <hr>
    <div v-if="currentUser === event.user_id">
    <router-link v-bind:to="'/events/' + event.id + '/edit'" tag="button">Edit Event</router-link><router-link v-bind:to="'/events/'+ event.id +'/item/new'" tag="button">Add Item</router-link> -->
    <!-- </div> -->
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