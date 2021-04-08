<template>
  <div class="menu-nav">
    <div class="sys-name">
      <Menu :theme="theme" :active-name="pathname">
        <div class="top-nav">
          <div class="logo">
            <img class="logo-img" src="@/assets/logo.png" alt="" />
            <span class="title"> Echarts </span>
          </div>
        </div>
        <MenuItem name="/dashboard" :to="{ name: 'dashboard' }">
          <Icon type="md-document" />
          Dashboard
        </MenuItem>
        <MenuGroup title="柱状图">
          <MenuItem name="/bar" :to="{ name: 'bar' }">
            <Icon type="md-document" />
            bar
          </MenuItem>
        </MenuGroup>
      </Menu>
      <slot></slot>
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
  .logo {
    width: 240px;
    height: 49px;
    font-size: 26px;
    line-height: 49px;
    text-align: center;
    background-color: #fff;
    .logo-img {
      width: 35px;
      vertical-align: middle;
    }
  }
  width: 100%;
  .sys-name {
    width: 100vw;
    display: flex;
  }
  .ivu-menu {
    width: 240px;
    height: 100vh;
  }
  .main-page {
    margin: 20px 20px 0 80px;
  }
}
</style>