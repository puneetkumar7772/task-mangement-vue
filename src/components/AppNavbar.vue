<template>
  <div class="navbar">
    <div class="navbar-container">
      <h1 class="logo">Task Management</h1>
      <div class="navbar-links">
        <!-- Loop through navItems -->
        <router-link 
          v-for="(item, index) in navItems" 
          :key="index" 
          :to="item.path" 
          class="btn"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      navItems: [
        { name: "All task List", path: "/tasks" },
        { name: "Task List", path: "/tasks" },
        { name: "Completed Task", path: "/tasks/completed" },
        { name: "Pending Task", path: "/tasks/pending" }
      ]
    };
  }
};
</script>

<style scoped>
.navbar {
  background-color: #1a2a3a;
  color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 26px;
  font-weight: bold;
  color: white;
}

.navbar-links {
  display: flex;
  gap: 15px;
}

.btn {
  /* background-color: #007BFF; */
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.router-link-active {
  background-color: #0056b3;
}

@media (max-width: 440px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-links {
    margin-top: 10px;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .btn {
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
