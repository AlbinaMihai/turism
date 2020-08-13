<template>
  <div>
<h1>Latină</h1>
    <input  id="searchbox" type="text" v-model="search" placeholder="search latin">
    <div v-for="lesson in filterLatin" :key="lesson.id">
      <h2>{{lesson.title|litera-mare}}</h2>
      <article>{{lesson.body}}</article>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    lessons:[],
      search:''
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data){
      this.lessons=data.body.slice(0,50);
    })
  },
  computed:{
    filterLatin: function (){
      return this.lessons.filter((lesson)=>{
        return lesson.title.match(this.search);
      });
    }
  },
  filters:{//functioneaza local. Pt global se scriu in main.js
    'litera-mare':function (value){
      return value.toUpperCase();
    }
  }
}
</script>
<style scoped>
#searchbox
{
  width: 50%;
}
</style>