import{a as m,T as y,u as q}from"./getCartProductFromLs-DZ0_6J83.js";const S=(n,e,i)=>{const r=document.querySelector(`#product${e}`);let t=parseInt(r.querySelector("#quantity").getAttribute("product-quantity"))||1;return n.target.className==="increment"&&(t<i?t+=1:t=i),n.target.className==="decrement"&&t>1&&(t-=1),r.querySelector("#quantity").textContent=t,r.querySelector("#quantity").setAttribute("product-quantity",t),t};m();const C=(n,e,i)=>{let r=m();const t=document.querySelector(`#product${e}`);let o=Number(t.querySelector("#quantity").textContent),u=t.querySelector(".price").textContent;u=Number(u.replace("₹",""));const d=r.find(a=>a.id===e);if(d&&o>1){o=d.quantity+o,o>i&&(o=i),u=Number(u*o);let a={id:e,quantity:o,price:u};a=r.map(l=>l.id===e?a:l),localStorage.setItem("cartProductLs",JSON.stringify(a)),y("addItems",e)}if(d)return!1;u=parseFloat((o*u).toFixed(3));let s={id:e,quantity:o,price:u};r.push(s),y("addItems",e),localStorage.setItem("cartProductLs",JSON.stringify(r)),q(r)},f=document.querySelector("#productContainer"),g=document.querySelector("#productTemplate"),b=n=>{if(!n)return!1;n.forEach((e,i)=>{const{actual_price:r,category:t,image:o,product_description:u,product_name:d,product_price:s,total_stock_available:a,id:l}=e;let c=document.importNode(g.content,!0);c.querySelector(".product-category").textContent=t,c.querySelector(".prdctImg").src=o,c.querySelector(".product-name").textContent=d,c.querySelector(".product-description").textContent=u,c.querySelector(".price").textContent=` ₹ ${s}`,c.querySelector(".actual-price").textContent=`₹ ${r}`,c.querySelector(".stocks").textContent=a,c.querySelector(".product-item").setAttribute("id",`product${l}`),c.querySelector(".quantity-buttons").addEventListener("click",p=>{S(p,l,a)}),c.querySelector(".add-to-cart").addEventListener("click",p=>{C(p,l,a)}),f.append(c)})};export{b as s};