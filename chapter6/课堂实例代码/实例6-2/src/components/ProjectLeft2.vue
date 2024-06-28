<template>
    <div>
        <div v-for="item in projects" v-bind:key="item.id">
            <router-link :to="{ name: 'project2', params: { projectId: item.id }}">{{item.name}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
      return {
          projects:[{
              name:'项目一',
              id:1
          },{
              name:'项目二',
              id:2
          }]
      }
  },
}
</script>