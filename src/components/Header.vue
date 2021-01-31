<template>
  <header class="header">
    <div class="container">
      <h1>Vue App Header</h1>
      <Nav />
    </div>
  </header>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="less" scoped>
.header {
  background: #fff;
  padding: 10px 0;
  margin: 0 0 25px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
h1 {
  margin: 0;
}
</style>
