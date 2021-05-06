<template>
  <div class="home" @click="clickHander">
    <ag-grid style="height: 100%;" :tableData="tableData" :columns="columnDefs"></ag-grid>
  </div>
</template>

<script>
// import http from '@/api'
export default {
  name:'home',
  data() {
    return {
      tableData: [],
      columnDefs: [
        {type: 'seq'},
        { field: 'make' },
        { field: 'model' },
        { field: 'price', sortable: true }
        ]
    }
  },
    methods: {
      clickHander() {
        fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
                .then(result => result.json())
                .then(rowData => this.tableData = rowData);
      }
    }
}
</script>

<style lang="less"  scoped>
.home {
  height: 500px;
  line-height: 500px;
}
</style>