<template>
  <div class="form">
    <form action="/xxx" method="get" @submit.prevent="handleSubmit">
      <p>
        Username:
        <input type="text" name="username" v-model="username" />
      </p>
      <p>
        Password:
        <input type="text" name="password" v-model="password" />
      </p>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormDemo',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      console.log('username:', this.username)
      console.log('password:', this.password)
    }
  }
}
</script>

<style>
</style>
