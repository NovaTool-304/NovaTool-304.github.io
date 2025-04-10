"use strict";(self["webpackChunknovatool_claude"]=self["webpackChunknovatool_claude"]||[]).push([[388],{5388:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(6768),i=n(5130),l=n(4232);const d={class:"calculator-container"},r={class:"calculator-card"},u={class:"input-section"},s={class:"capacity-section"},h={class:"input-field"},o={class:"current-time-section"},p={class:"input-group"},c={class:"input-field"},y={class:"input-field"},m={class:"input-group"},b={class:"input-field"},v={class:"input-field"},C={class:"input-group"},g={class:"input-field"},k={class:"input-field"},L={key:0,class:"chart-container"},w={ref:"powerChart"},K={key:1,class:"results"},T={class:"result-chip"},f={class:"result-chip"};function I(e,t,n,I,W,U){return(0,a.uX)(),(0,a.CE)("div",d,[(0,a.Lk)("div",r,[t[45]||(t[45]=(0,a.Lk)("h2",null,"Battery life calculator",-1)),(0,a.Lk)("div",u,[(0,a.Lk)("div",s,[(0,a.Lk)("div",h,[t[36]||(t[36]=(0,a.Lk)("label",null,"Battery capacity (mAh)",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[0]||(t[0]=e=>W.batteryCapacity=e),onWheel:t[1]||(t[1]=(...e)=>U.handleWheel&&U.handleWheel(...e)),onKeydown:[t[2]||(t[2]=(0,i.jR)(((...e)=>U.handleKeyUp&&U.handleKeyUp(...e)),["up"])),t[3]||(t[3]=(0,i.jR)(((...e)=>U.handleKeyDown&&U.handleKeyDown(...e)),["down"]))],onInput:t[4]||(t[4]=(...e)=>U.validateInput&&U.validateInput(...e)),min:"0",step:"1"},null,544),[[i.Jo,W.batteryCapacity]])])]),t[44]||(t[44]=(0,a.Lk)("div",{class:"divider"},null,-1)),(0,a.Lk)("div",o,[(0,a.Lk)("div",p,[(0,a.Lk)("div",c,[t[37]||(t[37]=(0,a.Lk)("label",null,"Execution Current(mA)",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[5]||(t[5]=e=>W.runningCurrent=e),onWheel:t[6]||(t[6]=(...e)=>U.handleWheel&&U.handleWheel(...e)),onKeydown:[t[7]||(t[7]=(0,i.jR)(((...e)=>U.handleKeyUp&&U.handleKeyUp(...e)),["up"])),t[8]||(t[8]=(0,i.jR)(((...e)=>U.handleKeyDown&&U.handleKeyDown(...e)),["down"]))],onInput:t[9]||(t[9]=(...e)=>U.validateInput&&U.validateInput(...e)),min:"0",step:"1"},null,544),[[i.Jo,W.runningCurrent]])]),(0,a.Lk)("div",y,[t[38]||(t[38]=(0,a.Lk)("label",null,"Execution time(time)",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[10]||(t[10]=e=>W.runningTime=e),onWheel:t[11]||(t[11]=(...e)=>U.handleWheel&&U.handleWheel(...e)),onKeydown:[t[12]||(t[12]=(0,i.jR)(((...e)=>U.handleKeyUp&&U.handleKeyUp(...e)),["up"])),t[13]||(t[13]=(0,i.jR)(((...e)=>U.handleKeyDown&&U.handleKeyDown(...e)),["down"]))],onInput:t[14]||(t[14]=(...e)=>U.validateInput&&U.validateInput(...e)),min:"0",step:"1"},null,544),[[i.Jo,W.runningTime]])])]),(0,a.Lk)("div",m,[(0,a.Lk)("div",b,[t[39]||(t[39]=(0,a.Lk)("label",null,"Idle current(mA)",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[15]||(t[15]=e=>W.idleCurrent=e),onWheel:t[16]||(t[16]=(...e)=>U.handleWheel&&U.handleWheel(...e)),onKeydown:[t[17]||(t[17]=(0,i.jR)(((...e)=>U.handleKeyUp&&U.handleKeyUp(...e)),["up"])),t[18]||(t[18]=(0,i.jR)(((...e)=>U.handleKeyDown&&U.handleKeyDown(...e)),["down"]))],onInput:t[19]||(t[19]=(...e)=>U.validateInput&&U.validateInput(...e)),min:"0",step:"1"},null,544),[[i.Jo,W.idleCurrent]])]),(0,a.Lk)("div",v,[t[40]||(t[40]=(0,a.Lk)("label",null,"Idle time(time)",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[20]||(t[20]=e=>W.idleTime=e),onWheel:t[21]||(t[21]=(...e)=>U.handleWheel&&U.handleWheel(...e)),onKeydown:[t[22]||(t[22]=(0,i.jR)(((...e)=>U.handleKeyUp&&U.handleKeyUp(...e)),["up"])),t[23]||(t[23]=(0,i.jR)(((...e)=>U.handleKeyDown&&U.handleKeyDown(...e)),["down"]))],onInput:t[24]||(t[24]=(...e)=>U.validateInput&&U.validateInput(...e)),min:"0",step:"1"},null,544),[[i.Jo,W.idleTime]])])]),(0,a.Lk)("div",C,[(0,a.Lk)("div",g,[t[41]||(t[41]=(0,a.Lk)("label",null,"Ready current(mA)",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[25]||(t[25]=e=>W.standbyCurrent=e),onWheel:t[26]||(t[26]=(...e)=>U.handleWheel&&U.handleWheel(...e)),onKeydown:[t[27]||(t[27]=(0,i.jR)(((...e)=>U.handleKeyUp&&U.handleKeyUp(...e)),["up"])),t[28]||(t[28]=(0,i.jR)(((...e)=>U.handleKeyDown&&U.handleKeyDown(...e)),["down"]))],onInput:t[29]||(t[29]=(...e)=>U.validateInput&&U.validateInput(...e)),min:"0",step:"1"},null,544),[[i.Jo,W.standbyCurrent]])]),(0,a.Lk)("div",k,[t[42]||(t[42]=(0,a.Lk)("label",null,"Ready time(time)",-1)),(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":t[30]||(t[30]=e=>W.standbyTime=e),onWheel:t[31]||(t[31]=(...e)=>U.handleWheel&&U.handleWheel(...e)),onKeydown:[t[32]||(t[32]=(0,i.jR)(((...e)=>U.handleKeyUp&&U.handleKeyUp(...e)),["up"])),t[33]||(t[33]=(0,i.jR)(((...e)=>U.handleKeyDown&&U.handleKeyDown(...e)),["down"]))],onInput:t[34]||(t[34]=(...e)=>U.validateInput&&U.validateInput(...e)),min:"0",step:"1"},null,544),[[i.Jo,W.standbyTime]])])])]),(0,a.Lk)("button",{class:"calculate-btn",onClick:t[35]||(t[35]=(...e)=>U.calculate&&U.calculate(...e))},t[43]||(t[43]=[(0,a.Lk)("span",{class:"material-icons"},"calculate",-1),(0,a.eW)(" Calculation ")])),W.averageCurrent>0?((0,a.uX)(),(0,a.CE)("div",L,[(0,a.Lk)("canvas",w,null,512)])):(0,a.Q3)("",!0),W.averageCurrent>0?((0,a.uX)(),(0,a.CE)("div",K,[(0,a.Lk)("div",T," Average current consumption: "+(0,l.v_)(W.averageCurrent.toFixed(3))+" mA ",1),(0,a.Lk)("div",f," Expected battery life: "+(0,l.v_)(W.batteryLife.toFixed(1))+" Hours("+(0,l.v_)(U.formattedBatteryLife)+") ",1)])):(0,a.Q3)("",!0)])])])}var W=n(6912);W.t1.register(...W.$L);var U={data(){return{batteryCapacity:0,runningCurrent:0,runningTime:0,idleCurrent:0,idleTime:0,standbyCurrent:0,standbyTime:0,averageCurrent:0,batteryLife:0,chart:null}},computed:{formattedBatteryLife(){const e=Math.floor(this.batteryLife/24),t=Math.floor(this.batteryLife%24);return e>0?`${e}day ${t}hour`:`${t}hour`}},methods:{initChart(){const e=this.$refs.powerChart,t=this.runningCurrent*this.runningTime+this.idleCurrent*this.idleTime+this.standbyCurrent*this.standbyTime,n=(this.runningCurrent*this.runningTime/t*100).toFixed(1),a=(this.idleCurrent*this.idleTime/t*100).toFixed(1),i=(this.standbyCurrent*this.standbyTime/t*100).toFixed(1);this.chart=new W.t1(e,{type:"bar",data:{labels:["Power Consumption"],datasets:[{label:`Running (${n}%)`,data:[this.runningCurrent*this.runningTime],backgroundColor:"rgba(255, 99, 132, 0.8)",borderWidth:1},{label:`Idle (${a}%)`,data:[this.idleCurrent*this.idleTime],backgroundColor:"rgba(54, 162, 235, 0.8)",borderWidth:1},{label:`Ready (${i}%)`,data:[this.standbyCurrent*this.standbyTime],backgroundColor:"rgba(255, 206, 86, 0.8)",borderWidth:1}]},options:{indexAxis:"y",responsive:!0,scales:{x:{stacked:!0,title:{display:!0,text:"Power Consumption (mA·h)"}},y:{stacked:!0}},plugins:{legend:{position:"bottom"},tooltip:{callbacks:{label:function(e){const t=e.dataset.label||"",n=e.parsed.x||0;return`${t}: ${n.toFixed(1)} mA·h`}}}}}})},updateChart(){const e=this.runningCurrent*this.runningTime+this.idleCurrent*this.idleTime+this.standbyCurrent*this.standbyTime,t=(this.runningCurrent*this.runningTime/e*100).toFixed(1),n=(this.idleCurrent*this.idleTime/e*100).toFixed(1),a=(this.standbyCurrent*this.standbyTime/e*100).toFixed(1);this.chart.data.datasets[0].label=`Running (${t}%)`,this.chart.data.datasets[1].label=`Idle (${n}%)`,this.chart.data.datasets[2].label=`Ready (${a}%)`,this.chart.data.datasets[0].data=[this.runningCurrent*this.runningTime],this.chart.data.datasets[1].data=[this.idleCurrent*this.idleTime],this.chart.data.datasets[2].data=[this.standbyCurrent*this.standbyTime],this.chart.update()},handleWheel(e){if(e.target.matches(":hover")){e.preventDefault();const t=e.deltaY>0?-1:1,n=Math.max(0,Number(e.target.value)+t);e.target.value=n,e.target.dispatchEvent(new Event("input"))}},handleKeyUp(e){e.preventDefault();const t=Number(e.target.value)+1;e.target.value=t,e.target.dispatchEvent(new Event("input"))},handleKeyDown(e){e.preventDefault();const t=Math.max(0,Number(e.target.value)-1);e.target.value=t,e.target.dispatchEvent(new Event("input"))},validateInput(e){const t=Number(e.target.value);t<0&&(e.target.value=0,e.target.dispatchEvent(new Event("input")))},calculate(){const e=this.runningTime+this.idleTime+this.standbyTime,t=(this.runningCurrent*this.runningTime+this.idleCurrent*this.idleTime+this.standbyCurrent*this.standbyTime)/e,n=this.batteryCapacity/t;this.averageCurrent=t,this.batteryLife=n,this.$nextTick((()=>{this.chart&&(this.chart.destroy(),this.chart=null),this.initChart()}))}}},x=n(1241);const R=(0,x.A)(U,[["render",I],["__scopeId","data-v-ad5a1458"]]);var D=R}}]);
//# sourceMappingURL=388.8cc0d365.js.map