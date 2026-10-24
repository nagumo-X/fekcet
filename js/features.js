/* features.js: kunci layar, iMessage interaktif, telepon berdialog, Spotify, tampilan iOS */
const cf=D.cfg;
let cur,busy=0,buf=0,cl=[],pin="",kp=0,au=new Audio(),ti=-1,pl=0,sim=0,simT;
const hm=()=>new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"}).replace(".",":");

/* ---- foto profil + wallpaper ---- */
var av=(k,s=44,o)=>{o=o||P(k);const z=`width:${s}px;height:${s}px`;return o.img?`<img class=av src="${o.img}" style="${z};object-fit:cover">`:`<i class=av style="${z};background:${o.c};font-size:${s*.5}px">${o.e}</i>`};
var gc=c=>c.g?{n:c.g,c:c.c,e:c.e,img:c.img}:P(c.k);
if(cf.wall)$("#ph").style.background=`url(${cf.wall}) center/cover`;

/* ---- layar kunci + PIN ---- */
const lk=document.createElement("div");lk.id="lock";$("#ph").append(lk);
if(cf.lock)lk.style.background=`url(${cf.lock}) center/cover`;
const lockR=()=>{const d=new Date();lk.innerHTML=`<div class=lt>${d.toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long"})}</div><div class=lc>${hm()}</div>`+(kp?`<div class=ps>Masukkan Kode Sandi</div><div class=dots>${[0,1,2,3].map(i=>`<i class="${i<pin.length?"f":""}"></i>`).join("")}</div><div class=kp>${[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map(n=>`<b onclick="kd('${n}')" class="${n===""?"x":""}">${n}</b>`).join("")}</div>`:`<div class=sw onclick="kp=1;lockR()">Ketuk untuk membuka</div>`)};
const kd=n=>{if(n==="")return;pin=n=="⌫"?pin.slice(0,-1):pin+n;lockR();if(pin.length<4)return;if(pin===cf.pin){lk.classList.add("off");setTimeout(()=>lk.remove(),450)}else{lk.querySelector(".dots").classList.add("sk");setTimeout(()=>{pin="";lockR()},450)}};
lockR();

/* ---- Telepon: percakapan berjalan di layar panggilan ---- */
var goHome=()=>{st=[];clearTimeout(ct);clearInterval(ci);cl.forEach(clearTimeout);cl=[];R()};
var endc=()=>{clearTimeout(ct);clearInterval(ci);cl.forEach(clearTimeout);cl=[];bk()};
var call=k=>{clearTimeout(ct);clearInterval(ci);cl.forEach(clearTimeout);cl=[];go(()=>`<div class=app style="background:linear-gradient(#2b2d3a,#0c0c10);color:#fff;align-items:center;padding-top:80px;text-align:center">${av(k,96)}<h2 style=margin-top:12px>${P(k).n}</h2><div id=cs style=opacity:.7>Memanggil…</div><div id=tr class=tr></div><div class=cb><div>🔇<small>bisukan</small></div><div>⌨️<small>keypad</small></div><div>🔊<small>speaker</small></div></div><div class=end style=margin-bottom:40px onclick=endc()>📵</div></div>`);
ct=setTimeout(()=>{let s=0;$("#cs").textContent="00:00";ci=setInterval(()=>{const e=$("#cs");if(!e)return clearInterval(ci);s++;e.textContent="0"+(s/60|0)+":"+("0"+s%60).slice(-2)},1e3);let t=1000;(D.calls[k]||[]).forEach(l=>{cl.push(setTimeout(()=>{const e=$("#tr");if(e){e.insertAdjacentHTML("beforeend",`<div class="${l[0]=="me"?"tm":"tt"}">${l[1]}</div>`);e.scrollTop=e.scrollHeight}},t));t+=1700+l[1].length*45});D.calls[k]&&cl.push(setTimeout(()=>{const e=$("#cs");if(e){e.textContent="Panggilan berakhir";setTimeout(()=>$("#cs")&&endc(),1200)}},t+800))},2500)};

/* ---- Aplikasi list bergaya iOS (Mail, Catatan, Kalender, dll) ---- */
var gen=n=>`<div class="app gp"><div class=nv><span onclick=bk() class=bkb>‹</span></div><div class=bd><div class=lg>${n}</div><div class=grp>${(D.g[n].length?D.g[n]:[["Belum ada isi",""]]).map(r=>`<div class=gi>${n=="Mail"?"<i class=ub></i>":""}<div style=flex:1><b>${r[0]}</b><div class=sub style=white-space:normal>${r[1]}</div></div>${n=="Pengaturan"?"<span class=sub>›</span>":""}</div>`).join("")}</div></div></div>`;

