<template>
  <div class="home">
    <huang-button>loading</huang-button>
    <huang-button type="primary">成功按钮</huang-button>
    <huang-button disabled size="mini" type="danger">危险按钮</huang-button>
    <huang-button size="small" type="warning">警告按钮</huang-button>
  </div>

</template>

<script>


export default {
  name: 'HomeView',
  data() {
    return {}
  },
  components: {
    huangButton: () => import('../components/button/index')
  },
  methods: {
    handleSubmit() {

      this.flag = true
      setTimeout(() => {
        console.log('123')
        this.flag = false
      }, 3000)
    }
  }
}
</script>
