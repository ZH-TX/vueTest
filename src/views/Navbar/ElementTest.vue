<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item
            index="3"
            disabled
          >消息中心</el-menu-item>
          <el-menu-item index="4"><a
              href="#"
              target="_blank"
            >订单管理</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside>
          <el-col :span="20">
            <!-- <h5>自定义颜色</h5> -->
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item
                index="3"
                disabled
              >
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside
              width="200px"
              style="background-color: rgb(238, 241, 246)"
            >
              <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>导航一</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>
            </el-aside>

            <el-container>
              <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                  <i
                    class="el-icon-setting"
                    style="margin-right: 15px"
                  ></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
              </el-header>

              <el-main>
                <el-table :data="tableData">
                  <el-table-column
                    prop="date"
                    label="日期"
                    width="140"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="姓名"
                    width="120"
                  >
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="地址"
                  >
                  </el-table-column>
                </el-table>
              </el-main>
            </el-container>
          </el-container>

          <el-container style="padding:30px">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item
                label="活动名称"
                prop="name"
              >
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item
                label="活动区域"
                prop="region"
              >
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option
                    label="区域一"
                    value="shanghai"
                  ></el-option>
                  <el-option
                    label="区域二"
                    value="beijing"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="活动时间"
                required
              >
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="ruleForm.date1"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col
                  class="line"
                  :span="2"
                >-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="ruleForm.date2"
                      style="width: 100%;"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item
                label="即时配送"
                prop="delivery"
              >
                <el-switch v-model="ruleForm.delivery"></el-switch>
              </el-form-item>
              <el-form-item
                label="活动性质"
                prop="type"
              >
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox
                    label="美食/餐厅线上活动"
                    name="type"
                  ></el-checkbox>
                  <el-checkbox
                    label="地推活动"
                    name="type"
                  ></el-checkbox>
                  <el-checkbox
                    label="线下主题活动"
                    name="type"
                  ></el-checkbox>
                  <el-checkbox
                    label="单纯品牌曝光"
                    name="type"
                  ></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item
                label="特殊资源"
                prop="resource"
              >
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item
                label="活动形式"
                prop="desc"
              >
                <el-input
                  type="textarea"
                  v-model="ruleForm.desc"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                >立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-container>
          <el-collapse
          v-model="activeNames"
          @change="handleChange"
          style="width:30%;"
        >
          <el-collapse-item
            title="一致性 Consistency"
            name="1"
          >
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item
            title="反馈 Feedback"
            name="2"
          >
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
          <el-collapse-item
            title="效率 Efficiency"
            name="3"
          >
            <div>简化流程：设计简洁直观的操作流程；</div>
            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
          </el-collapse-item>
          <el-collapse-item
            title="可控 Controllability"
            name="4"
          >
            <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
            <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
          </el-collapse-item>
        </el-collapse>
        </el-main>

        
      </el-container>
      <el-footer>footer
        
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import "normalize.css";

export default {
  components: {},
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      activeIndex: "1",
      activeIndex2: "1",
      tableData: Array(20).fill(item),
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style  scoped>
.col {
  color: rgb(27, 71, 57);
  background: rgb(163, 120, 120);
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>