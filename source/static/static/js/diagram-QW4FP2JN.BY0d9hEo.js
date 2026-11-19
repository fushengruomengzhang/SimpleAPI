import{t as e}from"./chunk-TMUBEWPD.jdHx9rSu.js";import{r as t}from"./chunk-7DKRZKHE.BwVAyp26.js";import{s as n}from"./S3Doc.CqkawH54.js";import{E as r,G as i,H as a,S as o,V as s,b as c,c as l,d as u,i as d,j as f,m as p,x as m}from"./d3-selection.C18N-yi0.js";import{t as h}from"./mermaid-parser.core.D0Q5Hc3R.js";var g={packet:[]},_=structuredClone(g),v=p.packet,y={pushWord:d(e=>{e.length>0&&_.packet.push(e)},`pushWord`),getPacket:d(()=>_.packet,`getPacket`),getConfig:d(()=>{let e=t({...v,...o().packet});return e.showBits&&(e.paddingY+=10),e},`getConfig`),clear:d(()=>{l(),_=structuredClone(g)},`clear`),setAccTitle:a,getAccTitle:m,setDiagramTitle:i,getDiagramTitle:r,getAccDescription:c,setAccDescription:s},b=1e4,x=d(t=>{e(t,y);let n=-1,r=[],i=1,{bitsPerRow:a}=y.getConfig();for(let{start:e,end:o,label:s}of t.blocks){if(o&&o<e)throw Error(`Packet block ${e} - ${o} is invalid. End must be greater than start.`);if(e!==n+1)throw Error(`Packet block ${e} - ${o??e} is not contiguous. It should start from ${n+1}.`);for(n=o??e,f.debug(`Packet block ${e} - ${n} with label ${s}`);r.length<=a+1&&y.getPacket().length<b;){let[t,n]=S({start:e,end:o,label:s},i,a);if(r.push(t),t.end+1===i*a&&(y.pushWord(r),r=[],i++),!n)break;({start:e,end:o,label:s}=n)}}y.pushWord(r)},`populate`),S=d((e,t,n)=>{if(e.end===void 0&&(e.end=e.start),e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);return e.end+1<=t*n?[e,void 0]:[{start:e.start,end:t*n-1,label:e.label},{start:t*n,end:e.end,label:e.label}]},`getNextFittingBlock`),C={parse:d(async e=>{let t=await h(`packet`,e);f.debug(t),x(t)},`parse`)},w=d((e,t,r,i)=>{let a=i.db,o=a.getConfig(),{rowHeight:s,paddingY:c,bitWidth:l,bitsPerRow:d}=o,f=a.getPacket(),p=a.getDiagramTitle(),m=s+c,h=m*(f.length+1)-(p?0:s),g=l*d+2,_=n(t);_.attr(`viewbox`,`0 0 ${g} ${h}`),u(_,h,g,o.useMaxWidth);for(let[e,t]of f.entries())T(_,t,e,o);_.append(`text`).text(p).attr(`x`,g/2).attr(`y`,h-m/2).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).attr(`class`,`packetTitle`)},`draw`),T=d((e,t,n,{rowHeight:r,paddingX:i,paddingY:a,bitWidth:o,bitsPerRow:s,showBits:c})=>{let l=e.append(`g`),u=n*(r+a)+a;for(let e of t){let t=e.start%s*o+1,n=(e.end-e.start+1)*o-i;if(l.append(`rect`).attr(`x`,t).attr(`y`,u).attr(`width`,n).attr(`height`,r).attr(`class`,`packetBlock`),l.append(`text`).attr(`x`,t+n/2).attr(`y`,u+r/2).attr(`class`,`packetLabel`).attr(`dominant-baseline`,`middle`).attr(`text-anchor`,`middle`).text(e.label),!c)continue;let a=e.end===e.start,d=u-2;l.append(`text`).attr(`x`,t+(a?n/2:0)).attr(`y`,d).attr(`class`,`packetByte start`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,a?`middle`:`start`).text(e.start),a||l.append(`text`).attr(`x`,t+n).attr(`y`,d).attr(`class`,`packetByte end`).attr(`dominant-baseline`,`auto`).attr(`text-anchor`,`end`).text(e.end)}},`drawWord`),E={draw:w},D={byteFontSize:`10px`,startByteColor:`black`,endByteColor:`black`,labelColor:`black`,labelFontSize:`12px`,titleColor:`black`,titleFontSize:`14px`,blockStrokeColor:`black`,blockStrokeWidth:`1`,blockFillColor:`#efefef`},O={parser:C,db:y,renderer:E,styles:d(({packet:e}={})=>{let n=t(D,e);return`
	.packetByte {
		font-size: ${n.byteFontSize};
	}
	.packetByte.start {
		fill: ${n.startByteColor};
	}
	.packetByte.end {
		fill: ${n.endByteColor};
	}
	.packetLabel {
		fill: ${n.labelColor};
		font-size: ${n.labelFontSize};
	}
	.packetTitle {
		fill: ${n.titleColor};
		font-size: ${n.titleFontSize};
	}
	.packetBlock {
		stroke: ${n.blockStrokeColor};
		stroke-width: ${n.blockStrokeWidth};
		fill: ${n.blockFillColor};
	}
	`},`styles`)};export{O as diagram};