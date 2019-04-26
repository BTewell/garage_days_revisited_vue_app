<template>
  <div class="root">
    Garage Days Revisited
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="makeEvent()">
      <p>Title: <input type="text" v-model="newEventTitle"></p>
      <p>Address: <input type="text" v-model="newEventAddress"></p>
      <p>Details: <input type="text" v-model="newEventDetails"></p>
      <p>Start Date: <input type="text" v-model="newEventStartDate"></p>
      <p>End Date: <input type="text" v-model="newEventEndDate"></p>
      <p>Start Time: <input type="text" v-model="newEventStartTime"></p>
      <p>End Time: <input type="text" v-model="newEventEndTime"></p>
      <input type="submit" value="Add a new event">
      <!-- <button>Make a new recipe</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newEventTitle: "",
      newEventAddress: "",
      newEventDetails: "",
      newEventStartDate: "",
      newEventEndDate: "",
      newEventStartTime: "",
      newEventEndTime: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    makeEvent: function() {
      console.log('making the new event');
      // make a request to the api to the create action
      // response = HTTP.get("/api/events")
      // recipes = reponse.parse
      var params = {
        title: this.newEventTitle,
        address: this.newEventAddress,
        details: this.newEventDetails,
        start_date: this.newEventStartDate,
        end_date: this.newEventEndDate,
        start_time: this.newEventStartTime,
        end_time: this.newEventEndTime
      };
      axios.post("/api/events", params).then(response => {
        console.log('things are going well');
        console.log(response);
        this.$router.push("/events/:id");
      }).catch(error => {
        console.log('things are going poorly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>