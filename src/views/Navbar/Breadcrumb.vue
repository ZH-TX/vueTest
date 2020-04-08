<template>
    <div>
        <h4>这是表单元素</h4>
        <el-col :span="12">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="活动名称" prop="name">
                    <el-input v-model="ruleForm.name" size="mini"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="ruleForm.address">
                        <el-option label="选择一" value="1"></el-option>
                        <el-option label="选择二" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间" required>
                    <el-col :span="5">
                        <el-form-item>
                            <el-date-picker v-model="ruleForm.date1" type="date" placeholder="请选择时间">

                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5" class="line">--</el-col>
                    <el-col :span="5">
                        <el-form-item>
                            <el-date-picker v-model="ruleForm.date2" type="date" placeholder="请选择时间">

                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>

                <el-form-item label="是否配送">
                    <el-switch v-model="ruleForm.dlivery"></el-switch>
                </el-form-item>

                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="美食" name="type"></el-checkbox>
                        <el-checkbox label="美食1" name="type"></el-checkbox>
                        <el-checkbox label="美食2" name="type"></el-checkbox>
                        <el-checkbox label="美食3" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="ruleForm.radio">
                        <el-radio label="资源"></el-radio>
                        <el-radio label="资源1"></el-radio>

                    </el-radio-group>
                </el-form-item>

                <el-form-item label="反馈意见">
                    <el-input v-model="ruleForm.text" type="textarea"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="create('ruleForm')">立即创建</el-button>
                    <el-button @click="cancel('ruleForm')">取消</el-button>
                </el-form-item>
            </el-form>
        </el-col>

    </div>
</template>

<script>
    export default {
        created() {},
        mounted() {},
        watch() {},

        data() {
            return {
                items: [],
                ruleForm: {
                    name: "",
                    address: "",
                    date1: "",
                    date2: "",
                    dlivery: "",
                    type: []
                },
                rules: {
                    name: [{
                            required: true,
                            message: "请输入活动名称",
                            trigger: "blur"
                        },
                        {
                            min: 3,
                            max: 6,
                            message: "字符限制在3~6",
                            trigger: "blur"
                        }
                    ]
                }
            };
        }
    };
</script>

<style scoped>
</style>