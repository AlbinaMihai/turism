
<template>
  <div>
    <Questionnaire  v-bind:message="message" />
    <table>
      <tbody>
      <tr>
        <!--   <td v-for="picture in pictures" :key="picture.id"><img></td>-->
        <td ><img src="@/assets/munte_1.jpg"></td>
        <td ><img src="@/assets/muzeu_1.jpg"></td>
        <td ><img src="@/assets/munte_2.jpg"></td>
        <td ><img src="@/assets/munte_3.jpg"></td>
        <td ><img src="@/assets/munte_1.jpg"></td>
         </tr>
         </tbody>
       </table>
   <!-- <img :src="logic+picture.path">-->
  </div>
</template>
<script>
import Questionnaire from "@/components/ Questionnaire";
export default {
  components: {
    Questionnaire
  },
  data()
  {
    return {
      message:'Bine ați venit!',
      logic: '@/assets/munte_1.jpg',
      pictures:[{
        id:1,
        path:'munte_1.jpg',
        description:'poza 1'
      },
        {
          id:2,
          path:'muzeu_1.jpg',
          description:'poza 2'
        },
        {
          id:3,
          path:'munte_2.jpg',
          description:'poza 3'
        },
        {
          id:4,
          path:'munt  e_3.jpg',
          description:'poza 4'
        },
        {
          id:5,
          path:'munte_2.jpg',
          description:'poza 5'
        }]
    }
  },
  methods:
      {
        getPic(picture){
          return '@/assets/'+picture.path;
        }
      }
}
</script>
<style scoped>
table{
  position: relative;
  width: 100%;
}

img
{
 height: 100%;
  width: 100%;
}
td
{
  position: relative;
  width: 20%;
  height:12em;

}
</style>