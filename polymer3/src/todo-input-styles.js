import {
    Element as PolymerElement
}
from '../node_modules/@polymer/polymer/polymer-element.js';

const todoInputStyleElement = document.createElement('dom-module');
todoInputStyleElement.innerHTML =
    `<template>
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
        border: 1px solid #CCC;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
      }
    </style>
  </template>`
  todoInputStyleElement.register('todo-input-style-element');