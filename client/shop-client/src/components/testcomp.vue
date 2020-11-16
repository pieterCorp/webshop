<template>
<div class="content">
  <p>dit is een test component</p>
  <h1>{{ message }}</h1>  
</div>
</template>

<script>

export default {  
  props: {
    message: String
  }
}
</script>


<style scoped>

.content{
  height: 560px;
  margin: 50px;
}
</style>
