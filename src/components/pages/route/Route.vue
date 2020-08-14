<template>
  <div>
  <h1>Caută traseu</h1>
  <form>
    <label>Nr. Telefon</label>
    <input type="text" v-model="dataR.phone" required/>
    <div id="checkbox">
      <label>Locație: </label>

      <label>România</label>
     <input type="checkbox" value="Romania" v-model="dataR.place">
      <label>Grecia</label>
      <input type="checkbox" value="Grecia" v-model="dataR.place">
      <label>Altceva</label>
      <input type="checkbox" value="Altceva" v-model="dataR.place">
    </div>
    <label>Buget:</label>
    <select v-model="dataR.budget">
      <option>100 lei</option>
      <option>200 lei</option>
      <option>300 lei</option>
    </select>
    <br>
    <button id="add">Caută</button>
  </form>
    <div id="preview">
      <h2>Date introduse:</h2>
      <p>{{dataR.phone}}</p>
      <p>{{dataR.place[0]}} {{dataR.place[1]}}  {{dataR.place[2]}}</p>
      <p>{{dataR.budget}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
     dataR:{
       phone:'',
       place:[],
       budget:''
     },
    }
  }
}
</script>
<style scoped>
*
{
  font-family: "Comic Sans MS", sans-serif;
  margin: 10px 10px 10px 10px;
}
h1
{
  margin-left: 10px;
  text-align: left;

}
#add{
  background: green;
  border: 0;
  color: whitesmoke;
  margin-top: 20px;
  font-size: 180%;
  position: center;
}
#add:hover
{
 background-color: chartreuse;
}
</style>