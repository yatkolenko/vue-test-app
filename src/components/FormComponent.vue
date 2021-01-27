<template>
  <el-card shadow="always">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Surname" prop="surname">
        <el-input v-model="ruleForm.surname"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="Email"
      >
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>

      <el-form-item label="Phone" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Create</el-button
        >
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the phone'));
      } else {
        const phoneno = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
        console.log('value:', value);
        if(value.match(phoneno)) {
          callback();
        } else {
          callback(new Error('Please input the phone in correct format'));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        name: "",
        surname: "",
        email: "",
        phone: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input name",
            trigger: "blur",
          }
        ],
        surname: [
          {
            required: true,
            message: "Please input surname",
            trigger: "blur",
          }
        ],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur'] }
        ],
        phone: [
          { required: true , message: 'Please input the phone'},
          { validator: validatePhone, trigger: 'blur' }
        ],

        pass: [
          { required: true , message: 'Please input the password'},
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
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
  },
};
</script>
