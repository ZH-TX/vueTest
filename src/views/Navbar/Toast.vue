<template>
  <div>
    <el-col :span="6">
      <el-alert
        class=""
        title="test"
        type="error"
        show-icon
        v-loading='false'
      >
        这是一个标题
      </el-alert>
      <el-alert
        class=""
        title="test"
        type="success"
        show-icon
        v-loading='false'
      >
        这是一个标题
      </el-alert>
    </el-col>
    <el-tooltip
      content="提示信息"
      placement="top"
    >
      <el-button @click="toast">
        测试 toast
      </el-button>
    </el-tooltip>

    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <span>卡片名称</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
        >操作按钮</el-button>
      </div>
      <div
        v-for="o in 4"
        :key="o"
        class="text item"
      >
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    toast() {
      this.$message("消息提示");
      this.$alert("test描述", "标题", {
        comfirmButtonText: "确定",
        type: "success"
      });
    }
  }
};
</script>

<style  scoped>
.alert {
  background: #000;
  color: aquamarine;
}
</style>