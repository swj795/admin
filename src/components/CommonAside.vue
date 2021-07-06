<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="iscollapse"
    :class="iscollapse ? 'close' : 'open'"
  >
    <!-- :class="iscollapse ? 'open': 'close'" -->
    <!-- 动态添加类  若iscollapse是true则添加close类-->
    <h3 v-show="!iscollapse">后台管理系统</h3>
    <h3 v-show="iscollapse">后台</h3>
    <el-menu-item
      :index="item.path"
      v-for="item in menu"
      :key="item.path"
      @click="handleNav(item.name)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 优化 -->
    <!-- <el-menu-item index="2" >
      <i class="el-icon-document"></i>
      <span slot="title">用户</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // menu: [
        // {
        //   path: "/",
        //   name: "Home",
        //   label: "首页",
        //   icon: "s-home",
        //   url: "Home/Home",
        // },
        // {
        //   path: "/user",
        //   name: "User",
        //   label: "用户页",
        //   icon: "user",
        //   url: "User/User",
        // },
      // ],
    };
  },
  methods: {
    handleNav(name) {
      this.$router.push({name: name})
    }
  },
  computed: {
    iscollapse() {
      return this.$store.state.tab.iscollapse;
    },
    // 监听菜单
    menu() {
      return this.$store.state.tab.menu;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    line-height: 48px;
    text-align: center;
  }
  &.el-menu-vertical-demo:not(.close) {
    width: 200px;
    min-height: 400px;
  }
}
</style>