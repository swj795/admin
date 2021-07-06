<template>
  <el-container style="height:100%">
    <el-aside width="auto">
        <common-aside />
    </el-aside>
    <el-container>
      <el-header style="">
          <common-header/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonHeader from "../components/CommonHeader"
import CommonAside from "../components/CommonAside" 

export default {
    components: {
        CommonHeader,
        CommonAside,
    }
};
</script>


<style lang="scss" scoped>
.el-header {
    background-color: #333;
    
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  
</style>