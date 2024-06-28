<template>
  <div>
    <div>ÏîÄ¿ID:{{projectId}}</div>
  </div>
</template>
<script>
export default {
  name: 'ProjectDetailContent',
  props:{
   projectId: [Number,String]
  }
}
</script>