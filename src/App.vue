<template>
  <div class="container">
    <GlobalHeader :user="user"/>
    <router-view/>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <ul class="list-inline-item mb-0">
        <li class="list-inline-item">© 2022 之乎者也</li>
        <li class="list-inline-item">课程</li>
        <li class="list-inline-item">文档</li>
        <li class="list-inline-item">联系</li>
        <li class="list-inline-item">更多</li>
      </ul>
    </footer>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import { GlobalDataProps } from './store'
import GlobalHeader from './components/GlobalHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const user = computed(() => store.state.user)
    return {
      user
    }
  }
})
</script>
