<template>
  <!-- 表单的盒子 -->
  <el-form
    label-width="100px"
    :model="form"
    :rules="rules"
    status-icon
    ref="form"
    class="login-container"
  >
    <!-- 表单标题 -->
    <h3 class="title">系统登录</h3>

    <!-- 用户名 -->
    <el-form-item
      label="用户名"
      label-width="80px"
      prop="userName"
      class="user-name"
    >
      <el-input
        v-model="form.userName"
        type="input"
        placeholder="请输入用户名"
      ></el-input>
    </el-form-item>
    <!-- 密码 -->
    <el-form-item
      label="密码"
      label-width="80px"
      prop="password"
      class="password"
    >
      <el-input
        type="password"
        v-model="form.password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item class="login-submit-box">
      <el-button type="primary" @click="login" class="login-btn"
        >登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      //
      form: {
        userName: "admin",
        password: "admin",
      },
      rules: {
        userName: [
          // required 是否必填
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, message: "用户名长度大于三位", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      // post发送请求 axios中拦截到 将表单的数据提交给后端
      this.$request.post("/user/permission", this.form).then((res) => {
        console.log("拦截到的信息", res);
        const { token, menu, message } = res.data.data;
        if (message) {
          // 用户密码错误或者用户不存在
          // 用的是elementui 错误警告弹框
          this.$message.warning(message);
        } else {
          // 有效用户
          // 请求到服务器的数据
          console.log(token, menu);
          // 防止重复添加,先清除菜单
          this.$store.commit("clearMenu");
          // 存入菜单  menu作为参数传入到setMenu()
          this.$store.commit("setMenu", menu);
          // 写入token token 是传入到setToken的参数
          this.$store.commit("setToken", token);
          // 动态添加路由 添加菜单
          // this.$router 是vueRouter的一个对象 表示全局路由对象
          this.$store.commit("addMenu",this.$router);
          // 登录成功 路由跳转
          // 导航到不同的url 用$router.push()方法
          this.$router.push({name:"home"})
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 350px;
  border: 1px solid #ccc;
  margin: 180px auto;
  .title {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
  .login-submit-box {
    text-align: center;
    .login-btn {
      margin-left: -100px;
    }
  }
}
</style>