<template>
  <div class="container">
    <ColumnList :list="list"/>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'

const testData:ColumnProps[] = [{
  id: 1,
  title: 'test专栏1',
  description: '这是一个描述',
  avatar: 'https://avatars.githubusercontent.com/u/12862565?s=400&u=644d159c4fe5cf84c211befcb611f27a00391c54&v=4'
},
{
  id: 2,
  title: 'test专栏2',
  description: '这是一个描述',
  avatar: 'https://avatars.githubusercontent.com/u/12862565?s=400&u=644d159c4fe5cf84c211befcb611f27a00391c54&v=4'
},
{
  id: 3,
  title: 'test专栏3',
  description: '这是一个描述'
  // avatar: 'https://avatars.githubusercontent.com/u/12862565?s=400&u=644d159c4fe5cf84c211befcb611f27a00391c54&v=4'
}]

export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
