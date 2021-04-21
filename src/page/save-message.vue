<template>
  <div>
    <quill-editor v-model="content" style="height:500px;margin-bottom: 50px"></quill-editor>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor';

// https://www.npmjs.com/package/vue-quill-editor 官方文档
export default {
  data() {
    return {
      content: '',
      editorOption: {
        placeholder: '留言内容',
      },
    }
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      console.log("123" + this.content)
    },
  }
}
</script>
