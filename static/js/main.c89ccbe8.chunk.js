(this.webpackJsonpshoppingcartproject=this.webpackJsonpshoppingcartproject||[]).push([[0],{19:function(t,e,a){t.exports=a(32)},24:function(t,e,a){},25:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(10),r=a.n(s),c=(a(24),a(2)),i=a(3),l=a(5),u=a(4),p=a(6),h=(a(25),a(8),a(18)),d=a(1),m=a(15),y=(a(28),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).checkout=a.checkout.bind(Object(d.a)(a)),a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"checkout",value:function(){var t=this.props.total;Object(m.confirmAlert)({customUI:function(e){var a=e.onClose;return o.a.createElement("div",{className:"custom-ui"},o.a.createElement("button",{onClick:function(){a()}},"X"),o.a.createElement("h1",null,"Total Price is: Rs. ",t),o.a.createElement("h2",null,"Transaction successful"))}})}},{key:"render",value:function(){var t=this.props.total,e=this.props.qty;console.log("qty in render total",e);return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"footer"},o.a.createElement("h3",{className:"row"},o.a.createElement("span",{className:"col-6"},"Qty:"),o.a.createElement("span",{className:"col-6 text-right"},e)),o.a.createElement("h3",{className:"row"},o.a.createElement("span",{className:"col-6"},"Total:"),o.a.createElement("span",{className:"col-6 text-right"},t)),o.a.createElement("button",{className:"btn btn-outline-primary",onClick:this.checkout},"Checkout")))}}]),e}(n.PureComponent)),f=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={qty:0},a.add=a.add.bind(Object(d.a)(a)),a.subtract=a.subtract.bind(Object(d.a)(a)),a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"add",value:function(){this.setState({qty:this.state.qty+1}),this.props.handleTotal(this.props.price),console.log("this.state.qty",this.state.qty),this.props.displayqty(this.state.qty)}},{key:"subtract",value:function(){this.setState({qty:this.state.qty-1}),this.props.handleTotal(-this.props.price),this.props.displayqtyminus(-this.state.qty)}},{key:"render",value:function(){var t=this.state.qty;console.log("qty in product render",t);return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"product"},o.a.createElement("div",{className:"product-image"},o.a.createElement("img",{src:this.props.imgurl,alt:"prodimg"}),o.a.createElement("div",{className:"offertext"},o.a.createElement("p",null,this.props.offertxt))),o.a.createElement("div",{className:"product-details"},o.a.createElement("h3",{className:"product-title"},this.props.brandname),o.a.createElement("p",{className:"product-description"},this.props.prodname),o.a.createElement("p",{className:"product-quantity"}," ",this.props.quantity," "),o.a.createElement("p",{className:"product-mrp"}," MRP ",this.props.mrp," "),o.a.createElement("p",{className:"product-price"},"Rs. ",this.props.price),o.a.createElement("button",{className:"btn btn-outline-primary btncart",onClick:this.add}," Add to Cart "),o.a.createElement("button",{className:"btn btn-outline-primary btnqty",onClick:this.add}," + "),o.a.createElement("span",null,this.state.qty," "),o.a.createElement("button",{className:"btn btn-outline-primary btnqty",onClick:this.subtract,disabled:this.state.qty<1}," - "))))}}]),e}(n.PureComponent),b=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(l.a)(this,Object(u.a)(e).call(this,t)),console.log("----------------------------------------",a.props),a.state={total:0,qty:0,productList:[],products:[]},a.calculateTotal=a.calculateTotal.bind(Object(d.a)(a)),a.showqty=a.showqty.bind(Object(d.a)(a)),a.showqtyminus=a.showqtyminus.bind(Object(d.a)(a)),a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("./config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(e){return t.setState({products:e.products})}))}},{key:"calculateTotal",value:function(t){this.setState({total:this.state.total+t}),console.log(this.state.total)}},{key:"showqty",value:function(t){this.setState({qty:this.state.qty+1}),console.log("showqtyshowqty in productdetlist",t)}},{key:"showqtyminus",value:function(t){this.setState({qty:this.state.qty-1}),console.log("showqtyshowqty in productdetlist minus",t)}},{key:"render",value:function(){var t=this.state.qty;if(console.log("qty in priductlistdet render",t),!this.state.products)return o.a.createElement("p",null,"loading...!!!!");var e=this,a=this.state.products.map((function(t){return o.a.createElement(f,{brandname:t.brandname,prodname:t.prodname,quantity:t.quantity,price:t.price,mrp:t.mrp,imgurl:t.imgurl,offertxt:t.offertxt,handleTotal:e.calculateTotal,displayqty:e.showqty,displayqtyminus:e.showqtyminus})}));return o.a.createElement(n.Fragment,null,o.a.createElement("div",{class:"shopping-cart"},a,o.a.createElement(y,{total:this.state.total,qty:this.state.qty})),o.a.createElement("p",{className:"footercpy"},"Shopping Cart"))}}]),e}(n.PureComponent),v=function(t){function e(t){return Object(c.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,t))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(b,null)))}}]),e}(n.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}r.a.render(o.a.createElement(v,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/shoppingcartproject",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/shoppingcartproject","/service-worker.js");g?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):q(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(e,t)}))}}()},8:function(t,e,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.c89ccbe8.chunk.js.map