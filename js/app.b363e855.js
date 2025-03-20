(function(){"use strict";var e={1101:function(e,t,n){var a=n(5130),o=n(6768),i=n(4232),l=n.p+"img/logo_novatool2.2b6b6112.png";const s={class:"app"},r={class:"main-header"},c={class:"header-content"},u={class:"main-content"};function d(e,t,n,a,d,v){const p=(0,o.g2)("router-link"),h=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("header",r,[(0,o.Lk)("div",c,[t[5]||(t[5]=(0,o.Lk)("img",{src:l,alt:"Novatool Logo",class:"logo"},null,-1)),(0,o.Lk)("button",{class:"hamburger-btn",onClick:t[0]||(t[0]=(...e)=>v.toggleMobileMenu&&v.toggleMobileMenu(...e)),"aria-label":"Toggle navigation menu"},t[1]||(t[1]=[(0,o.Lk)("span",{class:"hamburger-icon"},"☰",-1)])),(0,o.Lk)("nav",{class:(0,i.C4)(["main-nav",{"mobile-menu-open":d.isMobileMenuOpen}])},[(0,o.bF)(p,{to:"/",class:"nav-link",onClick:v.closeMobileMenu},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("Image Converter")]))),_:1},8,["onClick"]),(0,o.bF)(p,{to:"/binary-viewer",class:"nav-link",onClick:v.closeMobileMenu},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("Binary Viewer")]))),_:1},8,["onClick"]),(0,o.bF)(p,{to:"/change-logs",class:"nav-link",onClick:v.closeMobileMenu},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("Change Log")]))),_:1},8,["onClick"])],2)])]),(0,o.Lk)("main",u,[(0,o.bF)(h)])])}var v={name:"App",data(){return{isMobileMenuOpen:!1}},methods:{toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen},closeMobileMenu(){this.isMobileMenuOpen=!1}}},p=n(1241);const h=(0,p.A)(v,[["render",d],["__scopeId","data-v-4df0fdd7"]]);var g=h,f=n(1387);const m={class:"container"},b={class:"image-converter"},k={class:"upload-section"},y={key:0,class:"selected-files"},L=["onClick"],C={class:"file-info"},w={class:"file-name"},R={class:"file-size"},F={key:0,class:"preview-section"},B={class:"image-preview"},_={class:"preview-container"},E=["src"],A={class:"image-info"},M={key:1,class:"conversion-options"},I={class:"format-selection"},x={class:"option-row"},G={class:"option-control"},O={class:"select-wrapper"},X={class:"color-legend-item"},U={class:"legend-description"},z={class:"output-selection"},K={class:"option-row"},S={class:"option-control"},$={class:"select-wrapper"},T={key:0,class:"option-row"},P={class:"option-control"},W={class:"checkbox-container"},j=["disabled"],V={key:2,class:"conversion-results"},N={class:"results-list"},Q={class:"result-info"};function D(e,t,n,l,s,r){return(0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("div",b,[(0,o.Lk)("div",k,[(0,o.Lk)("input",{type:"file",accept:"image/*",onChange:t[0]||(t[0]=(...e)=>r.onFilesSelected&&r.onFilesSelected(...e)),ref:"fileInput",multiple:""},null,544),(0,o.Lk)("button",{onClick:t[1]||(t[1]=t=>e.$refs.fileInput.click())},"Select Images"),s.selectedFiles.length>0?((0,o.uX)(),(0,o.CE)("div",y,[(0,o.Lk)("p",null,"Selected "+(0,i.v_)(s.selectedFiles.length)+" files:",1),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.selectedFiles,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t,onClick:t=>r.loadImagePreview(e)},[(0,o.Lk)("div",C,[(0,o.Lk)("span",w,(0,i.v_)(e.name),1),(0,o.Lk)("span",R,(0,i.v_)(r.formatFileSize(e.size)),1)])],8,L)))),128))])])):(0,o.Q3)("",!0)]),s.imagePreview?((0,o.uX)(),(0,o.CE)("div",F,[t[6]||(t[6]=(0,o.Lk)("h3",null,"Preview",-1)),(0,o.Lk)("div",B,[(0,o.Lk)("div",_,[(0,o.Lk)("img",{class:"checkerboard",src:s.imagePreview,alt:"미리보기",style:{objectFit:"contain"}},null,8,E),(0,o.Lk)("div",A,(0,i.v_)(s.imageWidth)+" X "+(0,i.v_)(s.imageHeight),1)])])])):(0,o.Q3)("",!0),s.selectedFiles.length>0?((0,o.uX)(),(0,o.CE)("div",M,[t[13]||(t[13]=(0,o.Lk)("h3",null,"Conversion Options",-1)),(0,o.Lk)("div",I,[(0,o.Lk)("div",x,[t[8]||(t[8]=(0,o.Lk)("div",{class:"option-label"},[(0,o.Lk)("h3",null,"Color Format")],-1)),(0,o.Lk)("div",G,[(0,o.Lk)("div",O,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.format=e)},t[7]||(t[7]=[(0,o.Fv)('<optgroup label="32-bit Format (8888)" data-v-65604766><option value="rgba8888" data-v-65604766>RGBA8888</option><option value="argb8888" data-v-65604766>ARGB8888</option><option value="bgra8888" data-v-65604766>BGRA8888</option><option value="abgr8888" data-v-65604766>ABGR8888</option></optgroup><optgroup label="16-bit Format (4444)" data-v-65604766><option value="rgba4444" data-v-65604766>RGBA4444</option><option value="argb4444" data-v-65604766>ARGB4444</option><option value="bgra4444" data-v-65604766>BGRA4444</option><option value="abgr4444" data-v-65604766>ABGR4444</option></optgroup><optgroup label="16-bit Format (565)" data-v-65604766><option value="rgb565" data-v-65604766>RGB565</option><option value="bgr565" data-v-65604766>BGR565</option></optgroup>',3)]),512),[[a.u1,s.format]])]),(0,o.Lk)("div",X,[(0,o.Lk)("div",{class:(0,i.C4)(["color-legend",r.getLegendClass])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.getChannelOrder,(e=>((0,o.uX)(),(0,o.CE)("span",{key:e,style:(0,i.Tr)(r.getChannelStyle(e))},(0,i.v_)(e),5)))),128))],2),(0,o.Lk)("span",U,(0,i.v_)(r.getFormatDescription),1)])])])]),(0,o.Lk)("div",z,[(0,o.Lk)("div",K,[t[10]||(t[10]=(0,o.Lk)("div",{class:"option-label"},[(0,o.Lk)("h3",null,"Output Format")],-1)),(0,o.Lk)("div",S,[(0,o.Lk)("div",$,[(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>s.outputType=e)},t[9]||(t[9]=[(0,o.Lk)("option",{value:"binary"},"Binary",-1),(0,o.Lk)("option",{value:"c-array"},"C Array",-1)]),512),[[a.u1,s.outputType]])])])])]),s.selectedFiles.length>1?((0,o.uX)(),(0,o.CE)("div",T,[t[12]||(t[12]=(0,o.Lk)("div",{class:"option-label"},[(0,o.Lk)("h3",null,"Output Options")],-1)),(0,o.Lk)("div",P,[(0,o.Lk)("label",W,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=e=>s.zipOutput=e)},null,512),[[a.lH,s.zipOutput]]),t[11]||(t[11]=(0,o.Lk)("span",null,"Combine all outputs into a ZIP file",-1))])])])):(0,o.Q3)("",!0),(0,o.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>r.convertAllImages&&r.convertAllImages(...e)),disabled:s.isConverting},(0,i.v_)(s.isConverting?"Converting...":s.selectedFiles.length>1?"Convert All Images":"Convert Image"),9,j)])):(0,o.Q3)("",!0),s.conversions.length>0?((0,o.uX)(),(0,o.CE)("div",V,[t[14]||(t[14]=(0,o.Lk)("h3",null,"Conversion Results",-1)),(0,o.Lk)("div",N,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.conversions,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:"result-item"},[(0,o.Lk)("div",Q,[(0,o.Lk)("strong",null,(0,i.v_)(e.fileName),1),(0,o.Lk)("span",null,(0,i.v_)(e.size)+" KB",1),(0,o.Lk)("span",null,"Compression: "+(0,i.v_)(e.compressionRatio)+"%",1)])])))),128))])])):(0,o.Q3)("",!0)])])}n(4114),n(6573),n(8100),n(7936),n(7467),n(4732),n(9577),n(4603),n(7566),n(8721);var H=n(4813),Z=n.n(H),Y={data(){return{selectedFiles:[],imagePreview:"",imageWidth:0,imageHeight:0,format:"rgba8888",outputType:"binary",zipOutput:!0,isConverting:!1,conversions:[]}},computed:{getLegendClass(){return this.format.split(/\d+/)[0]},getChannelOrder(){const e=this.format.toLowerCase();return e.includes("565")?e.startsWith("rgb")?["R","G","B"]:["B","G","R"]:e.split(/\d+/)[0].toUpperCase().split("")},getFormatDescription(){return this.format.includes("8888")?"32-bit (Each channel 8-bit)":this.format.includes("4444")?"16-bit (Each channel 4-bit)":"16-bit (R:5, G:6, B:5)"}},methods:{onFilesSelected(e){const t=e.target.files;t&&0!==t.length&&(this.selectedFiles=Array.from(t),this.selectedFiles.length>0&&this.loadImagePreview(this.selectedFiles[0]))},loadImagePreview(e){const t=new FileReader;t.onload=e=>{this.imagePreview=e.target.result,this.loadImageDimensions(e.target.result)},t.readAsDataURL(e)},loadImageDimensions(e){const t=new Image;t.onload=()=>{this.imageWidth=t.width,this.imageHeight=t.height},t.src=e},async convertAllImages(){if(0!==this.selectedFiles.length&&!this.isConverting){this.isConverting=!0,this.conversions=[];try{if(this.zipOutput)await this.convertAndZip();else for(const e of this.selectedFiles)await this.processFile(e)}catch(e){console.error("Conversion error:",e),alert("An error occurred during conversion.")}finally{this.isConverting=!1}}},async convertAndZip(){if("undefined"===typeof Z()){alert("ZIP functionality requires JSZip library. Processing files individually.");for(const e of this.selectedFiles)await this.processFile(e);return}const e=new(Z()),t=e.folder("converted_images");for(const i of this.selectedFiles){const e=await this.convertFile(i);if(e){const{data:n,fileName:a,size:o,compressionRatio:l}=e;this.conversions.push({fileName:a,size:(o/1024).toFixed(2),compressionRatio:l}),"binary"===this.outputType?t.file(a+".bin",n):t.file(a+".c",this.generateCCode(n,i.name,n.length))}}const n=await e.generateAsync({type:"blob"}),a=URL.createObjectURL(n),o=document.createElement("a");o.href=a,o.download=`converted_images_${this.format}.zip`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)},async processFile(e){const t=await this.convertFile(e);if(t){const{data:n,fileName:a,size:o,compressionRatio:i}=t;this.conversions.push({fileName:a,size:(o/1024).toFixed(2),compressionRatio:i}),"binary"===this.outputType?this.downloadBinary(n,a):this.downloadCArray(n,a,e.name)}},async convertFile(e){return new Promise((t=>{const n=new FileReader;n.onload=n=>{const a=new Image;a.onload=()=>{const n=document.createElement("canvas");n.width=a.width,n.height=a.height;const o=n.getContext("2d");o.drawImage(a,0,0);const i=o.getImageData(0,0,a.width,a.height).data;let l;this.format.endsWith("8888")?l=this.convertTo8888Format(i,this.format):this.format.endsWith("4444")?l=this.convertTo4444Format(i,this.format):this.format.endsWith("565")&&(l=this.convertTo565Format(i,this.format));const s=i.length,r=(l.length/s*100).toFixed(1);t({data:l,fileName:this.getBaseFileName(e.name),width:a.width,height:a.height,size:l.length,compressionRatio:r})},a.src=n.target.result},n.readAsDataURL(e)}))},getBaseFileName(e){return e.split(".").slice(0,-1).join(".")},convertTo8888Format(e,t){const n=e.length/4,a=new Uint8Array(e.length);for(let o=0;o<n;o++){const n=e[4*o],i=e[4*o+1],l=e[4*o+2],s=e[4*o+3],r=4*o;switch(t){case"rgba8888":a[r]=n,a[r+1]=i,a[r+2]=l,a[r+3]=s;break;case"argb8888":a[r]=s,a[r+1]=n,a[r+2]=i,a[r+3]=l;break;case"bgra8888":a[r]=l,a[r+1]=i,a[r+2]=n,a[r+3]=s;break;case"abgr8888":a[r]=s,a[r+1]=l,a[r+2]=i,a[r+3]=n;break}}return a},convertTo4444Format(e,t){const n=e.length/4,a=new Uint8Array(2*n);for(let o=0;o<n;o++){const n=Math.floor(e[4*o]/16),i=Math.floor(e[4*o+1]/16),l=Math.floor(e[4*o+2]/16),s=Math.floor(e[4*o+3]/16),r=2*o;switch(t){case"rgba4444":a[r]=n<<4|i,a[r+1]=l<<4|s;break;case"argb4444":a[r]=s<<4|n,a[r+1]=i<<4|l;break;case"bgra4444":a[r]=l<<4|i,a[r+1]=n<<4|s;break;case"abgr4444":a[r]=s<<4|l,a[r+1]=i<<4|n;break}}return a},convertTo565Format(e,t){const n=e.length/4,a=new Uint8Array(2*n);for(let o=0;o<n;o++){const n=Math.floor(e[4*o]/255*31),i=Math.floor(e[4*o+1]/255*63),l=Math.floor(e[4*o+2]/255*31),s=2*o;let r;r="rgb565"===t?n<<11|i<<5|l:l<<11|i<<5|n,a[s]=255&r,a[s+1]=r>>8&255}return a},downloadBinary(e,t){const n=new Blob([e],{type:"application/octet-stream"}),a=URL.createObjectURL(n),o=document.createElement("a");o.href=a,o.download=`${t}_${this.format}.bin`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)},downloadCArray(e,t,n){const a=this.generateCCode(e,n,e.length),o=new Blob([a],{type:"text/plain"}),i=URL.createObjectURL(o),l=document.createElement("a");l.href=i,l.download=`${t}_${this.format}.c`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(i)},generateCCode(e,t,n){let a=`// ${this.format} 이미지 데이터 - ${t}\n`;this.format.includes("rgba")?a+="// Byte order: Red, Green, Blue, Alpha\n":this.format.includes("argb")?a+="// Byte order: Alpha, Red, Green, Blue\n":this.format.includes("bgra")?a+="// Byte order: Blue, Green, Red, Alpha\n":this.format.includes("abgr")?a+="// Byte order: Alpha, Blue, Green, Red\n":"rgb565"===this.format?(a+="// RGB565 Format: 16-bit (RRRRRGGGGGGBBBBB)\n",a+="// Little-endian byte order: Lower 8-bit, Upper 8-bit\n"):"bgr565"===this.format&&(a+="// BGR565 Format: 16-bit (BBBBBGGGGGGRRRRR)\n",a+="// Little-endian byte order: Lower 8-bit, Upper 8-bit\n"),this.format.includes("4444")&&(a+="// 4-bit packing format: Each byte contains two 4-bit color values\n");const o=this.getSafeVariableName(t);a+=`const unsigned char ${o}_data[${n}] = {\n`;const i=12;for(let l=0;l<n;l+=i){a+="    ";for(let t=0;t<i&&l+t<n;t++)a+=`0x${e[l+t].toString(16).padStart(2,"0")}`,l+t<n-1&&(a+=", ");a+="\n"}return a+="};\n\n",a+=`const int ${o}_width = ${this.imageWidth};\n`,a+=`const int ${o}_height = ${this.imageHeight};\n`,a+=`const char* ${o}_format = "${this.format}";\n`,a},getSafeVariableName(e){return e.split(".")[0].replace(/[^a-zA-Z0-9]/g,"_").replace(/^[0-9]/,"_$&")},formatFileSize(e){return e<1024?e+" B":e<1048576?(e/1024).toFixed(2)+" KB":(e/1048576).toFixed(2)+" MB"},getChannelStyle(e){const t={R:{background:"#ff0000"},G:{background:"#00ff00"},B:{background:"#0000ff"},A:{background:"#ffffff",color:"#000",textShadow:"none",borderLeft:"1px solid #ddd",borderRight:"1px solid #ddd"}};return t[e]}}};const q=(0,p.A)(Y,[["render",D],["__scopeId","data-v-65604766"]]);var J=q,ee=(n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(144));const te={class:"binary-viewer"},ne={class:"viewer-container"},ae={class:"file-section"},oe={key:0,class:"file-info"},ie={key:0,class:"loading-section"},le={class:"progress-bar"},se={key:1,class:"control-section"},re={class:"left-controls"},ce={class:"address"},ue={class:"hex-values"},de=["onClick"],ve={key:0,class:"ascii-values"},pe=["onClick"],he=1048576,ge=16,fe=10485760;var me={__name:"BinaryViewer",setup(e){const t=(0,ee.KR)(null),n=(0,ee.KR)(null),l=(0,ee.KR)(null),s=(0,ee.KR)(""),r=(0,ee.KR)(""),c=(0,ee.KR)(!1),u=(0,ee.KR)(0),d=(0,ee.KR)(!0),v=(0,ee.KR)(16),p=(0,ee.KR)(new Set),h=(0,ee.KR)(0),g=(0,ee.KR)(null),f=(0,ee.KR)(new Map),m=(0,ee.KR)([]),b=(0,ee.KR)(null),k=(0,o.EW)((()=>m.value)),y=(0,o.EW)((()=>{if(!g.value)return 0;const e=Math.floor(g.value.size/v.value),t=g.value.size%v.value>0;return e+(t?1:0)})),L=(0,o.EW)((()=>y.value*ge)),C=(0,o.EW)((()=>Math.max(0,h.value)*ge)),w=e=>e.toString(16).padStart(8,"0").toUpperCase(),R=e=>void 0===e?"  ":e.toString(16).padStart(2,"0").toUpperCase(),F=e=>void 0===e?" ":e>=32&&e<=126?String.fromCharCode(e):".",B=e=>p.value.has(e),_=e=>{const t=["B","KB","MB","GB"];let n=e,a=0;while(n>=1024&&a<t.length-1)n/=1024,a++;return`${n.toFixed(1)} ${t[a]}`},E=async(e,t)=>{const n=[],a=e*v.value,o=Math.min(t*v.value,g.value.size);await M(a,o);const i=Math.floor(g.value.size/v.value),l=g.value.size%v.value>0,s=i+(l?0:-1);for(let r=e;r<=s&&r<t;r++){const e=r*v.value;if(e>=g.value.size)break;const t=g.value.size-e,a=Math.min(v.value,t),o=await G(e,a);n.push({index:r,offset:e,bytes:o})}return n},A=e=>Math.floor(e/he)*he,M=async(e,t)=>{const n=A(e),a=A(t);for(let o=n;o<=a;o+=he)f.value.has(o)||await x(o);while(I()>fe){const e=f.value.keys().next().value;f.value.delete(e)}},I=()=>{let e=0;for(const t of f.value.values())e+=t.length;return e},x=async e=>{const t=g.value.slice(e,Math.min(e+he,g.value.size)),n=await X(t);f.value.set(e,new Uint8Array(n))},G=async(e,t)=>{const n=A(e),a=f.value.get(n);if(!a)return new Array(t).fill(void 0);const o=e-n,i=a.slice(o,o+t);return e+i.length>g.value.size&&(i.length=g.value.size-e),Array.from(i)},O=async e=>{const t=e.target.files[0];if(t){s.value=t.name,r.value=_(t.size),g.value=t,f.value.clear(),h.value=0,c.value=!0,u.value=0;try{l.value=!0,await(0,o.dY)(),n.value&&(console.debug("Registering scroll event handler"),n.value.addEventListener("scroll",z)),await U()}catch(a){console.error("파일 로딩 오류:",a)}finally{c.value=!1}}},X=e=>new Promise(((t,n)=>{const a=new FileReader;a.onload=e=>t(e.target.result),a.onerror=n,a.readAsArrayBuffer(e)})),U=async()=>{if(!g.value)return;const e=n.value?.clientHeight||0,t=Math.ceil(e/ge)+10,a=Math.max(0,h.value-5),o=Math.min(y.value,h.value+t+5),i=await E(a,o);m.value=i},z=()=>{if(!n.value||!g.value)return;const e=Math.floor(n.value.scrollTop/ge);e!==h.value&&(h.value=e,U())},K=e=>{b.value=b.value===e?null:e},S=e=>b.value===e;return(0,o.wB)(v,(e=>{document.documentElement.style.setProperty("--bytes-per-line",e),U()}),{immediate:!0}),(0,o.sV)((()=>{console.debug("Component mounted")})),(0,o.hi)((()=>{n.value&&(console.debug("Removing scroll event handler"),n.value.removeEventListener("scroll",z))})),(e,p)=>((0,o.uX)(),(0,o.CE)("div",te,[(0,o.Lk)("div",ne,[(0,o.Lk)("div",ae,[(0,o.Lk)("input",{type:"file",onChange:O,ref_key:"fileInput",ref:t,style:{display:"none"}},null,544),(0,o.Lk)("button",{onClick:p[0]||(p[0]=e=>t.value.click()),class:"primary-btn"},"Select File"),s.value?((0,o.uX)(),(0,o.CE)("span",oe,(0,i.v_)(s.value)+" ("+(0,i.v_)(r.value)+")",1)):(0,o.Q3)("",!0)]),c.value?((0,o.uX)(),(0,o.CE)("div",ie,[(0,o.Lk)("div",le,[(0,o.Lk)("div",{class:"progress",style:(0,i.Tr)({width:`${u.value}%`})},null,4)]),(0,o.Lk)("span",null,"File loading... "+(0,i.v_)(u.value)+"%",1)])):(0,o.Q3)("",!0),l.value?((0,o.uX)(),(0,o.CE)("div",se,[(0,o.Lk)("div",re,[(0,o.Lk)("label",null,[(0,o.bo)((0,o.Lk)("input",{type:"checkbox","onUpdate:modelValue":p[1]||(p[1]=e=>d.value=e)},null,512),[[a.lH,d.value]]),p[3]||(p[3]=(0,o.eW)(" Show ASCII "))]),(0,o.Lk)("label",null,[p[5]||(p[5]=(0,o.Lk)("span",{style:{"padding-right":"10px"}},"Bytes/Line",-1)),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":p[2]||(p[2]=e=>v.value=e)},p[4]||(p[4]=[(0,o.Lk)("option",{value:8},"8",-1),(0,o.Lk)("option",{value:16},"16",-1)]),512),[[a.u1,v.value]])])]),p[6]||(p[6]=(0,o.Lk)("div",{class:"right-controls"},null,-1))])):(0,o.Q3)("",!0),l.value?((0,o.uX)(),(0,o.CE)("div",{key:2,class:"hex-view",ref_key:"hexView",ref:n},[(0,o.Lk)("div",{class:"hex-content",style:(0,i.Tr)({height:`${L.value}px`})},[(0,o.Lk)("div",{class:"viewport",style:(0,i.Tr)({transform:`translateY(${C.value}px)`})},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(k.value,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.index,class:"hex-line"},[(0,o.Lk)("div",ce,(0,i.v_)(w(e.offset)),1),(0,o.Lk)("div",ue,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.bytes,((t,n)=>((0,o.uX)(),(0,o.CE)("span",{key:n,class:(0,i.C4)(["hex-byte",{highlighted:B(e.offset+n),selected:S(e.offset+n)}]),onClick:t=>K(e.offset+n)},(0,i.v_)(R(t)),11,de)))),128))]),d.value?((0,o.uX)(),(0,o.CE)("div",ve,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.bytes,((t,n)=>((0,o.uX)(),(0,o.CE)("span",{key:n,class:(0,i.C4)({highlighted:B(e.offset+n),selected:S(e.offset+n)}),onClick:t=>K(e.offset+n)},(0,i.v_)(F(t)),11,pe)))),128))])):(0,o.Q3)("",!0)])))),128))],4)],4)],512)):(0,o.Q3)("",!0)])]))}};const be=(0,p.A)(me,[["__scopeId","data-v-a7a37298"]]);var ke=be;const ye={class:"changelog"},Le={class:"version-list"},Ce={class:"version-date"};function we(e,t,n,a,l,s){return(0,o.uX)(),(0,o.CE)("div",ye,[t[0]||(t[0]=(0,o.Lk)("h1",null,"Change Log",-1)),(0,o.Lk)("div",Le,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.versions,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:"version-item"},[(0,o.Lk)("h2",null,(0,i.v_)(e.version),1),(0,o.Lk)("div",Ce,(0,i.v_)(e.date),1),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.changes,((e,t)=>((0,o.uX)(),(0,o.CE)("li",{key:t,class:(0,i.C4)(e.type)},(0,i.v_)(e.description),3)))),128))])])))),128))])])}var Re={name:"ChangeLog",data(){return{versions:[{version:"v0.0.2",date:"2025-03-06",changes:[{type:"feature",description:"Added mobile support and multi-file selection"},{type:"improvement",description:"Add responsive code to avoid user frustration on mobile devices "}]},{version:"v0.0.1",date:"2025-02-28",changes:[{type:"feature",description:"Initial release"},{type:"improvement",description:"Add a new feature to convert images to binary"}]}]}}};const Fe=(0,p.A)(Re,[["render",we],["__scopeId","data-v-22e0f210"]]);var Be=Fe;const _e=[{path:"/",name:"ImageConverter",component:J},{path:"/binary-viewer",name:"BinaryViewer",component:ke},{path:"/change-logs",name:"ChangeLog",component:Be}],Ee=(0,f.aE)({history:(0,f.LA)("/"),routes:_e});var Ae=Ee;const Me=(0,a.Ef)(g);Me.use(Ae),Me.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],i=e[u][2];for(var s=!0,r=0;r<a.length;r++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[r])}))?a.splice(r--,1):(s=!1,i<l&&(l=i));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,l=a[0],s=a[1],r=a[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(r)var u=r(n)}for(t&&t(a);c<l.length;c++)i=l[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunknovatool_claude"]=self["webpackChunknovatool_claude"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(1101)}));a=n.O(a)})();
//# sourceMappingURL=app.b363e855.js.map