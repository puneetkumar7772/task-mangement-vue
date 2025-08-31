<template>
  <div class="form-wrapper">
    <div class="card">
      <div class="login-container">
        <div class="input-field">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div class="input-field">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div class="input-field">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div class="input-field">
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter your confirm password" />
        </div>
        <div class="btn">
          <button class="btn-primary">Register</button>
        </div>
        <span class="dont-account">
          Already have an account? <span class="link">Login</span>
        </span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "RegisterPage",
};
</script>