<template>
  <div class="menu-nav">
    <div class="sys-name">
      <div class="logo">
        <img class="logo-img" src="@/assets/logo.png" alt="" />
        <span class="title"> Echarts </span>
      </div>
      <div class="top-nav"></div>
    </div>
    <Menu :theme="theme" :active-name="pathname">
      <MenuItem name="/dashboard" to="/">
        <Icon type="md-document" />
        Dashboard
      </MenuItem>
      <MenuGroup title="柱状图">
        <MenuItem name="/bar" to="/bar">
          <Icon type="md-document" />
          bar
        </MenuItem>
      </MenuGroup>
    </Menu>

    <div class="main-page">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "SysMenu",
  data() {
    return {
      theme: "light",
      pathname: "/dashboard",
    };
  },
  created() {
    // 刷新高亮当前导航
    this.pathname = window.location.pathname;
  },
};
</script>

<style lang='less' scoped>
.menu-nav {
  position: fixed;
  top: 0;
  left: 0;
  .sys-name {
    width: 100vw;
    display: flex;
    .logo {
      width: 283px;
      height: 49px;
      font-size: 26px;
      line-height: 49px;
      text-align: center;
      background-color: #eee;
      .logo-img {
        width: 35px;
        vertical-align: middle;
      }
    }
    .top-nav {
      width: 100%;
      background-color: #ddd;
    }
  }
  .ivu-menu {
    height: 100vh;
  }
  .main-page {
    margin: 20px 20px 0 80px;
  }
}
</style>