<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          type="text"
          v-model="title"
          :rules="titleRule"
          placeholder="请输入文章标题"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          tag="textarea"
          rows="10"
          v-model="content"
          :rules="contentRule"
          placeholder="请输入文章详情"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">发表文章</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import router from '@/router'
import { useStore } from 'vuex'

import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import { defineComponent, ref } from 'vue'
import { PostProps } from '@/testData'

export default defineComponent({
  components: { ValidateForm, ValidateInput },
  setup () {
    const store = useStore()
    const title = ref('')
    const titleRule: RulesProp = [
      { type: 'required', message: '文章标题不能为空' }
    ]
    const content = ref('')
    const contentRule: RulesProp = [
      { type: 'required', message: '文章详情不能为空' }
    ]
    const onFormSubmit = (result:boolean) => {
      if (!result) {
        const newPost: PostProps = {
          id: new Date().getTime(),
          title: title.value,
          content: content.value,
          createdAt: new Date().toLocaleString(),
          columnId: 1
        }
        store.commit('createPost', newPost)
        router.push({ path: '/column/1' })
      }
    }
    return {
      title,
      titleRule,
      content,
      contentRule,
      onFormSubmit
    }
  }
})
</script>
