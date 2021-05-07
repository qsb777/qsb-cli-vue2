// 序号组件
import Vue from "vue";
export default Vue.extend({
  name: "erpInput",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onInput(e) {
      this.value = e.target.value;
    },
    onChange(...val) {
      console.log("change", val);
    },
    getValue() {
      return this.value;
    },
    // isCancelAfterEnd() {
    //   return false;
    // },
  },
  beforeMount() {
    console.log("aaaaaa", this);
    this.value = this.params.value;
    this.$nextTick(() => {
      this.$refs.container.focus();
    });
  },
  render() {
    return (
      <a-input
        ref="container"
        value={this.value}
        onInput={this.onInput}
        // onChange={this.onChange}
      ></a-input>
    );
  },
});
