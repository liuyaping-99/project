<template>
  <div class="footer-container">
    <ul>
      <li v-for="(obj,index) in menu" :key="index" :style="{background:color}" >
        <!-- 给组件绑事件  @click.native="change(obj)" -->
        <router-link :to="obj.path" @click.native="change(obj)">{{obj.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      menu: [
        {
          path: "/movie",
          color: "#f2c8bf",
          title: "电影"
        },
        {
          path: "/music",
          color: "#398579",
          title: "音乐"
        },
        {
          path: "/book",
          color: "#fbca65",
          title: "图书"
        },
        {
          path: "/photo",
          color: "#4682b4",
          title: "图片"
        }
      ]
    };
  },
  computed: {
    ...mapState(["color", "title"])
  },
  methods: {
    ...mapMutations(["change"])
  },
  created() {
    this.menu.forEach((obj, index) => {
      if (this.$route.path == obj.path) {
        this.change(obj);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.footer-container {
  position: fixed;
  bottom: 0;
  list-style: none;
  width: 100%;
  ul {
    display: flex;
    li {
      flex: 1;
      font-size: 15px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      a {
        color: black;
        &.router-link-active {
          color: white;
        }
      }
    }
  }
}
</style>