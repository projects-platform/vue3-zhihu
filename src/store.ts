import { createStore } from 'vuex'
import { ColumnProps, PostProps, testData, testPosts } from './testData'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: string
}

export interface GlobalDataProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false, name: 'h_vk' }
  },
  mutations: {
    login (state) {
      state.user = { ...state.user, isLogin: true, name: 'h_vk' }
    },
    createPost (state, newPost) {
      state.posts.push(newPost)
    }
  },
  getters: {
    getColumnById: state => (id: number) => state.columns.find(c => c.id === id),
    getPostsById: state => (cid: number) => state.posts.filter(p => p.columnId === cid)
  }
})

export default store
