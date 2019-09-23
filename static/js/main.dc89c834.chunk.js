(window.webpackJsonpmec=window.webpackJsonpmec||[]).push([[0],{37:function(e,t,a){e.exports=a(76)},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),l=a(11),s=a(9),i=a(31),u=a(32),d="GET_PRODUCTS",m="LOADING",p={items:[],loading:!1},h=Object(s.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case d:return Object.assign({},e,{items:t.products});case m:return Object.assign({},e,{loading:t.loading});default:return e}}}),_=[u.a],f=Object(s.createStore)(h,{},Object(i.composeWithDevTools)(s.applyMiddleware.apply(void 0,_))),v={BASE_URL:"https://www.mec.ca/api/v1/",LOGO:'\n    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144" alt="MEC">\n      <defs>\n          <style>.logo-cls-2{fill:#fff}</style>\n      </defs>\n      <path fill="#0ca948" d="M0 0h144v144H0z"></path>\n      <path class="logo-cls-2" d="M66.5 97.94h25.47v-8.89H76.44V75.07h12.97v-8.88H76.44v-12.7h15.53V44.6H66.5v53.34zM112.87 43.4c-9.53 0-15.38 6.41-15.38 14.66v26.43c0 8.24 5.85 14.65 15.38 14.65s14.41-5.93 14.41-13.93v-6.49h-8.89v6.4c0 3.13-1.76 5.29-5.36 5.29s-5.45-2.16-5.45-5.12v-28c0-3 1.84-5.13 5.45-5.13s5.36 2.16 5.36 5.29v6.4h8.89v-6.51c0-8.01-4.96-13.94-14.41-13.94zM40.27 71.67l-1.69 9.85-1.68-9.85-5.52-27.07H18v53.34h8.89V59.26l2.08 11.61 5.37 27.07h8.49l5.36-27.07 2.08-11.61v38.68h8.89V44.6H45.79l-5.52 27.07z"></path>\n    </svg>\n  '},g=a(15),E=function(e){return c.a.createElement("header",{className:"/"===e.location.pathname?"header header--full":"header"},c.a.createElement("div",{className:"header--center"},c.a.createElement(g.b,{to:"/",className:"header__logo",dangerouslySetInnerHTML:{__html:v.LOGO}}),c.a.createElement("input",{className:"header__search",type:"text",placeholder:"Search products",onKeyDown:function(t){"Enter"===t.key&&(e.history.push({pathname:"/products",search:"?keyword=".concat(t.target.value)}),t.target.value=null)}})))},w=a(34),y=a.n(w),N=function(e){return function(t){return t(O(!0)),y.a.get("".concat(v.BASE_URL,"/products/search?keywords=").concat(e)).then((function(e){e.total_product_count?(t(b([])),t(O(!1))):(t(b(e.data.products)),t(O(!1)))})).catch((function(e){console.log(e),t(b([])),t(O(!1))}))}},b=function(e){return{type:d,products:e}},O=function(e){return{type:m,loading:e}},k=Object(l.b)((function(e){return{search:e.search}}),(function(e){return{handleSearch:function(t){e(N(t))}}}))(E),j=a(35),H=a.n(j),L=a(36),M=a.n(L),S=function(e){var t=e.getProducts,a=e.location,r=e.products,o=e.loading;Object(n.useEffect)((function(){t(H.a.parse(a.search).keyword)}),[t,a]);var l=M.a.isUndefined(r)?c.a.createElement("li",{className:"products__list__item--empty"},"Can't find products that you're looking for"):r.map((function(e){return c.a.createElement("li",{className:"products__list__item",key:e.product_code},c.a.createElement("div",{className:"products__list__img-container"},c.a.createElement("img",{src:e.default_image_urls.small_image_url,alt:e.default_image_urls})),c.a.createElement("div",{className:"products__list__name"},e.full_name))})),s=c.a.createElement("div",{className:"loader"},"Loading",c.a.createElement("span",{className:"loader__dot"},"."),c.a.createElement("span",{className:"loader__dot"},"."),c.a.createElement("span",{className:"loader__dot"},"."));return c.a.createElement("div",{className:"products"},c.a.createElement("ul",{className:"products__list"},o?s:l))},B=Object(l.b)((function(e){return{products:e.products.items,loading:e.products.loading}}),(function(e){return{getProducts:function(t){e(N(t))}}}))(S),x=function(){return c.a.createElement("div",{className:"404"},"Can't find page")},z=a(10),C=function(){return c.a.createElement(l.a,{store:f},c.a.createElement("div",{className:"app"},c.a.createElement(g.a,null,c.a.createElement(z.a,{path:"/",component:k}),c.a.createElement(z.c,null,c.a.createElement(z.a,{path:"/products",component:B}),c.a.createElement(z.a,{component:x})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.dc89c834.chunk.js.map