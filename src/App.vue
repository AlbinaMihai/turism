
<template>
  <div id="app">
    <Header></Header>
    <Main  v-bind:submenu="submenu" v-on:changeSubmenu="updateSubmenu($event)"></Main>
    <component :is="submenu"></component>
  </div>
</template>

<script>
import Header from '@/components/pages/home/Header';
import Main from "@/components/pages/home/Main";
import Route from '@/components/pages/route/Route';
import News from '@/components/pages/news/News';
import Stories from '@/components/pages/story/Stories';
import Feedback from '@/components/Feedback';
import Home from '@/components/pages/home/Home';
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Route,
    News,
    Stories,
    Feedback,
    Home
  },
  data(){
    return{
      submenu:'Home'
    }
  },
  methods:
      {
        updateSubmenu(newUpdate)
        {
           this.submenu=newUpdate;
        }

      }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
