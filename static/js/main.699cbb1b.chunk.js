(this["webpackJsonpreact-showcase"]=this["webpackJsonpreact-showcase"]||[]).push([[0],{19:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),m=a(1),o=a(10),s=a.n(o),i=a(6),u=function(e){return l.a.createElement("div",{className:"scroll-bottom"},l.a.createElement("div",{className:"sb_main"},e.left&&l.a.createElement(i.b,{to:e.left,className:"left"},l.a.createElement("span",null,"\u276c")),e.right&&l.a.createElement(i.b,{to:e.right,className:"right"},l.a.createElement("span",null,"\u276d"))))},p=a(17),E=a.n(p),v=function(){var e=Object(n.useRef)();return l.a.createElement("form",{className:"contact-form",onSubmit:function(t){t.preventDefault(),E.a.sendForm("service_bz42x3h","template_mcqcqsb",e.current,"user_Zmo71HnvFquge5mQhR4CL").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},ref:e},l.a.createElement("h2",null,"contactez-nous"),l.a.createElement("div",{className:"form-content"},l.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"nom *"}),l.a.createElement("input",{type:"text",id:"company",name:"company",placeholder:"soci\xe9t\xe9"}),l.a.createElement("input",{type:"text",id:"phone",name:"phone",placeholder:"t\xe9l\xe9phone"}),l.a.createElement("div",{className:"email-content"},l.a.createElement("label",{id:"not-mail"},"Email non valide"),l.a.createElement("input",{type:"mail",id:"email",name:"email",placeholder:"email *"})),l.a.createElement("textarea",{id:"message",name:"message",placeholder:"message *"})),l.a.createElement("input",{className:"button hover",type:"submit",value:"envoyer"}),l.a.createElement("div",{className:"form-message"}))},d=function(){return l.a.createElement("span",{className:"logo"},"BA")},f=function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",null,l.a.createElement(i.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active"},l.a.createElement("li",null,"Accueil")),l.a.createElement("li",{className:"nav-portfolio"}," Portfolio",l.a.createElement("ul",{className:"nav-projects"},l.a.createElement(i.b,{to:"/projet-1",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Projet 1")),l.a.createElement(i.b,{to:"/projet-2",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Projet 2")),l.a.createElement(i.b,{to:"/projet-3",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Projet 3")),l.a.createElement(i.b,{to:"/projet-4",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Projet 4")))),l.a.createElement(i.b,{to:"/contact",exact:!0,className:"hover",activeClassName:"nav-active"},l.a.createElement("li",null,"Contact"))))},h=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var a=t.offsetX-20,n=t.offsetY-13;e.style.transform="translate(".concat(a,"px,").concat(n,"px)")})),e.addEventListener("mouseleave",(function(){e.style.transform=""}))}))};return l.a.createElement("div",{className:"social-network"},l.a.createElement("ul",{className:"content"},l.a.createElement("a",{href:"https://www.facebook.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-facebook-f"}))),l.a.createElement("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-twitter"}))),l.a.createElement("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-instagram"})))))},g=function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"contact"},l.a.createElement(f,null),l.a.createElement(d,null),l.a.createElement(v,null),l.a.createElement("div",{className:"contact-infos"},l.a.createElement("div",{className:"address"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"Adresse"),l.a.createElement("p",null,"Avignon"),l.a.createElement("p",null,"68493 avignon"))),l.a.createElement("div",{className:"phone"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"T\xe9l\xe9phone"),l.a.createElement(s.a,{text:"0667464254",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("T\xe9l\xe9phone copi\xe9")}},"06 67 46 42 54")))),l.a.createElement("div",{className:"email"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"Email"),l.a.createElement(s.a,{text:"bultelalexis@gmail.com",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Email copi\xe9")}},"bultelalexis@gmail.com")))),l.a.createElement(h,null),l.a.createElement("div",{className:"credits"},l.a.createElement("p",null,"BULTEL Alexis - 2020"))),l.a.createElement(u,{left:"/projet-4"})))},N=function(){var e=["simple","clear","smart","strong"],t=0,a=0;return Object(n.useEffect)((function(){var n=document.getElementById("text-target");!function l(){setTimeout((function(){t>=e.length?(t=0,a=0,l()):a<e[t].length?(!function(){var l=document.createElement("span");n.appendChild(l),l.classList.add("letter"),l.style.opacity="0",l.style.animation="anim 5s ease forwards",l.textContent=e[t][a],setTimeout((function(){l.remove()}),2e3)}(),a++,l()):(a=0,t++,setTimeout((function(){l()}),2e3))}),80)}()}),[]),l.a.createElement("span",{className:"dynamic-text"},l.a.createElement("span",{className:"simply"},"simply"),l.a.createElement("span",{id:"text-target"}))},b=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"home"},l.a.createElement(f,null),l.a.createElement(h,null),l.a.createElement("div",{className:"home-main"},l.a.createElement("div",{className:"main-content"},l.a.createElement("h1",null,"Bultel Alexis"),l.a.createElement("h2",null,l.a.createElement(N,null)))),l.a.createElement(u,{right:"/projet-1"})))},j=a(18),w=[{id:1,title:"Casta",date:"Janvier 2020",languages:["React","Php","Sass"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-2.jpg",link:"http://www.google.com"},{id:2,title:"Lyon B\xe9ton",date:"Mars 2020",languages:["Symfony","Vue"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-1.jpg",link:"http://www.google.com"},{id:3,title:"Everpost",date:"Avril 2020",languages:["Wordpress","Php","React"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-3.jpg",link:"http://www.google.com"},{id:4,title:"Creative Dev",date:"Juillet 2020",languages:["Vue","Php"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/projet-4.jpg",link:"http://www.google.com"}],x=function(e){var t=Object(n.useState)(w),a=Object(j.a)(t,2),r=a[0],c=(a[1],r[e.projectNumber]),m=Math.floor(200*Math.random()+700)+"px",o=Math.floor(200*Math.random()+150)+"px",s="scale("+(Math.random()+.7)+")";return l.a.createElement("div",{className:"project-main"},l.a.createElement("div",{className:"project-content"},l.a.createElement("h1",null,c.title),l.a.createElement("p",null,c.date),l.a.createElement("ul",{className:"languages"},c.languages.map((function(e){return l.a.createElement("li",{key:e},e)})))),l.a.createElement("div",{className:"img-content"},l.a.createElement("div",{className:"img-container hover"},l.a.createElement("span",null,l.a.createElement("h3",null,c.title),l.a.createElement("p",null,c.infos)),l.a.createElement("img",{src:c.img,alt:c.title})),l.a.createElement("div",{className:"button-container"},l.a.createElement("a",{href:c.link,target:"_blank",rel:"noopener noreferrer",className:"hover"},l.a.createElement("span",{className:"button"},"Voir le site")))),l.a.createElement("span",{className:"random-circle",style:{left:m,top:o,transform:s}}))},y=function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"project"},l.a.createElement(f,null),l.a.createElement(d,null),l.a.createElement(x,{projectNumber:0}),l.a.createElement(u,{left:"/",right:"/projet-2"})))},k=function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"project"},l.a.createElement(f,null),l.a.createElement(d,null),l.a.createElement(x,{projectNumber:1}),l.a.createElement(u,{left:"/projet-1",right:"/projet-3"})))},q=function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"project"},l.a.createElement(f,null),l.a.createElement(d,null),l.a.createElement(x,{projectNumber:2}),l.a.createElement(u,{left:"/projet-2",right:"/projet-4"})))},C=function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"project"},l.a.createElement(f,null),l.a.createElement(d,null),l.a.createElement(x,{projectNumber:3}),l.a.createElement(u,{left:"/projet-3",right:"/contact"})))},L=function(){return l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:b}),l.a.createElement(m.b,{exact:!0,path:"/projet-1",component:y}),l.a.createElement(m.b,{exact:!0,path:"/projet-2",component:k}),l.a.createElement(m.b,{exact:!0,path:"/projet-3",component:q}),l.a.createElement(m.b,{exact:!0,path:"/projet-4",component:C}),l.a.createElement(m.b,{exact:!0,path:"/contact",component:g}),l.a.createElement(m.a,{to:"/"}))};a(34);c.a.render(l.a.createElement(i.a,null,l.a.createElement(L,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.699cbb1b.chunk.js.map