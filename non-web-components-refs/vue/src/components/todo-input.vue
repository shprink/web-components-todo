<template>
  <form @submit.prevent.stop="submit">
    <input id="new-todo" required v-model="text" placeholder="What needs to be done?" />
  </form>
</template>
<script>
export default {
  name: 'TodoInput',
  data() {
    return { text: '' };
  },
  methods: {
    submit() {
      this.$emit('onsubmit', this.text);
      this.text = '';
    },
  },
};
</script>
<style>
:host {
  display: block;
}

iron-input {
  width: 100%;
}

#new-todo-form {
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
}

#new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #ccc;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
}
</style>