(this.webpackJsonpcoctails=this.webpackJsonpcoctails||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(16),r=n.n(s),a=(n(22),n(10)),l=n(9),d=n(2),j=(n(23),n(1)),o=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1],s=Object(d.f)().idDrink;return Object(c.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(s)).then((function(e){return e.json()})).then((function(e){return i(e.drinks)})).catch((function(e){return console.error(e)}))}),[s]),Object(j.jsx)("div",{children:n.map((function(e){var t=e.strIngredient1,n=e.strIngredient2,c=e.strIngredient3,i=e.strIngredient4,s=e.strIngredient5,r=e.strIngredient6,a=e.strIngredient7,l=e.strIngredient8,d=e.strIngredient9,o=e.strIngredient10,h=e.strIngredient11,u=e.strIngredient12,b=e.strIngredient13,O=e.strIngredient14,m=e.strIngredient15,x=e.strDrink,f=e.strDrinkThumb,g=e.strInstructions,v=e.idDrink,p=[];return p.push(t,n,c,i,s,r,a,l,d,o,h,u,b,O,m),p.filter((function(e){return null!==e?e:null})),Object(j.jsxs)("div",{className:"coktail-container",children:[Object(j.jsxs)("div",{className:"small-container",children:[Object(j.jsxs)("div",{className:"image-container",children:[Object(j.jsx)("div",{className:"titles",children:x}),Object(j.jsx)("img",{className:"coktails-image",alt:"coctail",src:f})]}),Object(j.jsxs)("div",{className:"ingredients-container",children:[Object(j.jsx)("div",{className:"titles",children:"Ingredients"}),Object(j.jsx)("div",{className:"ingredients",children:p.map((function(e){if(null!==e)return Object(j.jsxs)("div",{className:"coktail-signature",children:[Object(j.jsx)("img",{alt:"ingredients",src:"https://www.thecocktaildb.com/images/ingredients/".concat(e,"-Medium.png")}),Object(j.jsx)("div",{className:"description",children:e})]},e)}))})]})]}),Object(j.jsx)("div",{className:"instruction",children:Object(j.jsxs)("div",{className:"ins",children:[Object(j.jsx)("h3",{children:"Instructions"}),Object(j.jsx)("div",{children:g})]})})]},v)}))})},h=(n(30),function(){var e=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail").then((function(e){return e.json()})).then((function(e){return i(e.drinks)})).catch((function(e){return console.error(e)}))}),[]),Object(j.jsx)("div",{className:"main-container",children:Object(j.jsx)("div",{className:"container",children:n.map((function(e){var t=e.strDrink,n=e.strDrinkThumb,c=e.idDrink;return Object(j.jsxs)("div",{className:"coctails",children:[Object(j.jsx)("div",{className:"title",children:t}),Object(j.jsx)("a",{href:"/coctail/".concat(c),children:Object(j.jsx)("img",{src:n,alt:"coctail"})})]},c)}))})})};return console.warn(1),Object(j.jsxs)(l.a,{children:[Object(j.jsx)("nav",{className:"header",children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{to:"/",children:"Home"})})})}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/coctail/:idDrink",children:Object(j.jsx)(o,{})}),Object(j.jsx)(d.a,{path:"/",children:Object(j.jsx)(e,{})})]})]})});r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c049a5ef.chunk.js.map