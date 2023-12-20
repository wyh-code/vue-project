<template>
  <input
    :value="modelValue"
    @input="updateValue($event.target.value)"
    type="text"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// 定义接收的 prop，这里的名字需要是 modelValue
const props = defineProps({
  modelValue: String
});

// 定义触发事件的 emit 方法
const emit = defineEmits(['update:modelValue']);

// 更新值的方法，当输入发生变化时触发
const updateValue = (value) => {
  // 触发 update:modelValue 事件，并传递新的值
  emit('update:modelValue', value);
};
</script>

<style>
  input {
    /* 去除默认样式 */
    outline: none;

    /* 添加自定义样式 */
    height: 32px;
    border-radius: var(--primary-border-radius);
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, .88);
    display: inline-block;
    width: 100%;
    padding: 0 8px;
  }
  input:focus {
    border-color: var(--primary-color);
    box-shadow: var(--primary-shadow);
  }
</style>