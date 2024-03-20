<template>
  <div id="home">
    <div @click="clickfun">clickfun</div>
    <BaseTest></BaseTest>
  </div>
</template>

<script>
export default {
  name: "HomeVue",
  components: {},
  data() {
    return {};
  },
  methods: {
    clickfun() {
      this.$router.push({
        path: "/hello",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wudi {
  height: 100px;
  border: 1px solid red;
}
</style>
