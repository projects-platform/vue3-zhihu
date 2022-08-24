<template>
  <div class="validate-input-container pb-3">
    <input v-bind="$attrs"
          class="form-control"
          :class="{ 'is-invalid': inputRef.error }"
          :value="inputRef.val"
          @blur="validateInput"
          @input="updateValue"
    >
    <span class="invalid-feedback" v-if="inputRef.error" >{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive } from 'vue'

import { emitter } from './ValidateForm.vue'

const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/

interface RuleProp {
  type: 'required' | 'email'
  message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false, // 禁止组件根元素继承 attribute
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        inputRef.error = !props.rules.every(rule => {
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              return !!inputRef.val.trim()
            case 'email':
              return emailReg.test(inputRef.val)
            default:
              // passed
          }
          return false
        })
      }
      return inputRef.error
    }

    const updateValue = (payload: Event | KeyboardEvent) => {
      inputRef.val = (payload.target as HTMLInputElement).value
      context.emit('update:modelValue', inputRef.val)
    }

    onMounted(() => emitter.emit('form-item-created', validateInput))

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>
