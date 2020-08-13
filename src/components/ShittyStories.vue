<template>
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
</template>

<script>
export default {
name: "ShittyStories.vue",
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
</style>