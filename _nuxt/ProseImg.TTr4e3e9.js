import{d as r,G as n,bj as c,b9 as h,m as o,bk as d,b as l,c as u,aA as f}from"./entry.HfqZ1aB4.js";const g=["src","alt","width","height"],p=r({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const t=e,i=n(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=c(h(o().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return d(s,t.src)}return t.src});return(a,s)=>(l(),u("img",{src:f(i),alt:e.alt,width:e.width,height:e.height},null,8,g))}});export{p as default};
