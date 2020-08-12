<template>
<div>
<h1 v-on:click="change()">{{message}}</h1>
</div>
</template>

<script>
export default {
  props:['message'],
  methods:
      {
        change()
        {
          this.message='Bine ați plecat!';
        }
      }
}
</script>

<style scoped>
h1{
  font-family: "Comic Sans MS",cursive;
}
</style>