<template>
  <div>
    <h2>
      {{listTitle}}
    </h2>
    <div>
      <project-left class="left"/>
      <div class="right">
        <router-view/>
        <router-view name="detail"/>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectLeft from '@/components/ProjectLeft2.vue'
export default {
  name: 'ProjectList2',
  props:{
    listTitle: String
  },
  data(){
     return {
     }
  },
  components:{
    ProjectLeft
  }
}
</script>
<style lang="less" scoped>
.left{
  float:left;
  width:40%;
  text-align: right;
}
.right{
  float:right;
  width:50%;
  text-align:left;
}
</style>