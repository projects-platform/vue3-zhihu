<template>
  <div class="container">
    <GlobalHeader :user="user"/>
    <FormTest/>
    <ColumnList :list="list"/>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import FormTest from './components/FormTest.vue'

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

const currentUser: UserProps = {
  isLogin: true,
  name: 'H_VK'
}

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    ColumnList,
    FormTest
  },
  setup () {
    return {
      list: testData,
      user: currentUser
    }
  }
})
</script>
