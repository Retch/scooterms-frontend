(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},c=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7819391e"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=a(t);var u=new Error;c=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"8f9b":function(t,e,n){"use strict";n("ae13")},"98da":function(t,e,n){},a737:function(t,e,n){"use strict";n("98da")},a93e:function(t,e,n){"use strict";n("f06f")},ae13:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(t,e,n,o,c,a){var i=Object(r["B"])("router-view");return Object(r["t"])(),Object(r["g"])(i)}var c={name:"App"};n("8f9b");c.render=o;var a=c,i=n("5502"),s=(n("098b"),n("e1ae"),n("4121"),n("bddf"),n("485c")),u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));function l(t,e,n,o,c,a){var i=Object(r["B"])("Header"),s=Object(r["B"])("HereMap");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(i),Object(r["j"])(s)])}n("b0c0");var p=Object(r["K"])("data-v-4027dae8");Object(r["w"])("data-v-4027dae8");var d={id:"map"},m=Object(r["j"])("br",null,null,-1),h=Object(r["j"])("br",null,null,-1),b=Object(r["j"])("br",null,null,-1),f=Object(r["j"])("br",null,null,-1),j=Object(r["j"])("br",null,null,-1),O=Object(r["j"])("br",null,null,-1),g=Object(r["j"])("br",null,null,-1),v=Object(r["j"])("br",null,null,-1);Object(r["u"])();var w=p((function(t,e,n,o,c,a){var i=Object(r["B"])("Toast"),s=Object(r["B"])("Button"),u=Object(r["B"])("Card");return Object(r["t"])(),Object(r["g"])("div",d,[Object(r["j"])(i),(Object(r["t"])(),Object(r["g"])("div",{id:"mapContainer",style:{height:"93vh"},ref:"hereMap",key:t.scooterlist},null,512)),!0===t.showscooterinfo&&0==t.starttimestamp?(Object(r["t"])(),Object(r["g"])(u,{key:t.componentKey,style:{width:"25rem","margin-bottom":"2em",position:"absolute",bottom:"0",left:"0"}},{title:p((function(){return[Object(r["j"])(s,{onClick:e[1]||(e[1]=function(e){return t.closeScooterInformation()}),icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined"}),Object(r["i"])(" Scooter "+Object(r["F"])(t.selectedscooter.licenseplate),1)]})),content:p((function(){return[Object(r["i"])(" Akku: "+Object(r["F"])(t.selectedscooter.battery)+"%",1),m,h,Object(r["j"])(s,{onClick:e[2]||(e[2]=function(e){return t.driveScooter()}),label:"Losfahren",class:"p-button-rounded"})]})),_:1})):Object(r["h"])("",!0),0!=t.starttimestamp?(Object(r["t"])(),Object(r["g"])(u,{key:t.rentaltime,style:{width:"25rem","margin-bottom":"2em",position:"absolute",bottom:"0",left:"0"}},{title:p((function(){return[Object(r["i"])("Scooter: "+Object(r["F"])(t.selectedscooter.licenseplate),1)]})),content:p((function(){return[Object(r["i"])(" Laufzeit: "+Object(r["F"])(t.rentaltime)+" "+Object(r["F"])(t.calcTime()),1),b,f,Object(r["j"])(s,{onClick:e[3]||(e[3]=function(e){return t.parkScooter()}),label:"Parken",class:"p-button-rounded"})]})),_:1})):Object(r["h"])("",!0),!0===t.showscooterhotspotinfo&&0==t.starttimestamp?(Object(r["t"])(),Object(r["g"])(u,{key:t.componentKey,style:{width:"25rem","margin-bottom":"2em",position:"absolute",bottom:"0",left:"0"}},{title:p((function(){return[Object(r["j"])(s,{onClick:e[4]||(e[4]=function(e){return t.closeScooterHotspotInformation()}),icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined"}),Object(r["i"])(" Scooterhotspot "+Object(r["F"])(t.selectedscooterhotspot.name),1)]})),content:p((function(){return[Object(r["i"])(" Stellplätze frei: "+Object(r["F"])(t.selectedscooterhotspot.maxscootercount-t.selectedscooterhotspot.scootercount),1),j,O]})),_:1})):Object(r["h"])("",!0),!0===t.showmaintenancedepartmentinfo&&0==t.starttimestamp?(Object(r["t"])(),Object(r["g"])(u,{key:t.componentKey,style:{width:"25rem","margin-bottom":"2em",position:"absolute",bottom:"0",left:"0"}},{title:p((function(){return[Object(r["j"])(s,{onClick:e[5]||(e[5]=function(e){return t.closeMaintenanceDepartmentInformation()}),icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined"}),Object(r["i"])(" Maintenancedepartment "+Object(r["F"])(t.selectedmaintenancedepartment.name),1)]})),content:p((function(){return[Object(r["i"])(" Reparaturkapazität: "+Object(r["F"])(t.selectedmaintenancedepartment.scootercapacity)+"/"+Object(r["F"])(t.selectedmaintenancedepartment.maxscootercapacity),1),g,v]})),_:1})):Object(r["h"])("",!0)])})),k=n("1da1"),y=(n("b680"),n("d81d"),n("159b"),n("96cf"),n("bc3a")),x=n.n(y),S=n("9899"),R=n("18cb"),I=n("b3b6"),B=Object(r["k"])({name:"HereMap",setup:function(){Object(R["b"])()},components:{Card:S["a"],Toast:I["a"]},props:{center:Object},data:function(){return{componentKey:0,platform:null,apikey:"UCQF_BUyy0csLSNw3Tp6qr08CVT_YnS0xtObBme-_js",scooterlist:[],scooterhotspotlist:[],maintenancedepartmentlist:[],selectedscooter:null,selectedscooterhotspot:null,selectedmaintenancedepartment:null,showscooterinfo:!1,showscooterhotspotinfo:!1,showmaintenancedepartmentinfo:!1,starttimestamp:0,rentaltime:0}},mounted:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=new window.H.service.Platform({apikey:t.apikey}),t.platform=n,t.initializeHereMap();case 3:case"end":return e.stop()}}),e)})))()},created:function(){this.calcTimeInterval=setInterval(this.calcTime,500),this.reloadScooterMapInterval=setInterval(this.reloadScooterMap,5e3),this.timer=this.calcTimeInterval,this.timer=this.reloadScooterMapInterval},unmounted:function(){this.timer=clearInterval(this.reloadScooterMapInterval),this.timer=clearInterval(this.calcTimeInterval)},beforeUnmount:function(){this.starttimestamp=0,this.rentaltime=0},methods:{fetchScooters:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"http://localhost:8080/scooters",headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 2:n=e.sent,t.scooterlist=n.data;case 4:case"end":return e.stop()}}),e)})))()},returnScooters:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"http://localhost:8080/scooters",headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))()},fetchScooterHotspots:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"http://localhost:8080/scooterhotspots",headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 2:n=e.sent,t.scooterhotspotlist=n.data;case 4:case"end":return e.stop()}}),e)})))()},fetchMaintenanceDepartments:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"http://localhost:8080/maintenancedepartments",headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 2:n=e.sent,t.maintenancedepartmentlist=n.data;case 4:case"end":return e.stop()}}),e)})))()},reloadScooterMap:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.returnScooters();case 2:if(n=e.sent,""!=t.selectedscooter||JSON.stringify(t.scooterlist)==JSON.stringify(n)){e.next=6;break}return e.next=6,t.initializeHereMap();case 6:case"end":return e.stop()}}),e)})))()},forceReloadScooterMap:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.initializeHereMap();case 2:case"end":return e.stop()}}),e)})))()},calcTime:function(){if(0!=this.starttimestamp){var t=Math.floor(Date.now()/1e3)-this.starttimestamp,e=0;while(t>59)e+=1,t-=60;t<10&&(t="0"+t),this.rentaltime=e+":"+t}},showScooterInformation:function(t){this.showscooterinfo=!0,this.selectedscooter=t,this.closeScooterHotspotInformation(),this.closeMaintenanceDepartmentInformation(),this.forceRerenderInfo()},closeScooterInformation:function(){this.showscooterinfo=!1,this.selectedscooter=null,this.forceRerenderInfo()},showScooterHotspotInformation:function(t){this.showscooterhotspotinfo=!0,this.selectedscooterhotspot=t,this.closeScooterInformation(),this.closeMaintenanceDepartmentInformation(),this.forceRerenderInfo()},closeScooterHotspotInformation:function(){this.showscooterhotspotinfo=!1,this.selectedscooterhotspot=null,this.forceRerenderInfo()},showMaintenanceDepartmentInformation:function(t){this.showmaintenancedepartmentinfo=!0,this.selectedmaintenancedepartment=t,this.closeScooterInformation(),this.closeScooterHotspotInformation(),this.forceRerenderInfo()},closeMaintenanceDepartmentInformation:function(){this.showmaintenancedepartmentinfo=!1,this.selectedmaintenancedepartment=null,this.forceRerenderInfo()},driveScooter:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.selectedscooter.id,r="http://localhost:8080/scooters/rent/"+n,e.next=4,x()({method:"get",url:r,headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 4:o=e.sent,t.starttimestamp=o.data,t.forceRerenderInfo();case 7:case"end":return e.stop()}}),e)})))()},parkScooter:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=(Math.random()*(50.95-51.01)+51.01).toFixed(6),r=(Math.random()*(11-11.06)+11.06).toFixed(6),e.next=4,x()({method:"post",url:"http://localhost:8080/scooters/park",headers:{Authorization:"Bearer "+t.$store.state.jwt,"content-type":"application/json"},data:{latitude:n,longitude:r}}).catch((function(t){return{error:t}}));case 4:return t.starttimestamp=0,t.rentaltime=0,t.closeScooterInformation(),t.showParkSuccess(),e.next=10,new Promise((function(t){return setTimeout(t,2e3)}));case 10:t.forceReloadScooterMap();case 11:case"end":return e.stop()}}),e)})))()},forceRerenderInfo:function(){this.componentKey+=1},initializeHereMap:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n,r,o,c,a,i,s,u,l,p,d,m,h,b,f,j;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchScooters();case 2:return e.next=4,t.fetchScooterHotspots();case 4:return e.next=6,t.fetchMaintenanceDepartments();case 6:n=t.$refs.hereMap,r=window.H,o=t.platform.createDefaultLayers(),c=new r.Map(n,o.vector.normal.map,{zoom:13,center:{lat:50.974321,lng:11.0348092}}),a=new r.map.Icon("https://i.ibb.co/sQfX4d5/green.png",{size:{w:32,h:32}}),i=new r.map.Icon("https://i.ibb.co/pQtYWfB/red.png",{size:{w:32,h:32}}),s=new r.map.Icon("https://i.ibb.co/crBCp22/Orange.png",{size:{w:32,h:32}}),u=new r.map.Icon("https://i.ibb.co/dG1KBVR/parking.png",{size:{w:28,h:28}}),l=new r.map.Icon("https://i.ibb.co/KGTNY1D/repair.png",{size:{w:28,h:28}}),p=[],d=[],m=[],h=function(e,n,o){var c="";switch(e.status){case"damaged":c=s;break;case"lowonbattery":c=i;break;default:c=a}var u=new r.map.Marker({lat:e.ndegree,lng:e.edegree},{icon:c});u.addEventListener("tap",(function(){t.showScooterInformation(e)})),p.push(u)},b=function(e,n,o){var c=new r.map.Marker({lat:e.ndegree,lng:e.edegree},{icon:u});c.addEventListener("tap",(function(){t.showScooterHotspotInformation(e)})),d.push(c)},f=function(e,n,o){var c=new r.map.Marker({lat:e.ndegree,lng:e.edegree},{icon:l});c.addEventListener("tap",(function(){t.showMaintenanceDepartmentInformation(e)})),m.push(c)},t.scooterlist.forEach(h),t.scooterhotspotlist.forEach(b),t.maintenancedepartmentlist.forEach(f),j=function(t,e,n){c.addObject(t)},p.forEach(j),d.forEach(j),m.forEach(j),addEventListener("resize",(function(){return c.getViewPort().resize()})),c.addEventListener("tap",(function(){})),new r.mapevents.Behavior(new r.mapevents.MapEvents(c));case 31:case"end":return e.stop()}}),e)})))()}}});n("a93e");B.render=w,B.__scopeId="data-v-4027dae8";var M=B,L={class:"p-d-flex p-jc-between"},E={class:"p-as-center p-ml-1"},z=Object(r["j"])("div",{class:"p-as-center"},[Object(r["j"])("h3",{style:{}},"Scooter-MS")],-1),A=Object(r["j"])("div",{class:"p-as-center p-mr-1"},[Object(r["j"])("img",{alt:"logo",src:"https://i.ibb.co/5MZBcW1/Logo.png",height:"40",class:""})],-1),C=Object(r["j"])("h3",null,"Scooter-MS",-1),T={style:{}},H={class:""};function $(t,e,n,o,c,a){var i=this,s=Object(r["B"])("Button"),u=Object(r["B"])("Sidebar");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["j"])("div",L,[Object(r["j"])("div",E,[Object(r["j"])(s,{icon:"pi pi-bars",onClick:e[1]||(e[1]=function(e){t.visibleLeft=!0,t.fetchCredits()}),class:"p-button-text"})]),z,A]),Object(r["j"])(u,{visible:t.visibleLeft,"onUpdate:visible":e[5]||(e[5]=function(e){return t.visibleLeft=e}),baseZIndex:1e3,class:"p-sidebar-sm"},{default:Object(r["I"])((function(){return[C,Object(r["j"])("h4",T,"Guthaben: "+Object(r["F"])(i.userCredit)+"€",1),Object(r["j"])("div",H,[Object(r["j"])(s,{label:"Scootermap",icon:"pi pi-map",class:"p-button-text p-d-block",onClick:e[2]||(e[2]=function(e){return t.$router.push("home")})}),Object(r["j"])(s,{label:"Account",icon:"pi pi-user",class:"p-button-text p-d-block",onClick:e[3]||(e[3]=function(e){return t.$router.push("account")})}),Object(r["j"])(s,{label:"Log out",onClick:e[4]||(e[4]=function(e){return t.logout()}),icon:"pi pi-eject",class:"p-button-text p-d-block"})])]})),_:1},8,["visible"])],64)}var F=Object(r["k"])({data:function(){return{visibleLeft:!1,userCredit:0}},mounted:function(){"novalidtoken"==this.$store.state.jwt&&this.$router.push("/")},methods:{logout:function(){this.$router.push("logout"),this.$emit("logout")},fetchCredits:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"http://localhost:8080/accountmgr/myaccount",headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 2:n=e.sent,t.userCredit=n.data.creditedEuros;case 4:case"end":return e.stop()}}),e)})))()}}});F.render=$;var P=F,_=Object(r["k"])({name:"Home",components:{HereMap:M,Header:P}});_.render=l;var D=_;function V(t,e,n,o,c,a){var i=Object(r["B"])("Header"),s=Object(r["B"])("AccountInfo"),u=Object(r["B"])("RentalEntityList");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(i),Object(r["j"])(s,{style:{display:"inline-block","margin-left":"40vw","margin-right":"auto","text-align":"left"}}),Object(r["j"])(u)])}var K={style:{display:"block","text-align":"center"}},U={class:""},Z={class:""},N={class:""},Y={class:"p-field p-grid"},G=Object(r["j"])("label",{for:"topup",class:"p-col-fixed",style:{width:"100px"}},"Betrag",-1),J={class:"p-col"};function W(t,e,n,o,c,a){var i=this,s=Object(r["B"])("InputText"),u=Object(r["B"])("Button");return Object(r["t"])(),Object(r["g"])("div",K,[Object(r["j"])("div",U,[Object(r["j"])("p",null,"Kundennummer: "+Object(r["F"])(t.id),1)]),Object(r["j"])("div",Z,[Object(r["j"])("p",null,"Email: "+Object(r["F"])(t.email),1)]),Object(r["j"])("div",N,[Object(r["j"])("p",null,"Guthaben: "+Object(r["F"])(t.creditedEuros)+"€",1)]),Object(r["j"])("div",Y,[G,Object(r["j"])("div",J,[Object(r["j"])(s,{id:"topup",modelValue:this.topupamount,"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.topupamount=t}),type:"text"},null,8,["modelValue"]),Object(r["j"])(u,{icon:"pi pi-check",class:"p-button-rounded p-ml-2",onClick:e[2]||(e[2]=function(e){return t.topUpAccount()})})])])])}var Q=Object(r["k"])({name:"Account",data:function(){return{creditedEuros:0,email:"",id:0,topupamount:""}},mounted:function(){this.fetchAccountInfo()},methods:{fetchAccountInfo:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"http://localhost:8080/accountmgr/myaccount",headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 2:n=e.sent,t.email=n.data.email,t.creditedEuros=n.data.creditedEuros,t.id=n.data.id;case 6:case"end":return e.stop()}}),e)})))()},topUpAccount:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"http://localhost:8080/accountmgr/myaccount/topup/"+t.topupamount,headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 2:t.fetchAccountInfo();case 3:case"end":return e.stop()}}),e)})))()}}});Q.render=W;var q=Q,X={class:"p-d-block p-mx-auto p-m-0 p-mt-6"},tt=Object(r["i"])("> "),et=Object(r["j"])("br",null,null,-1);function nt(t,e,n,o,c,a){var i=Object(r["B"])("Card");return Object(r["t"])(),Object(r["g"])("div",X,[(Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["z"])(t.rentals,(function(e){return Object(r["t"])(),Object(r["g"])("div",{key:e.id},[Object(r["j"])(i,{class:"p-mb-2 p-mx-auto",style:{width:"25rem"}},{title:Object(r["I"])((function(){return[Object(r["i"])(" Fahrt #"+Object(r["F"])(e.id),1)]})),content:Object(r["I"])((function(){return[Object(r["i"])(" Datum: "+Object(r["F"])(t.calcDate(e.start_timestamp)),1),et,Object(r["i"])(" Dauer: "+Object(r["F"])(t.calcTime(e.end_timestamp-e.start_timestamp))+" Minuten ",1)]})),default:Object(r["I"])((function(){return[tt]})),_:2},1024)])})),128))])}var rt=Object(r["k"])({name:"ScooterRentalEntity",components:{Card:S["a"]},data:function(){return{rentals:[]}},mounted:function(){this.fetchAccountRentals()},methods:{fetchAccountRentals:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"get",url:"http://localhost:8080/accountmgr/myhistory",headers:{Authorization:"Bearer "+t.$store.state.jwt}}).catch((function(t){return{error:t}}));case 2:n=e.sent,t.rentals=n.data;case 4:case"end":return e.stop()}}),e)})))()},calcTime:function(t){var e=0;while(t>59)e+=1,t-=60;return t<10&&(t="0"+t),e+":"+t},calcDate:function(t){var e=new Date(1e3*t);return e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()}}});rt.render=nt;var ot=rt,ct=Object(r["k"])({name:"Accountpage",components:{Header:P,AccountInfo:q,RentalEntityList:ot}});ct.render=V;var at=ct;function it(t,e,n,o,c,a){var i=Object(r["B"])("Login");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(i)])}var st={class:"p-d-flex"},ut={class:"p-d-block p-mx-auto p-mt-6  "},lt=Object(r["j"])("img",{class:"",src:"https://i.ibb.co/5MZBcW1/Logo.png",alt:"Scooter-MS Logo",style:{height:"30vh"}},null,-1),pt={class:"p-inputgroup p-mt-3"},dt=Object(r["j"])("span",{class:"p-inputgroup-addon"},[Object(r["j"])("i",{class:"pi pi-user"})],-1),mt={class:"p-inputgroup"},ht=Object(r["j"])("span",{class:"p-inputgroup-addon"},[Object(r["j"])("i",{class:"pi pi-key"})],-1),bt={class:""};function ft(t,e,n,o,c,a){var i=this,s=Object(r["B"])("Toast"),u=Object(r["B"])("InputText"),l=Object(r["B"])("Password"),p=Object(r["B"])("Button");return Object(r["t"])(),Object(r["g"])("div",st,[Object(r["j"])(s,{class:"Toast"}),Object(r["j"])("div",ut,[lt,Object(r["j"])("div",pt,[dt,Object(r["j"])(u,{modelValue:this.email,"onUpdate:modelValue":e[1]||(e[1]=function(t){return i.email=t}),placeholder:"Email"},null,8,["modelValue"])]),Object(r["j"])("div",mt,[ht,Object(r["j"])(l,{modelValue:this.password,"onUpdate:modelValue":e[2]||(e[2]=function(t){return i.password=t}),placeholder:"Passwort",feedback:!1},null,8,["modelValue"])]),Object(r["j"])("div",bt,[Object(r["j"])(p,{label:"Einloggen",onClick:e[3]||(e[3]=function(e){return t.login()}),class:"p-button-secondary p-mr-2 p-mt-1"}),Object(r["j"])(p,{onClick:e[4]||(e[4]=function(e){return t.register()}),label:"Registrieren",class:"p-button-secondary"})])])])}var jt=Object(r["k"])({name:"Login",setup:function(){var t=Object(R["b"])(),e=function(){t.add({severity:"error",summary:"Falsche Zugangsdaten",detail:"Vor dem Login bitte Registrieren",life:5e3})},n=function(){t.add({severity:"error",summary:"Email bereits registriert",detail:"Bitte andere Email wählen oder einloggen",life:5e3})},r=function(){t.add({severity:"success",summary:"Zugangsdaten akzeptiert",life:1500})},o=function(){t.add({severity:"success",summary:"Registrierung erfolgreich",detail:"Bitte mit den gewählten Zugangsdaten einloggen",life:2e3})};return{showLoginError:e,showRegistrationError:n,showLoginSuccess:r,showRegistrationSuccess:o}},components:{Toast:I["a"]},data:function(){return{email:"",password:"",jwt:"",componentKey:0}},methods:{login:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"post",url:"http://localhost:8080/authenticate",data:{email:t.email,password:t.password}}).catch((function(t){return{error:t}}));case 2:if(n=e.sent,200!=n.status){e.next=14;break}return t.showLoginSuccess(),r=n.data,t.jwt=r.token,e.next=9,new Promise((function(t){return setTimeout(t,2e3)}));case 9:t.$emit("jwt-token",r.token),t.$router.push("home"),t.$store.state.jwt=r.token,e.next=15;break;case 14:t.showLoginError();case 15:case"end":return e.stop()}}),e)})))()},register:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x()({method:"post",url:"http://localhost:8080/register",data:{email:t.email,password:t.password}}).catch((function(t){return{error:t}}));case 2:n=e.sent,200==n.status?(t.showRegistrationSuccess(),r=n.data,console.log(r.email)):t.showRegistrationError();case 4:case"end":return e.stop()}}),e)})))()}}});n("a737");jt.render=ft;var Ot=jt,gt=Object(r["k"])({name:"Home",components:{Login:Ot}});gt.render=it;var vt=gt;function wt(t,e,n,o,c,a){var i=Object(r["B"])("Logout");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(i)])}var kt={class:"p-d-block p-mx-auto p-mt-6",style:{"text-align":"center"}},yt=Object(r["j"])("h1",null,"Sie werden nun abgemeldet...",-1),xt=Object(r["j"])("img",{class:"p-mt-2",src:"https://media.giphy.com/media/iYHgXVsV2NPWM/giphy.gif",alt:"http://gph.is/2dj99m0",style:{width:"20vw"}},null,-1);function St(t,e,n,o,c,a){return Object(r["t"])(),Object(r["g"])("div",kt,[yt,xt])}var Rt=Object(r["k"])({name:"Logout",mounted:function(){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("novalidtoken"!=t.$store.state.jwt){e.next=4;break}t.$router.push("/"),e.next=8;break;case 4:return t.$store.state.jwt="novalidtoken",e.next=7,new Promise((function(t){return setTimeout(t,2500)}));case 7:t.$router.push("/");case 8:case"end":return e.stop()}}),e)})))()}});Rt.render=St;var It=Rt,Bt=Object(r["k"])({name:"Logoutpage",components:{Logout:It}});Bt.render=wt;var Mt=Bt,Lt=[{path:"/",name:"Login",component:vt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/account",name:"Account",component:at},{path:"/home",name:"Home",component:D},{path:"/logout",name:"Logout",component:Mt}],Et=Object(u["a"])({history:Object(u["b"])(""),routes:Lt}),zt=Et,At=n("9319"),Ct=n("bb57"),Tt=n("8398"),Ht=n("c0c3"),$t=n("427b"),Ft=n("a034"),Pt=Object(i["a"])({state:function(){return{count:0,jwt:"novalidtoken"}},mutations:{increment:function(t){}}}),_t=Object(r["f"])(a);_t.use(zt),_t.use(At["a"],{ripple:!0}),_t.use(s["a"]),_t.use(Pt),_t.component("InputText",Tt["a"]),_t.component("Button",Ct["a"]),_t.component("Menubar",Ht["a"]),_t.component("Sidebar",$t["a"]),_t.component("Password",Ft["a"]),_t.mount("#app")},f06f:function(t,e,n){}});
//# sourceMappingURL=app.13c7f069.js.map