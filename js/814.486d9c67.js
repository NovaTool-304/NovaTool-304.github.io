"use strict";(self["webpackChunknovatool_claude"]=self["webpackChunknovatool_claude"]||[]).push([[814],{814:function(e,a,l){l.r(a),l.d(a,{default:function(){return B}});l(4114),l(8111),l(2489),l(7588),l(1701),l(8237);var t=l(6768),n=l(5130),c=l(4232),s=l(144),u=l(6912);const o={class:"container"},i={class:"calculation-mode-section"},d={class:"mode-selector"},r={class:"mode-label"},v={class:"mode-label"},p={class:"section-card"},k={class:"file-upload-section"},h={key:0,class:"file-upload-group"},m={class:"file-upload-button"},f={key:0,class:"selected-filename"},L={class:"file-upload-group"},_={class:"file-upload-button"},x={key:0,class:"selected-filename"},g={class:"file-upload-group"},b={class:"file-upload-button"},C={key:0,class:"selected-filename"},F={key:0,class:"section-card"},y={key:0,class:"center-point-info"},M={class:"scrollable-container"},E={class:"data-table"},P={class:"header-row"},S={class:"data-cell"},X={class:"data-cell"},R={class:"data-cell"},w={class:"data-cell"},G={class:"data-cell"},N={class:"data-cell"},$={class:"data-cell"},A={key:1,class:"empty-state"},K={key:0},I={key:1,class:"empty-state"},V={key:0},W={class:"stats-table"},T={key:1,class:"empty-state"};var Q={__name:"NmeaCEPCalc",setup(e){u.t1.register(u.Pz,u.kc,u.FN,u.hE,u.m_);const a=(0,s.KR)([]),l=(0,s.KR)([]),Q=(0,s.KR)([]),H=(0,s.KR)({pacc_3d:{cep50:0,cep68:0,cep95:0,cep99:0,min:0,max:0,avg:0},pacc_h:{cep50:0,cep68:0,cep95:0,cep99:0,min:0,max:0,avg:0},pacc_v:{cep50:0,cep68:0,cep95:0,cep99:0,min:0,max:0,avg:0}}),q=(0,s.KR)(""),B=(0,s.KR)(""),z=(0,s.KR)({lat:0,lon:0}),D=(0,s.KR)();let O=null;const U=(0,s.KR)("stationary");function Y(e){const a=e.target.files[0];if(!a)return;q.value=a.name;const t=new FileReader;t.onload=()=>{const e=t.result.replace(/\0/g,"");l.value=J(e),Q.value.length>0&&ae()},t.readAsText(a)}function j(e){const a=e.target.files[0];if(!a)return;B.value=a.name;const t=new FileReader;t.onload=()=>{const e=t.result.replace(/\0/g,"");if(Q.value=J(e),"stationary"===U.value){const e=Q.value.reduce(((e,a)=>e+a.lat),0)/Q.value.length,a=Q.value.reduce(((e,a)=>e+a.lon),0)/Q.value.length,l=Q.value.reduce(((e,a)=>e+a.alt),0)/Q.value.length;z.value={lat:e,lon:a,alt:l},ee()}else l.value.length>0&&ae()},t.readAsText(a)}function J(e){const a=e.split(/\r?\n/),l=[];let t=0,n=0;for(const c of a){let e="",a="",s="",u="";if(c.startsWith("$GNGGA")||c.startsWith("$GPGGA")){const l=c.split(",");e=l[2],a=l[3],s=l[4],u=l[5],t=isNaN(parseFloat(l[9]))?0:parseFloat(l[9]),n=Z(l[1])}else if(c.startsWith("$GNRMC")||c.startsWith("$GPRMC")){const l=c.split(",");e=l[3],a=l[4],s=l[5],u=l[6],n=Z(l[1])}const o=se(e,a),i=se(s,u);isNaN(o)||isNaN(i)||l.push({lat:o,lon:i,alt:t,time:n})}return l}function Z(e){if(!e)return 0;const a=parseInt(e.substring(0,2)),l=parseInt(e.substring(2,4)),t=parseFloat(e.substring(4));return 3600*a+60*l+t}function ee(){const e=Q.value.map((e=>({reference:{lat:z.value.lat,lon:z.value.lon,alt:z.value.alt,time:e.time},test:{lat:e.lat,lon:e.lon,alt:e.alt,time:e.time},dist3d:le(z.value,e),distH:te(z.value,e),distV:ne(z.value,e)})));a.value=e,H.value.pacc_3d=ce(e.map((e=>e.dist3d))),H.value.pacc_h=ce(e.map((e=>e.distH))),H.value.pacc_v=ce(e.map((e=>e.distV))),e.length>0&&(0,t.dY)((()=>ie()))}function ae(){const e=[],n=1;for(const a of l.value){const l=Q.value.reduce(((e,l)=>{const t=Math.abs(a.time-l.time);return t<n&&(!e||t<Math.abs(a.time-e.time))?l:e}),null);l&&e.push({reference:a,test:l,dist3d:le(a,l),distH:te(a,l),distV:ne(a,l)})}a.value=e,H.value.pacc_3d=ce(e.map((e=>e.dist3d))),H.value.pacc_h=ce(e.map((e=>e.distH))),H.value.pacc_v=ce(e.map((e=>e.distV))),e.length>0&&(0,t.dY)((()=>ie()))}function le(e,a){const l=ue(e.lat,e.lon,a.lat,a.lon),t=Math.abs(a.alt-e.alt);return Math.sqrt(l*l+t*t)}function te(e,a){return ue(e.lat,e.lon,a.lat,a.lon)}function ne(e,a){return Math.abs(a.alt-e.alt)}function ce(e){const a=e.reduce(((e,a)=>e+a),0)/e.length,l=Math.sqrt(e.reduce(((e,l)=>e+Math.pow(l-a,2)),0)/e.length),t=e.filter((e=>Math.abs(e-a)<=3*l)),n=t.sort(((e,a)=>e-a)),c=n.length,s=Math.round(.5*c)-1,u=Math.round(.68*c)-1,o=Math.round(.95*c)-1,i=Math.round(.99*c)-1;return{cep50:n[s]||0,cep68:n[u]||0,cep95:n[o]||0,cep99:n[i]||0,min:n[0]||0,max:n[n.length-1]||0,avg:n.reduce(((e,a)=>e+a),0)/c||0}}function se(e,a){const l=parseFloat(e.slice(0,"N"===a||"S"===a?2:3)),t=parseFloat(e.slice("N"===a||"S"===a?2:3));let n=l+t/60;return"S"!==a&&"W"!==a||(n*=-1),n}function ue(e,a,l,t){const n=6371e3,c=e=>e*Math.PI/180,s=c(l-e),u=c(t-a),o=Math.sin(s/2)**2+Math.cos(c(e))*Math.cos(c(l))*Math.sin(u/2)**2;return 2*n*Math.atan2(Math.sqrt(o),Math.sqrt(1-o))}function oe(e){const a=Math.floor(e/3600),l=Math.floor(e%3600/60),t=Math.floor(e%60);return`${a.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}function ie(){if(!D.value)return;O&&O.destroy();const e=a.value.map((e=>({x:ue(z.value.lat,z.value.lon,z.value.lat,e.reference.lon)*(e.reference.lon>z.value.lon?1:-1),y:ue(z.value.lat,z.value.lon,e.reference.lat,z.value.lon)*(e.reference.lat>z.value.lat?1:-1),lat:e.reference.lat.toFixed(6),lon:e.reference.lon.toFixed(6)}))),l=a.value.map((e=>({x:ue(z.value.lat,z.value.lon,z.value.lat,e.test.lon)*(e.test.lon>z.value.lon?1:-1),y:ue(z.value.lat,z.value.lon,e.test.lat,z.value.lon)*(e.test.lat>z.value.lat?1:-1),lat:e.test.lat.toFixed(6),lon:e.test.lon.toFixed(6),dist3d:e.dist3d.toFixed(3)}))),t=1.2*Math.max(...e.map((e=>Math.abs(e.x))),...e.map((e=>Math.abs(e.y))),...l.map((e=>Math.abs(e.x))),...l.map((e=>Math.abs(e.y))));O=new u.t1(D.value,{type:"scatter",data:{datasets:[{label:"stationary"===U.value?"Center Point":"Reference GPS",data:e,backgroundColor:"rgba(0, 0, 255, 0.6)",pointRadius:4},{label:"Test GPS",data:l,backgroundColor:"rgba(255, 0, 0, 0.6)",pointRadius:4}]},options:{aspectRatio:1,responsive:!0,interaction:{mode:"nearest",axis:"xy",intersect:!0},plugins:{tooltip:{enabled:!0,mode:"point",intersect:!0,position:"nearest",filter:function(e){return 0===e.datasetIndex||1===e.datasetIndex},callbacks:{label:function(e){const a=e.raw;return"Test GPS"===e.dataset.label?`위도: ${a.lat}, 경도: ${a.lon}, 거리: ${a.dist3d}m`:`위도: ${a.lat}, 경도: ${a.lon}`}}},title:{display:!0,text:"Position Scatter Plot with CEP Circles",padding:20},legend:{display:!0,position:"bottom"},cepCircles:{radii:[{value:H.value.pacc_3d.cep50,label:"CEP50"},{value:H.value.pacc_3d.cep68,label:"CEP68"},{value:H.value.pacc_3d.cep95,label:"CEP95"},{value:H.value.pacc_3d.cep99,label:"CEP99"}]}},scales:{x:{title:{display:!0,text:"East-West (meters)"},min:-t,max:t,grid:{color:"rgba(0, 0, 0, 0.1)",drawTicks:!0,drawOnChartArea:!0},ticks:{stepSize:t/5}},y:{title:{display:!0,text:"North-South (meters)"},min:-t,max:t,grid:{color:"rgba(0, 0, 0, 0.1)",drawTicks:!0,drawOnChartArea:!0},ticks:{stepSize:t/5}}}},plugins:[{id:"cepCircles",beforeDatasetsDraw(e,a,l){const{ctx:t,scales:n}=e,c=n.x.getPixelForValue(0),s=n.y.getPixelForValue(0),u=l.radii||[],o=["red","blue","orange","green"];t.save(),u.forEach(((e,a)=>{const l=Math.abs(n.x.getPixelForValue(e.value)-c);t.beginPath(),t.arc(c,s,l,0,2*Math.PI),t.strokeStyle=o[a].replace("0.2","1.0"),t.lineWidth=2,t.stroke();const u=Math.PI/4,i=c+l*Math.cos(u),d=s-l*Math.sin(u);t.fillStyle=o[a].replace("0.2","1.0"),t.font="12px Arial",t.textAlign="left",t.fillText(`${e.label}: ${e.value.toFixed(2)}m`,i,d)})),t.restore()}}]})}return(0,t.wB)(U,(()=>{a.value=[],l.value=[],Q.value=[],q.value="",B.value="",H.value={pacc_3d:{cep50:0,cep68:0,cep95:0,cep99:0,min:0,max:0,avg:0},pacc_h:{cep50:0,cep68:0,cep95:0,cep99:0,min:0,max:0,avg:0},pacc_v:{cep50:0,cep68:0,cep95:0,cep99:0,min:0,max:0,avg:0}},z.value={lat:0,lon:0,alt:0},O&&(O.destroy(),O=null)})),(e,l)=>((0,t.uX)(),(0,t.CE)("div",o,[l[18]||(l[18]=(0,t.Lk)("h1",{class:"section-title"},[(0,t.Lk)("span",{class:"section-icon"},"📊"),(0,t.eW)(" NMEA CEP 계산기 ")],-1)),(0,t.Lk)("div",i,[(0,t.Lk)("div",d,[(0,t.Lk)("label",r,[(0,t.bo)((0,t.Lk)("input",{type:"radio","onUpdate:modelValue":l[0]||(l[0]=e=>U.value=e),value:"stationary"},null,512),[[n.XL,U.value]]),l[2]||(l[2]=(0,t.eW)(" 정지상태 CEP 계산 "))]),(0,t.Lk)("label",v,[(0,t.bo)((0,t.Lk)("input",{type:"radio","onUpdate:modelValue":l[1]||(l[1]=e=>U.value=e),value:"moving"},null,512),[[n.XL,U.value]]),l[3]||(l[3]=(0,t.eW)(" 이동상태 CEP 계산 "))])])]),(0,t.Lk)("div",p,[(0,t.Lk)("div",k,["stationary"===U.value?((0,t.uX)(),(0,t.CE)("div",h,[(0,t.Lk)("label",m,[l[4]||(l[4]=(0,t.Lk)("span",{class:"file-upload-text"},"측정 GPS 파일 선택",-1)),(0,t.Lk)("input",{type:"file",accept:".txt,.log",onChange:j,class:"file-input"},null,32)]),B.value?((0,t.uX)(),(0,t.CE)("span",f,(0,c.v_)(B.value),1)):(0,t.Q3)("",!0)])):((0,t.uX)(),(0,t.CE)(t.FK,{key:1},[(0,t.Lk)("div",L,[(0,t.Lk)("label",_,[l[5]||(l[5]=(0,t.Lk)("span",{class:"file-upload-text"},"레퍼런스 GPS 파일 선택",-1)),(0,t.Lk)("input",{type:"file",accept:".txt,.log",onChange:Y,class:"file-input"},null,32)]),q.value?((0,t.uX)(),(0,t.CE)("span",x,(0,c.v_)(q.value),1)):(0,t.Q3)("",!0)]),(0,t.Lk)("div",g,[(0,t.Lk)("label",b,[l[6]||(l[6]=(0,t.Lk)("span",{class:"file-upload-text"},"측정 GPS 파일 선택",-1)),(0,t.Lk)("input",{type:"file",accept:".txt,.log",onChange:j,class:"file-input"},null,32)]),B.value?((0,t.uX)(),(0,t.CE)("span",C,(0,c.v_)(B.value),1)):(0,t.Q3)("",!0)])],64))])]),l[19]||(l[19]=(0,t.Lk)("h2",{class:"font-semibold"},"📊 위치 데이터",-1)),(0,t.bF)(n.eB,{name:"fade"},{default:(0,t.k6)((()=>[a.value.length?((0,t.uX)(),(0,t.CE)("div",F,["stationary"===U.value?((0,t.uX)(),(0,t.CE)("div",y," 중심점: 위도 "+(0,c.v_)(z.value.lat.toFixed(6))+", 경도 "+(0,c.v_)(z.value.lon.toFixed(6)),1)):(0,t.Q3)("",!0),(0,t.Lk)("div",M,[(0,t.Lk)("table",E,[(0,t.Lk)("thead",null,[(0,t.Lk)("tr",P,[l[9]||(l[9]=(0,t.Lk)("th",{class:"header-cell"},"#",-1)),l[10]||(l[10]=(0,t.Lk)("th",{class:"header-cell"},"시간",-1)),"moving"===U.value?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},[l[7]||(l[7]=(0,t.Lk)("th",{class:"header-cell"},"레퍼런스 위도",-1)),l[8]||(l[8]=(0,t.Lk)("th",{class:"header-cell"},"레퍼런스 경도",-1))],64)):(0,t.Q3)("",!0),l[11]||(l[11]=(0,t.Lk)("th",{class:"header-cell"},"측정 위도",-1)),l[12]||(l[12]=(0,t.Lk)("th",{class:"header-cell"},"측정 경도",-1)),l[13]||(l[13]=(0,t.Lk)("th",{class:"header-cell"},"거리 (m)",-1))])]),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(a.value,((e,a)=>((0,t.uX)(),(0,t.CE)("tr",{key:a,class:"data-row"},[(0,t.Lk)("td",S,(0,c.v_)(a+1),1),(0,t.Lk)("td",X,(0,c.v_)(oe(e.test.time)),1),"moving"===U.value?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},[(0,t.Lk)("td",R,(0,c.v_)(e.reference.lat.toFixed(6)),1),(0,t.Lk)("td",w,(0,c.v_)(e.reference.lon.toFixed(6)),1)],64)):(0,t.Q3)("",!0),(0,t.Lk)("td",G,(0,c.v_)(e.test.lat.toFixed(6)),1),(0,t.Lk)("td",N,(0,c.v_)(e.test.lon.toFixed(6)),1),(0,t.Lk)("td",$,(0,c.v_)(e.dist3d.toFixed(3)),1)])))),128))])])])])):((0,t.uX)(),(0,t.CE)("div",A," 파일을 업로드하면 분석 결과가 여기에 표시됩니다. "))])),_:1}),l[20]||(l[20]=(0,t.Lk)("h2",{class:"mt-6 font-semibold"},"📈 그래프 ",-1)),(0,t.bF)(n.eB,{name:"fade"},{default:(0,t.k6)((()=>[a.value.length?((0,t.uX)(),(0,t.CE)("div",K,[(0,t.Lk)("canvas",{ref_key:"chartRef",ref:D},null,512)])):((0,t.uX)(),(0,t.CE)("div",I," 파일을 업로드하면 분석 결과가 여기에 표시됩니다. "))])),_:1}),l[21]||(l[21]=(0,t.Lk)("h2",{class:"mt-6 font-semibold"},"📌 통계",-1)),(0,t.bF)(n.eB,{name:"fade"},{default:(0,t.k6)((()=>[a.value.length?((0,t.uX)(),(0,t.CE)("div",V,[(0,t.Lk)("table",W,[l[17]||(l[17]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",null,"ITEMS"),(0,t.Lk)("th",null,"CEP50"),(0,t.Lk)("th",null,"CEP68"),(0,t.Lk)("th",null,"CEP95"),(0,t.Lk)("th",null,"CEP99"),(0,t.Lk)("th",null,"최소 거리"),(0,t.Lk)("th",null,"최대 거리"),(0,t.Lk)("th",null,"평균 거리")])],-1)),(0,t.Lk)("tbody",null,[(0,t.Lk)("tr",null,[l[14]||(l[14]=(0,t.Lk)("td",null,"PACC_3D",-1)),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_3d.cep50.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_3d.cep68.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_3d.cep95.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_3d.cep99.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_3d.min.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_3d.max.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_3d.avg.toFixed(3))+" m",1)]),(0,t.Lk)("tr",null,[l[15]||(l[15]=(0,t.Lk)("td",null,"PACC_H",-1)),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_h.cep50.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_h.cep68.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_h.cep95.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_h.cep99.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_h.min.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_h.max.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_h.avg.toFixed(3))+" m",1)]),(0,t.Lk)("tr",null,[l[16]||(l[16]=(0,t.Lk)("td",null,"PACC_V",-1)),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_v.cep50.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_v.cep68.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_v.cep95.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_v.cep99.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_v.min.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_v.max.toFixed(3))+" m",1),(0,t.Lk)("td",null,(0,c.v_)(H.value.pacc_v.avg.toFixed(3))+" m",1)])])])])):((0,t.uX)(),(0,t.CE)("div",T," 파일을 업로드하면 분석 결과가 여기에 표시됩니다. "))])),_:1})]))}},H=l(1241);const q=(0,H.A)(Q,[["__scopeId","data-v-3f6eac1d"]]);var B=q}}]);
//# sourceMappingURL=814.486d9c67.js.map