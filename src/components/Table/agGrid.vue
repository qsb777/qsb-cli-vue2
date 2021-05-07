<template>
  <!-- /**
  * @name agGrid (组件名称)
  * @module 组件存放位置
  * @desc 组件描述
  * @author qsb777
  * @date 
  * @param {Object} [title]    - 参数说明
  * @param {String} [columns] - 参数说明
  * @example 调用示例
  *  <agGrid />
  */-->

  <div class="agGrid">
    <ag-grid-vue
      style="height: 100%"
      id="#suppressQuotes"
      class="ag-theme-alpine"
      :rowData="rowData"
      :columnDefs="columnDefs"
      :gridOptions="gridOptions"
      :frameworkComponents="frameworkComponents"
      @grid-ready="onGridReady"
    ></ag-grid-vue>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import AG_GRID_LOCALE_ZZZ from './locale.en'
import { seq,erpInput } from "./components";

// const seq = Vue.extend({
//   template: '<span>{{ valueCubed() }}</span>',
//   methods: {
//       valueCubed() {
//           return this.params.value * this.params.value * this.params.value;
//       }
//   }
// })
export default {
  name: 'agGrid',
  components: {
    AgGridVue,
  },
  props: {
    tableData: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  watch: {
    tableData: {
      handler (newVal) {
        this.rowData = newVal
      },
      deep: true
    },
    columns: {
      handler (newVal) {
       this.initColumns(newVal)
      },
      deep: true,
    }
  },
  data() {
    return {
      localeText: null,
      rowData: [],
      columnDefs: [],
      gridApi: null,
      columnApi: null,
      gridOptions: null,
     frameworkComponents: null
    }
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
    changeValue() {},
    initColumns (data) {
      let columns= []
      data.forEach(item => {
        if(item.type && item.type === 'seq') {
          columns.push({headerName: "No",cellRenderer: 'seq', width: 80, })
        } else if ('editRender' in item) {
          let {name } = item.editRender
          delete item.editRender
          console.log(name)
          columns.push({...item, cellEditor: name, editable: true, cellEditorParams: {change1111111: this.changeValue}})
        } else {
          columns.push(item)
        }

       
      })
      return columns
    },
    initAgGrid () {
      this.gridOptions={}
      this.rowData = []
      this.columnDefs = this.initColumns(this.columns)
      this.frameworkComponents = {
        seq: seq,
        erpInput: erpInput
      };
    }
  },
  mounted() { },
  beforeMount () {
    this.initAgGrid()
    this.localeText = AG_GRID_LOCALE_ZZZ
  },
}
</script>

<style lang="less" scoped>
@import "../../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
.agGrid {
}
</style>
