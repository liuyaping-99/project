import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from './../views/Movie'
import MovieDetail from './../views/MovieDetail'
import Music from './../views/Music'
import MusicList from './../views/MusicList'
import Book from './../views/Book'
import Photo from './../views/Photo'
// import PhotoDetail from './../views/PhotoDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movie',
    component: Movie
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },
  {
    path: '/movie-detail',
    name: 'movie-detail',
    component: MovieDetail
  },
  {
    path: '/music',
    name: 'music',
    component: Music
  },
  {
    path: '/music-list',
    name: 'music-list',
    component: MusicList
  },
  {
    path: '/book',
    name: 'book',
    component: Book
  },
  {
    path: '/photo',
    name: 'photo',
    component: Photo
  },
  // {
  //   path: '/photodetail',
  //   name: 'photodetail',
  //   component: PhotoDetail
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
