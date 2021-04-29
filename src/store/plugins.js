const syncStorage = (store) => {
  // 当 store 初始化后调用
  // eslint-disable-next-line
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  });
};

export default [syncStorage];
