<template>
  <q-page class="flex flex-center">
    Testing from api : {{message}}
  </q-page>
</template>

<script>
import { api } from '../boot/axios'

export default {
  name: 'IndexPage',

  data () {
    return {
      message: 'Loading...'
    }
  },
 
  mounted () {
    api.get('/').then(({ data }) => {
      this.message = data.message
    })
  }
}
</script>
