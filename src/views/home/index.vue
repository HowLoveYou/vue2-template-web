<template>
  <div id="home">
    <div @click="clickfun">clickfun</div>
    <BaseTest></BaseTest>
    <el-button type="primary">主要按钮</el-button>
    <i class="el-icon-delete"></i>
    <div class="font-bold">1111</div>
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
