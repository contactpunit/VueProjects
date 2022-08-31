<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item" is-size-4 is-family-monospace>Noteballs</div>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item" to="/" active-class="is-active"> Notes </router-link>
        <router-link class="navbar-item" to="/stats" active-class="is-active"> Stats </router-link>
      </div>
    </div>
  </nav>
</template>