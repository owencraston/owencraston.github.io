"use strict";(self.webpackChunkgatsby_portfolio=self.webpackChunkgatsby_portfolio||[]).push([[951],{7581:function(e,t,r){var n=r(7294);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=(0,n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,o=e.size,s=void 0===o?24:o,m=i(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},m),n.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),n.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),n.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),n.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));a.displayName="Calendar",t.Z=a},9763:function(e,t,r){var n=r(7294);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=(0,n.forwardRef)((function(e,t){var r=e.color,a=void 0===r?"currentColor":r,o=e.size,s=void 0===o?24:o,m=i(e,["color","size"]);return n.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},m),n.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.createElement("polyline",{points:"12 6 12 12 16 14"}))}));a.displayName="Clock",t.Z=a},3435:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(7294),l=r(5444),i=r(413),a=r(3751),o=r(7581),s=r(9763),m=r(9),d=m.default.div.withConfig({displayName:"posts__Intro",componentId:"sc-4d4syh-0"})(["padding:8rem 0 4rem 0;text-align:left;"]),c=m.default.h1.withConfig({displayName:"posts__Title",componentId:"sc-4d4syh-1"})(['font-size:2rem;text-transform:capitalize;font-family:"GT-Walsheim-Pro-Bold";']),f=m.default.article.withConfig({displayName:"posts__ArticlePost",componentId:"sc-4d4syh-2"})(['margin-bottom:5rem;padding-bottom:1rem;max-width:60rem;margin:auto;text-align:center;img[src$="imgresponsive"]{max-width:80%;}']),p=m.default.small.withConfig({displayName:"posts__SmallText",componentId:"sc-4d4syh-3"})(['font-size:.89rem;padding-right:10px;font-family:"GT-Walsheim-Pro-Regular";> span{padding-left:5px;}']),u=m.default.div.withConfig({displayName:"posts__ArticleBody",componentId:"sc-4d4syh-4"})(['margin-top:5rem;p{font-size:1.5rem;font-family:"GT-Walsheim-Pro-Medium";}']),g=m.default.ul.withConfig({displayName:"posts__NaviagtionList",componentId:"sc-4d4syh-5"})(["display:grid;grid-template-columns:1fr 1fr;grid-column-gap:5rem;grid-row-gap:5rem;list-style:none;padding:0;border-top:4px solid #ff2d2d;border-bottom:4px solid #ff2d2d;"]),h=m.default.li.withConfig({displayName:"posts__NaviagtionLi",componentId:"sc-4d4syh-6"})(['padding:2rem 0;&:last-child{text-align:right;}a{font-size:1.3rem;font-family:"GT-Walsheim-Pro-Medium";}']),y=r(4791),v=function(e){var t=e.data,r=e.pageContext,m=e.location,v=t.markdownRemark,w=t.site.siteMetadata.title,x=r.previous,E=r.next;return n.createElement(i.Z,{location:m,title:w},n.createElement(a.Z,{title:v.frontmatter.title,description:v.frontmatter.description||v.excerpt}),n.createElement(d,null,n.createElement(y.rm,null,n.createElement("div",null,n.createElement(f,null,n.createElement("header",null,n.createElement(c,null,v.frontmatter.title),n.createElement(p,null,n.createElement(o.Z,{className:"align-middle text-primary",width:"18",height:"18"}),n.createElement("span",{className:"align-middle"}," date published : ",v.frontmatter.date," ")),n.createElement(p,null,n.createElement(s.Z,{className:"align-middle text-primary",width:"18",height:"18"}),n.createElement("span",{className:"align-middle"}," read time : ",v.frontmatter.time," mins "))),n.createElement(u,{dangerouslySetInnerHTML:{__html:v.html}})),n.createElement("nav",null,n.createElement(g,null,n.createElement(h,null,x&&n.createElement(l.Link,{to:x.fields.slug,rel:"prev"},"← ",x.frontmatter.title)),n.createElement(h,null,E&&n.createElement(l.Link,{to:E.fields.slug,rel:"next"},E.frontmatter.title," →"))))))))}}}]);
//# sourceMappingURL=component---src-templates-blogs-post-js-6d68889f63a0b510bc99.js.map