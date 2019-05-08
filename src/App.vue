<template>
  <div id="app">
    <header class="header">
      <div class="top-bar">
        <div class="container">
          <div class="content-holder d-flex justify-content-between">
            <div class="info d-flex">
              <div class="dropdowns d-flex">
                <div class="dropdown"><a id="currency" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">USD<i class="fa fa-angle-down"></i></a>
                  <div aria-labelledby="currency" class="dropdown-menu"><a href="#" class="dropdown-item">USD</a><a href="#" class="dropdown-item">EUR</a><a href="#" class="dropdown-item">JPY</a></div>
                </div>
                <div class="dropdown"><a id="language" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN<i class="fa fa-angle-down"></i></a>
                  <div aria-labelledby="language" class="dropdown-menu"><a href="#" class="dropdown-item">EN</a><a href="#" class="dropdown-item">ES</a><a href="#" class="dropdown-item">FR</a></div>
                </div>
              </div>
              <div class="contact d-flex">
                <p><a href="mailto:info@company.com"> <i class="fa fa-envelope-o text-primary"></i><span class="d-none d-md-inline">info@company.com</span></a></p>
                <p> <i class="fa fa-phone text-primary"></i><span class="d-none d-md-inline">(213) 867-5309</span></p>
              </div>
            </div>
            <div class="CTAs"><a href="/Login" class="login"><i class="fa fa-sign-in"></i><span class="d-none d-md-inline">Login</span></a><a href="/Signup" class="login"> <i class="fa fa-user"></i><span class="d-none d-md-inline">Register</span></a></div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <!-- Navbar Brand --><a href="/home" class="navbar-brand"><img src="/img/GDR-logo-3.jpg" class="d-block w-100" alt="..."></a>
          <!-- Toggle Button-->
          <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span>Menu</span><i class="fa fa-bars"></i></button>
          <!-- Navbar Menu -->
          <div id="navbarcollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <!-- Search-->
              <li class="nav-item"><a href="/home" class="nav-link active">Home</a>
              </li>
              <!-- <li class="nav-item"><a href="category.html" class="nav-link">Events</a>
              </li> -->
              <!-- <li class="nav-item dropdown"><a id="navbarDropdownMenuLink" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle">Pages</a>
                <div aria-labelledby="navbarDropdownMenuLink" class="dropdown-menu"><a href="detail.html" class="dropdown-item">Listing detail</a><a href="post.html" class="dropdown-item">Blog post</a><a href="text.html" class="dropdown-item">Text page</a><a href="404.html" class="dropdown-item">404 - Not found</a><a href="contact.html" class="dropdown-item">Contact</a></div>
              </li> -->
              <li class="nav-item"><a href="/user" class="nav-link">Profile</a>
              </li>
              <li class="nav-item"><a href="/logout" class="nav-link">Logout</a>
              </li>
            </ul><a href="/events/new" class="btn navbar-btn btn-outline-primary mt-3 mt-lg-0 ml-lg-3">Create an Event</a>
          </div>
        </div>
      </nav>
      
      <!-- <router-link to="/login"></router-link>
      <router-link to="/home">Home</router-link> |
      <router-link to="/events/new">New Event</router-link> |
      <router-link to="/user">Profile</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/logout">Logout</router-link> -->
    </header>

    <router-view/>
    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="about col-md-4">
            <div class="logo"><img src="/img/GDR-logo-3_nvrt.jpg" alt="..."></div>
            <p>Thank you for visiting Garage Days Revisited. We hope you found this app user-friendly and helpful. If so, please give Brett money. Like, all the money. Seriously. </p>
          </div>
          <div class="site-links col-md-4">
            <h3>Useful links</h3>
            <div class="menus d-flex">
              <ul class="list-unstyled">
                <li> <a href="/home">Homepage</a></li>
                <li> <a href="/events/new">Add an Event</a></li>
                <li> <a href="https://weather.com/weather/today/l/e0abde3003a88dedecad92fedc96375000c16843287a51dbf2cd92f062217180">Local Weather</a></li>
                <li> <a href="https://www.kovels.com/">Antiques Guide</a></li>
                <li> <a href="https://tewellboxstudio.pixieset.com/">Item/Event Imaging</a></li>
                <li> <a href="https://www.death-clock.org/">Death Clock </a><!-- <span class="badge badge-secondary text-uppercase ml-1">Soon</span> --></li>
              </ul>
              <ul class="list-unstyled">
                <li> <a href="https://www.collegehunkshaulingjunk.com/chicago/">Junk Removal</a></li>
                <li> <a href="https://willdeliverit.com/">Delivery Services-Small</a></li>
                <li> <a href="https://www.thepromove.com/">Delivery Services-Large</a></li>
                <li> <a href="#">Marketplace </a><span class="badge badge-secondary text-uppercase ml-1">Soon</span></li>
              </ul>
            </div>
          </div>
          <div class="contact col-md-4">
            <h3>Contact  us</h3>
            <div class="info">
              <p>233 S. Wacker Dr. Chicago, IL 60606</p>
              <p>Phone: (312) 867-5309</p>
              <p>Email: <a href="mailto:info@company.com">Info@Company.com</a></p>
              <ul class="social-menu lisy-inline">
                <li class="list-inline-item"><a href="#" target="_blank" title="Facebook"><i class="fa fa-facebook">                        </i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="Twitter"><i class="fa fa-twitter">                        </i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="Pinterest"><i class="fa fa-pinterest">                        </i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="Instagram"><i class="fa fa-instagram">                        </i></a></li>
                <li class="list-inline-item"><a href="#" target="_blank" title="Vimeo"><i class="fa fa-vimeo">                        </i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copyrights text-center">
        <p>&copy; 2017 - 2019<span class="text-primary">Garage Days Revisited.</span> All Rights Reserved.</p>
      </div>
    </footer>  
  </div>
</template>

<style>

</style>