/* ---- Spotify ---- */
D.apps.find(a=>a[0]=="Musik")[0]="Spotify";
IC.Spotify=S("#000",`<circle cx=30 cy=30 r=22 fill=#1ed760 /><path d="M18 25c9-3 19-2 25 2M19 32c8-2 15-2 22 2M20 39c6-2 12-1 18 2" stroke=#000 stroke-width=3 fill=none stroke-linecap=round />`);
V.Spotify=()=>spf();
const tm=s=>(s/60|0)+":"+("0"+(s|0)%60).slice(-2);
const cv=(t,s)=>`<div style="width:${s=="100%"?"100%":s+"px"};aspect-ratio:1;flex:none;border-radius:6px;background:${t.img?`url(${t.img}) center/cover`:`linear-gradient(135deg,${t.g[0]},${t.g[1]})`};display:grid;place-items:center;font-size:${s=="100%"?80:20}px">${t.img?"":"🎵"}</div>`;
const spf=()=>{const t=D.music[ti];return`<div class="app spf"><div class=bd><div class=spt><span onclick=bk() class=bkb style=color:#fff>‹</span><b>Selamat sore</b></div><div class=sg>${D.music.map((x,i)=>`<div onclick="pt(${i})">${cv(x,48)}<span>${x.t}</span></div>`).join("")}</div><div class=sh>Dibuat untuk Podzolik</div>${D.music.map((x,i)=>`<div class=sr2 onclick="pt(${i})">${cv(x,56)}<div><b class="${i==ti?"gn":""}">${x.t}</b><div class=sub>${x.a}</div></div></div>`).join("")}<div style=height:90px></div></div>${t?`<div class=mp style=display:flex onclick="go(()=>big())">${cv(t,40)}<div style=flex:1><b>${t.t}</b><div class=sub>${t.a}</div><div class=pb style="margin:4px 0 0;height:2px"><i id=mf></i></div></div><span onclick="event.stopPropagation();tg()" style=font-size:22px>${pl?"⏸":"▶"}</span></div>`:""}</div>`};
const big=()=>{const t=D.music[ti];return`<div class="app spf" style="padding:56px 24px 30px;overflow-y:auto"><span onclick=bk() class=bkb style=color:#fff>⌄</span>${cv(t,"100%")}<h2 style=margin-top:16px>${t.t}</h2><div class=sub>${t.a}</div><div class=pb onclick=seek(event)><i id=pf></i></div><div class=sub style=display:flex;justify-content:space-between><span id=ce>0:00</span><span id=du>0:00</span></div><div class=ct><span onclick="pt((ti+D.music.length-1)%D.music.length)">⏮</span><span class=pp onclick=tg()>${pl?"⏸":"▶"}</span><span onclick="pt((ti+1)%D.music.length)">⏭</span></div>${t.sp?`<iframe src="https://open.spotify.com/embed/track/${t.sp}" width=100% height=80 allow=encrypted-media style="border:0;border-radius:12px"></iframe>`:""}</div>`};
const upd=()=>{const t=D.music[ti];if(!t)return;const c=t.src?au.currentTime:sim,d=t.src?(au.duration||0):(t.d||180),f=d?c/d*100:0;["pf","mf"].forEach(i=>{const e=$("#"+i);if(e)e.style.width=f+"%"});const a=$("#ce"),b=$("#du");if(a)a.textContent=tm(c);if(b)b.textContent=tm(d)};
const pt=i=>{ti=i;const t=D.music[i];au.pause();clearInterval(simT);pl=1;sim=0;if(t.src){au.src=t.src;au.play().catch(()=>0)}else simT=setInterval(()=>{if(pl&&++sim>=(t.d||180))pt((ti+1)%D.music.length);upd()},1e3);R();upd()};
const tg=()=>{const t=D.music[ti];pl=!pl;if(t.src)pl?au.play():au.pause();R();upd()};
const seek=e=>{const r=e.currentTarget.getBoundingClientRect(),f=(e.clientX-r.left)/r.width,t=D.music[ti];if(t.src)au.currentTime=f*au.duration;else sim=f*(t.d||180);upd()};
au.ontimeupdate=upd;au.onended=()=>pt((ti+1)%D.music.length);

