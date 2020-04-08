<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="table">
      <!-- <i class="el-icon-edit">1</i>
    <i class="el-icon-share">2</i>
    <i class="el-icon-delete">3</i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button> -->

      <el-row :gutter="20">
        <el-col :span="3">
          <el-input v-model="userInfo.name" placeholder="请输入姓名"></el-input>
        </el-col>
        <el-col :span="4">
          <el-date-picker v-model="userInfo.birthday" placeholder="选择生日" format="yyyy年MM月dd日" value-format="yyyy-MM-dd">
          </el-date-picker>
          <!-- <i class='el-icon-arrow-down'></i> -->
        </el-col>
        <el-col :span="4">
          <el-input v-model="userInfo.address" placeholder="请输入地址"></el-input>
        </el-col>

        <el-col :span="3">
          <el-button type="primary" @click="addUser">增加</el-button>
        </el-col>
      </el-row>
      <!-- <el-row :gutter="20" style="margin-top: 10px;">
      
    </el-row> -->

      <!-- 搜索 -->
      <el-row>
        <el-col :span="3">
          <el-input v-model="searchVal" placeholder="请输入搜索值" prefix-icon="el-icon-search"></el-input>
        </el-col>

        <el-col :span="5">
          <el-button type="primary" @click="search(searchVal)">Search</el-button>
        </el-col>
      </el-row>

      <el-table :data="UserList" style='width:60%' @selection-change="selChange">
        <el-table-column type="selection" width="30"></el-table-column>
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="姓名" prop="name" width="200"></el-table-column>
        <el-table-column label="生日" prop="birthday" width="200"></el-table-column>
        <el-table-column label="地址" prop="address"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="editUser(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" @click="delUser(scope.$index)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>


      <el-button @click='handleDel'>选中删除</el-button>


      <!-- 编辑 -->
      <el-dialog title="编辑" :visible.sync="editDialogVisible" width="30%">
        <el-form ref="form" :model="newUser" label-width="auto">
          <el-form-item label="姓名">
            <el-col :span="10">
              <el-input v-model="newUser.name" autocomplete="off"></el-input>

            </el-col>
          </el-form-item>
          <el-form-item label="生日">
            <el-col :span="10">
              <el-date-picker v-model="newUser.birthday" placeholder="选择生日" format="yyyy年MM月dd日"
                value-format="yyyy-MM-dd"></el-date-picker>
            </el-col>

          </el-form-item>
          <el-form-item label="地址">
            <el-col :span="10">
              <el-input v-model="newUser.address" autocomplete="off"></el-input>
            </el-col>

          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button @click="saveUser" type="primary">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 删除 -->
      <el-dialog title="提示" :visible.sync="delDialogVisible" width="30%">
        <span slot="footer" class="dialog-footer">
          <el-button @click="delDialogVisible = false">取 消</el-button>
          <el-button @click="delDialogVisible = false" type="primary">确 定</el-button>
        </span>
      </el-dialog>
    </div>

  </div>
</template>

<script>
 
  export default {
    
    components: {},
    data() {
      
      return {
        userInfo: {
          name: "",
          birthday: "",
          address: ""
        },
        UserList: [{
          name: "小明",
          birthday: "12.12",
          address: "中国"
        }],
        delDialogVisible: false,
        editDialogVisible: false,
        newUser: {
          name: "",
          birthday: "",
          address: ""
        },
        userIndex: 0,
        searchVal: "",
        selVal:[]
      };
    },
    methods: {
      selChange(e){
        this.selVal=e
        console.log(e);
        
      },
      handleDel(){
        let self=this;
        // console.log(this,self);

        this.UserList=()=>{
          for(var i of self.selVal){
            // console.log(i);
            return this.UserList.filter(item=>{
              return JSON.stringify(item)!==JSON.stringify(i)
       
           })
            
         }
        } 
      },
      addUser() {
        // console.log(this.userInfo);
        if(!(this.userInfo.name&&this.userInfo.birthday&&this.userInfo.address)){
          this.$alert('请添加完整信息')
          return;
        }
        
        this.UserList.push(this.userInfo);
        sessionStorage.setItem("storageList", JSON.stringify(this.UserList));
        this.userInfo = {
          name: "",
          birthday: "",
          address: ""
        };
        // this.UserList=JSON.parse(sessionStorage.getItem('storageList'))
      },
      editUser(index, item) {
        this.userIndex = index;
        this.newUser = {
          name: item.name,
          birthday: item.birthday,
          address: item.address
        };
        this.editDialogVisible = true;
      },
      delUser(index) {
        this.$confirm("确认删除?")
          .then(() => {
            this.UserList.splice(index, 1);
          })
          .catch(() => {});
      },
      saveUser() {
        this.editDialogVisible = false;
        this.$set(this.UserList, this.userIndex, this.newUser); //或者使用变异数组
      },
      search(e) {
        let searchList = [];
        console.log(e);
        this.UserList = JSON.parse(sessionStorage.getItem("storageList"));
        if (e) {
          this.UserList.forEach(item => {
            if (
              item.name.indexOf(e) != -1 ||
              item.birthday.indexOf(e) != -1 ||
              item.address.indexOf(e) != -1
            ) {
              searchList.push(item);
            }
          });
          this.UserList = searchList;
        } else {
          //初始数据
          this.UserList = JSON.parse(sessionStorage.getItem("storageList"));
        }
      }
    }
  };
</script>
<style scope>
  .table {
    /* display: flex; 
  flex-flow: column nowrap;
  flex: 1;
  align-items: center; */
  }
</style>