<template>
<div id="app">
  <component :is="moresubmenu" v-on:plm="update($event)"></component>
  <ShittyStories></ShittyStories>
</div>
</template>
<script>
import Feedback from '@/components/Feedback';
import blogStory from "@/components/pages/story/blogStory";
import ShittyStories from "@/components/pages/story/ShittyStories";
export  default {
  components:{
    Feedback,
    blogStory,
    ShittyStories
  },
  data()
  {
    return{
      moresubmenu:'blogStory'
    }
  },
  methods:{
    update(newchange)
    {
      this.moresubmenu=newchange;
    }
  }
}
</script>
<style scoped></style>