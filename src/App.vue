<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login"></router-link>
      <router-link to="/home">Home</router-link> |
      <router-link to="/events/new">New Event</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  
  text-align: center;
  
}
</style>
