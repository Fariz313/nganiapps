import{C as u}from"./auto.Aq1nblnl.js";import{_ as p,F as n,G as d,x as m,y as t,z as h,v as T,I as f}from"./entry.CpViBvHn.js";const x={data(){return{phTanah:0,statusPHTanah:"-"}},mounted(){this.$nextTick(function(){console.log("sData",this.$getDataStored("ph"));const o={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{label:"Grafik PH Tanah",data:this.$getDataStored("ph"),backgroundColor:"#712DDF",borderWidth:0}]},c={scales:{y:{max:7,beginAtZero:!0}}},r=document.getElementById("myChart").getContext("2d"),e=new u(r,{type:"bar",data:o,options:c});let a=null;const i=n(this.$firebaseData,"StatisticPH");d(i,s=>{a=s.val(),e.data.datasets[0].data=a,e.update()});const l=n(this.$firebaseData,"PHTanah");d(l,s=>{if(this.phTanah=s.val(),this.phTanah>=5.5&&this.phTanah<=6.5?this.statusPHTanah="Baik":this.statusPHTanah="Tidak Baik",a!=null){const _=this.$storeByDay("ph",s.val(),a);f(n(this.$firebaseData,"StatisticPH"),_)}})})}},y=t("div",{class:"card border-0 n-bg-secondary mx-5 mt-5 py-2 text-center n-rounded"},[t("div",{class:"w-100 d-flex justify-content-around"},[t("h3",null,"SUHU CUACA"),t("h3",null,"24 Derajat")])],-1),b=t("h1",{class:"text-center my-3 n-text-tersier"},"DATA PH TANAH",-1),H={class:"row gy-3 mt-3 mx-4"},g={class:"col-6 text-center"},v={class:"card p-4 border-0 n-bg-secondary n-rounded"},D={class:"m-0"},P={class:"col-6 text-center"},S={class:"card p-4 border-0 n-bg-secondary n-rounded"},A={class:"m-0"},C=t("h1",{class:"text-center my-3 n-text-tersier"},"HISTORICAL PH TANAH",-1),$=t("canvas",{id:"myChart"},null,-1);function k(o,c,r,e,a,i){return T(),m("div",null,[y,b,t("div",H,[t("div",g,[t("div",v,[t("h1",D,h(a.phTanah),1)])]),t("div",P,[t("div",S,[t("h1",A,h(a.statusPHTanah),1)])])]),C,$])}const w=p(x,[["render",k]]);export{w as default};