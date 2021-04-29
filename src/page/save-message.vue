<template>
  <div style="height: 100%">
    <el-container>
      <div style="position: absolute;left: 62%;top: 20px;">
        <span style="margin-right: 10px">{{ language }}
          <el-switch
            v-model="bool"
            @change="changeLanguage"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </span>
        <el-button size="small" @click="jumpToLogin">登录</el-button>
      </div>
      <el-header style="font-size: 30pt;margin-top: 5%">
        xxx匿名留言板
      </el-header>
      <el-main style="height: 400px;display: flex;justify-content:center;">
        <el-form label-width="80px" :model="formData" style="width: 50%">
          <el-form-item label="标题">
            <el-input v-model="formData.title"></el-input>
          </el-form-item>
          <el-form-item label="留言内容">
            <el-input type="textarea" v-model="formData.content" :rows="12"></el-input>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <el-button @click="submit" style="position: absolute;left: 62%;">提交</el-button>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {addMessage} from '@/api/message';

// https://www.npmjs.com/package/vue-quill-editor 官方文档
export default {
  data() {
    return {
      language: '简体',
      bool: true,
      labelPosition: 'right',
      formData: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    submit() {
      addMessage(this.formData).then((res) => {
        console.log(res)
      })

    },
    changeLanguage() {
      console.log(1)
      this.language = this.bool ? '简体' : '英文'
    },
    jumpToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
