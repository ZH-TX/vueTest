<template>
  <div class="home">
    <el-row :span='24'>
      <div class="head">
        <i class="el-icon-sunny"></i>
          VUEElEMENT
      </div>
      
    </el-row>
    <el-row>
      <el-col :span="3">
        <el-menu :default-active="$route.path" router background-color="#545c64" text-color="#fff"
          class="el-menu-vertical-demo"
          active-text-color="#4b75ff">
          <template v-for="(item,index) in $router.options.routes"  >
            <el-submenu :index="index+''" :key="item.name" v-if="!item.hidden">
              <template slot="title">
                <i class="el-icon-menu"></i>
                {{item.name}}
              </template>
              <el-menu-item
                v-for="child in item.children"
                :index="child.path"
                :key="child.path"
                router
              >{{child.name}}</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
              <i :class="item.iconCls"></i>
              {{item.children[0].name}}
            </el-menu-item> -->
          </template>
        </el-menu>
      </el-col>

      <el-col :span="18" class="content-wrapper">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in $route.matched" :to="item.path" :key="item.name">
            {{item.name}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-col>
      <!-- <el-col :span="20">
        <el-button @click="testRouter">
          test
        </el-button>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'


  export default {
    name: 'Home',
    components: {
      // HelloWorld
    },
    data() {
      return {

      }
    },
    methods: {
      testRouter() {
        console.log(this.$router, this.$route);
      }
    }
  }
</script>

<style  scoped>

.head{
  display: flex;
  align-items: center;
  padding: auto 30px;
  background: #4b75ff;
  display: flex;
  height: 50px;
  font: bold;
  color: #fff;
}

</style>