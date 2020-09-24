<template>
  <div class="lifeCircle">
    <button @click="destroy">destroy</button>
    <button @click="update">{{msg}}</button>
  </div>
</template>

<script>
export default {
  name: 'LifeCircle',
  data () {
    return {
      msg: '更新前'
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    destroy () {
      this.$destroy()
    },
    update () {
      this.msg = '更新后'
    }
  }
}
</script>

<style>
</style>
