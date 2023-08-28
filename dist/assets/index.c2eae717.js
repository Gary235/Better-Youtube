var he=Object.defineProperty,ue=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var q=(e,t,n)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&q(e,n,t[n]);if(W)for(var n of W(t))Ee.call(t,n)&&q(e,n,t[n]);return e},f=(e,t)=>ue(e,me(t));import{a as x,b as T,t as $,c as H,p as S,s as ge,d as Se,l as fe,e as V,f as a,L as C,j as r,g as d,r as h,U as Y,u as _e,h as R,F as G,i as b,k as B,R as ye,m as Ce,S as we,n as k,o as O,q as Ae,P as Ie}from"./vendor.37160cea.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Te();const w={GET_INITIAL_VIDEOS:"GET_INITIAL_VIDEOS",GET_INITIAL_VIDEOS_ERROR:"GET_INITIAL_VIDEOS_ERROR",GET_INITIAL_VIDEOS_SUCCESS:"GET_INITIAL_VIDEOS_SUCCESS",CLEAN_HOME:"CLEAN_HOME"},P={getVideos:e=>({type:w.GET_INITIAL_VIDEOS,key:e}),getVideosError:e=>({type:w.GET_INITIAL_VIDEOS_ERROR,error:e}),getVideosSuccess:e=>({type:w.GET_INITIAL_VIDEOS_SUCCESS,payload:e}),cleanHome:()=>({type:w.CLEAN_HOME})},Re={videos:null},be=e=>f(g({},e),{videos:null}),De=(e,t)=>f(g({},e),{videos:t}),Le=(e=Re,t)=>{switch(t.type){case w.GET_INITIAL_VIDEOS_SUCCESS:return De(e,t.payload);case w.CLEAN_HOME:return be(e);default:return e}},A={GET_VIDEO_DATA:"GET_VIDEO_DATA",GET_VIDEO_DATA_ERROR:"GET_VIDEO_DATA_ERROR",GET_VIDEO_DATA_SUCCESS:"GET_VIDEO_DATA_SUCCESS",VIDEO_FINALIZE:"VIDEO_FINALIZE"},U={getVideoData:(e,t)=>({type:A.GET_VIDEO_DATA,key:e,id:t}),getVideoDataError:e=>({type:A.GET_VIDEO_DATA_ERROR,error:e}),getVideoDataSuccess:e=>({type:A.GET_VIDEO_DATA_SUCCESS,payload:e}),videoFinalize:()=>({type:A.VIDEO_FINALIZE})},ve={videoData:null},xe=()=>({videoData:null}),$e=(e,t)=>f(g({},e),{videoData:t}),He=(e=ve,t)=>{switch(t.type){case A.GET_VIDEO_DATA_SUCCESS:return $e(e,t.payload);case A.VIDEO_FINALIZE:return xe();default:return e}},I={CHANNEL_FINALIZE:"CHANNEL_FINALIZE",GET_CHANNEL_DATA:"GET_CHANNEL_DATA",GET_CHANNEL_DATA_ERROR:"GET_CHANNEL_DATA_ERROR",GET_CHANNEL_DATA_SUCCESS:"GET_CHANNEL_DATA_SUCCESS"},D={getChannelData:(e,t)=>({type:I.GET_CHANNEL_DATA,key:e,id:t}),getChannelDataError:e=>({type:I.GET_CHANNEL_DATA_ERROR,error:e}),getChannelDataSuccess:e=>({type:I.GET_CHANNEL_DATA_SUCCESS,payload:e}),channelFinalize:()=>({type:I.CHANNEL_FINALIZE})},Ve={channelData:null},Ne=e=>f(g({},e),{channelData:null}),Ge=(e,t)=>f(g({},e),{channelData:t}),ke=(e=Ve,t)=>{switch(t.type){case I.GET_CHANNEL_DATA_SUCCESS:return Ge(e,t.payload);case I.CHANNEL_FINALIZE:return Ne(e);default:return e}},u={CLEAN_HELPERS:"CLEAN_HELPERS",CLEAN_RESULTS:"CLEAN_RESULTS",GET_SEARCH_HELPERS:"GET_SEARCH_HELPERS",GET_SEARCH_HELPERS_ERROR:"GET_SEARCH_HELPERS_ERROR",GET_SEARCH_HELPERS_SUCCESS:"GET_SEARCH_HELPERS_SUCCESS",GET_SEARCH_RESULTS:"GET_SEARCH_RESULTS",GET_SEARCH_RESULTS_ERROR:"GET_SEARCH_RESULTS_ERROR",GET_SEARCH_RESULTS_SUCCESS:"GET_SEARCH_RESULTS_SUCCESS"},y={getSearchHelpers:e=>({type:u.GET_SEARCH_HELPERS,q:e}),getSearchHelpersError:e=>({type:u.GET_SEARCH_HELPERS_ERROR,error:e}),getSearchHelpersSuccess:e=>({type:u.GET_SEARCH_HELPERS_SUCCESS,payload:e}),getSearchResults:(e,t)=>({type:u.GET_SEARCH_RESULTS,key:e,q:t}),getSearchResultsError:e=>({type:u.GET_SEARCH_RESULTS_ERROR,error:e}),getSearchResultsSuccess:e=>({type:u.GET_SEARCH_RESULTS_SUCCESS,payload:e}),cleanResults:()=>({type:u.CLEAN_RESULTS}),cleanHelpers:()=>({type:u.CLEAN_HELPERS})},Oe={searchData:null,searchHelpersData:null},Pe=e=>f(g({},e),{searchData:null}),Ue=e=>f(g({},e),{searchHelpersData:null}),ze=(e,t)=>f(g({},e),{searchHelpersData:t}),Fe=(e,t)=>f(g({},e),{searchData:t}),Me=(e=Oe,t)=>{switch(t.type){case u.GET_SEARCH_HELPERS_SUCCESS:return ze(e,t.payload);case u.GET_SEARCH_RESULTS_SUCCESS:return Fe(e,t.payload);case u.CLEAN_RESULTS:return Pe(e);case u.CLEAN_HELPERS:return Ue(e);default:return e}};var Ze={home:Le,video:He,channel:ke,search:Me};const Be=e=>{const t=`https://www.googleapis.com/youtube/v3/videos?key=${e}&part=id,snippet,contentDetails,player,recordingDetails,statistics,status,topicDetails&chart=mostPopular&regionCode=AR&maxResults=20`;return x.get(t)};function*je(e){try{const{data:t}=yield H(Be,e.key);yield S(P.getVideosSuccess(t.items))}catch(t){yield S(P.getVideosError(t))}}function*Ke(){yield T([$([w.GET_INITIAL_VIDEOS],je)])}const We=(e,t)=>{const n=`https://www.googleapis.com/youtube/v3/videos?key=${e}&part=snippet,statistics,player&id=${t}`;return x.get(n)};function*qe(e){try{const{data:t}=yield H(We,e.key,e.id);yield S(D.getChannelData(e.key,t.items[0].snippet.channelId)),yield S(U.getVideoDataSuccess(t.items[0]))}catch(t){yield S(U.getVideoDataError(t))}}function*Ye(){yield T([$([A.GET_VIDEO_DATA],qe)])}const Q=(e,t)=>{const n=`https://www.googleapis.com/youtube/v3/channels?key=${e}&part=snippet,statistics,brandingSettings&id=${t}`;return x.get(n)};function*Qe(e){try{const{data:t}=yield H(Q,e.key,e.id);yield S(D.getChannelDataSuccess(t.items[0]))}catch(t){yield S(D.getChannelDataError(t))}}function*Je(){yield T([$([I.GET_CHANNEL_DATA],Qe)])}const Xe=(e,t)=>{const n=`https://www.googleapis.com/youtube/v3/search?key=${e}&part=snippet&q=${t}&maxResults=10`;return x.get(n)},et=e=>{const t=`https://youtube-puppeteer.herokuapp.com/?search=${encodeURI(e)}`;return x.get(t,{headers:{"Access-Control-Allow-Origin":"*",Accept:"json/application"}})},tt=async(e,t)=>{console.log({promises:e}),(await Promise.all(e)).forEach((o,i)=>{const s=o.data.items[0],c=document.querySelector(`#channel-photo-${s.id}-${t[i]}`);console.log({el:c,channelInfo:o}),s&&(c.src=s.snippet.thumbnails.medium.url)})};function*nt(e){try{const{data:t}=yield H(et,e.q);yield S(y.getSearchHelpersSuccess(t))}catch(t){yield S(y.getSearchHelpersError(t))}}function*rt(e){try{const{data:t}=yield H(Xe,e.key,e.q);yield S(y.getSearchResultsSuccess(t.items));const n=t.items.map(s=>s.snippet.channelId),o=t.items.map(s=>s.id.videoId),i=n.map(s=>new Promise((c,m)=>{try{c(Q(e.key,s))}catch(p){m(p)}}));tt(i,o)}catch(t){yield S(y.getSearchResultsError(t))}}function*ot(){yield T([$([u.GET_SEARCH_HELPERS],nt)])}function*it(){yield T([$([u.GET_SEARCH_RESULTS],rt)])}function*at(){yield T([Ke(),Ye(),Je(),ot(),it()])}const J=ge(),st=Se({reducer:Ze,middleware:[J,fe]});J.run(at);const ct=e=>e.home,lt=V([ct],e=>{const{videos:t}=e;return{videos:t==null?void 0:t.map(n=>({id:n.id,snippet:n.snippet,statistics:n.statistics}))}});var X={VIDEO_KIND:"youtube#video",CHANNEL_KIND:"youtube#channel"};const ee=e=>e.search,dt=V([ee],e=>{const{searchData:t}=e;return t?{results:t.map(n=>({kind:n.id.kind,url:n.id.kind===X.VIDEO_KIND?`/video/${n.id.videoId}`:`/channel/${n.id.channelId}`,title:n.snippet.title,description:n.snippet.description,channelTitle:n.snippet.channelTitle,img:n.snippet.thumbnails.medium,channelId:n.snippet.channelId,videoId:n.id.videoId}))}:{results:null}}),ht=V([ee],e=>{const{searchHelpersData:t}=e;return t?{helpers:t}:{helpers:null}}),ut=a(C)`
  svg {
    width: 2em;
    height: auto;
  }
