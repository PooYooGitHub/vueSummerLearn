<template>
  <div>
    <div>��ĿID:{{projectId}}</div>
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