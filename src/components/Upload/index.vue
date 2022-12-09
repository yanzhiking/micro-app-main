<template>
  <div class="content-block" :style="{ 'border-color': borderColor }">
    <slot></slot>
    这是主应用的Upload
  </div>
</template>
<script>
export default {
  name: 'Upload',
  props: {
    borderColor: {
      type: String,
      default: '#e9ebf1',
    },
  },
}
</script>
<style lang="less" scoped>
.content-block {
  margin-top: 10px;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid #e9ebf1;
  border-radius: 5px;
  padding-bottom: 10px;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
</style>
