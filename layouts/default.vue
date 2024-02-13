<template>
  <div class="container n-container-primary p-0">
    <nav class="navbar py-0">
      <div class="container-fluid py-3" style="background:#D4B053">
        <img src="~/assets/img/logo.png" alt="" srcset="" />
        <div>
          <h4>
            Informasi Sawah <br />
            Bapak Ratman
          </h4>
        </div>
      </div>
    </nav>
    <div>
      <slot />
    </div>
    <div class="footer-page d-flex n-bg-tersier">
      <div class="container footer-page-container d-flex ">
        <router-link to="/" class="btn fs-2 circle-button p-2">
          <i class="fas fa-home"></i>
        </router-link>
      </div>
      <div class="container footer-page-container d-flex">
        <router-link to="/page2" class="btn fs-2 circle-button p-2">
          <i class="fas fa-seedling"></i>
        </router-link>
      </div>
      <div class="container footer-page-container d-flex">
        <router-link to="/page3" class="btn fs-2 circle-button p-2">
          <i class="fas fa-tint"></i>
        </router-link>
      </div>
      <div class="container footer-page-container d-flex">
        <router-link to="/page4" class="btn fs-2 circle-button p-2">
          <i class="fas fa-water"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>