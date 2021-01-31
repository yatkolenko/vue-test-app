<template>
  <nav>
    <ul class="nav-list">
      <li>
        <router-link class="el-link el-link--default" to="/">
          <span class="el-link--inner">Products</span>
        </router-link>
      </li>
      <li>
        <router-link class="el-link el-link--default" to="form">
          <span class="el-link--inner">Form</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav-list {
  padding: 15px 0 0;
  margin: 0;
  list-style: none;
  li {
    display: inline-block;
    padding-right: 3px;
  }
  .router-link-active {
    color: red;
  }
}
</style>
