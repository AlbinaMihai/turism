
<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Questionnaire></Questionnaire>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Main from "@/components/Main";
import Questionnaire from "@/components/ Questionnaire";
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Questionnaire
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
