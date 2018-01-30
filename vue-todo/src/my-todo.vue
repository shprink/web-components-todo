<template>
  <div>
    <h1>Todos Vue</h1>
    <section>
      <todo-input @onnewtodo="add"></todo-input>
      <ul id="list-container">
        <todo-item v-for="item in itens" :key="item.value" :todo-checked="item.checked" :todo-text="item.text" @onremove="remove"></todo-item>
      </ul>
    </section>
  </div>
</template>

<script>
module.exports = {
  name: "MyTodo",
  data() {
    return {
      itens: [
        { text: "my initial todo", checked: false },
        { text: "Learn about Web Components", checked: true }
      ]
    };
  },
  methods:{
    add(item){
      console.log(item)
      this.itens.push(item.detail[0])
    },
    remove(item){
      console.log(item)
      this.itens = this.itens.filter(e => e.text != item.detail[0])
    }
  }
};
</script>
 <style>
:host {
  display: block;
}

h1 {
  font-size: 80px;
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
