import{a as e,t}from"./rolldown-runtime.eil0g4P7.js";import{h as n}from"./chunk-7DKRZKHE.BwVAyp26.js";import{C as r,E as i,G as a,H as o,V as s,b as c,c as l,d as u,i as d,j as f,t as p,u as m,x as h}from"./d3-selection.C18N-yi0.js";import{t as g}from"./dist.CCRnLTGW.js";import{H as _,U as v,V as y}from"./index.BZhtv4P6.js";import{T as b,_ as x,a as S,b as C,c as w,d as T,f as E,g as D,h as O,i as k,l as A,m as j,n as ee,o as te,p as ne,s as re,u as ie,v as ae,w as oe}from"./d3-scale.B3la2jC5.js";function se(e){return e}var M=1,N=2,ce=3,P=4,le=1e-6;function ue(e){return`translate(`+e+`,0)`}function de(e){return`translate(0,`+e+`)`}function fe(e){return t=>+e(t)}function pe(e,t){return t=Math.max(0,e.bandwidth()-t*2)/2,e.round()&&(t=Math.round(t)),n=>+e(n)+t}function me(){return!this.__axis}function he(e,t){var n=[],r=null,i=null,a=6,o=6,s=3,c=typeof window<`u`&&window.devicePixelRatio>1?0:.5,l=e===M||e===P?-1:1,u=e===P||e===N?`x`:`y`,d=e===M||e===ce?ue:de;function f(f){var p=r??(t.ticks?t.ticks.apply(t,n):t.domain()),m=i??(t.tickFormat?t.tickFormat.apply(t,n):se),h=Math.max(a,0)+s,g=t.range(),_=+g[0]+c,v=+g[g.length-1]+c,y=(t.bandwidth?pe:fe)(t.copy(),c),b=f.selection?f.selection():f,x=b.selectAll(`.domain`).data([null]),S=b.selectAll(`.tick`).data(p,t).order(),C=S.exit(),w=S.enter().append(`g`).attr(`class`,`tick`),T=S.select(`line`),E=S.select(`text`);x=x.merge(x.enter().insert(`path`,`.tick`).attr(`class`,`domain`).attr(`stroke`,`currentColor`)),S=S.merge(w),T=T.merge(w.append(`line`).attr(`stroke`,`currentColor`).attr(u+`2`,l*a)),E=E.merge(w.append(`text`).attr(`fill`,`currentColor`).attr(u,l*h).attr(`dy`,e===M?`0em`:e===ce?`0.71em`:`0.32em`)),f!==b&&(x=x.transition(f),S=S.transition(f),T=T.transition(f),E=E.transition(f),C=C.transition(f).attr(`opacity`,le).attr(`transform`,function(e){return isFinite(e=y(e))?d(e+c):this.getAttribute(`transform`)}),w.attr(`opacity`,le).attr(`transform`,function(e){var t=this.parentNode.__axis;return d((t&&isFinite(t=t(e))?t:y(e))+c)})),C.remove(),x.attr(`d`,e===P||e===N?o?`M`+l*o+`,`+_+`H`+c+`V`+v+`H`+l*o:`M`+c+`,`+_+`V`+v:o?`M`+_+`,`+l*o+`V`+c+`H`+v+`V`+l*o:`M`+_+`,`+c+`H`+v),S.attr(`opacity`,1).attr(`transform`,function(e){return d(y(e)+c)}),T.attr(u+`2`,l*a),E.attr(u,l*h).text(m),b.filter(me).attr(`fill`,`none`).attr(`font-size`,10).attr(`font-family`,`sans-serif`).attr(`text-anchor`,e===N?`start`:e===P?`end`:`middle`),b.each(function(){this.__axis=y})}return f.scale=function(e){return arguments.length?(t=e,f):t},f.ticks=function(){return n=Array.from(arguments),f},f.tickArguments=function(e){return arguments.length?(n=e==null?[]:Array.from(e),f):n.slice()},f.tickValues=function(e){return arguments.length?(r=e==null?null:Array.from(e),f):r&&r.slice()},f.tickFormat=function(e){return arguments.length?(i=e,f):i},f.tickSize=function(e){return arguments.length?(a=o=+e,f):a},f.tickSizeInner=function(e){return arguments.length?(a=+e,f):a},f.tickSizeOuter=function(e){return arguments.length?(o=+e,f):o},f.tickPadding=function(e){return arguments.length?(s=+e,f):s},f.offset=function(e){return arguments.length?(c=+e,f):c},f}function ge(e){return he(M,e)}function _e(e){return he(ce,e)}var ve=t(((e,t,n)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_isoWeek=r()})(n,(function(){return function(e,t,n){var r=function(e){return e.add(4-e.isoWeekday(),`day`)},i=t.prototype;i.isoWeekYear=function(){return r(this).year()},i.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),`day`);var t,i,a,o,s=r(this),c=(t=this.isoWeekYear(),i=this.$u,a=(i?n.utc:n)().year(t).startOf(`year`),o=4-a.isoWeekday(),a.isoWeekday()>4&&(o+=7),a.add(o,`day`));return s.diff(c,`week`)+1},i.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var a=i.startOf;i.startOf=function(e,t){var n=this.$utils(),r=!!n.u(t)||t;return n.p(e)===`isoweek`?r?this.date(this.date()-(this.isoWeekday()-1)).startOf(`day`):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf(`day`):a.bind(this)(e,t)}}}))})),ye=g(),F=e(v(),1),be=e(ve(),1),xe=e(_(),1),Se=e(y(),1),I=function(){var e=d(function(e,t,n,r){for(n||={},r=e.length;r--;n[e[r]]=t);return n},`o`),t=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],r=[1,27],i=[1,28],a=[1,29],o=[1,30],s=[1,31],c=[1,32],l=[1,33],u=[1,34],f=[1,9],p=[1,10],m=[1,11],h=[1,12],g=[1,13],_=[1,14],v=[1,15],y=[1,16],b=[1,19],x=[1,20],S=[1,21],C=[1,22],w=[1,23],T=[1,25],E=[1,35],D={trace:d(function(){},`trace`),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:`error`,4:`gantt`,6:`EOF`,8:`SPACE`,10:`NL`,12:`weekday_monday`,13:`weekday_tuesday`,14:`weekday_wednesday`,15:`weekday_thursday`,16:`weekday_friday`,17:`weekday_saturday`,18:`weekday_sunday`,20:`weekend_friday`,21:`weekend_saturday`,22:`dateFormat`,23:`inclusiveEndDates`,24:`topAxis`,25:`axisFormat`,26:`tickInterval`,27:`excludes`,28:`includes`,29:`todayMarker`,30:`title`,31:`acc_title`,32:`acc_title_value`,33:`acc_descr`,34:`acc_descr_value`,35:`acc_descr_multiline_value`,36:`section`,38:`taskTxt`,39:`taskData`,40:`click`,41:`callbackname`,42:`callbackargs`,43:`href`},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:d(function(e,t,n,r,i,a,o){var s=a.length-1;switch(i){case 1:return a[s-1];case 2:this.$=[];break;case 3:a[s-1].push(a[s]),this.$=a[s-1];break;case 4:case 5:this.$=a[s];break;case 6:case 7:this.$=[];break;case 8:r.setWeekday(`monday`);break;case 9:r.setWeekday(`tuesday`);break;case 10:r.setWeekday(`wednesday`);break;case 11:r.setWeekday(`thursday`);break;case 12:r.setWeekday(`friday`);break;case 13:r.setWeekday(`saturday`);break;case 14:r.setWeekday(`sunday`);break;case 15:r.setWeekend(`friday`);break;case 16:r.setWeekend(`saturday`);break;case 17:r.setDateFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 18:r.enableInclusiveEndDates(),this.$=a[s].substr(18);break;case 19:r.TopAxis(),this.$=a[s].substr(8);break;case 20:r.setAxisFormat(a[s].substr(11)),this.$=a[s].substr(11);break;case 21:r.setTickInterval(a[s].substr(13)),this.$=a[s].substr(13);break;case 22:r.setExcludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 23:r.setIncludes(a[s].substr(9)),this.$=a[s].substr(9);break;case 24:r.setTodayMarker(a[s].substr(12)),this.$=a[s].substr(12);break;case 27:r.setDiagramTitle(a[s].substr(6)),this.$=a[s].substr(6);break;case 28:this.$=a[s].trim(),r.setAccTitle(this.$);break;case 29:case 30:this.$=a[s].trim(),r.setAccDescription(this.$);break;case 31:r.addSection(a[s].substr(8)),this.$=a[s].substr(8);break;case 33:r.addTask(a[s-1],a[s]),this.$=`task`;break;case 34:this.$=a[s-1],r.setClickEvent(a[s-1],a[s],null);break;case 35:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],a[s]);break;case 36:this.$=a[s-2],r.setClickEvent(a[s-2],a[s-1],null),r.setLink(a[s-2],a[s]);break;case 37:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-2],a[s-1]),r.setLink(a[s-3],a[s]);break;case 38:this.$=a[s-2],r.setClickEvent(a[s-2],a[s],null),r.setLink(a[s-2],a[s-1]);break;case 39:this.$=a[s-3],r.setClickEvent(a[s-3],a[s-1],a[s]),r.setLink(a[s-3],a[s-2]);break;case 40:this.$=a[s-1],r.setLink(a[s-1],a[s]);break;case 41:case 47:this.$=a[s-1]+` `+a[s];break;case 42:case 43:case 45:this.$=a[s-2]+` `+a[s-1]+` `+a[s];break;case 44:case 46:this.$=a[s-3]+` `+a[s-2]+` `+a[s-1]+` `+a[s]}},`anonymous`),table:[{3:1,4:[1,2]},{1:[3]},e(t,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:18,20:l,21:u,22:f,23:p,24:m,25:h,26:g,27:_,28:v,29:y,30:b,31:x,33:S,35:C,36:w,37:24,38:T,40:E},e(t,[2,7],{1:[2,1]}),e(t,[2,3]),{9:36,11:17,12:n,13:r,14:i,15:a,16:o,17:s,18:c,19:18,20:l,21:u,22:f,23:p,24:m,25:h,26:g,27:_,28:v,29:y,30:b,31:x,33:S,35:C,36:w,37:24,38:T,40:E},e(t,[2,5]),e(t,[2,6]),e(t,[2,17]),e(t,[2,18]),e(t,[2,19]),e(t,[2,20]),e(t,[2,21]),e(t,[2,22]),e(t,[2,23]),e(t,[2,24]),e(t,[2,25]),e(t,[2,26]),e(t,[2,27]),{32:[1,37]},{34:[1,38]},e(t,[2,30]),e(t,[2,31]),e(t,[2,32]),{39:[1,39]},e(t,[2,8]),e(t,[2,9]),e(t,[2,10]),e(t,[2,11]),e(t,[2,12]),e(t,[2,13]),e(t,[2,14]),e(t,[2,15]),e(t,[2,16]),{41:[1,40],43:[1,41]},e(t,[2,4]),e(t,[2,28]),e(t,[2,29]),e(t,[2,33]),e(t,[2,34],{42:[1,42],43:[1,43]}),e(t,[2,40],{41:[1,44]}),e(t,[2,35],{43:[1,45]}),e(t,[2,36]),e(t,[2,38],{42:[1,46]}),e(t,[2,37]),e(t,[2,39])],defaultActions:{},parseError:d(function(e,t){if(t.recoverable)this.trace(e);else{var n=Error(e);throw n.hash=t,n}},`parseError`),parse:d(function(e){var t=this,n=[0],r=[],i=[null],a=[],o=this.table,s=``,c=0,l=0,u=0,f=2,p=1,m=a.slice.call(arguments,1),h=Object.create(this.lexer),g={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(g.yy[_]=this.yy[_]);h.setInput(e,g.yy),g.yy.lexer=h,g.yy.parser=this,h.yylloc===void 0&&(h.yylloc={});var v=h.yylloc;a.push(v);var y=h.options&&h.options.ranges;this.parseError=typeof g.yy.parseError==`function`?g.yy.parseError:Object.getPrototypeOf(this).parseError;function b(e){n.length-=2*e,i.length-=e,a.length-=e}d(b,`popStack`);function x(){var e=r.pop()||h.lex()||p;return typeof e!=`number`&&(e instanceof Array&&(r=e,e=r.pop()),e=t.symbols_[e]||e),e}d(x,`lex`);for(var S,C,w,T,E,D={},O,k,A,j;;){if(w=n[n.length-1],this.defaultActions[w]?T=this.defaultActions[w]:(S??=x(),T=o[w]&&o[w][S]),T===void 0||!T.length||!T[0]){var ee=``;for(O in j=[],o[w])this.terminals_[O]&&O>f&&j.push(`'`+this.terminals_[O]+`'`);ee=h.showPosition?`Parse error on line `+(c+1)+`:
`+h.showPosition()+`
Expecting `+j.join(`, `)+`, got '`+(this.terminals_[S]||S)+`'`:`Parse error on line `+(c+1)+`: Unexpected `+(S==p?`end of input`:`'`+(this.terminals_[S]||S)+`'`),this.parseError(ee,{text:h.match,token:this.terminals_[S]||S,line:h.yylineno,loc:v,expected:j})}if(T[0]instanceof Array&&T.length>1)throw Error(`Parse Error: multiple actions possible at state: `+w+`, token: `+S);switch(T[0]){case 1:n.push(S),i.push(h.yytext),a.push(h.yylloc),n.push(T[1]),S=null,C?(S=C,C=null):(l=h.yyleng,s=h.yytext,c=h.yylineno,v=h.yylloc,u>0&&u--);break;case 2:if(k=this.productions_[T[1]][1],D.$=i[i.length-k],D._$={first_line:a[a.length-(k||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(k||1)].first_column,last_column:a[a.length-1].last_column},y&&(D._$.range=[a[a.length-(k||1)].range[0],a[a.length-1].range[1]]),E=this.performAction.apply(D,[s,l,c,g.yy,T[1],i,a].concat(m)),E!==void 0)return E;k&&(n=n.slice(0,-1*k*2),i=i.slice(0,-1*k),a=a.slice(0,-1*k)),n.push(this.productions_[T[1]][0]),i.push(D.$),a.push(D._$),A=o[n[n.length-2]][n[n.length-1]],n.push(A);break;case 3:return!0}}return!0},`parse`)};D.lexer=function(){return{EOF:1,parseError:d(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},`parseError`),setInput:d(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match=``,this.conditionStack=[`INITIAL`],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},`setInput`),input:d(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},`input`),unput:d(function(e){var t=e.length,n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},`unput`),more:d(function(){return this._more=!0,this},`more`),reject:d(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError(`Lexical error on line `+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:``,token:null,line:this.yylineno});return this},`reject`),less:d(function(e){this.unput(this.match.slice(e))},`less`),pastInput:d(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?`...`:``)+e.substr(-20).replace(/\n/g,``)},`pastInput`),upcomingInput:d(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?`...`:``)).replace(/\n/g,``)},`upcomingInput`),showPosition:d(function(){var e=this.pastInput(),t=Array(e.length+1).join(`-`);return e+this.upcomingInput()+`
`+t+`^`},`showPosition`),test_match:d(function(e,t){var n,r,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),r=e[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],n=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in i)this[a]=i[a];return!1}return!1},`test_match`),next:d(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var e,t,n,r;this._more||(this.yytext=``,this.match=``);for(var i=this._currentRules(),a=0;a<i.length;a++)if(n=this._input.match(this.rules[i[a]]),n&&(!t||n[0].length>t[0].length)){if(t=n,r=a,this.options.backtrack_lexer){if(e=this.test_match(n,i[a]),e!==!1)return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?(e=this.test_match(t,i[r]),e!==!1&&e):this._input===``?this.EOF:this.parseError(`Lexical error on line `+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:``,token:null,line:this.yylineno})},`next`),lex:d(function(){return this.next()||this.lex()},`lex`),begin:d(function(e){this.conditionStack.push(e)},`begin`),popState:d(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},`popState`),_currentRules:d(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},`_currentRules`),topState:d(function(e){return e=this.conditionStack.length-1-Math.abs(e||0),e>=0?this.conditionStack[e]:`INITIAL`},`topState`),pushState:d(function(e){this.begin(e)},`pushState`),stateStackSize:d(function(){return this.conditionStack.length},`stateStackSize`),options:{"case-insensitive":!0},performAction:d(function(e,t,n,r){switch(n){case 0:return this.begin(`open_directive`),`open_directive`;case 1:return this.begin(`acc_title`),31;case 2:return this.popState(),`acc_title_value`;case 3:return this.begin(`acc_descr`),33;case 4:return this.popState(),`acc_descr_value`;case 5:this.begin(`acc_descr_multiline`);break;case 6:this.popState();break;case 7:return`acc_descr_multiline_value`;case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin(`href`);break;case 15:this.popState();break;case 16:return 43;case 17:this.begin(`callbackname`);break;case 18:this.popState();break;case 19:this.popState(),this.begin(`callbackargs`);break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin(`click`);break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return`date`;case 45:return 30;case 46:return`accDescription`;case 47:return 36;case 48:return 38;case 49:return 39;case 50:return`:`;case 51:return 6;case 52:return`INVALID`}},`anonymous`),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}}}();function O(){this.yy={}}return d(O,`Parser`),O.prototype=D,D.Parser=O,new O}();I.parser=I;var Ce=I;F.default.extend(be.default),F.default.extend(xe.default),F.default.extend(Se.default);var we={friday:5,saturday:6},L=``,R=``,z=void 0,B=``,V=[],H=[],Te=new Map,Ee=[],U=[],W=``,G=``,De=[`active`,`done`,`crit`,`milestone`],Oe=[],K=!1,ke=!1,Ae=`sunday`,q=`saturday`,je=0,Me=d(function(){Ee=[],U=[],W=``,Oe=[],ut=0,pt=void 0,Y=void 0,X=[],L=``,R=``,G=``,z=void 0,B=``,V=[],H=[],K=!1,ke=!1,je=0,Te=new Map,l(),Ae=`sunday`,q=`saturday`},`clear`),Ne=d(function(e){R=e},`setAxisFormat`),Pe=d(function(){return R},`getAxisFormat`),Fe=d(function(e){z=e},`setTickInterval`),Ie=d(function(){return z},`getTickInterval`),Le=d(function(e){B=e},`setTodayMarker`),Re=d(function(){return B},`getTodayMarker`),ze=d(function(e){L=e},`setDateFormat`),Be=d(function(){K=!0},`enableInclusiveEndDates`),Ve=d(function(){return K},`endDatesAreInclusive`),He=d(function(){ke=!0},`enableTopAxis`),Ue=d(function(){return ke},`topAxisEnabled`),We=d(function(e){G=e},`setDisplayMode`),Ge=d(function(){return G},`getDisplayMode`),Ke=d(function(){return L},`getDateFormat`),qe=d(function(e){V=e.toLowerCase().split(/[\s,]+/)},`setIncludes`),Je=d(function(){return V},`getIncludes`),Ye=d(function(e){H=e.toLowerCase().split(/[\s,]+/)},`setExcludes`),Xe=d(function(){return H},`getExcludes`),Ze=d(function(){return Te},`getLinks`),Qe=d(function(e){W=e,Ee.push(e)},`addSection`),$e=d(function(){return Ee},`getSections`),et=d(function(){let e=_t(),t=0;for(;!e&&t<10;)e=_t(),t++;return U=X,U},`getTasks`),tt=d(function(e,t,n,r){return r.includes(e.format(t.trim()))?!1:n.includes(`weekends`)&&(e.isoWeekday()===we[q]||e.isoWeekday()===we[q]+1)||n.includes(e.format(`dddd`).toLowerCase())?!0:n.includes(e.format(t.trim()))},`isInvalidDate`),nt=d(function(e){Ae=e},`setWeekday`),rt=d(function(){return Ae},`getWeekday`),it=d(function(e){q=e},`setWeekend`),at=d(function(e,t,n,r){if(!n.length||e.manualEndTime)return;let i;i=e.startTime instanceof Date?(0,F.default)(e.startTime):(0,F.default)(e.startTime,t,!0),i=i.add(1,`d`);let a;a=e.endTime instanceof Date?(0,F.default)(e.endTime):(0,F.default)(e.endTime,t,!0);let[o,s]=ot(i,a,t,n,r);e.endTime=o.toDate(),e.renderEndTime=s},`checkTaskDates`),ot=d(function(e,t,n,r,i){let a=!1,o=null;for(;e<=t;)a||(o=t.toDate()),a=tt(e,n,r,i),a&&(t=t.add(1,`d`)),e=e.add(1,`d`);return[t,o]},`fixTaskDates`),st=d(function(e,t,n){n=n.trim();let r=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(r!==null){let e=null;for(let t of r.groups.ids.split(` `)){let n=Z(t);n!==void 0&&(!e||n.endTime>e.endTime)&&(e=n)}if(e)return e.endTime;let t=new Date;return t.setHours(0,0,0,0),t}let i=(0,F.default)(n,t.trim(),!0);if(i.isValid())return i.toDate();{f.debug(`Invalid date:`+n),f.debug(`With date format:`+t.trim());let e=new Date(n);if(e===void 0||isNaN(e.getTime())||e.getFullYear()<-1e4||e.getFullYear()>1e4)throw Error(`Invalid date:`+n);return e}},`getStartDate`),ct=d(function(e){let t=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(e.trim());return t===null?[NaN,`ms`]:[Number.parseFloat(t[1]),t[2]]},`parseDuration`),lt=d(function(e,t,n,r=!1){n=n.trim();let i=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(i!==null){let e=null;for(let t of i.groups.ids.split(` `)){let n=Z(t);n!==void 0&&(!e||n.startTime<e.startTime)&&(e=n)}if(e)return e.startTime;let t=new Date;return t.setHours(0,0,0,0),t}let a=(0,F.default)(n,t.trim(),!0);if(a.isValid())return r&&(a=a.add(1,`d`)),a.toDate();let o=(0,F.default)(e),[s,c]=ct(n);if(!Number.isNaN(s)){let e=o.add(s,c);e.isValid()&&(o=e)}return o.toDate()},`getEndDate`),ut=0,J=d(function(e){return e===void 0?(ut+=1,`task`+ut):e},`parseId`),dt=d(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};Q(r,i,De);for(let e=0;e<r.length;e++)r[e]=r[e].trim();let a=``;switch(r.length){case 1:i.id=J(),i.startTime=e.endTime,a=r[0];break;case 2:i.id=J(),i.startTime=st(void 0,L,r[0]),a=r[1];break;case 3:i.id=J(r[0]),i.startTime=st(void 0,L,r[1]),a=r[2]}return a&&(i.endTime=lt(i.startTime,L,a,K),i.manualEndTime=(0,F.default)(a,`YYYY-MM-DD`,!0).isValid(),at(i,L,H,V)),i},`compileData`),ft=d(function(e,t){let n;n=t.substr(0,1)===`:`?t.substr(1,t.length):t;let r=n.split(`,`),i={};Q(r,i,De);for(let e=0;e<r.length;e++)r[e]=r[e].trim();switch(r.length){case 1:i.id=J(),i.startTime={type:`prevTaskEnd`,id:e},i.endTime={data:r[0]};break;case 2:i.id=J(),i.startTime={type:`getStartDate`,startData:r[0]},i.endTime={data:r[1]};break;case 3:i.id=J(r[0]),i.startTime={type:`getStartDate`,startData:r[1]},i.endTime={data:r[2]}}return i},`parseData`),pt,Y,X=[],mt={},ht=d(function(e,t){let n={section:W,type:W,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:t},task:e,classes:[]},r=ft(Y,t);n.raw.startTime=r.startTime,n.raw.endTime=r.endTime,n.id=r.id,n.prevTaskId=Y,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,n.order=je,je++;let i=X.push(n);Y=n.id,mt[n.id]=i-1},`addTask`),Z=d(function(e){let t=mt[e];return X[t]},`findTaskById`),gt=d(function(e,t){let n={section:W,type:W,description:e,task:e,classes:[]},r=dt(pt,t);n.startTime=r.startTime,n.endTime=r.endTime,n.id=r.id,n.active=r.active,n.done=r.done,n.crit=r.crit,n.milestone=r.milestone,pt=n,U.push(n)},`addTaskOrg`),_t=d(function(){let e=d(function(e){let t=X[e],n=``;switch(X[e].raw.startTime.type){case`prevTaskEnd`:t.startTime=Z(t.prevTaskId).endTime;break;case`getStartDate`:n=st(void 0,L,X[e].raw.startTime.startData),n&&(X[e].startTime=n)}return X[e].startTime&&(X[e].endTime=lt(X[e].startTime,L,X[e].raw.endTime.data,K),X[e].endTime&&(X[e].processed=!0,X[e].manualEndTime=(0,F.default)(X[e].raw.endTime.data,`YYYY-MM-DD`,!0).isValid(),at(X[e],L,H,V))),X[e].processed},`compileTask`),t=!0;for(let[n,r]of X.entries())e(n),t&&=r.processed;return t},`compileTasks`),vt=d(function(e,t){let n=t;r().securityLevel!==`loose`&&(n=(0,ye.sanitizeUrl)(t)),e.split(`,`).forEach(function(e){Z(e)!==void 0&&(xt(e,()=>{window.open(n,`_self`)}),Te.set(e,n))}),yt(e,`clickable`)},`setLink`),yt=d(function(e,t){e.split(`,`).forEach(function(e){let n=Z(e);n!==void 0&&n.classes.push(t)})},`setClass`),bt=d(function(e,t,i){if(r().securityLevel!==`loose`||t===void 0)return;let a=[];if(typeof i==`string`){a=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<a.length;e++){let t=a[e].trim();t.startsWith(`"`)&&t.endsWith(`"`)&&(t=t.substr(1,t.length-2)),a[e]=t}}a.length===0&&a.push(e),Z(e)!==void 0&&xt(e,()=>{n.runFunc(t,...a)})},`setClickFun`),xt=d(function(e,t){Oe.push(function(){let n=document.querySelector(`[id="${e}"]`);n!==null&&n.addEventListener(`click`,function(){t()})},function(){let n=document.querySelector(`[id="${e}-text"]`);n!==null&&n.addEventListener(`click`,function(){t()})})},`pushFun`),St={getConfig:d(()=>r().gantt,`getConfig`),clear:Me,setDateFormat:ze,getDateFormat:Ke,enableInclusiveEndDates:Be,endDatesAreInclusive:Ve,enableTopAxis:He,topAxisEnabled:Ue,setAxisFormat:Ne,getAxisFormat:Pe,setTickInterval:Fe,getTickInterval:Ie,setTodayMarker:Le,getTodayMarker:Re,setAccTitle:o,getAccTitle:h,setDiagramTitle:a,getDiagramTitle:i,setDisplayMode:We,getDisplayMode:Ge,setAccDescription:s,getAccDescription:c,addSection:Qe,getSections:$e,getTasks:et,addTask:ht,findTaskById:Z,addTaskOrg:gt,setIncludes:qe,getIncludes:Je,setExcludes:Ye,getExcludes:Xe,setClickEvent:d(function(e,t,n){e.split(`,`).forEach(function(e){bt(e,t,n)}),yt(e,`clickable`)},`setClickEvent`),setLink:vt,getLinks:Ze,bindFunctions:d(function(e){Oe.forEach(function(t){t(e)})},`bindFunctions`),parseDuration:ct,isInvalidDate:tt,setWeekday:nt,getWeekday:rt,setWeekend:it};function Q(e,t,n){let r=!0;for(;r;)r=!1,n.forEach(function(n){let i=`^\\s*`+n+`\\s*$`,a=new RegExp(i);e[0].match(a)&&(t[n]=!0,e.shift(1),r=!0)})}d(Q,`getTaskTags`);var Ct=d(function(){f.debug(`Something is calling, setConf, remove the call`)},`setConf`),wt={monday:E,tuesday:x,wednesday:ae,thursday:D,friday:A,saturday:j,sunday:O},Tt=d((e,t)=>{let n=[...e].map(()=>-1/0),r=[...e].sort((e,t)=>e.startTime-t.startTime||e.order-t.order),i=0;for(let e of r)for(let r=0;r<n.length;r++)if(e.startTime>=n[r]){n[r]=e.endTime,e.order=r+t,r>i&&(i=r);break}return i},`getMaxIntersections`),$,Et={parser:Ce,db:St,renderer:{setConf:Ct,draw:d(function(e,t,n,i){let a=r().gantt,o=r().securityLevel,s;o===`sandbox`&&(s=p(`#i`+t));let c=p(o===`sandbox`?s.nodes()[0].contentDocument.body:`body`),l=o===`sandbox`?s.nodes()[0].contentDocument:document,h=l.getElementById(t);$=h.parentElement.offsetWidth,$===void 0&&($=1200),a.useWidth!==void 0&&($=a.useWidth);let g=i.db.getTasks(),_=[];for(let e of g)_.push(e.type);_=N(_);let v={},y=2*a.topPadding;if(i.db.getDisplayMode()===`compact`||a.displayMode===`compact`){let e={};for(let t of g)e[t.section]===void 0?e[t.section]=[t]:e[t.section].push(t);let t=0;for(let n of Object.keys(e)){let r=Tt(e[n],t)+1;t+=r,y+=r*(a.barHeight+a.barGap),v[n]=r}}else{y+=g.length*(a.barHeight+a.barGap);for(let e of _)v[e]=g.filter(t=>t.type===e).length}h.setAttribute(`viewBox`,`0 0 `+$+` `+y);let x=c.select(`[id="${t}"]`),E=k().domain([b(g,function(e){return e.startTime}),oe(g,function(e){return e.endTime})]).rangeRound([0,$-a.leftPadding-a.rightPadding]);function D(e,t){let n=e.startTime,r=t.startTime,i=0;return n>r?i=1:n<r&&(i=-1),i}d(D,`taskCompare`),g.sort(D),O(g,$,y),u(x,y,$,a.useMaxWidth),x.append(`text`).text(i.db.getDiagramTitle()).attr(`x`,$/2).attr(`y`,a.titleTopMargin).attr(`class`,`titleText`);function O(e,t,n){let r=a.barHeight,o=r+a.barGap,s=a.topPadding,c=a.leftPadding,l=ee().domain([0,_.length]).range([`#00B9FA`,`#F95002`]).interpolate(C);j(o,s,c,t,n,e,i.db.getExcludes(),i.db.getIncludes()),ae(c,s,t,n),A(e,o,s,c,r,l,t,n),se(o,s,c,r,l),M(c,s,t,n)}d(O,`makeGantt`);function A(e,n,o,s,c,l,u){let d=[...new Set(e.map(e=>e.order))].map(t=>e.find(e=>e.order===t));x.append(`g`).selectAll(`rect`).data(d).enter().append(`rect`).attr(`x`,0).attr(`y`,function(e,t){return t=e.order,t*n+o-2}).attr(`width`,function(){return u-a.rightPadding/2}).attr(`height`,n).attr(`class`,function(e){for(let[t,n]of _.entries())if(e.type===n)return`section section`+t%a.numberSectionStyles;return`section section0`});let f=x.append(`g`).selectAll(`rect`).data(e).enter(),m=i.db.getLinks();if(f.append(`rect`).attr(`id`,function(e){return e.id}).attr(`rx`,3).attr(`ry`,3).attr(`x`,function(e){return e.milestone?E(e.startTime)+s+.5*(E(e.endTime)-E(e.startTime))-.5*c:E(e.startTime)+s}).attr(`y`,function(e,t){return t=e.order,t*n+o}).attr(`width`,function(e){return e.milestone?c:E(e.renderEndTime||e.endTime)-E(e.startTime)}).attr(`height`,c).attr(`transform-origin`,function(e,t){return t=e.order,(E(e.startTime)+s+.5*(E(e.endTime)-E(e.startTime))).toString()+`px `+(t*n+o+.5*c).toString()+`px`}).attr(`class`,function(e){let t=``;e.classes.length>0&&(t=e.classes.join(` `));let n=0;for(let[t,r]of _.entries())e.type===r&&(n=t%a.numberSectionStyles);let r=``;return e.active?e.crit?r+=` activeCrit`:r=` active`:e.done?r=e.crit?` doneCrit`:` done`:e.crit&&(r+=` crit`),r.length===0&&(r=` task`),e.milestone&&(r=` milestone `+r),r+=n,r+=` `+t,`task`+r}),f.append(`text`).attr(`id`,function(e){return e.id+`-text`}).text(function(e){return e.task}).attr(`font-size`,a.fontSize).attr(`x`,function(e){let t=E(e.startTime),n=E(e.renderEndTime||e.endTime);e.milestone&&(t+=.5*(E(e.endTime)-E(e.startTime))-.5*c),e.milestone&&(n=t+c);let r=this.getBBox().width;return r>n-t?n+r+1.5*a.leftPadding>u?t+s-5:n+s+5:(n-t)/2+t+s}).attr(`y`,function(e,t){return t=e.order,t*n+a.barHeight/2+(a.fontSize/2-2)+o}).attr(`text-height`,c).attr(`class`,function(e){let t=E(e.startTime),n=E(e.endTime);e.milestone&&(n=t+c);let r=this.getBBox().width,i=``;e.classes.length>0&&(i=e.classes.join(` `));let o=0;for(let[t,n]of _.entries())e.type===n&&(o=t%a.numberSectionStyles);let s=``;return e.active&&(s=e.crit?`activeCritText`+o:`activeText`+o),e.done?s=e.crit?s+` doneCritText`+o:s+` doneText`+o:e.crit&&(s=s+` critText`+o),e.milestone&&(s+=` milestoneText`),r>n-t?n+r+1.5*a.leftPadding>u?i+` taskTextOutsideLeft taskTextOutside`+o+` `+s:i+` taskTextOutsideRight taskTextOutside`+o+` `+s+` width-`+r:i+` taskText taskText`+o+` `+s+` width-`+r}),r().securityLevel===`sandbox`){let e;e=p(`#i`+t);let n=e.nodes()[0].contentDocument;f.filter(function(e){return m.has(e.id)}).each(function(e){var t=n.querySelector(`#`+e.id),r=n.querySelector(`#`+e.id+`-text`);let i=t.parentNode;var a=n.createElement(`a`);a.setAttribute(`xlink:href`,m.get(e.id)),a.setAttribute(`target`,`_top`),i.appendChild(a),a.appendChild(t),a.appendChild(r)})}}d(A,`drawRects`);function j(e,t,n,r,o,s,c,l){if(c.length===0&&l.length===0)return;let u,d;for(let{startTime:e,endTime:t}of s)(u===void 0||e<u)&&(u=e),(d===void 0||t>d)&&(d=t);if(!u||!d)return;if((0,F.default)(d).diff((0,F.default)(u),`year`)>5){f.warn(`The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.`);return}let p=i.db.getDateFormat(),m=[],h=null,g=(0,F.default)(u);for(;g.valueOf()<=d;)i.db.isInvalidDate(g,p,c,l)?h?h.end=g:h={start:g,end:g}:h&&=(m.push(h),null),g=g.add(1,`d`);x.append(`g`).selectAll(`rect`).data(m).enter().append(`rect`).attr(`id`,function(e){return`exclude-`+e.start.format(`YYYY-MM-DD`)}).attr(`x`,function(e){return E(e.start)+n}).attr(`y`,a.gridLineStartPadding).attr(`width`,function(e){let t=e.end.add(1,`day`);return E(t)-E(e.start)}).attr(`height`,o-t-a.gridLineStartPadding).attr(`transform-origin`,function(t,r){return(E(t.start)+n+.5*(E(t.end)-E(t.start))).toString()+`px `+(r*e+.5*o).toString()+`px`}).attr(`class`,`exclude-range`)}d(j,`drawExcludeDays`);function ae(e,t,n,r){let o=_e(E).tickSize(-r+t+a.gridLineStartPadding).tickFormat(S(i.db.getAxisFormat()||a.axisFormat||`%Y-%m-%d`)),s=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||a.tickInterval);if(s!==null){let e=s[1],t=s[2],n=i.db.getWeekday()||a.weekday;switch(t){case`millisecond`:o.ticks(te.every(e));break;case`second`:o.ticks(re.every(e));break;case`minute`:o.ticks(T.every(e));break;case`hour`:o.ticks(ie.every(e));break;case`day`:o.ticks(w.every(e));break;case`week`:o.ticks(wt[n].every(e));break;case`month`:o.ticks(ne.every(e))}}if(x.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+(r-50)+`)`).call(o).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10).attr(`dy`,`1em`),i.db.topAxisEnabled()||a.topAxis){let n=ge(E).tickSize(-r+t+a.gridLineStartPadding).tickFormat(S(i.db.getAxisFormat()||a.axisFormat||`%Y-%m-%d`));if(s!==null){let e=s[1],t=s[2],r=i.db.getWeekday()||a.weekday;switch(t){case`millisecond`:n.ticks(te.every(e));break;case`second`:n.ticks(re.every(e));break;case`minute`:n.ticks(T.every(e));break;case`hour`:n.ticks(ie.every(e));break;case`day`:n.ticks(w.every(e));break;case`week`:n.ticks(wt[r].every(e));break;case`month`:n.ticks(ne.every(e))}}x.append(`g`).attr(`class`,`grid`).attr(`transform`,`translate(`+e+`, `+t+`)`).call(n).selectAll(`text`).style(`text-anchor`,`middle`).attr(`fill`,`#000`).attr(`stroke`,`none`).attr(`font-size`,10)}}d(ae,`makeGrid`);function se(e,t){let n=0,r=Object.keys(v).map(e=>[e,v[e]]);x.append(`g`).selectAll(`text`).data(r).enter().append(function(e){let t=e[0].split(m.lineBreakRegex),n=-(t.length-1)/2,r=l.createElementNS(`http://www.w3.org/2000/svg`,`text`);r.setAttribute(`dy`,n+`em`);for(let[e,n]of t.entries()){let t=l.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttribute(`alignment-baseline`,`central`),t.setAttribute(`x`,`10`),e>0&&t.setAttribute(`dy`,`1em`),t.textContent=n,r.appendChild(t)}return r}).attr(`x`,10).attr(`y`,function(i,a){if(a>0)for(let o=0;o<a;o++)return n+=r[a-1][1],i[1]*e/2+n*e+t;else return i[1]*e/2+t}).attr(`font-size`,a.sectionFontSize).attr(`class`,function(e){for(let[t,n]of _.entries())if(e[0]===n)return`sectionTitle sectionTitle`+t%a.numberSectionStyles;return`sectionTitle`})}d(se,`vertLabels`);function M(e,t,n,r){let o=i.db.getTodayMarker();if(o===`off`)return;let s=x.append(`g`).attr(`class`,`today`),c=new Date,l=s.append(`line`);l.attr(`x1`,E(c)+e).attr(`x2`,E(c)+e).attr(`y1`,a.titleTopMargin).attr(`y2`,r-a.titleTopMargin).attr(`class`,`today`),o!==``&&l.attr(`style`,o.replace(/,/g,`;`))}d(M,`drawToday`);function N(e){let t={},n=[];for(let r=0,i=e.length;r<i;++r)Object.prototype.hasOwnProperty.call(t,e[r])||(t[e[r]]=!0,n.push(e[r]));return n}d(N,`checkUnique`)},`draw`)},styles:d(e=>`
  .mermaid-main-font {
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .exclude-range {
    fill: ${e.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${e.sectionBkgColor};
  }

  .section2 {
    fill: ${e.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${e.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${e.titleColor};
  }

  .sectionTitle1 {
    fill: ${e.titleColor};
  }

  .sectionTitle2 {
    fill: ${e.titleColor};
  }

  .sectionTitle3 {
    fill: ${e.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${e.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${e.fontFamily};
    fill: ${e.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${e.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideRight {
    fill: ${e.taskTextDarkColor};
    text-anchor: start;
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }

  .taskTextOutsideLeft {
    fill: ${e.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${e.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${e.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${e.taskBkgColor};
    stroke: ${e.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${e.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${e.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${e.activeTaskBkgColor};
    stroke: ${e.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${e.doneTaskBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${e.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${e.critBorderColor};
    fill: ${e.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${e.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.titleColor||e.textColor};
    font-family: var(--mermaid-font-family, "trebuchet ms", verdana, arial, sans-serif);
  }
`,`getStyles`)};export{Et as diagram};