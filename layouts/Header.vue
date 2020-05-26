<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <nuxt-link class="navbar-brand" to="/">
      Laravel Vue
    </nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="#"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <!-- Left Side Of Navbar -->
      <ul class="navbar-nav mr-auto" />

      <!-- Right Side Of Navbar -->
      <ul class="navbar-nav ml-auto">
        <!-- Authentication Links -->
        <li class="nav-item">
          <nuxt-link to="login" class="nav-link">
            {{ $t('button.login') }}
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link to="register" class="nav-link">
            {{ $t('button.register') }}
          </nuxt-link>
        </li>

        <li class="nav-item dropdown">
          <a
            v-pre
            id="navbarDropdown"
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="caret" />
          </a>

          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <button class="dropdown-item">
              {{ $t('button.logout') }}
            </button>

            <form id="logout-form" action="" method="POST" style="display: none;" />
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import Axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = Axios

export default {}
</script>
