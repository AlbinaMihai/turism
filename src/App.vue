
<template>
  <div id="app">
    <Header></Header>
    <Main  v-bind:submenu="submenu" v-on:changeSubmenu="updateSubmenu($event)"></Main>
    <component :is="submenu"></component>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from "@/components/Main";
import Route from '@/components/Route';
import News from '@/components/News';
import Stories from '@/components/Stories';
import Feedback from '@/components/Feedback';
import Home from '@/components/Home';
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
