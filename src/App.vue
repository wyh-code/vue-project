<template>
  <header>
    <div class="nav">
      <div class="nav-item">
        <RouterLink to="/">注册</RouterLink>
      </div>
      <div>
        <RouterLink to="/user">用户列表</RouterLink>
      </div>
    </div>
    <div class="info">
        <div class="info-item">总用户：{{ users.length }}</div>
        <div class="info-item">已登录用户：{{ loginUser.length }}</div>
        <div class="info-item">未登录用户：{{ logoutUser.length }}</div>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { RouterLink, RouterView } from 'vue-router';

  const store = useStore();
  const users = computed(() => store.state.users);
  const loginUser = computed(() => store.state.users.filter(user => user.login));
  const logoutUser = computed(() => store.state.users.filter(user => !user.login));
</script>

<style scoped>
  header {
    line-height: 1.5;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 16px 130px;
  }

  header, .nav, .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-item, .info-item {
    margin-right: 20px;
  }
</style>
