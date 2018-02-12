<template>
  <div>
    <h1>Todos Vue</h1>
    <section>
      <todo-input @onsubmit="handleOnSubmit"></todo-input>
      <ul id="list-container">
        <todo-item v-for="(item, index) in list" :key="item.value" :index="index" :checked="item.checked" :text="item.text" @onremove="handleRemove" @ontoggle="handleToggle"></todo-item>
      </ul>
    </section>
  </div>
</template>

<script>
module.exports = {
  name: 'MyTodo',
  data() {
    return {
      list: [
        { text: 'my initial todo', checked: false },
        { text: 'Learn about Web Components', checked: true },
      ],
    };
  },
  methods: {
    handleOnSubmit(e) {
      this.list = [...this.list, { text: e.detail[0], checked: false }];
    },
    handleToggle(e) {
      const index = parseInt(e.detail[0]);
      const item = this.list[index];
      this.$set(this.list[index], 'checked', !item.checked);
    },
    handleRemove(e) {
      const index = parseInt(e.detail[0]);
      this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
    },
  },
};
</script>

<style>
:host {
  display: block;
}
h1 {
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}

section {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

#list-container {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #e6e6e6;
}
</style>