`,mt=()=>r(ut,{to:"/home",children:d("svg",{width:"256",height:"180",viewBox:"0 0 256 180",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M250.346 28.075C248.878 22.6486 246.013 17.7014 242.038 13.7263C238.063 9.75112 233.116 6.88661 227.69 5.418C207.824 0 127.87 0 127.87 0C127.87 0 47.9119 0.164 28.0459 5.582C22.6194 7.0507 17.6724 9.91536 13.6974 13.8907C9.72239 17.8661 6.85817 22.8134 5.38995 28.24C-0.619052 63.538 -2.95005 117.324 5.55495 151.21C7.02332 156.636 9.88761 161.584 13.8626 165.559C17.8376 169.534 22.7846 172.398 28.2109 173.867C48.0769 179.285 128.033 179.285 128.033 179.285C128.033 179.285 207.988 179.285 227.853 173.867C233.28 172.399 238.227 169.534 242.202 165.559C246.177 161.584 249.041 156.637 250.51 151.21C256.848 115.862 258.801 62.11 250.346 28.076V28.075Z",fill:"#FF265A"}),r("path",{d:"M102.42 112.446C102.42 119.38 109.931 123.71 115.931 120.234L155.303 97.43C161.289 93.9632 161.289 85.321 155.303 81.8541L115.932 59.0497C109.932 55.5744 102.421 59.9038 102.421 66.8375L102.42 112.446Z",fill:"white"})]})}),pt=(e,t=[])=>{const n=o=>e.current&&![e,...t].some(i=>i.current.contains(o.target));h.exports.useEffect(()=>{const o=i=>{n(i)&&(e.current.style.display="none")};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[e])};var l={americanRed:"#B31942",awesomeRed:"#FF265A",black:"#000000",dimGray:"#65666E",eerieBlack:"#181921",linkBlue:"#4A8EFF",metallicSilver:"#A2A3B0",white:"#FFFFFF",weakGray:"#65666E30"};const Et=Y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,te=Y`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,gt=a.div`
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${l.white};
  position: relative;
  animation: ${te} 1.5s infinite ease-in-out;
  animation-delay: 0.4s;

  &::before,
  &::after {
    content: "";
    width: 10px;
    aspect-ratio: 1;
    background-color: ${l.white};
    border-radius: 50%;
    animation: ${te} 1.5s infinite ease-in-out;
    position: absolute;
  }

  &::before {
    animation-delay: 0.2s;
    left: -20px;
  }

  &::after {
    animation-delay: 0.6s;
    right: -20px;
  }
`,St=()=>r(gt,{}),ft=a.div`
  width: 60%;
  max-width: 55em;
  min-width: 35em;
  height: 0;
  margin: auto;
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.75em;
  z-index: 10;
`,_t=a.ul`
  list-style: none;
  background: ${l.eerieBlack}95;
  backdrop-filter: blur(15px);
  width: 100%;
  text-align: center;
  padding: 1em 0;
  border-radius: 0.75em;
  box-shadow: 0 10px 15px 0 ${l.black}70;
`,yt=a.li`
  width: 100%;
  padding: 1.5em 0.5em;
  background: transparent;
  font-size: 1em;
  font-weight: 500;
  user-select: none;
  transition: background 0.1s;

  &:hover {
    background: ${l.white}40;
  }
`,Ct=a.div`
  background: ${l.eerieBlack}95;
  backdrop-filter: blur(15px);
  width: 100%;
  padding: 2em 0;
  border-radius: 0.75em;
  box-shadow: 0 10px 15px 0 ${l.black}70;
  display: flex;
  justify-content: center;
  align-items: center;
`,wt=e=>{const{results:t}=e;return r(ft,{children:t?r(_t,{children:t.slice(0,6).map((n,o)=>r(C,{to:`/search/${n}`,children:r(yt,{children:n})},`search-helper-${o}`))}):r(Ct,{children:r(St,{})})})},At=a.input`
  font-weight: 500;
  font-size: 0.9em;
  border: none;
  background: transparent;
  outline: none;
  margin-inline: auto;
  text-align: center;
`,It=e=>{const{searchResults:t}=e,n=_e(),o=h.exports.useRef(null),i=h.exports.useRef(null),[s,c]=h.exports.useState(""),m=s.length>=3,p=R();pt(i,[o]);const E=()=>{p(y.cleanHelpers()),s.length>=3&&p(y.getSearchHelpers(s))};h.exports.useEffect(()=>{let _=setTimeout(()=>E(),1e3);return()=>{clearTimeout(_)}},[s]);const v=()=>{n.push(`/search/${s}`)};return d(G,{children:[r(At,{ref:o,placeholder:"Type to search",type:"text",value:s,onChange:_=>c(_.target.value),autoFocus:!0,onFocus:()=>{m&&(i.current.style.display="block")},onKeyUp:_=>_.key==="Enter"&&v()}),m&&r("div",{ref:i,children:r(wt,{results:t})})]})},Tt=a.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  margin-bottom: 1.5em;
  border-bottom: 1px solid ${l.weakGray};
  position: relative;
