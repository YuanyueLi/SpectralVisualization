(this["webpackJsonpview-spectra"]=this["webpackJsonpview-spectra"]||[]).push([[0],{53:function(e,t,r){},55:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(25),c=r.n(a),s=(r(53),r(34)),u=(r(54),r(55),r(62)),o=r(63),i=r(24),l=r(60),p=r(6),h=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(u.a,{justify:"left",children:["Precursor m/z:",Object(p.jsx)(l.a,{value:e.stateSpectrum.precursorMZ,onChange:function(t){return e.setSpectrum(Object(i.a)(Object(i.a)({},e.stateSpectrum),{},{precursorMZ:t.target.value}))},style:{width:"100px"}})]}),Object(p.jsxs)(u.a,{justify:"left",children:["Peaks",Object(p.jsx)(l.a.TextArea,{rows:"10",value:e.stateSpectrum.peaks,onChange:function(t){return e.setSpectrum(Object(i.a)(Object(i.a)({},e.stateSpectrum),{},{peaks:t.target.value}))}})]})]})},j=r(23),f=r(31),b=function(e){var t=Object(n.useRef)(null),a=parseFloat(e.precursorMzA),c=parseFloat(e.precursorMzB),s=e.peaksA,u=e.peaksB,o=function(e){if(e){var t,r=[],n=Object(f.a)(e.split("\n"));try{for(n.s();!(t=n.n()).done;){var a=t.value.split(/(\s+)/).filter((function(e){return e.trim().length>0}));(a=a.map((function(e){return parseFloat(e)})).filter((function(e){return!isNaN(e)}))).length>1&&r.push(a)}}catch(c){n.e(c)}finally{n.f()}return r}return e},i=function(e){var t=Math.max.apply(Math,e.map((function(e){return e[1]})));return t>0&&(e=e.map((function(e){return[e[0],e[1]/t]}))),e};return Object(n.useEffect)((function(){var n=o(s);t.current&&n&&n.length>0&&Promise.all([r.e(2),r.e(4)]).then(r.t.bind(null,1231,7)).then((function(r){var s=o(u),l=!1;s&&s.length>0&&(l=!0);var p,h,b=[];l?(p=i(n),h=i(s)):p=n;var m,d=Object(f.a)(p);try{for(d.s();!(m=d.n()).done;){var x=m.value;b.push({x0:x[0],x1:x[0],y0:0,y1:x[1],line:{color:"#8884d8",width:1},type:"line"})}}catch(S){d.e(S)}finally{d.f()}var y,O,v,g=[{x:p.map((function(e){return e[0]})),y:p.map((function(e){return e[1]})),hovertemplate:"m/z: %{x}<br>Abundance: %{y}<extra></extra>",showlegend:!1,mode:"markers",type:"scatter",hoverlabel:{bgcolor:"#FFF"},marker:{color:"#8884d8",size:.1}}];if(l){var k,M=Object(f.a)(h);try{for(M.s();!(k=M.n()).done;){var w=k.value;b.push({x0:w[0],x1:w[0],y0:0,y1:-w[1],line:{color:"#d88484",width:1},type:"line"})}}catch(S){M.e(S)}finally{M.f()}g.push({x:h.map((function(e){return e[0]})),y:h.map((function(e){return-e[1]})),hovertemplate:"m/z: %{x}<br>Abundance: %{y}<extra></extra>",showlegend:!1,mode:"markers",type:"scatter",hoverlabel:{bgcolor:"#FFF"},marker:{color:"#8884d8",size:.1}})}l?(y=1.05*Math.max.apply(Math,Object(j.a)(p.map((function(e){return e[0]}))).concat(Object(j.a)(h.map((function(e){return e[0]}))),[a,c])),v=1.2,O=-1.2):(y=1.05*Math.max.apply(Math,Object(j.a)(p.map((function(e){return e[0]}))).concat([a])),v=1.2*Math.max.apply(Math,Object(j.a)(p.map((function(e){return e[0]<a-1?e[1]:0})))),O=0),isNaN(a)||b.push({x0:a,x1:a,y0:0,y1:v,type:"line",line:{color:"black",width:1,dash:"dot"}}),isNaN(c)||b.push({x0:c,x1:c,y0:0,y1:O,type:"line",line:{color:"black",width:1,dash:"dot"}});var F={xaxis:{title:{text:"m/z"},range:[0,y]},yaxis:{title:{text:"Abundance"},range:[O,v]},hovermode:"closest",shapes:b,margin:{l:55,r:10,b:30,t:10,pad:0}};e.height&&(F.height=e.height);t.current&&r.newPlot(t.current,g,F,{responsive:!0,scrollZoom:!0,displayModeBar:!1})}))}),[a,c,s,u]),Object(p.jsx)("div",{ref:t})};var m=function(){var e=Object(n.useState)({precursorMZ:null,peaks:""}),t=Object(s.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)({precursorMZ:null,peaks:""}),i=Object(s.a)(c,2),l=i[0],j=i[1];return Object(n.useEffect)((function(){r&&console.log(r)}),[r]),Object(p.jsx)("div",{children:Object(p.jsxs)(u.a,{justify:"center",children:[Object(p.jsxs)(o.a,{span:6,children:[Object(p.jsx)(u.a,{children:"Input your spectrum here:"}),Object(p.jsx)(h,{stateSpectrum:r,setSpectrum:a}),Object(p.jsx)(u.a,{children:"If you want to see a head-to-tail comparison, input another spectrum here:"}),Object(p.jsx)(h,{stateSpectrum:l,setSpectrum:j})]}),Object(p.jsx)(o.a,{span:16,children:Object(p.jsx)(u.a,{justify:"center",children:Object(p.jsx)(b,{height:400,precursorMzA:r.precursorMZ,peaksA:r.peaks,precursorMzB:l.precursorMZ,peaksB:l.peaks})})})]})})},d=function(e){e&&e instanceof Function&&r.e(5).then(r.bind(null,1232)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};c.a.render(Object(p.jsx)(m,{}),document.getElementById("root")),d()}},[[58,1,3]]]);
//# sourceMappingURL=main.feae40a7.chunk.js.map