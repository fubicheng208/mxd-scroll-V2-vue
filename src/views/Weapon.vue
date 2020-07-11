<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="增加的攻击/魔攻" prop="weapon.buf_attack">
            <el-input v-model.number="ruleForm.weapon.buf_attack" placeholder="卷轴和火花加的魔攻，即蓝色数字（黄色数字为火花）"></el-input>
        </el-form-item>
        <el-form-item label="武器基础攻击/魔攻" prop="weapon.base_attack">
            <el-input v-model.number="ruleForm.weapon.base_attack"></el-input>
        </el-form-item>
        <el-form-item label="主属性增加" prop="weapon.main_attribute">
            <el-input v-model.number="ruleForm.weapon.main_attribute" placeholder="如战士就是力量"></el-input>
        </el-form-item>
        <el-form-item label="无关属性增加" prop="weapon.vice_attribute">
            <el-input v-model.number="ruleForm.weapon.vice_attribute" placeholder="如战士就是运气或智力"></el-input>
        </el-form-item>

        <el-form-item label="星星数" prop="weapon.starNum">
            <el-input v-model.number="ruleForm.weapon.starNum"></el-input>
        </el-form-item>

        <el-form-item label="卷轴数" prop="weapon.scrollNum">
            <el-input v-model.number="ruleForm.weapon.scrollNum"></el-input>
        </el-form-item>

        <el-form-item label="武器等级" prop="weapon.grade">
            <el-input v-model.number="ruleForm.weapon.grade" placeholder="扣减等级不算"></el-input>
        </el-form-item>

        <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" placeholder="全选所有卷轴时必填"></el-input>
        </el-form-item>

        <el-form-item label="可能使用的卷轴" prop="weapon.possibleScrolls">
            <el-checkbox-group v-model="ruleForm.weapon.possibleScrolls">
                <el-checkbox label="惊人卷" name="possibleScrolls"></el-checkbox>
                <el-checkbox label="RED卷" name="possibleScrolls"></el-checkbox>
                <el-checkbox label="V卷" name="possibleScrolls"></el-checkbox>
                <el-checkbox label="X卷" name="possibleScrolls"></el-checkbox>
                <el-checkbox label="星火卷" name="possibleScrolls"></el-checkbox>
                <el-checkbox label="痕迹" name="possibleScrolls"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">计算可能卷轴组合</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            var checkAttack = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 0 || value > 1000)
                            callback(new Error('数字必须在0到1000以内'));
                        else
                            callback();
                    }
                }, 500);
            };

            var checkAttribute = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 0 || value > 300)
                            callback(new Error('数字必须在0到300以内'));
                        else
                            callback();
                    }
                }, 1000);
            };

            var checkStar = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 0 || value > 22)
                            callback(new Error('数字必须在0到22以内'));
                        else
                            callback();
                    }
                }, 1000);
            };

            var checkScrollNum = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 0 || value > 20)
                            callback(new Error('数字必须在0到20以内'));
                        else
                            callback();
                    }
                }, 1000);
            };

            var checkGrade = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value !== 140 && value !== 150 && value !== 160 && value !== 200 )
                            callback(new Error('仅支持140、150、160、200级武器计算'));
                        else
                            callback();
                    }
                }, 500);
            };
            return {
                ruleForm: {
                    weapon: {
                        buf_attack: '',
                        base_attack: '',
                        main_attribute: '',
                        vice_attribute: '',
                        starNum: '',
                        scrollNum: '',
                        grade: '',
                        possibleScrolls: []
                    },
                    email: ''
                },
                rules: {
                    'weapon.base_attack': [
                        { validator: checkAttack, trigger: 'change'}
                    ],
                    'weapon.buf_attack': [
                        { validator: checkAttack, trigger: 'change'}
                    ],
                    'weapon.main_attribute': [
                        { validator: checkAttribute, trigger: 'change'}
                    ],
                    'weapon.vice_attribute': [
                        { validator: checkAttribute, trigger: 'change'}
                    ],
                    'weapon.starNum': [
                        { validator: checkStar, trigger: 'change'}
                    ],
                    'weapon.scrollNum': [
                        { validator: checkScrollNum, trigger: 'change'}
                    ],
                    'weapon.grade': [
                        { validator: checkGrade, trigger: 'change'}
                    ],
                    email: [
                        {type: 'email', required: false, message: '请填写正确的邮箱地址', trigger: 'change'}
                    ],
                    'weapon.possibleScrolls': [
                        {type: 'array', required: false, message: '请至少选择一种卷轴', trigger: 'change'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this;
                console.log(this.ruleForm);
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //替换为自己web服务的地址
                        axios.post("xxx/mxd/calculate", this.ruleForm).then(function (resp) {
                            _this.$alert(resp.data, "消息", {
                                confirmButtonText: '确定',
                                callback: action => {
                                    _this.$router.push('/weapon')
                                }
                            });
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>