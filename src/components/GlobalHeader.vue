<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">之乎者也</a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item"><router-link to="/login" class="btn btn-outline-light my-2">登录</router-link></li>
        <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <Dropdown :title="`你好,${user.name}`">
            <DropdownItem><router-link to="/create" class="dropdown-item">新建文章</router-link></DropdownItem>
            <DropdownItem><a href="#" class="dropdown-item">编辑资料</a></DropdownItem>
            <DropdownItem><a href="#" class="dropdown-item">退出登录</a></DropdownItem>
          </Dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { UserProps } from '@/store'

import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
  components: { Dropdown, DropdownItem }
})

</script>
