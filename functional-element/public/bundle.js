!function(){"use strict";const t=new WeakMap,e=e=>"function"==typeof e&&t.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,i=null)=>{let n=e;for(;n!==i;){const e=n.nextSibling;t.removeChild(n),n=e}},s={},o=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${o}--\x3e`,a=new RegExp(`${o}|${r}`),l=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class c{constructor(t,e){this.parts=[],this.element=e;let i=-1,n=0;const s=[],r=e=>{const c=e.content,d=document.createTreeWalker(c,133,null,!1);let u,m;for(;d.nextNode();){i++,u=m;const e=m=d.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const s=e.attributes;let r=0;for(let t=0;t<s.length;t++)s[t].value.indexOf(o)>=0&&r++;for(;r-- >0;){const s=t.strings[n],o=h.exec(s)[2],r=l&&"style"===o?"style$":/^[a-zA-Z-]*$/.test(o)?o:o.toLowerCase(),c=e.getAttribute(r).split(a);this.parts.push({type:"attribute",index:i,name:o,strings:c}),e.removeAttribute(r),n+=c.length-1}}"TEMPLATE"===e.tagName&&r(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(o)<0)continue;const r=e.parentNode,l=t.split(a),c=l.length-1;n+=c;for(let t=0;t<c;t++)r.insertBefore(""===l[t]?p():document.createTextNode(l[t]),e),this.parts.push({type:"node",index:i++});r.insertBefore(""===l[c]?p():document.createTextNode(l[c]),e),s.push(e)}else if(8===e.nodeType)if(e.nodeValue===o){const t=e.parentNode,o=e.previousSibling;null===o||o!==u||o.nodeType!==Node.TEXT_NODE?t.insertBefore(p(),e):i--,this.parts.push({type:"node",index:i++}),s.push(e),null===e.nextSibling?t.insertBefore(p(),e):i--,m=u,n++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(o,t+1));)this.parts.push({type:"node",index:-1})}}};r(e);for(const t of s)t.parentNode.removeChild(t)}}const d=t=>-1!==t.index,p=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class u{constructor(t,e,i){this._parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this._parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,s=0;const o=t=>{const i=document.createTreeWalker(t,133,null,!1);let r=i.nextNode();for(;n<e.length&&null!==r;){const t=e[n];if(d(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(r,t.name,t.strings,this.options));n++}else s++,"TEMPLATE"===r.nodeName&&o(r.content),r=i.nextNode();else this._parts.push(void 0),n++}};return o(t),i&&(document.adoptNode(t),customElements.upgrade(t)),t}}class m{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",i=!0;for(let n=0;n<t;n++){const t=this.strings[n];e+=t;const s=t.lastIndexOf(">");!(i=(s>-1||i)&&-1===t.indexOf("<",s+1))&&l&&(e=e.replace(h,(t,e,i,n)=>"style"===i?`${e}style$${n}`:t)),e+=i?r:o}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const g=t=>null===t||!("object"==typeof t||"function"==typeof t);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new f(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)i+="string"==typeof e?e:String(e);else i+="string"==typeof t?t:String(t)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class f{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===s||g(t)&&t===this.value||(this.value=t,e(t)||(this.committer.dirty=!0))}commit(){for(;e(this.value);){const t=this.value;this.value=s,t(this)}this.value!==s&&this.committer.commit()}}class v{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=p()),t._insert(this.endNode=p())}insertAfterPart(t){t._insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;e(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s,t(this)}const t=this._pendingValue;t!==s&&(g(t)?t!==this.value&&this._commitText(t):t instanceof m?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const i=new u(e,t.processor,this.options),n=i._clone();i.update(t.values),this._commitNode(n),this.value=i}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)void 0===(i=e[n])&&(i=new v(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class b{constructor(t,e,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this._pendingValue=t}commit(){for(;e(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s,t(this)}if(this._pendingValue===s)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=s}}class y extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new w(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class w extends f{}let _=!1;try{const t={get capture(){return _=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class N{constructor(t,e,i){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i}setValue(t){this._pendingValue=t}commit(){for(;e(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s,t(this)}if(this._pendingValue===s)return;const t=this._pendingValue,i=this.value,n=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),o=null!=t&&(null==i||n);n&&this.element.removeEventListener(this.eventName,this,this._options),this._options=k(t),o&&this.element.addEventListener(this.eventName,this,this._options),this.value=t,this._pendingValue=s}handleEvent(t){("function"==typeof this.value?this.value:"function"==typeof this.value.handleEvent?this.value.handleEvent:()=>null).call(this.eventContext||this.element,t)}}const k=t=>t&&(_?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const E=new class{handleAttributeExpressions(t,e,i,n){const s=e[0];return"."===s?new y(t,e.slice(1),i).parts:"@"===s?[new N(t,e.slice(1),n.eventContext)]:"?"===s?[new b(t,e.slice(1),i)]:new x(t,e,i).parts}handleTextExpression(t){return new v(t)}};function V(t){let e=T.get(t.type);void 0===e&&(e=new Map,T.set(t.type,e));let i=e.get(t.strings);return void 0===i&&(i=new c(t,t.getTemplateElement()),e.set(t.strings,i)),i}const T=new Map,A=new WeakMap,D=(t,e,i)=>{let s=A.get(e);void 0===s&&(n(e,e.firstChild),A.set(e,s=new v(Object.assign({templateFactory:V},i))),s.appendInto(e)),s.setValue(t),s.commit()},C=(t,...e)=>new m(t,e,"html",E);function $(t,e){window.customElements.define(t,class extends HTMLElement{constructor(){super(),this.props={};const t=e({props:this.props,update:this.update.bind(this),constructing:!0,connecting:!1,disconnecting:!1,adopting:!1,element:this});void 0!==t&&(this.props=S(t),function(t,e){Object.keys(t.props).forEach(i=>{Object.defineProperty(t,i,{set(n){t.props=Object.assign({},t.props,{[i]:"function"==typeof n?n():n}),O(e,{props:t.props,update:t.update.bind(this),constructing:!1,connecting:!1,disconnecting:!1,adopting:!1,element:this})},get:()=>t.props[i]})})}(this,e))}connectedCallback(){O(e,{props:this.props,update:this.update.bind(this),constructing:!1,connecting:!0,disconnecting:!1,adopting:!1,element:this})}disconnectedCallback(){O(e,{props:this.props,update:this.update.bind(this),constructing:!1,connecting:!1,disconnecting:!0,adopting:!1,element:this})}adoptedCallback(){O(e,{props:this.props,update:this.update.bind(this),constructing:!1,connecting:!1,disconnecting:!1,adopting:!0,element:this})}update(t){void 0!==t&&(this.props=S(t)),O(e,{props:this.props,update:this.update.bind(this),constructing:!1,connecting:!1,disconnecting:!1,adopting:!1,element:this})}})}function S(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return Object.assign({},e,{[i]:"function"==typeof n?n():n})},{})}function O(t,e){const i=t(e);if(void 0===i)throw new Error("Nothing returned from element function");D(i,e.element)}$("todo-input",({element:t})=>C`
        <style>
            form {
                position: relative;
                font-size: 24px;
                border-bottom: 1px solid #ededed;
            }

            input[type=text] {
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

        <form @submit=${e=>(function(t,e){const i=e.querySelector("input");if(t.stopPropagation(),t.preventDefault(),!i.value)return;e.dispatchEvent(new CustomEvent("submit",{detail:i.value})),i.value=""})(e,t)}>
            <input type="text" placeholder="What needs to be done?" />
        </form>
    `),$("todo-item",({constructing:t,props:e,element:i})=>t?{text:"",checked:!1,index:0}:C`
        <style>
            :host {
                display: block;
            }

            li {
                font-size: 24px;
                display: block;
                position: relative;
                border-bottom: 1px solid #ededed;
            }

            li input {
                text-align: center;
                width: 40px;
                /* auto, since non-WebKit browsers doesn't support input styling */
                height: auto;
                position: absolute;
                top: 9px;
                bottom: 0;
                margin: auto 0;
                border: none;
                /* Mobile Safari */
                -webkit-appearance: none;
                appearance: none;
            }

            li input:after {
                content: url('data:image/svg+xml;utf8,<svg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20width%3D"40"%20height%3D"40"%20viewBox%3D"-10%20-18%20100%20135"><circle%20cx%3D"50"%20cy%3D"50"%20r%3D"50"%20fill%3D"none"%20stroke%3D"%23ededed"%20stroke-width%3D"3"/></svg>');
            }

            li input:checked:after {
                content: url('data:image/svg+xml;utf8,<svg%20xmlns%3D"http%3A//www.w3.org/2000/svg"%20width%3D"40"%20height%3D"40"%20viewBox%3D"-10%20-18%20100%20135"><circle%20cx%3D"50"%20cy%3D"50"%20r%3D"50"%20fill%3D"none"%20stroke%3D"%23bddad5"%20stroke-width%3D"3"/><path%20fill%3D"%235dc2af"%20d%3D"M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z"/></svg>');
            }


            li label {
                white-space: pre;
                word-break: break-word;
                padding: 15px 60px 15px 15px;
                margin-left: 45px;
                display: block;
                line-height: 1.2;
                transition: color 0.4s;
            }

            li.completed label {
                color: #d9d9d9;
                text-decoration: line-through;
            }

            li button,
            li input[type="checkbox"] {
                outline: none;
            }

            li button {
                margin: 0;
                padding: 0;
                border: 0;
                background: none;
                font-size: 100%;
                vertical-align: baseline;
                font-family: inherit;
                font-weight: inherit;
                color: inherit;
                -webkit-appearance: none;
                appearance: none;
                -webkit-font-smoothing: antialiased;
                -moz-font-smoothing: antialiased;
                font-smoothing: antialiased;
            }

            li button {
                position: absolute;
                top: 0;
                right: 10px;
                bottom: 0;
                width: 40px;
                height: 40px;
                margin: auto 0;
                font-size: 30px;
                color: #cc9a9a;
                margin-bottom: 11px;
                transition: color 0.2s ease-out;
            }

            li button:hover {
                color: #af5b5e;
            }
        </style>

        <li>
            <input type="checkbox" .checked=${e.checked} @click="${()=>(function(t,e){t.dispatchEvent(new CustomEvent("toggle",{detail:e}))})(i,e.index)}">
            <label>${e.text}</label>
            <button @click="${()=>(function(t,e){t.dispatchEvent(new CustomEvent("remove",{detail:e}))})(i,e.index)}">x</button>
        </li>
    `),$("my-todo",({constructing:t,props:e,update:i})=>t?{list:[{text:"my initial todo",checked:!1},{text:"Learn about Web Components",checked:!0}]}:C`
        <style>
            h1 {
                font-size: 70px;
                line-height: 70px;
                font-weight: 100;
                text-align: center;
                color: rgba(175, 47, 47, 0.15);
            }

            section {
                background: #fff;
                margin: 30px 0 40px 0;
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

        <h1>Todos Functional Element</h1>

        <section>
            <todo-input @submit=${t=>i(function(t,e){return{list:[...t,{text:e,checked:!1}]}}(e.list,t.detail))}></todo-input>
            ${e.list.map((t,n)=>C`
                <todo-item
                    .text=${t.text}
                    .checked=${t.checked}
                    .index=${n}
                    @remove=${t=>i(function(t,e){return{list:[...t.slice(0,e),...t.slice(e+1)]}}(e.list,t.detail))}
                    @toggle=${t=>i(function(t,e){const i=[...t],n=i[e];return i[e]=Object.assign({},n,{checked:!n.checked}),{list:i}}(e.list,t.detail))}
                ></todo-item>`)}
            <ul id="list-container"></ul>
        </section>
    `)}();
//# sourceMappingURL=bundle.js.map
