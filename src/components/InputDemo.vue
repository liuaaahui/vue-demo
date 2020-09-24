<template>
  <div class="hello">
    <input type="text" v-model="msg"><br>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'InputDemo',
  data () {
    return {
      msg: 'hello'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
