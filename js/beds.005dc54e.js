(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["beds"],{"061c":function(t,s,a){"use strict";a("a334")},4166:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"beds"},[a("Beds")],1)},n=[],i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid",attrs:{id:"beds"}},[t.bedList.length?a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover align-middle table-striped"},[t._m(0),a("tbody",t._l(t.bedList,(function(s,e){return a("tr",{key:s.id,staticClass:"organisation-name"},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e+1))]),a("td",[t._v(t._s(s.address))]),a("td",[a("a",{attrs:{href:"tel:"+s.contactinformation}},[t._v(t._s(s.contactinformation))]),t._v(" "),a("br"),t._v(" "+t._s(s.name))]),a("td",[t._v(t._s(s.quantityavailable))]),a("td",[t._v(t._s(s.price))]),a("td",[t._v(t._s(s.lastupdatedat))]),a("td",[t._v(t._s(s.details))])])})),0)])]):a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" Verification under process ")]),t._v(" Last updated at: "+t._s(t.sheetUpdated.$t)+" ")])},r=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Address")]),a("th",{attrs:{scope:"col"}},[t._v("Contact")]),a("th",{attrs:{scope:"col"}},[t._v("Quantity Available")]),a("th",{attrs:{scope:"col"}},[t._v("Price")]),a("th",{attrs:{scope:"col"}},[t._v("Last Updated At")]),a("th",{attrs:{scope:"col"}},[t._v("Remarks")])])])}],d=(a("159b"),a("bc3a")),c=a.n(d),l={name:"Beds",props:{msg:String},data:function(){return{gsheet_url:"https://spreadsheets.google.com/feeds/list/1FOu1EFIudho88Iz5sHNgrr8XWSzJkdi9Grxty2U0Rz4/4/public/values?alt=json",bedList:[],sheetUpdated:"",authorList:[],tagList:[]}},created:function(){var t=this;c.a.get(this.gsheet_url).then((function(s){t.sheetUpdated=s.data.feed.updated,t.parseData(s.data.feed.entry)}))},methods:{parseData:function(t){var s=this;t.forEach((function(t){var a={name:t.gsx$name.$t,address:t.gsx$address.$t,contactinformation:t.gsx$contactinformation.$t,quantityavailable:t.gsx$quantityavailable.$t,price:t.gsx$price.$t,lastupdatedat:t.gsx$lastupdatedat.$t,lastupdatedby:t.gsx$lastupdatedby.$t,details:t.gsx$details.$t,status:t.gsx$status.$t};"Available"===t.gsx$status.$t&&s.bedList.push(a)}))}}},o=l,u=(a("061c"),a("2877")),p=Object(u["a"])(o,i,r,!1,null,null,null),v=p.exports,_={name:"app",components:{Beds:v}},h=_,f=(a("640c"),Object(u["a"])(h,e,n,!1,null,null,null));s["default"]=f.exports},"640c":function(t,s,a){"use strict";a("d163")},a334:function(t,s,a){},d163:function(t,s,a){}}]);
//# sourceMappingURL=beds.005dc54e.js.map