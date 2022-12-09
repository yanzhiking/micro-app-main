<template>
  <el-container style="height: 100%">
    <el-header height="45px" style="border-bottom: 1px solid #eee">Header</el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246); height: calc(100% - 45px)">
        <el-menu>
          <el-menu-item index="1" @click="toHome">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>基础应用</span>
            </template>
            <el-menu-item index="2-1" @click="toRouter('/app/app-erp/userManage')">用户管理</el-menu-item>
            <el-menu-item index="2-2" @click="toRouter('/app/app-erp/entManage')">企业管理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>融单应用</span>
            </template>
            <el-menu-item index="3-1" @click="toRouter('/app/app-ebill/myBill')">我的融单</el-menu-item>
            <el-menu-item index="3-2" @click="toRouter('/app/app-ebill/billOpen')">融单开立</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- <div id="mask-container"></div> -->
      <el-main id="mask-container">
        <router-view />
        <div id="sub-micro-container"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    toHome() {
      this.$router.push({ name: 'home' })
    },
    toRouter(path) {
      this.$router.push({ path })
    },
  },
}
</script>
