<template>
  <div class="form-wrapper">
    <div class="card">
      <div class="login-container">
        <div class="input-field">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" v-model="formData.email" />
        </div>
        <div class="input-field">
          <label>Password</label>
          <input type="password" placeholder="Enter your password"  v-model="formData.password" />
        </div>
        <span class="forgot-pass">Forgot Password</span>
        <div class="btn">
          <button class="btn-primary" @click="loginData">Login</button>
        </div>
        <span class="dont-account">
          Don't have an account?<router-link to="/register" class="link">Register</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      }
    };
  },
  methods: {
    loginData() {
      console.log(this.formData, "form data");
    }
  }
};
</script>

<style scoped>
</style>
