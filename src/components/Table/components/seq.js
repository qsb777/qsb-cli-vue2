// 序号组件
import Vue from "vue";
export default Vue.extend({
  name: "seq",
  data() {
    return {
      displayValue: "",
    };
  },
  beforeMount() {
    this.displayValue = this.params.node.rowIndex + 1;
  },
  render() {
    return <span>{this.displayValue}</span>;
  },
});
