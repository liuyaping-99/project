<template>
  <div class="info-container">
    <h6><span>{{info.title}}</span>
    <span>{{info.year}}</span></h6>
    <div class="info-head">
      <img :src="info.images.small" alt />
      <div>
        <p>导演：<span v-for="director in info.directors" :key="director.id">{{director.name}}</span></p>
        <p>
          主演：<span v-for="cast in info.casts" :key="cast.id">{{cast.name}} / </span>
        </p>
        <p>
          类型：<span v-for="(genre,index) in info.genres" :key="index">{{genre}} / </span>
        </p>
        <p>制片国家/地区：<span v-for="(countrie,index) in info.countries" :key="index">{{countrie}}</span></p>
        <p>语言：<span v-for="(language,index) in info.languages" :key="index">{{language}}</span></p>
        <p>片长：<span v-for="(duration,index) in info.durations" :key="index">{{duration}}</span></p>
      </div>
    </div>
    <div class="info-context">
      <p>{{info.title}}的剧情简介....</p>
      <span>{{info.summary}}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: []
    };
  },
  created() {
    axios
      .get(
        "https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/" +
          this.$route.query.id +
          "?apikey=0df993c66c0c636e29ecbb5344252a4a"
      )
      .then(res => {
        console.log(res.data);
        this.info = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="scss" scoped>
.info-container {
  padding: 0.2rem;
  h6 {
    font-size: 0.4rem;
    margin-bottom: 0.2rem;
  }
  .info-head {
    display: flex;
    align-items:center;
    img {
      width: 3rem;
      margin-right: 0.2rem;
    }
  }
  .info-context{
      margin-top: 0.4rem;
      p{
          font-size: 0.3rem;
          color: darksalmon;
          margin-bottom: 0.2rem;
      }
  }
}
</style>