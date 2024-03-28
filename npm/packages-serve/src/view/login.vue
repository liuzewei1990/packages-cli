<template>
  <section class="" style="position: relative; width: 100vw; height: 100vh">
    <work-login @loginSuccess="onLoginSuccess"></work-login>
  </section>
</template>

<script>
  import appId from "../appId.js";
  export default {
    components: {},
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {
      onLoginSuccess(userInfo) {
        h5plus.store.userInfo.login(appId, userInfo);
        this.$router.replace("/");
      }
    }
  };
</script>

<style lang="less" scoped></style>
