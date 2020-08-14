<template>
<div>
<ul>
  <li v-for="mainButton in mainButtons" :key="mainButton.id" v-on:click="changeSubmenu(mainButton.id)"><p>{{mainButton.name}}</p></li>
</ul>
</div>
</template>

<script>
import {store} from "@/store/store";

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
         clickCount:0
       },
       {
         id:2,
         name:'Trasee',
         clickCount:0
       },
       {
         id:3,
         name:'Cazări',
         clickCount:0
       },
       {
         id:4,
         name:'Noutăți',
         clickCount:0
       },
       {
         id:5,
         name:'Povestea ta',
         clickCount: 0
       }
     ]
   }
  },
  methods:{
    changeSubmenu(id){
      if(id===4)
       store.commit('changeSubmenu','News');
      else
        if(id===2)
          store.commit('changeSubmenu','Route');
        else
            if(id===5)
              store.commit('changeSubmenu','Stories');
            else
              if(id===1)
                store.commit('changeSubmenu','Home');
    }
  },
  computed:{
    submenu(){
      return this.$store.state.submenu;
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