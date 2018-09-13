import { Slim } from "slim-js"

const test = attr => /^(bind.boolean):(\S+)/.exec(attr.nodeName)
const execute = (source, target, attribute, match) => {
  const tAttr = match[2]
  const path = attribute.value
  Slim.bind(source, target, path, () => {
    if (Slim.lookup(source, path)) {
      target.setAttribute(tAttr, '')
    } else {
      target.removeAttribute(tAttr)
    }
  })
}

Slim.customDirective(test, execute)