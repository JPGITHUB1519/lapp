(this.webpackJsonplapp=this.webpackJsonplapp||[]).push([[0],{38:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(32),s=c.n(i),r=(c(38),c(11)),o=c(2),l=c(0),j=function(){return Object(l.jsx)("h1",{children:"HomePage"})},u=c(4),h=c.n(u),b=c(10),p=c(7),m=c(12),d=c.n(m),O=c(18),f=c.n(O),g=["Assassin","Fighter","Mage","Marksman","Support","Tank"],x="11.11.1",v="https://ddragon.leagueoflegends.com/cdn",k="".concat(v,"/").concat(x,"/data/").concat("en_US"),N="".concat(v,"/").concat(x,"/img"),w="".concat(v,"/img"),C=function(){var e=Object(b.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("".concat(k,"/champion.json"));case 2:return t=e.sent,c=t.data.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(h.a.mark((function e(t){var c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("".concat(k,"/champion/").concat(t,".json"));case 2:return c=e.sent,n=c.data.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e){return"https://u.gg/lol/champions/".concat(e,"/build")},_=function(e){return"https://na.op.gg/champion/".concat(e,"/statistics/")},F=function(e){return"https://www.probuilds.net/champions/details/".concat(e)},D=function(e){return"https://blitz.gg/lol/champions/".concat(e)},I=c(33);var T=function(e){return Object(l.jsx)("img",{className:"responsive-image",src:e.image,alt:e.alt,width:e.width,height:e.height})};var A=function(e){var t=e.champion,c=Object(o.g)();return Object(l.jsxs)(r.b,{className:"champions-list-item",to:"".concat(c.url,"/").concat(t.id),children:[Object(l.jsx)(T,{image:"".concat(N,"\\").concat(t.image.group,"\\").concat(t.image.full),alt:t.name,width:100,height:100}),Object(l.jsx)("p",{children:t.name})]})};var L=function(e){return Object(l.jsx)("div",{className:"champions-list",children:Object.keys(e.champions).map((function(t){var c=e.champions[t];return Object(l.jsx)(A,{champion:c},c.key)}))})};var z=function(e){return Object(l.jsx)("button",{onClick:function(t){e.onClick(e.filterName)},className:"tag-filter-button ".concat(e.selected?"tag-filter-button--selected":""),children:e.filterName})};var E=function(e){return Object(l.jsx)("div",{className:"champions-filter",children:e.filters.map((function(t){return Object(l.jsx)(z,{filterName:t,onClick:e.onFilterClick,selected:t===e.selectedTagFilter})}))})};var P=function(e){return Object(l.jsx)("form",{className:"champion-search-form",children:Object(l.jsx)("input",{className:"champion-search-form__input",value:e.value,placeholder:"Search for a champion...",onChange:function(t){e.onInputChange(t.target.value)}})})};var M=function(e){return Object(l.jsxs)("div",{className:"champions-searcher",children:[Object(l.jsx)(E,{filters:["All"].concat(Object(I.a)(g)),selectedTagFilter:e.selectedTagFilter,onFilterClick:e.onFilterClick}),Object(l.jsx)(P,{value:e.searchValue,onInputChange:e.onSearchInputChange}),Object.keys(e.champions).length>0?Object(l.jsx)(L,{champions:e.champions}):Object(l.jsx)("div",{className:"no-champions-notification-container",children:Object(l.jsx)("p",{children:"No champions match the filter criteria."})})]})};var B=function(e){var t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)([]),r=Object(p.a)(s,2),j=r[0],u=r[1],m=Object(n.useState)(""),d=Object(p.a)(m,2),O=d[0],g=d[1],x=Object(n.useState)("All"),v=Object(p.a)(x,2),k=v[0],N=v[1],w=Object(n.useState)(!1),y=Object(p.a)(w,2),S=y[0],_=y[1],F=Object(n.useState)(!1),D=Object(p.a)(F,2),I=D[0],T=D[1];return Object(o.g)(),Object(n.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T(!1),_(!0),e.prev=2,e.next=5,C();case 5:t=e.sent,i(t),u(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),T(!0);case 13:_(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){!function(){var e;t=a,c=O,e=Object.keys(t).filter((function(e){return e.toLowerCase().includes(c.toLowerCase())})).reduce((function(e,c){return e[c]=t[c],e}),{}),e=function(e,t){return"All"===t?e:Object.keys(e).filter((function(c){return e[c].tags.includes(t)})).reduce((function(t,c){return t[c]=e[c],t}),{})}(e,k),u(e);var t,c}()}),[O,k]),Object(l.jsxs)("div",{className:"champions-page",children:[S?Object(l.jsx)("div",{className:"full-screen-loader-container",children:Object(l.jsx)(f.a,{loading:S,size:200,color:"#C2902D"})}):Object(l.jsx)(M,{champions:j,searchInputValue:O,selectedTagFilter:k,onSearchInputChange:function(e){g(e)},onFilterClick:function(e){N(e)}}),I&&Object(l.jsx)("p",{children:"Something went wrong \ud83d\ude25"})]})};var H=function(e){var t,c=(t=e.championID,{"u.gg":S(t),"op.gg":_(t),probuilds:F(t),"blitz.gg":D(t)});return Object(l.jsx)("div",{class:"champion-build-links",children:Object.keys(c).map((function(e){return Object(l.jsx)("a",{href:c[e],className:"champion-build-links__link",target:"_blank",children:e})}))})};var J=function(e){var t=e.championData;return Object(l.jsxs)("div",{className:"champion-basic-info",children:[Object(l.jsx)(T,{image:"".concat(w,"\\").concat(t.image.group,"\\splash\\").concat(t.id,"_0.jpg"),alt:t.name}),Object(l.jsx)(H,{championID:t.id}),Object(l.jsxs)("p",{children:["Name: ",t.name]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["Title: ",t.title," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["Lore: ",t.lore," "]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["Role: ",t.tags?t.tags[0]:""]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["Difficulty: ",t.info?t.info.difficulty:""]}),Object(l.jsx)("br",{})]})};function V(e){return Object(l.jsx)("button",{className:e.className,style:{background:"url(".concat(e.image,") 0 0 no-repeat"),border:"0",width:"".concat(e.width,"px"),height:"".concat(e.height,"px"),cursor:"pointer"},onClick:e.onClick})}V.defaultProps={width:65,height:65};var R=V;var U=function(e){var t,c=Object(n.useState)("passive"),a=Object(p.a)(c,2),i=a[0],s=a[1],r=e.championData;return t="passive"===i?r.passive:r.spells.filter((function(e){return e.id===i}))[0],console.log(t),Object(l.jsxs)("div",{className:"champion-abilities-info",children:[Object(l.jsx)("h2",{children:"Abilities"}),Object(l.jsxs)("div",{className:"champion-abilities-info__menu",children:[Object(l.jsx)(R,{className:"passive"===i?"selected":"",image:"".concat(N,"/").concat(r.passive.image.group,"/").concat(r.passive.image.full),width:65,height:65,onClick:function(){return s("passive")}}),r.spells.map((function(e){return Object(l.jsx)(R,{className:e.id===i?"selected":"",image:"".concat(N,"/").concat(e.image.group,"/").concat(e.image.full),width:65,height:65,onClick:function(){return s(e.id)}})})),Object(l.jsxs)("div",{className:"champion-abilities-info__description",children:[Object(l.jsx)("p",{className:"champion-abilities-info__ability-type",children:i}),Object(l.jsx)("p",{className:"champion-abilities-info_ability-name",children:t.name}),Object(l.jsx)("p",{className:"champion-abilities-info__ability-description",children:t.description})]})]})]})};var q=function(e){var t=e.championData;return Object(l.jsxs)("div",{className:"champion-skins-gallery",children:[Object(l.jsx)("h2",{children:"Skins:"}),t.skins.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:e.name}),Object(l.jsx)(T,{image:"".concat(w,"\\").concat(t.image.group,"\\splash\\").concat(t.id,"_").concat(e.num,".jpg"),alt:e.name,width:500,height:300})]})}))]})};var G=function(e){var t=Object(n.useState)([]),c=Object(p.a)(t,2),a=c[0],i=c[1],s=Object(n.useState)(!0),r=Object(p.a)(s,2),j=r[0],u=r[1],m=Object(n.useState)(!1),d=Object(p.a)(m,2),O=d[0],g=d[1],x=Object(o.f)().championID;return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!1),u(!0),e.prev=2,e.next=5,y(x);case 5:t=e.sent,i(t[x]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),g(!0);case 12:u(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(l.jsxs)("div",{className:"champion-info",children:[j?Object(l.jsx)("div",{className:"full-screen-loader-container",children:Object(l.jsx)(f.a,{loading:j,size:200,color:"#C2902D"})}):Object.keys(a).length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(J,{championData:a}),Object(l.jsx)(U,{championData:a}),Object(l.jsx)(q,{championData:a}),Object(l.jsx)("br",{})]}),O&&Object(l.jsx)("p",{children:"Something went wrong \ud83d\ude25"})]})};var K=function(e){return Object(l.jsx)(r.a,{basename:"/lapp",children:Object(l.jsxs)("div",{class:"container",children:[Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/champions",children:"Champions"})})]})}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/champions/:championID",children:Object(l.jsx)(G,{})}),Object(l.jsx)(o.a,{path:"/champions",children:Object(l.jsx)(B,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(j,{})})]})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(K,{})}),document.getElementById("root")),Q()}},[[69,1,2]]]);
//# sourceMappingURL=main.5328c729.chunk.js.map