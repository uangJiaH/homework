<template>
  <div class="about">
    <huang-table :column="column" :data="data_1" :format="formatData" :params="params_1" checkbox index init-request
                 method="post" url="/name/" @onLoad="onLoad">
      <template v-slot:operation="slot">
        <huang-button type="primary" @click="handleEdit(slot.data)">编辑</huang-button>
        <huang-button type="danger" @click="handleDelete(slot.data)">删除</huang-button>
        <huang-button type="success" @click="handleEdit(slot.data)">编辑</huang-button>
        <huang-button type="warning" @click="handleDelete(slot.data)">删除</huang-button>
      </template>
    </huang-table>
  </div>
</template>

<script>
export default {
  components: {
    huangTable: () => import('../components/table/index'),
    huangButton: () => import('../components/button/index')
  },

  data() {
    return {
      column: [
        {label: '姓名', prop: 'name'},
        {label: '性别', prop: 'gender'},
        {label: '创建时间', prop: 'create_date'},
        {label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation'}
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {name: 'rose'}

    }
  },
  methods: {
    handleEdit(row) {
      console.log(row)
    },
    handleDelete(row) {
      console.log(row)
    },
    onLoad(data) {
      console.log(data)
    },
    formatData(data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
