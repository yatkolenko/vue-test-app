<template>
  <div>
    <p v-for="i in getInitialProducts" :key="i">{{i}}</p>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters(["getInitialProducts"])
    }
  }
</script>

<style lang="less" scoped>

</style>