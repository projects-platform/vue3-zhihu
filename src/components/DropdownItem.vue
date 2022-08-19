<template>
   <li class="dropdown-option"
    :class="{ 'is-disabled': disabled }"
   >
    <slot/>
   </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style>
.dropdown-option.is-disabled {
  color: #6c757d !important;
  pointer-events: none;
  background-color: transparent;
}
</style>
