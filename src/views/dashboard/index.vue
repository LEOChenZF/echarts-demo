<template>
  <div>
    <SysMenu />
    <div class="router-page">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme3: "light",
    };
  },
};
</script>

<style lang='less' scoped>
.menu-nav {
  .sys-name {
    .logo {
      width: 35px;
      vertical-align: middle;
    }
    font-size: 26px;
    text-align: center;
    width: 240px;
    height: 49px;
    line-height: 49px;
    background-color: #eee;
  }
  .ivu-menu {
    height: 100vh;
  }
  .main-page {
    margin: 20px 20px 0 80px;
  }
}
</style>