(function(e){function t(t){for(var r,a,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0399612b"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=a(e);var u=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/scooterms-frontend/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"298e":function(e,t,n){},"312d":function(e,t,n){"use strict";n("c6ef")},"39a6":function(e,t,n){"use strict";n("bc79")},"8f9b":function(e,t,n){"use strict";n("ae13")},ae13:function(e,t,n){},bc79:function(e,t,n){},c6ef:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,a){var s=Object(r["z"])("router-view");return Object(r["t"])(),Object(r["g"])(s)}var c={name:"App"};n("8f9b");c.render=o;var a=c,s=n("5502"),i=(n("098b"),n("e1ae"),n("4121"),n("bddf"),n("485c")),u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));function l(e,t,n,o,c,a){var s=Object(r["z"])("Header"),i=Object(r["z"])("HereMap");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(s),Object(r["j"])(i)])}n("b0c0");var p={key:0,class:"pi pi-spin pi-spinner LoadingAnimation"},d={id:"map"},m=Object(r["j"])("br",null,null,-1),h=Object(r["j"])("br",null,null,-1),b=Object(r["j"])("br",null,null,-1),f=Object(r["j"])("br",null,null,-1),j=Object(r["j"])("br",null,null,-1),O=Object(r["j"])("br",null,null,-1),g=Object(r["j"])("br",null,null,-1),v=Object(r["j"])("br",null,null,-1),w=Object(r["j"])("br",null,null,-1);function k(e,t,n,o,c,a){var s=this,i=Object(r["z"])("Toast"),u=Object(r["z"])("Button"),l=Object(r["z"])("Card");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(i,{class:"Toast",onClick:t[1]||(t[1]=function(e){return s.$toast.removeAllGroups()})}),this.loading?(Object(r["t"])(),Object(r["g"])("i",p)):Object(r["h"])("",!0),Object(r["j"])("div",d,[(Object(r["t"])(),Object(r["g"])("div",{id:"mapContainer",class:"map fade-in",style:{height:"93vh"},ref:"hereMap",key:e.scooterlist},null,512)),!0===e.showscooterinfo&&0==e.starttimestamp&&"ready"==e.selectedscooter.status?(Object(r["t"])(),Object(r["g"])(l,{key:e.componentKey,class:"Infopopup p-shadow-2"},{title:Object(r["G"])((function(){return[Object(r["j"])(u,{onClick:t[2]||(t[2]=function(t){return e.closeScooterInformation()}),icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined p-mr-auto"}),Object(r["i"])(" Scooter "+Object(r["D"])(e.selectedscooter.licenseplate),1)]})),content:Object(r["G"])((function(){return[Object(r["i"])(" Akku: "+Object(r["D"])(e.selectedscooter.battery)+"%",1),m,h,Object(r["j"])(u,{onClick:t[3]||(t[3]=function(t){return e.driveScooter()}),label:"Losfahren",class:"p-button-rounded"})]})),_:1})):Object(r["h"])("",!0),0!=e.starttimestamp?(Object(r["t"])(),Object(r["g"])(l,{key:e.rentaltime,class:"Infopopup p-shadow-2"},{title:Object(r["G"])((function(){return[Object(r["i"])("Scooter: "+Object(r["D"])(e.selectedscooter.licenseplate),1)]})),content:Object(r["G"])((function(){return[Object(r["i"])(" Laufzeit: "+Object(r["D"])(e.rentaltime)+" "+Object(r["D"])(e.calcTime()),1),b,f,Object(r["j"])(u,{onClick:t[4]||(t[4]=function(t){return e.parkScooter()}),label:"Parken",class:"p-button-rounded"})]})),_:1})):Object(r["h"])("",!0),!0===e.showscooterinfo&&0==e.starttimestamp&&"lowonbattery"==e.selectedscooter.status?(Object(r["t"])(),Object(r["g"])(l,{key:e.componentKey,class:"Infopopup p-shadow-2"},{title:Object(r["G"])((function(){return[Object(r["j"])(u,{onClick:t[5]||(t[5]=function(t){return e.closeScooterInformation()}),icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined"}),Object(r["i"])(" Scooter "+Object(r["D"])(e.selectedscooter.licenseplate),1)]})),content:Object(r["G"])((function(){return[Object(r["i"])(" Akku: "+Object(r["D"])(e.selectedscooter.battery)+"%",1),j,O,Object(r["j"])(u,{onClick:t[6]||(t[6]=function(t){return e.chargeScooter()}),label:"Aufladen",class:"p-button-rounded"})]})),_:1})):Object(r["h"])("",!0),!0===e.showscooterinfo&&0==e.starttimestamp&&"damaged"==e.selectedscooter.status?(Object(r["t"])(),Object(r["g"])(l,{key:e.componentKey,class:"Infopopup p-shadow-2"},{title:Object(r["G"])((function(){return[Object(r["j"])(u,{onClick:t[7]||(t[7]=function(t){return e.closeScooterInformation()}),icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined"}),Object(r["i"])(" Scooter "+Object(r["D"])(e.selectedscooter.licenseplate),1)]})),content:Object(r["G"])((function(){return[Object(r["i"])(" Akku: "+Object(r["D"])(e.selectedscooter.battery)+"%",1),g,v,Object(r["j"])(u,{onClick:t[8]||(t[8]=function(t){return e.repairScooter()}),label:"Reparieren",class:"p-button-rounded"})]})),_:1})):Object(r["h"])("",!0),!0===e.showscooterhotspotinfo&&0==e.starttimestamp?(Object(r["t"])(),Object(r["g"])(l,{key:e.componentKey,class:"Infopopup p-shadow-2"},{title:Object(r["G"])((function(){return[Object(r["j"])(u,{onClick:t[9]||(t[9]=function(t){return e.closeScooterHotspotInformation()}),icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined"}),Object(r["i"])(" Scooterhotspot "+Object(r["D"])(e.selectedscooterhotspot.name),1)]})),_:1})):Object(r["h"])("",!0),!0===e.showmaintenancedepartmentinfo&&0==e.starttimestamp?(Object(r["t"])(),Object(r["g"])(l,{key:e.componentKey,class:"Infopopup p-shadow-2"},{title:Object(r["G"])((function(){return[Object(r["j"])(u,{onClick:t[10]||(t[10]=function(t){return e.closeMaintenanceDepartmentInformation()}),icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-outlined"}),Object(r["i"])(" Maintenancedepartment "+Object(r["D"])(e.selectedmaintenancedepartment.name),1)]})),content:Object(r["G"])((function(){return[Object(r["i"])(" Reparaturkapazität: "+Object(r["D"])(e.selectedmaintenancedepartment.scootercapacity)+"/"+Object(r["D"])(e.selectedmaintenancedepartment.maxscootercapacity),1),w,Object(r["j"])(u,{onClick:t[11]||(t[11]=function(t){return e.releaseScooter()}),label:"Release",class:"p-button-rounded"})]})),_:1})):Object(r["h"])("",!0)])],64)}var y=n("1da1"),x=(n("b680"),n("d81d"),n("159b"),n("96cf"),n("bc3a")),S=n.n(x),R=n("9899"),I=n("18cb"),z=n("b3b6"),M=Object(r["k"])({name:"HereMap",setup:function(){var e=Object(I["b"])(),t=function(){e.add({severity:"success",summary:"Scooter abgestellt",life:1500,closeable:!1})},n=function(t){e.add({severity:"success",summary:t+"€ Gutschrift für das Aufladen",life:2500,closeable:!1})},r=function(){e.add({severity:"success",summary:"Scooter wird nun repariert",life:2e3,closeable:!1})},o=function(){e.add({severity:"success",summary:"Reparatur abgeschlossen",life:2e3,closeable:!1})};return{showParkSuccess:t,showChargeSuccess:n,showBringToRepairSuccess:r,showReleaseFromRepairSuccess:o}},components:{Card:R["a"],Toast:z["a"]},props:{center:Object},data:function(){return{componentKey:0,platform:null,apikey:"UCQF_BUyy0csLSNw3Tp6qr08CVT_YnS0xtObBme-_js",scooterlist:null,scooterhotspotlist:null,maintenancedepartmentlist:null,selectedscooter:null,selectedscooterhotspot:null,selectedmaintenancedepartment:null,showscooterinfo:!1,showscooterhotspotinfo:!1,showmaintenancedepartmentinfo:!1,starttimestamp:0,rentaltime:0,loading:!1}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new window.H.service.Platform({apikey:e.apikey}),e.platform=n,t.next=4,e.initializeHereMap();case 4:case"end":return t.stop()}}),t)})))()},created:function(){this.calcTimeInterval=setInterval(this.calcTime,500),this.reloadScooterMapInterval=setInterval(this.reloadScooterMap,5e3),this.timer=this.calcTimeInterval,this.timer=this.reloadScooterMapInterval},unmounted:function(){this.timer=clearInterval(this.reloadScooterMapInterval),this.timer=clearInterval(this.calcTimeInterval)},beforeUnmount:function(){this.starttimestamp=0,this.rentaltime=0},methods:{fetchScooters:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S()({method:"get",url:"https://scooterms.retch.duckdns.org/scooters",headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 2:n=t.sent,200===n.status&&(e.scooterlist=n.data);case 4:case"end":return t.stop()}}),t)})))()},returnScooters:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S()({method:"get",url:"https://scooterms.retch.duckdns.org/scooters",headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},fetchScooterHotspots:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S()({method:"get",url:"https://scooterms.retch.duckdns.org/scooterhotspots",headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 2:n=t.sent,200===n.status&&(e.scooterhotspotlist=n.data);case 4:case"end":return t.stop()}}),t)})))()},fetchMaintenanceDepartments:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S()({method:"get",url:"https://scooterms.retch.duckdns.org/maintenancedepartments",headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 2:n=t.sent,200===n.status&&(e.maintenancedepartmentlist=n.data);case 4:case"end":return t.stop()}}),t)})))()},reloadScooterMap:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.returnScooters();case 2:if(n=t.sent,""!=e.selectedscooter||JSON.stringify(e.scooterlist)==JSON.stringify(n)){t.next=6;break}return t.next=6,e.initializeHereMap();case 6:case"end":return t.stop()}}),t)})))()},forceReloadScooterMap:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.initializeHereMap();case 2:case"end":return t.stop()}}),t)})))()},calcTime:function(){if(0!=this.starttimestamp){var e=Math.floor(Date.now()/1e3)-this.starttimestamp,t=0;while(e>59)t+=1,e-=60;e<10&&(e="0"+e),this.rentaltime=t+":"+e}},showScooterInformation:function(e){this.showscooterinfo=!0,this.selectedscooter=e,this.closeScooterHotspotInformation(),this.closeMaintenanceDepartmentInformation(),this.forceRerenderInfo()},closeScooterInformation:function(){this.showscooterinfo=!1,this.selectedscooter=null,this.forceRerenderInfo()},showScooterHotspotInformation:function(e){this.showscooterhotspotinfo=!0,this.selectedscooterhotspot=e,this.closeScooterInformation(),this.closeMaintenanceDepartmentInformation(),this.forceRerenderInfo()},closeScooterHotspotInformation:function(){this.showscooterhotspotinfo=!1,this.selectedscooterhotspot=null,this.forceRerenderInfo()},showMaintenanceDepartmentInformation:function(e){this.showmaintenancedepartmentinfo=!0,this.selectedmaintenancedepartment=e,this.closeScooterInformation(),this.closeScooterHotspotInformation(),this.forceRerenderInfo()},closeMaintenanceDepartmentInformation:function(){this.showmaintenancedepartmentinfo=!1,this.selectedmaintenancedepartment=null,this.forceRerenderInfo()},driveScooter:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.selectedscooter.id,r="https://scooterms.retch.duckdns.org/scooters/rent/"+n,t.next=4,S()({method:"get",url:r,headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 4:o=t.sent,e.starttimestamp=o.data,e.forceRerenderInfo();case 7:case"end":return t.stop()}}),t)})))()},parkScooter:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=(Math.random()*(50.95-51.01)+51.01).toFixed(6),r=(Math.random()*(11-11.06)+11.06).toFixed(6),t.next=4,S()({method:"post",url:"https://scooterms.retch.duckdns.org/scooters/park",headers:{Authorization:"Bearer "+e.$store.state.jwt,"content-type":"application/json"},data:{latitude:n,longitude:r}}).catch((function(e){return{error:e}}));case 4:return e.starttimestamp=0,e.rentaltime=0,e.closeScooterInformation(),e.showParkSuccess(),t.next=10,new Promise((function(e){return setTimeout(e,2e3)}));case 10:e.forceReloadScooterMap();case 11:case"end":return t.stop()}}),t)})))()},chargeScooter:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.selectedscooter.id,t.next=3,S()({method:"get",url:"https://scooterms.retch.duckdns.org/scooters/charge/"+n,headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 3:return r=t.sent,200===r.status&&(e.showChargeSuccess(r.data),e.closeScooterInformation()),t.next=7,new Promise((function(e){return setTimeout(e,1e3)}));case 7:e.forceReloadScooterMap();case 8:case"end":return t.stop()}}),t)})))()},repairScooter:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.selectedscooter.id,t.next=3,S()({method:"get",url:"https://scooterms.retch.duckdns.org/scooters/repair/"+n,headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 3:return r=t.sent,200===r.status&&(e.showBringToRepairSuccess(),e.closeScooterInformation()),t.next=7,new Promise((function(e){return setTimeout(e,500)}));case 7:e.forceReloadScooterMap();case 8:case"end":return t.stop()}}),t)})))()},releaseScooter:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S()({method:"get",url:"https://scooterms.retch.duckdns.org/maintenancedepartments/releasescooter/"+e.selectedmaintenancedepartment.id,headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 2:return n=t.sent,200===n.status&&(e.showReleaseFromRepairSuccess(),e.closeMaintenanceDepartmentInformation()),t.next=6,new Promise((function(e){return setTimeout(e,500)}));case 6:e.forceReloadScooterMap();case 7:case"end":return t.stop()}}),t)})))()},forceRerenderInfo:function(){this.componentKey+=1},initializeHereMap:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,o,c,a,s,i,u,l,p,d,m,h,b,f,j;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Loading map..."),console.time(),e.loading=!0,t.next=5,e.fetchScooters();case 5:return t.next=7,e.fetchScooterHotspots();case 7:return t.next=9,e.fetchMaintenanceDepartments();case 9:n=e.$refs.hereMap,r=window.H,o=e.platform.createDefaultLayers(),c=new r.Map(n,o.vector.normal.map,{zoom:12,center:{lat:50.974321,lng:11.0348092}}),a=new r.map.Icon("https://i.ibb.co/sQfX4d5/green.png",{size:{w:32,h:32}}),s=new r.map.Icon("https://i.ibb.co/pQtYWfB/red.png",{size:{w:32,h:32}}),i=new r.map.Icon("https://i.ibb.co/crBCp22/Orange.png",{size:{w:32,h:32}}),u=new r.map.Icon("https://i.ibb.co/dG1KBVR/parking.png",{size:{w:28,h:28}}),l=new r.map.Icon("https://i.ibb.co/KGTNY1D/repair.png",{size:{w:28,h:28}}),p=[],d=[],m=[],h=function(t,n,o){var c="";switch(t.status){case"damaged":c=i;break;case"lowonbattery":c=s;break;default:c=a}var u=new r.map.Marker({lat:t.ndegree,lng:t.edegree},{icon:c});u.addEventListener("tap",(function(){e.showScooterInformation(t)})),p.push(u)},b=function(t,n,o){var c=new r.map.Marker({lat:t.ndegree,lng:t.edegree},{icon:u});c.addEventListener("tap",(function(){e.showScooterHotspotInformation(t)})),d.push(c)},f=function(t,n,o){var c=new r.map.Marker({lat:t.ndegree,lng:t.edegree},{icon:l});c.addEventListener("tap",(function(){e.showMaintenanceDepartmentInformation(t)})),m.push(c)},e.scooterlist&&e.scooterlist.forEach(h),e.scooterhotspotlist&&e.scooterhotspotlist.forEach(b),e.maintenancedepartmentlist&&e.maintenancedepartmentlist.forEach(f),j=function(e,t,n){c.addObject(e)},p.forEach(j),d.forEach(j),m.forEach(j),addEventListener("resize",(function(){return c.getViewPort().resize()})),c.addEventListener("tap",(function(){})),new r.mapevents.Behavior(new r.mapevents.MapEvents(c)),console.log("Ready, took..."),console.timeEnd(),e.loading=!1;case 37:case"end":return t.stop()}}),t)})))()}}});n("d866");M.render=k;var E=M,A={class:"p-d-flex p-jc-between"},C={class:"p-as-center p-ml-1"},L=Object(r["j"])("div",{class:"p-as-center"},[Object(r["j"])("h3",{style:{}},"Scooter-MS")],-1),T=Object(r["j"])("div",{class:"p-as-center p-mr-1"},[Object(r["j"])("img",{alt:"logo",src:"https://i.ibb.co/5MZBcW1/Logo.png",height:"40",class:""})],-1),D=Object(r["j"])("h3",null,"Scooter-MS",-1),$={style:{}},G={class:""};function B(e,t,n,o,c,a){var s=this,i=Object(r["z"])("Button"),u=Object(r["z"])("Sidebar");return Object(r["t"])(),Object(r["g"])(r["a"],null,[Object(r["j"])("div",A,[Object(r["j"])("div",C,[Object(r["j"])(i,{icon:"pi pi-bars",onClick:t[1]||(t[1]=function(t){e.visibleLeft=!0,e.fetchCredits()}),class:"p-button-text"})]),L,T]),Object(r["j"])(u,{visible:e.visibleLeft,"onUpdate:visible":t[5]||(t[5]=function(t){return e.visibleLeft=t}),baseZIndex:1e3,class:"p-sidebar-sm"},{default:Object(r["G"])((function(){return[D,Object(r["j"])("h4",$,"Guthaben: "+Object(r["D"])(s.userCredit)+"€",1),Object(r["j"])("div",G,[Object(r["j"])(i,{label:"Scootermap",icon:"pi pi-map",class:"p-button-text p-d-block",onClick:t[2]||(t[2]=function(t){return e.$router.push("home")})}),Object(r["j"])(i,{label:"Account",icon:"pi pi-user",class:"p-button-text p-d-block",onClick:t[3]||(t[3]=function(t){return e.$router.push("account")})}),Object(r["j"])(i,{label:"Log out",onClick:t[4]||(t[4]=function(t){return e.logout()}),icon:"pi pi-eject",class:"p-button-text p-d-block"})])]})),_:1},8,["visible"])],64)}var H=Object(r["k"])({data:function(){return{visibleLeft:!1,userCredit:0}},mounted:function(){"novalidtoken"==this.$store.state.jwt&&this.$router.push("/")},methods:{logout:function(){this.$router.push("logout"),this.$emit("logout")},fetchCredits:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S()({method:"get",url:"https://scooterms.retch.duckdns.org/accountmgr/myaccount",headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 2:n=t.sent,e.userCredit=n.data.creditedEuros;case 4:case"end":return t.stop()}}),t)})))()}}});H.render=B;var P=H,V=Object(r["k"])({name:"Home",components:{HereMap:E,Header:P}});V.render=l;var _=V,U={style:{width:"35rem","max-width":"90vw"},class:"p-mx-auto"};function K(e,t,n,o,c,a){var s=Object(r["z"])("Header"),i=Object(r["z"])("AccountInfo"),u=Object(r["z"])("RentalEntityList");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(s),Object(r["j"])("div",U,[Object(r["j"])(i),Object(r["j"])(u)])])}var F={class:"p-inputgroup"},N=Object(r["j"])("span",{class:"p-inputgroup-addon"},[Object(r["j"])("i",{class:"pi pi-user"})],-1),Z={class:"p-inputgroup"},J=Object(r["j"])("span",{class:"p-inputgroup-addon"},[Object(r["j"])("i",{class:"pi pi-money-bill"})],-1),W={class:"p-inputgroup"},Y=Object(r["j"])("span",{class:"p-inputgroup-addon"},[Object(r["j"])("i",{class:"pi pi-euro"})],-1);function Q(e,t,n,o,c,a){var s=this,i=Object(r["z"])("Toast"),u=Object(r["z"])("InputText"),l=Object(r["z"])("Button"),p=Object(r["z"])("Card");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(i,{class:"Toast",onClick:t[1]||(t[1]=function(e){return s.$toast.removeAllGroups()})}),Object(r["j"])(p,{class:"p-shadow-2 p-mb-5 p-mt-2"},{title:Object(r["G"])((function(){return[Object(r["i"])(" Kundennummer: "+Object(r["D"])(e.id),1)]})),content:Object(r["G"])((function(){return[Object(r["j"])("div",F,[N,Object(r["j"])(u,{modelValue:s.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.email=e}),placeholder:"Email",disabled:""},null,8,["modelValue"])]),Object(r["j"])("div",Z,[J,Object(r["j"])(u,{modelValue:s.creditedEuros,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.creditedEuros=e}),placeholder:"Email",disabled:""},null,8,["modelValue"])])]})),footer:Object(r["G"])((function(){return[Object(r["j"])("div",W,[Y,Object(r["j"])(u,{id:"topup",modelValue:s.topupamount,"onUpdate:modelValue":t[4]||(t[4]=function(e){return s.topupamount=e}),placeholder:"Guthaben aufladen"},null,8,["modelValue"]),Object(r["j"])(l,{icon:"pi pi-check",onClick:t[5]||(t[5]=function(t){return e.topUpAccount()}),class:""})])]})),_:1})])}n("25f0"),n("ac1f"),n("5319");var q=Object(r["k"])({name:"Account",setup:function(){var e=Object(I["b"])(),t=function(){e.add({severity:"success",summary:"Guthaben aufgeladen",life:1500,closeable:!1})};return{showTopUpSuccess:t}},components:{Card:R["a"],Toast:z["a"]},data:function(){return{creditedEuros:0,email:"",id:0,topupamount:""}},mounted:function(){this.fetchAccountInfo()},methods:{fetchAccountInfo:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S()({method:"get",url:"https://scooterms.retch.duckdns.org/accountmgr/myaccount",headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 2:n=t.sent,e.email=n.data.email,e.creditedEuros=n.data.creditedEuros.toString(),e.creditedEuros=e.creditedEuros.replace(".",",")+" €",e.id=n.data.id;case 7:case"end":return t.stop()}}),t)})))()},topUpAccount:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0==e.topupamount){t.next=6;break}return t.next=3,S()({method:"get",url:"https://scooterms.retch.duckdns.org/accountmgr/myaccount/topup/"+e.topupamount,headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 3:n=t.sent,e.topupamount="",200===n.status&&e.showTopUpSuccess();case 6:e.fetchAccountInfo();case 7:case"end":return t.stop()}}),t)})))()}}});n("39a6");q.render=Q;var X=q,ee=Object(r["i"])("> ");function te(e,t,n,o,c,a){var s=Object(r["z"])("Card"),i=Object(r["A"])("ripple");return Object(r["t"])(!0),Object(r["g"])(r["a"],null,Object(r["x"])(e.rentals,(function(t){return Object(r["H"])((Object(r["t"])(),Object(r["g"])(s,{key:t.id,class:"p-mb-4 p-ripple p-shadow-2"},{title:Object(r["G"])((function(){return[Object(r["i"])(" Fahrt #"+Object(r["D"])(t.id),1)]})),content:Object(r["G"])((function(){return[Object(r["i"])(" Dauer: "+Object(r["D"])(e.calcTime(t.end_timestamp-t.start_timestamp))+" Minuten ",1)]})),footer:Object(r["G"])((function(){return[Object(r["i"])(" Datum: "+Object(r["D"])(e.calcDate(t.start_timestamp)),1)]})),default:Object(r["G"])((function(){return[ee]})),_:2},1536)),[[i]])})),128)}var ne=Object(r["k"])({name:"ScooterRentalEntity",components:{Card:R["a"]},data:function(){return{rentals:[]}},mounted:function(){this.fetchAccountRentals()},methods:{fetchAccountRentals:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S()({method:"get",url:"https://scooterms.retch.duckdns.org/accountmgr/myhistory",headers:{Authorization:"Bearer "+e.$store.state.jwt}}).catch((function(e){return{error:e}}));case 2:n=t.sent,e.rentals=n.data.reverse();case 4:case"end":return t.stop()}}),t)})))()},calcTime:function(e){var t=0;while(e>59)t+=1,e-=60;return e<10&&(e="0"+e),t+":"+e},calcDate:function(e){var t=new Date(1e3*e);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()}}});ne.render=te;var re=ne,oe=Object(r["k"])({name:"Accountpage",components:{Header:P,AccountInfo:X,RentalEntityList:re}});oe.render=K;var ce=oe;function ae(e,t,n,o,c,a){var s=Object(r["z"])("Login");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(s)])}var se={class:"p-d-flex"},ie={class:"p-d-block p-mx-auto p-mt-6  "},ue=Object(r["j"])("img",{class:"",src:"https://i.ibb.co/5MZBcW1/Logo.png",alt:"Scooter-MS Logo",style:{height:"30vh"}},null,-1),le={class:"p-inputgroup p-mt-3"},pe=Object(r["j"])("span",{class:"p-inputgroup-addon"},[Object(r["j"])("i",{class:"pi pi-user"})],-1),de={class:"p-inputgroup"},me=Object(r["j"])("span",{class:"p-inputgroup-addon"},[Object(r["j"])("i",{class:"pi pi-key"})],-1),he={class:""};function be(e,t,n,o,c,a){var s=this,i=Object(r["z"])("Toast"),u=Object(r["z"])("InputText"),l=Object(r["z"])("Password"),p=Object(r["z"])("Button");return Object(r["t"])(),Object(r["g"])("div",se,[Object(r["j"])(i,{class:"Toast",onClick:t[1]||(t[1]=function(e){return s.$toast.removeAllGroups()})}),Object(r["j"])("div",ie,[ue,Object(r["j"])("div",le,[pe,Object(r["j"])(u,{modelValue:this.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return s.email=e}),placeholder:"Email"},null,8,["modelValue"])]),Object(r["j"])("div",de,[me,Object(r["j"])(l,{modelValue:this.password,"onUpdate:modelValue":t[3]||(t[3]=function(e){return s.password=e}),placeholder:"Passwort",feedback:!1},null,8,["modelValue"])]),Object(r["j"])("div",he,[Object(r["j"])(p,{label:"Einloggen",onClick:t[4]||(t[4]=function(t){return e.login()}),class:"p-button-secondary p-mr-2 p-mt-1 p-shadow-1"}),Object(r["j"])(p,{onClick:t[5]||(t[5]=function(t){return e.register()}),label:"Registrieren",class:"p-button-secondary p-shadow-1"})])])])}var fe=Object(r["k"])({name:"Login",setup:function(){var e=Object(I["b"])(),t=function(){e.add({severity:"error",summary:"Falsche Zugangsdaten",detail:"Vor dem Login bitte Registrieren",life:5e3,closeable:!1})},n=function(){e.add({severity:"error",summary:"Email bereits registriert",detail:"Bitte andere Email wählen oder einloggen",life:5e3,closeable:!1})},r=function(){e.add({severity:"success",summary:"Zugangsdaten akzeptiert",life:1500,closeable:!1})},o=function(){e.add({severity:"success",summary:"Registrierung erfolgreich",detail:"Bitte mit den gewählten Zugangsdaten einloggen",life:2e3,closeable:!1})},c=function(){e.add({severity:"error",summary:"Email nicht gültig",detail:"Bitte eine gültige Email verwenden",life:5e3,closeable:!1})};return{showLoginError:t,showRegistrationError:n,showLoginSuccess:r,showRegistrationSuccess:o,showNoValidEmailError:c}},components:{Toast:z["a"]},data:function(){return{email:"",password:"",jwt:"",componentKey:0}},methods:{validateEmail:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},login:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.email=e.email.toLowerCase(),e.validateEmail(e.email)){t.next=5;break}e.showNoValidEmailError(),t.next=24;break;case 5:return console.log("Logging in: "+e.email),t.next=8,S()({method:"post",url:"https://scooterms.retch.duckdns.org/authenticate",data:{email:e.email,password:e.password}}).catch((function(e){return{error:e}}));case 8:if(n=t.sent,200!=n.status){t.next=22;break}return e.$toast.removeAllGroups(),e.showLoginSuccess(),r=n.data,e.jwt=r.token,e.$emit("jwt-token",r.token),console.log("Auth JWT: "+r.token),t.next=18,new Promise((function(e){return setTimeout(e,2e3)}));case 18:e.$router.push("home"),e.$store.state.jwt=r.token,t.next=24;break;case 22:e.$toast.removeAllGroups(),e.showLoginError();case 24:case"end":return t.stop()}}),t)})))()},register:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.email=e.email.toLowerCase(),e.validateEmail(e.email)){t.next=5;break}e.showNoValidEmailError(),t.next=9;break;case 5:return t.next=7,S()({method:"post",url:"https://scooterms.retch.duckdns.org/register",data:{email:e.email,password:e.password}}).catch((function(e){return{error:e}}));case 7:n=t.sent,200==n.status?(e.$toast.removeAllGroups(),e.showRegistrationSuccess(),r=n.data,console.log(r.email)):(e.$toast.removeAllGroups(),e.showRegistrationError());case 9:case"end":return t.stop()}}),t)})))()}}});n("312d");fe.render=be;var je=fe,Oe=Object(r["k"])({name:"Home",components:{Login:je}});Oe.render=ae;var ge=Oe;function ve(e,t,n,o,c,a){var s=Object(r["z"])("Logout");return Object(r["t"])(),Object(r["g"])("div",null,[Object(r["j"])(s)])}var we={class:"p-d-block p-mx-auto p-mt-6",style:{"text-align":"center"}},ke=Object(r["j"])("h1",null,"Sie werden nun abgemeldet...",-1),ye=Object(r["j"])("img",{class:"p-mt-2 p-shadow-2",src:"https://media.giphy.com/media/iYHgXVsV2NPWM/giphy.gif",alt:"http://gph.is/2dj99m0",style:{"min-width":"22vw","max-width":"80vw","border-radius":"2px"}},null,-1);function xe(e,t,n,o,c,a){return Object(r["t"])(),Object(r["g"])("div",we,[ke,ye])}var Se=Object(r["k"])({name:"Logout",mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("novalidtoken"!=e.$store.state.jwt){t.next=4;break}e.$router.push("/"),t.next=8;break;case 4:return e.$store.state.jwt="novalidtoken",t.next=7,new Promise((function(e){return setTimeout(e,2525)}));case 7:e.$router.push("/");case 8:case"end":return t.stop()}}),t)})))()}});Se.render=xe;var Re=Se,Ie=Object(r["k"])({name:"Logoutpage",components:{Logout:Re}});Ie.render=ve;var ze=Ie,Me=[{path:"/",name:"Login",component:ge},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/account",name:"Account",component:ce},{path:"/home",name:"Home",component:_},{path:"/logout",name:"Logout",component:ze}],Ee=Object(u["a"])({history:Object(u["b"])("/scooterms-frontend/"),routes:Me}),Ae=Ee,Ce=n("9319"),Le=n("bb57"),Te=n("8398"),De=n("c0c3"),$e=n("427b"),Ge=n("a034"),Be=n("216d"),He=Object(s["a"])({state:function(){return{count:0,jwt:"novalidtoken"}},mutations:{increment:function(e){}}}),Pe=Object(r["f"])(a);Pe.use(Ae),Pe.use(Ce["a"],{ripple:!0}),Pe.use(i["a"]),Pe.use(He),Pe.component("InputText",Te["a"]),Pe.component("Button",Le["a"]),Pe.component("Menubar",De["a"]),Pe.component("Sidebar",$e["a"]),Pe.component("Password",Ge["a"]),Pe.directive("ripple",Be["a"]),Pe.mount("#app")},d866:function(e,t,n){"use strict";n("298e")}});
//# sourceMappingURL=app.7b5068d8.js.map