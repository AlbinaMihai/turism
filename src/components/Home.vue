<template>
  <div>
<h1>Latină</h1>
    <div v-for="lesson in lessons" :key="lesson.id">
      <h2>{{lesson.title}}</h2>
      <article>{{lesson.body}}</article>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
    lessons:[]
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data){
      this.lessons=data.body.slice(0,50);
    })
  }
}
</script>
<style scoped>

</style>