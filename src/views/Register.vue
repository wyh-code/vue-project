
<template>
  <main>
    <div class="form">
      <div class="form-item">
        <div class="item-label">用户名：</div>
        <CustomInput v-model="username" />
      </div>
      <div class="form-item">
        <div class="item-label">密码：</div>
        <CustomInput v-model="password" />
      </div>
      <div class="form-item">
        <div class="item-label"></div>
        <div class="submit" @click="onRegister">注册</div>
      </div>
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import CustomInput from '../components/Input.vue';

  const store = useStore();
  const username = ref('');
  const password = ref('');

  function onRegister() {
    store.commit('onRegister', { user: username.value, password: password.value });
    username.value = ''; 
    password.value = ''; 
  }

</script>

<style>
  .form {
    margin: 40px auto;
    width: 800px;
    padding: 20px;
  }
  .form-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .item-label {
    margin-right: 20px;
    width: 100px;
    text-align: right;
  }
  .submit {
    display: inline-block;
    width: 100%;
    padding: 5px 16px;
    background: var(--primary-color);
    box-shadow: var(--primary-shadow);
    border-radius: var(--primary-border-radius);
    cursor: pointer;
    text-align: center;
    color: #fff;
  }
</style>
