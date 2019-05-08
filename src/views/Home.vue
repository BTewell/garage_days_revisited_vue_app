<template>
  <div class="home">
    <section style="background: url('img/hero-bg.jpg')" class="hero d-flex align-items-center">
      <div class="container">
        <header>
          <h2 class="has-lines"><small class="text-primary">Greetings Yardbirds</small> Welcome to <span class="text-primary"> Garage Days Revisited </span></h2>
          <p class="lead">Your one site for discovering all the sales events in your town!
          </p>
        </header>    
      </div>
    </section>
    <section class="top-listings">
      <div class="container">
        <header>
          <h2 class="has-lines"><small>New Releases</small> Check out <span class="text-primary">upcoming local</span> events</h2>
          <p class="lead">Take a peek at sales events happening in your area!</p>
        </header>
        <div class="row d-flex align-items-stretch">
          <!-- Item-->
          <div class="col-lg-6">
            <div class="item item-big">
              <div class="image"><img src="img/photo-top-4.jpg" alt="..." class="img-fluid"></div>
              <div class="info d-flex align-items-end">
                <div class="content">
                  <h3 class="text-primary">Chicago</h3>
                  <p>These events in the Windy City will blow you away!</p>
                  <ul class="rate list-inline">
                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                    <li class="list-inline-item"><i class="fa fa-star"></i></li>
                  </ul>
                </div>
              </div>
            <div class="badge">featured
            </div>
          </div>
        </div>
        <!-- Item-->
          <div class="col-lg-6">
            <div class="row">
              <div class="col-md-6"><router-link v-bind:to="'/events/' + events[7].id">
                <div class="item">
                  <div class="image"><img v-bind:src="events[7].images[0].url" width="100px" height="141px" alt="...">
                  </div>
                    <div class="info d-flex align-items-end">
                      <div class="content">
                        <h5 class="text-primary">Furniture Sale!</h5>
                        <p>128 N. State St. Chicago, IL  60606</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <!-- Item-->
              <div class="col-md-6"><router-link v-bind:to="'/events/' + events[0].id">
                <div class="item">
                  <div class="image"><img v-bind:src="events[0].images[0].url" width="100px" height="141px" alt="...">
                  </div>
                    <div class="info d-flex align-items-end">
                      <div class="content">
                        <h5 class="text-primary">It's Spring Cleaning Time!</h5>
                        <p>3701 Roth Terrace, Skokie, IL  60076</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <!-- Item                    -->
              <div class="col-md-6"><router-link v-bind:to="'/events/' + events[6].id">
                <div class="item">
                  <div class="image"><img v-bind:src="events[6].images[0].url" width="100px" height="141px" alt="...">
                  </div>
                    <div class="info d-flex align-items-end">
                      <div class="content">
                        <h5 class="text-primary">Estate Sale!</h5>
                        <p>4759 N. Beacon St. Chicago, IL  60640</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <!-- Item-->
              <div class="col-md-6"><router-link v-bind:to="'/events/' + events[3].id">
                <div class="item">
                  <div class="image"><img v-bind:src="events[3].images[0].url" width="100px" height="141px" alt="...">
                  </div>
                    <div class="info d-flex align-items-end">
                      <div class="content">
                        <h5 class="text-primary">All Day Alley Sale!</h5>
                        <p>120 Maple Ave, Wilmette, IL  60091</p>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row"> 
          <div class="col-md-3"><router-link v-bind:to="'/events/' + events[1].id">
            <div class="item">
              <div class="image"><img v-bind:src="events[1].images[0].url" width="100px" height="141px" alt="...">
              </div>
              <div class="info d-flex align-items-end">
                <div class="content">
                  <h5 class="text-primary">End of Winter Sale</h5>
                  <p>2542 W. Farwell Ave Chicago, IL 60645</p>
                  </div>
                </div>
              </div></router-link></div>
          <!-- Item-->
          <div class="col-md-3"><router-link v-bind:to="'/events/' + events[2].id">
              <div class="item">
                <div class="image"><img v-bind:src="events[2].images[0].url" width="100px" height="141px" alt="..."></div>
                <div class="info d-flex align-items-end">
                  <div class="content">
                    <h5 class="text-primary">Super Saturday Sale!</h5>
                    <p>4400 N. Western Ave Chicago, IL  60625</p>
                  </div>
                </div>
              </div></router-link></div>
          <!-- Item                    -->
          <div class="col-md-3"><router-link v-bind:to="'/events/' + events[4].id">
              <div class="item">
                <div class="image"><img v-bind:src="events[4].images[0].url" width="100px" height="141px" alt="..."></div>
                <div class="info d-flex align-items-end">
                  <div class="content">
                    <h5 class="text-primary">Block Sale - One Weekend Only</h5>
                    <p>1243 W. Hood Ave, Chicago, IL  60660</p>
                  </div>
                </div>
              </div></router-link></div>
          <!-- Item                    -->
          <div class="col-md-3"><router-link v-bind:to="'/events/' + events[5].id">
              <div class="item">
                <div class="image"><img v-bind:src="events[5].images[0].url" width="100px" height="141px" alt="..."></div>
                <div class="info d-flex align-items-end">
                  <div class="content">
                    <h5 class="text-primary">Randolph Holiday Street Market</h5>
                    <p>1341 W. Randolph St, Chicago, IL  60607</p>
                  </div>
                </div>
              </div></router-link></div>

        </div><a href="#" class="btn btn-primary has-shadow has-wide-padding">View More    </a>
      </div>
    </section>    
  </div>    
</template>




    <style>

  </style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      events: [],
    };
  },
  created: function() {
    axios.get('/api/events').then(response => {
      console.log(response.data);
      this.events = response.data;
    });
  },
  methods: {}
};
</script>
