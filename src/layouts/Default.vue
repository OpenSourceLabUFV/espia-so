<template>
  <div class="layout">
    <g-link to="/">
    <header class="header">
      <g-image alt="Ícone Espia Só" src="~/favicon.png" width="80"/>
      <strong>
        <h1 class="text-4xl font-bold">{{ $static.metadata.siteName }}</h1>
      </strong>
      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
    </header>
    </g-link>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 10px auto 0px auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

h1 {
  margin: auto 20px;
}

a {
  color: inherit;
  text-decoration: none; /* no underline */
}

.nav__link {
  margin-left: 20px;
}
</style>
