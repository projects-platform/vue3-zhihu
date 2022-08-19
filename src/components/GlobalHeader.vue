<template>
  <nav class="navbar navbar-dar bg-primary justify-content-between mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">之乎者也</a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">你好,{{ user.name }}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})

</script>
