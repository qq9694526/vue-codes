<template>
  <div class="home">
    <input v-model="inputValue" v-debounce="search" v-focus type="text">

    <input v-model="money" v-only-money>
    <div>
      <h3>{{}}</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      money:"",
      inputValue:""
    }
  },
  watch:{
    money(){
      console.log(this.money)
    }
  },
  methods:{
    search(){
      console.log(this.inputValue)
    }
  }
}
</script>
