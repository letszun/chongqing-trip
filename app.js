const STORE='cqTripAppV5';
let state={};
try{state=JSON.parse(localStorage.getItem(STORE)||localStorage.getItem('cqTripAppV4')||localStorage.getItem('cqTripAppV3')||localStorage.getItem('cqTripAppV2')||'{}')}catch(e){state={}}
function save(){localStorage.setItem(STORE,JSON.stringify(state))}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function detailUrl(type,id){return `detail.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(id)}`}
function toast(msg='COPIED'){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(window._tt);window._tt=setTimeout(()=>t.classList.remove('show'),900)}
async function copyText(s){try{await navigator.clipboard.writeText(s);toast()}catch(e){toast('LONG PRESS TO COPY')}}
function nav(active){
 const items=[['index.html','◷','Plan','plan'],['spots.html','⌖','Spots','spots'],['eat.html','✦','Eat','eat'],['money.html','¥','Money','money'],['talk.html','中','Talk','talk'],['check.html','✓','Check','check']];
 return `<nav class="bottom">${items.map(([href,icon,label,key])=>`<a class="nav ${active===key?'active':''}" href="${href}"><span class="nav-icon">${icon}</span>${label}</a>`).join('')}</nav>`
}
function setupSW(){if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').then(r=>r.update()).catch(()=>{}))}
setupSW();
const CARD_COLORS=['color-red','color-yellow','color-blue','color-violet','color-mint','color-peach','color-sand'];
function colorClass(i,offset=0){return CARD_COLORS[(i+offset)%CARD_COLORS.length]}
