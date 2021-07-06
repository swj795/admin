<template>
  <header>
    <!-- 左侧 -->
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        @click="collapseMenu"
        size="mini"
      ></el-button>
      <h3 style="color: #fff">首页</h3>
    </div>

    <!-- 右侧 -->
    <div class="r-content">
      <el-dropdown szie="mini">
        <img src="../assets/logo.png" class="user" alt="" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    loginOut() {
      this.$store.commit("clearToken");
      this.$store.commit("clearMenu");
      location.reload();
      console.log("退出");
    },
    collapseMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .l-content {
    display: flex;
    align-items: center;
    .el-button {
      margin-right: 20px;
    }
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border: 1px solid;
      border-radius: 50%;
    }
  }
}
</style>