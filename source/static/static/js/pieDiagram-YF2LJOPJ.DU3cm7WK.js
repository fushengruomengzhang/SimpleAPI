import{t as e}from"./chunk-TMUBEWPD.jdHx9rSu.js";import{f as t,r as n}from"./chunk-7DKRZKHE.BwVAyp26.js";import{s as r}from"./S3Doc.CqkawH54.js";import{C as i,E as a,G as o,H as s,V as c,b as l,c as u,d,i as f,j as p,m,x as h}from"./d3-selection.C18N-yi0.js";import{t as g}from"./mermaid-parser.core.D0Q5Hc3R.js";import{b as _,t as v}from"./d3-shape.CRKLVUqo.js";import{r as y}from"./d3-scale.B3la2jC5.js";var b=m.pie,x={sections:new Map,showData:!1,config:b},S=x.sections,C=x.showData,w=structuredClone(b),T={getConfig:f(()=>structuredClone(w),`getConfig`),clear:f(()=>{S=new Map,C=x.showData,u()},`clear`),setDiagramTitle:o,getDiagramTitle:a,setAccTitle:s,getAccTitle:h,setAccDescription:c,getAccDescription:l,addSection:f(({label:e,value:t})=>{S.has(e)||(S.set(e,t),p.debug(`added new section: ${e}, with value: ${t}`))},`addSection`),getSections:f(()=>S,`getSections`),setShowData:f(e=>{C=e},`setShowData`),getShowData:f(()=>C,`getShowData`)},E=f((t,n)=>{e(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},`populateDb`),D={parse:f(async e=>{let t=await g(`pie`,e);p.debug(t),E(t,T)},`parse`)},O=f(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,`getStyles`),k=f(e=>{let t=[...e.entries()].map(e=>({label:e[0],value:e[1]})).sort((e,t)=>t.value-e.value);return _().value(e=>e.value)(t)},`createPieArcs`),A={parser:D,db:T,renderer:{draw:f((e,a,o,s)=>{p.debug(`rendering pie chart
`+e);let c=s.db,l=i(),u=n(c.getConfig(),l.pie),f=r(a),m=f.append(`g`);m.attr(`transform`,`translate(225,225)`);let{themeVariables:h}=l,[g]=t(h.pieOuterStrokeWidth);g??=2;let _=u.textPosition,b=v().innerRadius(0).outerRadius(185),x=v().innerRadius(185*_).outerRadius(185*_);m.append(`circle`).attr(`cx`,0).attr(`cy`,0).attr(`r`,185+g/2).attr(`class`,`pieOuterCircle`);let S=c.getSections(),C=k(S),w=[h.pie1,h.pie2,h.pie3,h.pie4,h.pie5,h.pie6,h.pie7,h.pie8,h.pie9,h.pie10,h.pie11,h.pie12],T=y(w);m.selectAll(`mySlices`).data(C).enter().append(`path`).attr(`d`,b).attr(`fill`,e=>T(e.data.label)).attr(`class`,`pieCircle`);let E=0;S.forEach(e=>{E+=e}),m.selectAll(`mySlices`).data(C).enter().append(`text`).text(e=>(e.data.value/E*100).toFixed(0)+`%`).attr(`transform`,e=>`translate(`+x.centroid(e)+`)`).style(`text-anchor`,`middle`).attr(`class`,`slice`),m.append(`text`).text(c.getDiagramTitle()).attr(`x`,0).attr(`y`,-200).attr(`class`,`pieTitleText`);let D=m.selectAll(`.legend`).data(T.domain()).enter().append(`g`).attr(`class`,`legend`).attr(`transform`,(e,t)=>{let n=22*T.domain().length/2;return`translate(216,`+(t*22-n)+`)`});D.append(`rect`).attr(`width`,18).attr(`height`,18).style(`fill`,T).style(`stroke`,T),D.data(C).append(`text`).attr(`x`,22).attr(`y`,14).text(e=>{let{label:t,value:n}=e.data;return c.getShowData()?`${t} [${n}]`:t});let O=512+Math.max(...D.selectAll(`text`).nodes().map(e=>e?.getBoundingClientRect().width??0));f.attr(`viewBox`,`0 0 ${O} 450`),d(f,450,O,u.useMaxWidth)},`draw`)},styles:O};export{A as diagram};