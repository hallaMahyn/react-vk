(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l=(o=n(2))&&o.__esModule?o:{default:o},r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(374));var a=()=>{return l.default.createElement("div",{className:"App-content"},l.default.createElement("h2",null,"Comments Component"),l.default.createElement("h4",null,"To use Comments Widget:"),l.default.createElement("pre",{style:{width:"75%"}},"\nimport {VK, Comments} from 'react-vk';\n\nconst handleNewComment = (num, last_comment, date, sign) => {\n    console.log(last_comment);\n};\n\nconst Comment = () => {\n\treturn (\n\t    <VK apiId={your_api_id}>\n\t      <Comments onNewComment={handleNewComment} />\n\t    </VK>\n\t)\n};"),l.default.createElement("h4",null,"Result:"),l.default.createElement(r.default,{apiId:6247321},l.default.createElement(r.Comments,{onNewComment:(e,t,n,o)=>{console.log(t)}})),l.default.createElement("h5",null,"More info you can find on"," ",l.default.createElement("b",null,l.default.createElement("a",{href:"https://vk.com/dev/widget_comments"},"VK API"))))};t.default=a}}]);
//# sourceMappingURL=3.79e00edb.js.map