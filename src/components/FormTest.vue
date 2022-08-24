<template>
  <ValidateForm class="mb-3" @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <ValidateInput type="email" :rules="emailRules" v-model="emailRef" placeholder="请输入邮箱地址"/>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <ValidateInput type="password" :rules="passwordRules" v-model="passwordRef" placeholder="请输入密码" />
    </div>
  </ValidateForm>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateForm from './ValidateForm.vue'
import ValidateInput, { RulesProp } from './ValidateInput.vue'

export default defineComponent({
  name: 'FormTest',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const emailRef = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱地址不能为空' },
      { type: 'email', message: '邮箱格式不正确' }
    ]

    const passwordRef = ref('')
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]

    const onFormSubmit = (result:boolean) => console.log('hello', result)

    return {
      emailRules,
      emailRef,
      passwordRef,
      passwordRules,
      onFormSubmit
    }
  }
})
</script>
