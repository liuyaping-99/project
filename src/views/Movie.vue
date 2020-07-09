<template>
  <div class="info">
    <ul>
      <li class="info-li" v-for="obj in movieList" :key="obj.id" @click="goDetail(obj.id)">
        <img :src="obj.images.small" alt />
        <div>
          <h1>{{obj.title}}</h1>
          <p v-for="director in obj.directors" :key="director.id">{{director.name}}</p>
          <p>
            主演：
            <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}} /</span>
          </p>
          <p>{{obj.collect_count}}人收藏</p>
          <p>年份：{{obj.year}}</p>
          <p>
            类型：<span v-for="(genre,index) in obj.genres" :key="index">{{genre}} /</span>
          </p>
        </div>
      </li>
    </ul>
    <img class="load" v-show="isShow" src="./../assets/loading.gif" alt style />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movieList: [],
      isShow: true
    };
  },
  created() {
    this.getMovie();
    window.onscroll = () => {
      //滚动条滚动的高度
      let scrollTop = Math.ceil(
        document.documentElement.scrollTop || document.body.scrollTop
      );

      //可视区的高度
      let clientHeight = document.documentElement.clientHeight;
      //页面高度
      let scrollHeight = document.documentElement.scrollHeight;

      if (scrollHeight == scrollTop + clientHeight) {
        //到底了
        //获取下10条的数据
        this.getMovie();
        this.isShow = true;
      }
    };
  },
  methods: {
    getMovie() {
      axios
        .get(
          "https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=" +
            this.movieList.length +
            "&count=10"
        )
        .then(res => {
          // console.log(res.data); //axios里，res.data才是后台返回来的数据
          this.movieList = [...this.movieList, ...res.data.subjects];
          // console.log(this.movieList.length)
          this.isShow = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    goDetail(id){
      //路由跳转详情页
      this.$router.push({
        path:'movie-detail',
        query:{
          id
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.info {
  padding: 0.2rem;
  li {
    display: flex;
    img {
      width: 1.6rem;
      margin-right: 0.2rem;
    }
  }
  .info-li {
    margin-bottom: 0.2rem;
  }
  .load {
    width: 1.2rem;
    height: 2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>