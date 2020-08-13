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
  <table>
    <tbody>
    <tr v-for="story in book" :key="story.id">
      <td>
        <h2>{{story.name}}</h2>
        <h3>{{story.place}}</h3>
        <p>{{story.story}}</p>
      </td>
    </tr>
    </tbody>
  </table>
</div>
</template>
<script>
export default {
  data() {
    return{
      book:[
        {
          id:1,
          name:'Mihai Albina',
          place:'Valcea',
          story:'WiFi gratuit inclus\n' +
              'Situat în Șerbănești, Foișorul Din Poveste are terasă cu vedere la grădină, precum și piscină privată. Proprietatea se află la 45 km de Băile Govora, oferind acces gratuit la internet WiFi și parcare privată gratuită.'
        },
        {
          id:2,
          name:'Cristiii',
          place:'Bucuresti',
          story:'WiFi gratuit inclus\n' +
              'Situat în Șerbănești, Foișorul Din Poveste are terasă cu vedere la grădină, precum și piscină privată. Proprietatea se află la 45 km de Băile Govora, oferind acces gratuit la internet WiFi și parcare privată gratuită.'
        },
        {
          id:3,
          name:'Radu',
          place:'Caracal',
          story:'WiFi gratuit inclus\n' +
              'Situat în Șerbănești, Foișorul Din Poveste are terasă cu vedere la grădină, precum și piscină privată. Proprietatea se află la 45 km de Băile Govora, oferind acces gratuit la internet WiFi și parcare privată gratuită.'
        }
      ]
    }
  },
  methods:{
    post:function ()
    {
      this.$http.post("");
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