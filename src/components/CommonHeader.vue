<template>
  <div class="header-container" :style="{background:$store.state.color}">{{$store.state.title}}</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>