<template>
  
  <div id="app">
    
    <common-header></common-header>
    <div id="container">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
    
  </div>

</template>

<script>
/*
  引入子组件：
  1.import
  2.在components中进行声明
*/
import CommonHeader from "./components/CommonHeader";
import CommonFooter from "./components/CommonFooter";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>

<style lang="scss">
#container{
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
