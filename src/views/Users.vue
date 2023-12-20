<template>
  <div class="users-list">
    <table cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th>用户名</th>
          <th>密码</th>
          <th>注册时间</th>
          <th>登录状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users">
          <td>{{ user.user }}</td>
          <td>{{ user.password }}</td>
          <td>{{ new Date(user.time).toLocaleString() }}</td>
          <td>{{ user.login ? '已登录' : '未登录' }}</td>
          <td>
            <div class="handler">
              <div class="switch" @click="onSwitch(index)">{{ user.login ? '下线' : '登录' }}</div>
              <div class="remove" @click="onRemove(index)">删除</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="table-empty" v-if="!users.length">暂无数据</div>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  const users = computed(() => store.state.users);

  function onSwitch (index){
    store.commit('onSwitch', { index })
  }
  function onRemove (index){
    store.commit('onRemove', { index })
  }

</script>

<style>
  .users-list {
    width: 1200px;
    margin: 60px auto;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  table {
    width: 100%;
  }

  thead th {
    background: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  th, td {
    padding: 16px;
    text-align: center;
  }

  tbody tr:hover {
    background-color: #f0f0f0;
  }

  tbody tr:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }

  .table-empty {
    color: #999;
    padding: 16px;
    text-align: center;
  }

  .handler {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .switch, .remove {
    cursor: pointer;
  }
  .switch {
    color: var(--primary-color);
  }

  .remove {
    color: var(--primary-error-color);
    margin-left: 20px;
  }
</style>
