<template>
  <div>  
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/diagnosis">Diagnosis</router-link>
      </div>
    </nav>
    <router-view />
    <footer class="footer">
      <div class="content has-text-centered">
        <p><strong>Heart Prediction App</strong></p>
      </div>
    </footer>
  </div>
</template>
