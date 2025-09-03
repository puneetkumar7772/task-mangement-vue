<template>
  <div class="form-wrapper">
    <div class="card">
      <div class="login-container">
        <div class="input-field">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" v-model="registerdata.name" />
        </div>
        <div class="input-field">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" v-model="registerdata.email" />
        </div>
        <div class="input-field">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" v-model="registerdata.password" />
        </div>
        <div class="input-field">
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter your confirm password" v-model="registerdata.confirmPassword" />
        </div>
        <div class="btn">
          <button class="btn-primary" @click="registerData">Register</button>
        </div>
        <span class="dont-account">
          Already have an account? <router-link to="/" class="link">Login</router-link>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RegisterPage",
  data(){
    return {
    registerdata:{
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    }
   }
  },
  methods:{
    registerData(){
        console.log(this.registerdata,"register data==========")
    }
  }
};
</script>