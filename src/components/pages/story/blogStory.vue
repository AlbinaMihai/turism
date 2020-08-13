<template>
  <div>
    <h1>Povestea ta</h1>
    <hr>
    <h2>Adaugă povestea ta</h2>
    <form>
      <label>Nume</label>
      <input type="text" required/>
      <label>Locație:</label>
      <input type="text" required>
      <label>Poveste:</label>
      <textarea></textarea>
      <button id="addStory" v-on:click.prevent="postStory">Adaugă</button>
    </form>
  </div>
</template>
<script>
export default {

  methods:{
    postStory:function ()
    {
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        title:"cel mai smecher titlu",
        body:"cel mai smecher corp",
        userId:0
      }).then(function (data){
        alert()
        console.log(data);
      });
      this.$emit('plm','Feedback');
    }
  }
}
</script>
<style scoped>
h1,h2,h3,p
{
  text-align: left;
  font-family: "Comic Sans MS",sans-serif;
}
table
{
  padding-left: 1%;
}


label{
  display: block;
  margin: 20px 0 10px;
}
#story
{
  display:block;
  width:100%;
  height: auto;
  font-size: 120%;
}
#addStory{
  background: green;
  border: 0;
  color: whitesmoke;
  margin-top: 20px;
  font-size: 180%;
  position: center;
  font-family: "Comic Sans MS",sans-serif;
}
#addStory:hover
{
  background-color: chartreuse;
}
textarea{
  width: 100%;
  height:60px;
}
</style>