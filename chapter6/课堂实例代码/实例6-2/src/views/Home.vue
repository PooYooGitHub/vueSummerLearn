<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  }
}
</script>
13.��src/views������Layout.vue

<template>
  <div>
     <Menu/>
     <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
export default {
  name: 'Layout',
  components: {
      Menu
  }
}
</script>