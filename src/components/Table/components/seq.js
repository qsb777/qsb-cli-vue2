export default {
  template: "<span>{{ vueChange() }}</span>",
  methods: {
    vueChange(...aaa) {
      console.log(aaa, this.params);
      return 123;
    },
  },
};