`,Rt=e=>{const{searchResults:t}=e;return d(Tt,{children:[r(mt,{}),r(It,{searchResults:t})]})},bt=a.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`,Dt=e=>r(bt,{children:e.children}),z=e=>{const{helpers:t}=b(ht);return d(Dt,{children:[r(Rt,{searchResults:t}),e.children]})},Lt=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14.5em, 1fr));
  grid-template-columns: repeat(
    ${({columns:e})=>e||"auto-fit"},
    minmax(14.5em, 1fr)
  );
  gap: 1em 1.75em;
  width: 100%;
  place-content: center;
`,ne=e=>{const{items:t,ItemComponent:n,columns:o=0}=e;return r(Lt,{columns:o,children:t&&t.map((i,s)=>r(n,g({},i),`grid-component-${s}`))})};var N={minute:6e4,hour:36e5,day:864e5,month:2628e6,year:3154e7};const vt=e=>e<N.minute?"now":e<N.hour?"minutes":e<N.day?"hours":e<N.month?"days":e<N.year?"months":"years",xt=e=>{const t=Math.abs(new Date(e).getTime()-Date.now());switch(vt(t)){case"now":return"less than a minute ago";case"minutes":const n=Math.round(t/1e3/60);return n===1?`${n} minute ago`:`${n} minutes ago`;case"hours":const o=Math.round(t/1e3/60/60);return o===1?`${o} hour ago`:`${o} hours ago`;case"days":const i=Math.round(t/1e3/60/60/24);return i===1?`${i} day ago`:`${i} days ago`;case"months":const s=Math.round(t/1e3/60/60/24/30);return s===1?`${s} month ago`:`${s} months ago`;case"years":const c=Math.round(t/1e3/60/60/24/30/365);return c===1?`${c} year ago`:`${c} years ago`}},$t=e=>e<1e3?{number:e,suffix:""}:e<1e6?{number:Math.round(e/1e3),suffix:"k"}:{number:Math.round(e/1e6),suffix:"M"},re=e=>{const t=$t(e);return`${t.number}${t.suffix}`},Ht=a(C)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0 1em;
  text-decoration: none;
  transition: all 0.2s;
  border-radius: 0.5em;

  &:hover {
    background: ${l.metallicSilver}30;
    padding: 0.5em;
  }
`,Vt=a.img`
  width: 100%;
  height: auto;
  border-radius: 0.35em;
`,Nt=a.div`
  width: 100%;
  font-weight: 500;
  padding: 0.25em 0 0.5em;
  background: transparent;
`,Gt=a.h3`
  font-size: 0.9em;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: transparent;
`,kt=a(C)`
  padding: 0.5em 0 0;
  font-size: 0.8em;
  color: ${l.metallicSilver};
  white-space: nowrap;
  overflow: hidden;
  background: transparent;
  text-overflow: ellipsis;
  transition: color 0.2s;

  &:hover {
    color: ${l.awesomeRed};
  }
`,Ot=a.div`
  width: 100%;
  padding: 0.75em 0 0.25em;
  display: flex;
  justify-content: space-between;
  background: transparent;
`,oe=a.p`
  font-size: 0.7em;
  color: ${l.dimGray};
  background: transparent;
`,Pt=e=>{const{id:t,snippet:n,statistics:o}=e;return d(Ht,{to:`/video/${t}`,children:[r(Vt,{src:n.thumbnails.medium.url,loading:"lazy",decoding:"async",width:n.thumbnails.medium.width,height:n.thumbnails.medium.height}),d(Ot,{children:[d(oe,{children:[re(parseInt(o.viewCount))," views"]}),r(oe,{children:xt(n.publishedAt)})]}),d(Nt,{children:[r(Gt,{children:n.title}),r(kt,{to:`/channel/${n.channelId}`,children:n.channelTitle})]})]})},Ut=a.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 2em 2em;
`,zt=e=>{const{videos:t}=e;return r(Ut,{children:r(ne,{items:t,ItemComponent:Pt})})},Ft=a.div`
  width: 50px;
  height: 50px;
  background: transparent;
  animation: ${Et} 1s linear infinite;

  border-radius: 50%;
  border-top: 3px solid ${l.awesomeRed};
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-right: 3px solid transparent;
`,Mt=a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-radius: 1.5em;
  background: ${l.white}20;

  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
`,F=()=>r(Mt,{children:r(Ft,{})}),Zt=()=>{const e=R();h.exports.useEffect(()=>{const n={}.VITE_API_KEY;return e(P.getVideos(n)),()=>{e(P.cleanHome())}},[e]);const{videos:t}=b(lt);return t?r(z,{children:r(zt,{videos:t})}):r(F,{})},Bt=e=>e.video,jt=V([Bt],e=>{const{videoData:t}=e,n=t==null?void 0:t.snippet,o=t==null?void 0:t.statistics,i=t==null?void 0:t.player;return{title:n==null?void 0:n.title,description:n==null?void 0:n.description,channelId:n==null?void 0:n.channelId,channelTitle:n==null?void 0:n.channelTitle,viewCount:o==null?void 0:o.viewCount,embedPlayer:i==null?void 0:i.embedHtml}}),Kt=e=>e.channel,ie=V([Kt],e=>{const{channelData:t}=e,n=t==null?void 0:t.snippet,o=t==null?void 0:t.statistics;return{channelTitle:n==null?void 0:n.title,channelDescription:n==null?void 0:n.description,channelThumbnails:n==null?void 0:n.thumbnails,channelSubsCount:o==null?void 0:o.subscriberCount}}),Wt=(e=!1)=>{const[t,n]=h.exports.useState(e);return[t,{on:()=>{n(!0)},off:()=>{n(!1)},toggle:()=>{n(i=>!i)},reset:()=>{n(e)}}]};var M={isAUrl:/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,begginsWithHash:/^#/,begginsWithAt:/^@/,descriptionSeparator:/ |\r|\t|\n/g};const ae=(e,t=!1)=>{const n=e.split(M.descriptionSeparator).map(o=>o===""?`
`:o.match(M.begginsWithAt)?`<a href="" class="channel">${o}</a>`:o.match(M.begginsWithHash)?`<a href="" class="tag">${o}</a>`:o.match(M.isAUrl)?`<a href="${o.trim()}" target="_blank">${o}</a><br>`:o).join(" ");return t?n.slice(0,250)+"...":n},Z=(e,t="div")=>r(t,{dangerouslySetInnerHTML:{__html:e}});var L={DEVICE_SMALL:"DEVICE_SMALL",DEVICE_MEDIUM:"DEVICE_MEDIUM",DEVICE_LARGE:"DEVICE_LARGE"};const se=()=>{const e=o=>o<530?L.DEVICE_SMALL:o<1e3?L.DEVICE_MEDIUM:L.DEVICE_LARGE,[t,n]=h.exports.useState(e(window.innerWidth));return h.exports.useEffect(()=>{window.addEventListener("resize",()=>n(e(window.innerWidth)))},[t]),t},qt=a.div`
  aspect-ratio: 16 / 9;
  width: fit-content;
  border-radius: 0.75em;
  overflow: hidden;
`,Yt=h.exports.memo(e=>{const{iframe:t}=e,n=se(),o=n===L.DEVICE_SMALL?{width:304,height:171}:n===L.DEVICE_MEDIUM?{width:480,height:270}:{width:800,height:450},i=t.replace('width="480"',`width="${o.width}"`).replace('height="270"',`height="${o.height}"`);return r(qt,{children:Z(i)})}),Qt=a.button`
  padding: 1em 1.75em;
  border: 1.5px solid ${l.americanRed};
  border-radius: 0.8em;
  background: ${l.americanRed}05;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 500;
  &:hover {
    background: ${l.americanRed};
  }
`,Jt=e=>{const{text:t}=e;return r(Qt,{children:t})},Xt=a.div`
  width: fit-content;
  padding: 0 2em 2em;
`,en=a.div`
  padding: 1.5em 0;
  border-bottom: 1px solid ${l.weakGray};
`,tn=a.h1`
  font-size: 1em;
  font-weight: 500;
`,ce=a.p`
  font-size: 0.9em;
  line-height: 1.5;
  max-width: 800px;
  width: fit-content;
`,le=a.p`
  margin: 0.5em 0 0;
  font-size: 0.8em;
  font-weight: 500;
  color: ${l.metallicSilver};
  cursor: ${({isButton:e})=>e?"pointer":"auto"};
`,nn=a.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0 1em;
  margin: 1.5em 0;
`,rn=a.img`
  width: 2.75em;
  aspect-ratio: 1;
  border-radius: 0.5em;
`,on=a.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em 0;
  margin-right: auto;
`,an=a(C)`
  font-size: 0.9em;
  font-weight: 500;
  color: ${l.white};

  &:hover {
    color: ${l.awesomeRed};
  }
`,sn=a.p`
  font-size: 0.7em;
  color: ${l.metallicSilver};
`,cn=e=>{var K;const{title:t,description:n,channelTitle:o,channelId:i,viewCount:s,embedPlayer:c,channelThumbnails:m,channelSubsCount:p}=e,[E,{toggle:v}]=Wt(!0),_=n.length>250,j=ae(n,E&&_);return r(G,{children:d(Xt,{children:[r(Yt,{iframe:c}),d(en,{children:[r(tn,{children:t}),d(le,{children:[re(parseInt(s))," views"]})]}),d(nn,{children:[r(rn,{src:(K=m==null?void 0:m.medium)==null?void 0:K.url}),d(on,{children:[r(an,{to:`/channel/${i}`,children:o}),d(sn,{children:[p," subscribers"]})]}),r(Jt,{text:"Subscribe"})]}),n&&d(G,{children:[Z(j,ce),_&&r(le,{onClick:()=>v(),isButton:!0,children:E?"Show More":"Show Less"})]})]})})},ln=()=>{const e=R(),{videoId:t}=B();h.exports.useEffect(()=>{const v={}.VITE_API_KEY;return e(U.getVideoData(v,t)),function(){e(U.videoFinalize()),e(D.channelFinalize())}},[e]);const{title:n,channelTitle:o,channelId:i,viewCount:s,embedPlayer:c,description:m}=b(jt),{channelThumbnails:p,channelSubsCount:E}=b(ie);return c?r(z,{children:r(cn,{title:n,description:m,channelTitle:o,channelId:i,viewCount:s,embedPlayer:c,channelThumbnails:p,channelSubsCount:E})}):r(F,{})},dn=e=>e.replace(/&quot;/g,'"').replace(/(L&#39;)|(l&#39;)/g,"'"),hn=a(C)`
  width: 100%;
  align-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s;
  border-radius: 0.5em;
  padding: 0.5em 0.5em 0.5em 0;

  &:hover {
    background: ${l.metallicSilver}30;
    padding: 0.5em;
  }

  @media (max-width: 1000px) {
    flex-wrap: ${({isVideo:e})=>e?"wrap":"nowrap"};
    justify-content: center;
  }
`,un=a.img`
  margin: 0 1em 0 0;
  height: auto;
  max-width: 10em;
  width: ${({isVideo:e})=>e?"30%":"15%"};
  min-width: ${({isVideo:e})=>e?"10em":"7em"};
  border-radius: ${({isVideo:e})=>e?"0.5em":"50%"};

  @media (max-width: 1000px) {
    max-width: unset;
    min-width: unset;
    width: ${({isVideo:e})=>e?"100%":"7em"};
    margin: ${({isVideo:e})=>e?"0":"0 2em 0 0"};
  }
`,mn=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;

  @media (max-width: 1000px) {
    width: 100%;
    margin: 1em 0 0;
  }
`,pn=a.h3`
  font-size: 1em;
  font-weight: 500;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,En=a.p`
  font-size: 0.8em;
  margin: 0.5em 0;
  color: ${l.metallicSilver};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,de=a.p`
  font-size: 0.8em;
  font-weight: 500;
  color: ${l.metallicSilver};
  transition: color 0.2s;
`,gn=a(C)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1em 0 0;

  &:hover {
    ${de} {
      color: ${l.awesomeRed};
    }
  }
`,Sn=a.img`
  margin: 0 0.5em 0 0;
  border-radius: 50%;
  width: 1.5em;
  height: auto;
  aspect-ratio: 1;
`,fn=e=>{const{img:t,title:n,url:o,videoId:i,channelTitle:s,channelId:c,description:m,kind:p}=e,E=p===X.VIDEO_KIND;return d(hn,{to:o,isVideo:E,children:[r(un,{loading:"lazy",src:t.url,alt:`${p}-${o}`,width:t.width,height:t.height,isVideo:E}),d(mn,{children:[r(pn,{children:dn(n)}),r(En,{children:m}),E&&d(gn,{to:`/channel/${c}`,children:[r(Sn,{id:`channel-photo-${c}-${i}`,src:"/src/assets/loading-state.svg",loading:"lazy"}),r(de,{children:s})]})]})]})},_n=a.div`
  padding: 0 2em 2em;
`,yn=e=>{const{results:t}=e,o=se()===L.DEVICE_SMALL?1:2;return r(_n,{children:r(ne,{items:t,ItemComponent:fn,columns:o})})},Cn=()=>{const e=R(),{searchQuery:t}=B();h.exports.useEffect(()=>{e(y.cleanResults());const o={}.VITE_API_KEY;return e(y.getSearchResults(o,t)),()=>{e(y.cleanResults()),e(D.channelFinalize())}},[t]);const{results:n}=b(dt);return n?r(z,{children:r(yn,{results:n})}):r(F,{})},wn=a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,An=a.div`
  width: 8em;
  height: auto;
  aspect-ratio: 1;
  border-radius: 3em;
  margin: 0 0 2em;
  position: relative;
  background: url(${({src:e})=>e}) no-repeat;
  background-size: cover;

  &::after {
    content: "";
    position: absolute;
    background: inherit;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(20px);
    opacity: 0.5;
    bottom: -0.5em;
  }
`,In=a.h1`
  font-size: 1.5em;
  font-weight: 500;
  margin: 0 0 0.25em;
  text-align: center;
`,Tn=a.p`
  font-size: 1em;
  line-height: 1.4;
  color: ${l.metallicSilver};
  text-align: center;
`,Rn=e=>{var c;const{title:t,description:n,thumbnails:o,subsCount:i}=e;console.log({title:t,description:n,thumbnails:o,subsCount:i});const s=ae(n);return r(G,{children:d(wn,{children:[r(An,{src:(c=o==null?void 0:o.medium)==null?void 0:c.url}),r(In,{children:t}),Z(s,Tn)]})})},bn=()=>{const e=R(),{channelId:t}=B();h.exports.useEffect(()=>{const c={}.VITE_API_KEY;e(D.getChannelData(c,t))},[e]);const{channelTitle:n,channelDescription:o,channelThumbnails:i,channelSubsCount:s}=b(ie);return i?r(z,{children:r(Rn,{title:n,description:o,thumbnails:i,subsCount:s})}):r(F,{})},Dn={AWAKE_HELPERS_API:"AWAKE_HELPERS_API"},Ln={awakeHelpersApi:()=>({type:Dn.AWAKE_HELPERS_API})},vn=()=>{const e=R();return h.exports.useEffect(()=>{e(Ln.awakeHelpersApi())},[]),r(ye,{history:Ce(),children:d(we,{children:[r(k,{exact:!0,from:"/",to:"/home"}),r(k,{exact:!0,from:"/video/",to:"/home"}),r(k,{exact:!0,from:"/search/",to:"/home"}),r(k,{exact:!0,from:"/channel/",to:"/home"}),r(O,{path:"/home",component:Zt}),r(O,{path:"/video/:videoId/",component:ln}),r(O,{path:"/search/:searchQuery/",component:Cn}),r(O,{path:"/channel/:channelId/",component:bn})]})})};Ae.render(r(Ie,{store:st,children:r(vn,{})}),document.getElementById("root"));
