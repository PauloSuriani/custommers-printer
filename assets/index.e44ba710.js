import{r as p,L as x,u as k,B as H,R as V,a as C,c as N,b as z}from"./vendor.f56c35ed.js";(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();function w(){const[c,m]=p.exports.useState(!1),[e,u]=p.exports.useState(),[o,s]=p.exports.useState(String);p.exports.useEffect(()=>{console.log(e),new URLSearchParams(window.location.href);const a=window.location.href.length,n=window.location.href;let R="";n.split("");let r=n.slice(a-1);R=R+r,r=n.slice(a-2),r.includes("/")||(R=r),r=n.slice(a-3),r.includes("/")||(R=r),s(R);const v=`http://localhost:3000/user/:${R}`;fetch(v).then(E=>E.json()).then(E=>u(E)).catch(E=>console.log(E))},[]);function i(a){console.log("editedCustommer",e);let n={};e!=null&&(n=e);const R=a.target.value,r=a.target.id;(r=="contato"||r=="razao_social"||r=="nome_fantasia"||r=="rua"||r=="bairro"||r=="telefone"||r=="cnpj"||r=="email"||r=="cidade"||r=="uf"||r=="nro")&&(n[r]=R,console.log("custommer Alterado",n)),u(n)}function l(){const a=`http://localhost:3000/update/${o}`;console.log("em handleUpdateBtnClick:",e),fetch(a,{method:"PUT",headers:{"Content-Type":"application/json",Acept:"*/*"},body:JSON.stringify(e)}).then(n=>{console.log(n),n.status==200&&m(!0)}).catch(n=>console.log(n))}function h(){const a=`http://localhost:3000/delete/${o}`;fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json",Acept:"*/*"}}).then(n=>{console.log(n),n.status==200&&m(!0)}).catch(n=>console.log(n))}return c?React.createElement("div",null,React.createElement(x,{to:"/"},"<< Voltar \xE0 P\xE1gina Inicial"),React.createElement("h2",null,"Cliente Alterado com Sucesso!")):React.createElement("div",{className:"NewCustommerForm"},React.createElement(x,{to:"/"}," Voltar \xE0 p\xE1gina inicial "),React.createElement("h1",null,`Editar Cliente Nro.Registro: ${o}`),React.createElement("div",{className:"NewCustommerForm",style:{display:"block"}},React.createElement("h2",null,"Dados Pessoais"),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Contato"),React.createElement("input",{type:"text",id:"contato",defaultValue:e==null?void 0:e.contato,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"R.Social"),React.createElement("input",{type:"text",id:"razao_social",defaultValue:e==null?void 0:e.razao_social,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"N.Fantasia"),React.createElement("input",{type:"text",id:"nome_fantasia",defaultValue:e==null?void 0:e.nome_fantasia,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Cnpj"),React.createElement("input",{type:"text",id:"cnpj",defaultValue:e==null?void 0:e.cnpj,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Email"),React.createElement("input",{type:"text",id:"email",defaultValue:e==null?void 0:e.email,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Telefone"),React.createElement("input",{type:"text",id:"telefone",defaultValue:e==null?void 0:e.telefone,onInput:a=>i(a)}),React.createElement("h2",null,"Endere\xE7o"),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Logradouro"),React.createElement("input",{type:"text",id:"rua",defaultValue:e==null?void 0:e.rua,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Nro."),React.createElement("input",{type:"text",id:"nro",defaultValue:e==null?void 0:e.nro,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Bairro"),React.createElement("input",{type:"text",id:"bairro",defaultValue:e==null?void 0:e.bairro,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Cidade"),React.createElement("input",{type:"text",id:"cidade",defaultValue:e==null?void 0:e.cidade,onInput:a=>i(a)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Estado"),React.createElement("input",{type:"text",id:"uf",defaultValue:e==null?void 0:e.uf,onInput:a=>i(a)})),React.createElement("button",{onClick:l},"Atualizar"),React.createElement("button",{onClick:h},"Excluir"),React.createElement(x,{to:"/"},"Cancelar"))}function L(c){return React.createElement("div",{className:"CustommerCard"},React.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},React.createElement("div",null,React.createElement("div",{style:{display:"flex"}},React.createElement("div",null,React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Contato")),React.createElement("div",null,c.contato)),React.createElement("div",{style:{paddingLeft:"15px"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Telefone")),React.createElement("div",null,c.telefone)),React.createElement("div",{style:{paddingLeft:"15px"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Nro.")),React.createElement("div",{style:{textAlign:"center"}},c.id))),React.createElement("div",{style:{display:"flex",paddingTop:"6px",justifyContent:"flex-start"}},React.createElement("div",null,React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Raz\xE3o Social")),React.createElement("div",{style:{minWidth:"160px"}},c.razao_social)),React.createElement("div",{style:{paddingLeft:"10px"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Nome Fantasia")),React.createElement("div",{style:{minWidth:"160px"}},c.nome_fantasia)))),React.createElement("svg",{style:{maxWidth:"80px",alignItems:"center"},className:"svg-icon",viewBox:"0 0 20 20",onClick:()=>{}},React.createElement("path",{d:"M15.573,11.624c0.568-0.478,0.947-1.219,0.947-2.019c0-1.37-1.108-2.569-2.371-2.569s-2.371,1.2-2.371,2.569c0,0.8,0.379,1.542,0.946,2.019c-0.253,0.089-0.496,0.2-0.728,0.332c-0.743-0.898-1.745-1.573-2.891-1.911c0.877-0.61,1.486-1.666,1.486-2.812c0-1.79-1.479-3.359-3.162-3.359S4.269,5.443,4.269,7.233c0,1.146,0.608,2.202,1.486,2.812c-2.454,0.725-4.252,2.998-4.252,5.685c0,0.218,0.178,0.396,0.395,0.396h16.203c0.218,0,0.396-0.178,0.396-0.396C18.497,13.831,17.273,12.216,15.573,11.624 M12.568,9.605c0-0.822,0.689-1.779,1.581-1.779s1.58,0.957,1.58,1.779s-0.688,1.779-1.58,1.779S12.568,10.427,12.568,9.605 M5.06,7.233c0-1.213,1.014-2.569,2.371-2.569c1.358,0,2.371,1.355,2.371,2.569S8.789,9.802,7.431,9.802C6.073,9.802,5.06,8.447,5.06,7.233 M2.309,15.335c0.202-2.649,2.423-4.742,5.122-4.742s4.921,2.093,5.122,4.742H2.309z M13.346,15.335c-0.067-0.997-0.382-1.928-0.882-2.732c0.502-0.271,1.075-0.429,1.686-0.429c1.828,0,3.338,1.385,3.535,3.161H13.346z"}))),React.createElement("div",{style:{display:"flex"}},React.createElement("div",{style:{paddingTop:"6px"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Endere\xE7o")),React.createElement("div",{style:{display:"flex"}},React.createElement("div",null,c.rua),React.createElement("span",null,", "),React.createElement("div",{style:{paddingLeft:"5px"}},c.nro),React.createElement("div",{style:{paddingLeft:"5px"}},c.bairro)))),React.createElement("div",{style:{display:"flex",paddingTop:"6px"}},React.createElement("div",null,React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px"}},"Munic\xEDpio")),React.createElement("div",{style:{display:"flex"}},React.createElement("div",null,c.cidade),React.createElement("span",{style:{paddingInline:"5px"}}," - "),React.createElement("div",null,c.uf))),React.createElement("div",{style:{display:"block",paddingLeft:"15px"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px"}},"Email")),React.createElement("div",null,c.email)),React.createElement("div",{style:{paddingLeft:"12px"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"CNPJ")),React.createElement("div",null,c.cnpj))))}function I(c){return React.createElement("div",{className:"CustommerCard"},React.createElement("div",{style:{display:"flex"}},React.createElement("div",null,c.contato),React.createElement("span",{style:{paddingInline:"5px"}}," - "),React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Nro.Registro:")),React.createElement("div",null,c.id)),React.createElement("div",{style:{display:"flex"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Raz\xE3o Social:")),React.createElement("div",null,c.razao_social)),React.createElement("div",{style:{display:"flex"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Nome Fantasia:")),React.createElement("div",null,c.nome_fantasia)),React.createElement("div",{style:{display:"flex"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Fone:")),React.createElement("div",null,c.telefone),React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingInline:"5px"}},"CNPJ:")),React.createElement("div",null,c.cnpj)),React.createElement("div",{style:{display:"flex"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Email:")),React.createElement("div",null,c.email)),React.createElement("div",{style:{display:"flex"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Munic\xEDpio:")),React.createElement("div",null,c.cidade),React.createElement("span",{style:{paddingInline:"5px"}}," - "),React.createElement("div",null,c.uf)),React.createElement("div",{style:{display:"flex"}},React.createElement("b",null,React.createElement("label",{style:{fontSize:"15px",paddingRight:"5px"}},"Endere\xE7o:")),React.createElement("div",{style:{display:"flex"}},React.createElement("div",null,c.rua),React.createElement("span",null,", "),React.createElement("div",{style:{paddingLeft:"5px"}},c.nro)),React.createElement("div",{style:{paddingLeft:"5px"}},c.bairro)))}function P(){const[c,m]=p.exports.useState([]),[e,u]=p.exports.useState([]),[o,s]=p.exports.useState(Array),[i,l]=p.exports.useState([]),[h,a]=p.exports.useState(Boolean),[n,R]=p.exports.useState(new Array(e.length).fill(!1));p.exports.useState(!1),p.exports.useState({}),p.exports.useState(!1),p.exports.useEffect(()=>{a(!1),fetch("http://localhost:3000/user").then(t=>t.json()).then(t=>{m(t),u(t)}).catch(t=>console.log(t))},[]);function r(t){if(o.length===0)s([t]);else{let d=o;o.includes(t)?(d=o.filter(f=>f!==t),s(d)):(d.push(t),s(d))}}const v=t=>{const d=n.map((f,g)=>g===t?!f:f);R(d)};function E(){const t=[];e.map(d=>{o.includes(d.id)&&(t.push(d),t.push(d))}),l(t),a(!0)}function y(t){const d=t.target.value,f=t.target.id,g=[];c.map(M=>{const S=M[f];S!=null&&S.toLowerCase().includes(d.toLowerCase())&&g.push(M)}),u(g)}const b=k();return h?React.createElement("div",null,i.map((t,d)=>React.createElement("div",{key:`to-print-card-${d+1}`,id:`to-print-card-${d+1}`},React.createElement("div",null,I(t))))):React.createElement("div",{style:{backgroundColor:"white",fontFamily:"sans-serif"},className:"MainPage"},React.createElement("h1",{style:{padding:"14px",backgroundColor:"silver",color:"black",fontFamily:"serif",textAlign:"center"}},"Selecione para Impress\xE3o"),React.createElement("div",{style:{padding:"7px",backgroundColor:"silver",fontFamily:"sans-serif",textAlign:"center"}},React.createElement("svg",{style:{maxWidth:"54px"},onClick:E,className:"svg-icon",viewBox:"0 0 20 20"},React.createElement("path",{d:"M17.453,12.691V7.723 M17.453,12.691V7.723 M1.719,12.691V7.723 M18.281,12.691V7.723 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M7.309,13.312h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,13.312,7.309,13.312 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M16.625,6.066h-1.449V3.168c0-0.228-0.186-0.414-0.414-0.414H5.238c-0.228,0-0.414,0.187-0.414,0.414v2.898H3.375c-0.913,0-1.656,0.743-1.656,1.656v4.969c0,0.913,0.743,1.656,1.656,1.656h1.449v2.484c0,0.228,0.187,0.414,0.414,0.414h9.523c0.229,0,0.414-0.187,0.414-0.414v-2.484h1.449c0.912,0,1.656-0.743,1.656-1.656V7.723C18.281,6.81,17.537,6.066,16.625,6.066 M5.652,3.582h8.695v2.484H5.652V3.582zM14.348,16.418H5.652v-4.969h8.695V16.418z M17.453,12.691c0,0.458-0.371,0.828-0.828,0.828h-1.449v-2.484c0-0.228-0.186-0.414-0.414-0.414H5.238c-0.228,0-0.414,0.186-0.414,0.414v2.484H3.375c-0.458,0-0.828-0.37-0.828-0.828V7.723c0-0.458,0.371-0.828,0.828-0.828h13.25c0.457,0,0.828,0.371,0.828,0.828V12.691z M7.309,13.312h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,13.312,7.309,13.312M7.309,15.383h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,15.383,7.309,15.383 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555"})),React.createElement("svg",{onClick:()=>{b("/newcustommer")},style:{maxWidth:"54px"},className:"svg-icon",viewBox:"0 0 20 20"},React.createElement("path",{d:"M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"}))),React.createElement("div",{className:"SearchBar",style:{display:"block"}},React.createElement("h2",{style:{fontFamily:"sans-serif"}},"Filtrar por..."),React.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},React.createElement("div",{style:{paddingLeft:"5px"}},React.createElement("label",{style:{paddingRight:"5px",fontSize:"20px",display:"block"}},"Contato"),React.createElement("input",{style:{borderRadius:"6px"},type:"text",size:15,id:"contato",onChange:t=>y(t)})),React.createElement("div",{style:{paddingLeft:"5px"}},React.createElement("label",{style:{paddingRight:"5px",fontSize:"20px",display:"block"}},"N.Fantasia"),React.createElement("input",{style:{borderRadius:"6px"},type:"text",size:18,id:"nome_fantasia",onChange:t=>y(t)})),React.createElement("div",{style:{paddingLeft:"5px"}},React.createElement("label",{style:{paddingRight:"5px",fontSize:"20px",display:"block"}},"R.Social"),React.createElement("input",{style:{borderRadius:"6px"},type:"text",size:18,id:"razao_social",onChange:t=>y(t)})),React.createElement("div",{style:{paddingLeft:"5px"}},React.createElement("label",{style:{paddingRight:"5px",fontSize:"20px",display:"block"}},"Cidade"),React.createElement("input",{style:{borderRadius:"6px"},type:"text",size:16,id:"cidade",onChange:t=>y(t)})),React.createElement("div",{style:{paddingLeft:"5px"}},React.createElement("label",{style:{paddingRight:"5px",fontSize:"20px",display:"block"}},"UF"),React.createElement("input",{style:{borderRadius:"6px"},type:"text",size:1,id:"uf",onChange:t=>y(t)})))),React.createElement("h2",null,`${e.length===0?"Nenhum registro encontrado":e.length===c.length?`Total de ${e.length} registros`:`Exibindo ${e.length} registros`}`),React.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},e.map((t,d)=>(""+t.id,React.createElement("div",{style:{padding:"5px",margin:"4px",borderRadius:"10px",maxWidth:"420px",minWidth:"400px",backgroundColor:"#DCDCDC",boxShadow:"inset 0 0 1em gray",cursor:"pointer"},onClick:()=>{r(t.id),v(d)},key:`custummer-card-${t.id}`},React.createElement("div",{style:{padding:"8px"},id:"custommerCard"},React.createElement("div",{id:"custommer['id']"},L(t)),React.createElement("div",{style:{paddingTop:"5px",justifyContent:"center",display:"flex"}},React.createElement("input",{type:"radio",size:8,checked:o.includes(t.id)}),React.createElement("svg",{style:{paddingRight:"6px",maxWidth:"34px"},className:"svg-icon",viewBox:"0 0 20 20"},React.createElement("path",{d:"M17.453,12.691V7.723 M17.453,12.691V7.723 M1.719,12.691V7.723 M18.281,12.691V7.723 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M7.309,13.312h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,13.312,7.309,13.312 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M16.625,6.066h-1.449V3.168c0-0.228-0.186-0.414-0.414-0.414H5.238c-0.228,0-0.414,0.187-0.414,0.414v2.898H3.375c-0.913,0-1.656,0.743-1.656,1.656v4.969c0,0.913,0.743,1.656,1.656,1.656h1.449v2.484c0,0.228,0.187,0.414,0.414,0.414h9.523c0.229,0,0.414-0.187,0.414-0.414v-2.484h1.449c0.912,0,1.656-0.743,1.656-1.656V7.723C18.281,6.81,17.537,6.066,16.625,6.066 M5.652,3.582h8.695v2.484H5.652V3.582zM14.348,16.418H5.652v-4.969h8.695V16.418z M17.453,12.691c0,0.458-0.371,0.828-0.828,0.828h-1.449v-2.484c0-0.228-0.186-0.414-0.414-0.414H5.238c-0.228,0-0.414,0.186-0.414,0.414v2.484H3.375c-0.458,0-0.828-0.37-0.828-0.828V7.723c0-0.458,0.371-0.828,0.828-0.828h13.25c0.457,0,0.828,0.371,0.828,0.828V12.691z M7.309,13.312h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,13.312,7.309,13.312M7.309,15.383h5.383c0.229,0,0.414-0.187,0.414-0.414s-0.186-0.414-0.414-0.414H7.309c-0.228,0-0.414,0.187-0.414,0.414S7.081,15.383,7.309,15.383 M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484 M12.691,12.484H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,12.484,12.691,12.484M12.691,14.555H7.309c-0.228,0-0.414,0.187-0.414,0.414s0.187,0.414,0.414,0.414h5.383c0.229,0,0.414-0.187,0.414-0.414S12.92,14.555,12.691,14.555"})),React.createElement("svg",{onClick:()=>{b(`/custommer/edit/${t.id}`)},style:{paddingRight:"2px",maxWidth:"34px"},className:"svg-icon",viewBox:"0 0 20 20"},React.createElement("path",{d:"M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"})),React.createElement("svg",{onClick:()=>{b(`/custommer/edit/${t.id}`)},style:{maxWidth:"34px"},className:"svg-icon",viewBox:"0 0 20 20"},React.createElement("path",{d:"M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"}),React.createElement(x,{to:`/custommer/edit/${t.id}`}," Cadastrar Novo Cliente ")))))))),React.createElement("button",{onClick:E},"imprimir"))}function A(){const[c,m]=p.exports.useState(!1),[e,u]=p.exports.useState({});function o(){console.log("setNewCustommer:",e),fetch("http://localhost:3000/user",{method:"POST",headers:{"Content-Type":"application/json",Acept:"*/*"},body:JSON.stringify(e)}).then(l=>{console.log(l),l.status==201&&m(!0)}).catch(l=>console.log(l))}function s(){u({}),m(!1)}function i(l){let h=e;const a=l.target.value,n=l.target.id;(n=="contato"||n=="razao_social"||n=="nome_fantasia"||n=="rua"||n=="bairro"||n=="telefone"||n=="cnpj"||n=="email"||n=="cidade"||n=="uf"||n=="nro")&&(h[n]=a),u(h)}return c?React.createElement("div",null,React.createElement(x,{to:"/"},"<< Voltar \xE0 P\xE1gina Inicial"),React.createElement("h2",null,"Cliente Cadastrado com Sucesso!"),React.createElement("button",{onClick:s},"Adicionar Novo Cliente")):React.createElement("div",{className:"NewCustommerForm"},React.createElement(x,{to:"/"}," Voltar \xE0 p\xE1gina inicial "),React.createElement("h1",null,"Cadastrar Novo Cliente"),React.createElement("div",{className:"NewCustommerForm",style:{display:"block"}},React.createElement("h2",null,"Dados Pessoais"),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Contato"),React.createElement("input",{type:"text",id:"contato",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"R.Social"),React.createElement("input",{type:"text",id:"razao_social",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"N.Fantasia"),React.createElement("input",{type:"text",id:"nome_fantasia",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Cnpj"),React.createElement("input",{type:"text",id:"cnpj",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Email"),React.createElement("input",{type:"text",id:"email",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Telefone"),React.createElement("input",{type:"text",id:"telefone",onChange:l=>i(l)}),React.createElement("h2",null,"Endere\xE7o"),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Logradouro"),React.createElement("input",{type:"text",id:"rua",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Nro."),React.createElement("input",{type:"text",id:"nro",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Bairro"),React.createElement("input",{type:"text",id:"bairro",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Cidade"),React.createElement("input",{type:"text",id:"cidade",onChange:l=>i(l)}),React.createElement("label",{style:{paddingRight:"5px",fontSize:"18px",display:"block"}},"Estado"),React.createElement("input",{type:"text",id:"uf",onChange:l=>i(l)})),React.createElement("button",{onClick:o},"Adicionar"),React.createElement(x,{to:"/"},"Cancelar"))}function F(){return React.createElement(H,null,React.createElement(V,null,React.createElement(C,{path:"/",element:React.createElement(P,null)}),React.createElement(C,{path:"/newcustommer",element:React.createElement(A,null)}),React.createElement(C,{path:"/custommer/edit/:id",element:React.createElement(w,null)})))}function T(){return React.createElement("div",{className:"App"},React.createElement(F,null))}N.createRoot(document.getElementById("root")).render(z.createElement(z.StrictMode,null,z.createElement(T,null)));