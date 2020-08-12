<template>
<div>
<ul>
  <li v-for="mainButton in mainButtons" :key="mainButton.id" v-on:click="mainButton.clickCount++"><p>{{mainButton.name}}</p></li>
</ul>

</div>
</template>

<script>
export default
{
  data()
  {
   return{
     clickCount:0,
     mainButtons:[
       {
         id:1,
         name:'Acasă',
         link:'#home',
         clickCount:0
       },
       {
         id:2,
         name:'Trasee',
         link:'#routes',
         clickCount:0
       },
       {
         id:3,
         name:'Cazări',
         link:'#hotels',
         clickCount:0
       },
       {
         id:4,
         name:'Noutăți',
         link:'#news',
         clickCount:0
       }
     ]
   }
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li p {
  display: block;
  color: white;
  text-align: center;
  padding-right: 10px;
  padding-left: 10px;
  text-decoration: none;
  font-size: 120%;
}

li:hover {
  background-color: #111;
}
</style>