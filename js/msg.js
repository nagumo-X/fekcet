/* msg.js: iMessage, chat interaktif, ganti foto/nama profil */
const lsg=k=>{try{return localStorage.getItem(k)}catch(e){}},lss=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
Object.keys(D.p).forEach(k=>{const n=lsg("pn_"+k);if(n)D.p[k].n=n});
var av=(k,s=44,o)=>{o=o||P(k);const im=o.img||(k&&lsg("pf_"+k)),z=`width:${s}px;height:${s}px`;return im?`<img class=av src="${im}" style="${z};object-fit:cover">`:`<i class=av style="${z};background:${o.c};font-size:${s*.45}px;color:#fff;font-weight:600">${o.e}</i>`};

//PARSE
const p2=n=>("0"+n).slice(-2);
D.chats.forEach(c=>{let h=12,m=0;c.msgs=[];c.src.trim().split("\n").forEach(l=>{l=l.trim();if(!l)return;const i=l.indexOf(":"),k=l.slice(0,i),v=l.slice(i+1).trim();if(k=="d"){const[a,b]=v.split("|"),t=b.split(":");h=+t[0];m=+t[1];c.day=a;c.msgs.push({d:a,tm:b});return}c.msgs.push({w:k=="m"?"me":"him",t:v,tm:p2(h)+":"+p2(m)});if(++m>59){m=0;h=(h+1)%24}})});
//ENDPARSE

let cur2;
const lm=c=>[...c.msgs].reverse().find(m=>!m.d);
const ml=()=>`<div class="app gp"><div class=nv><span onclick=bk() class=bkb>‹</span><span onclick="go(()=>winfo('me'))">${av("me",30)}</span></div><div class=bd><div class=lg>Pesan</div><div class=sr>🔍 Cari</div><div class=grp>${D.chats.map((c,i)=>{const x=lm(c);return`<div class=row onclick="go(()=>mth(${i}))">${c.u?"<i class=ub></i>":"<i style=width:10px></i>"}${av(c.k,44)}<div style=flex:1><div style=display:flex><b style=flex:1>${P(c.k).n}</b><span class=sub>${c.day=="Hari ini"?x.tm:c.day} ›</span></div><div class="sub pv">${x.w=="me"?"Kamu: ":""}${x.t}</div></div></div>`}).join("")}</div></div></div>`;
V.Pesan=ml;
const rd=c=>lm(c).w=="me"?`<div class=rd>Dibaca</div>`:"";
const bub=x=>x.d?`<div class=dy><b>${x.d}</b> ${x.tm}</div>`:`<div class="m ${x.w=="me"?"me":"o"}">${x.t}</div>`;
const mth=i=>{const c=D.chats[i],k=c.k;cur2=c;return`<div class="app gp"><div class=nv><span onclick=bk() class=bkb>‹</span><div class=nc onclick="go(()=>winfo('${k}'))">${av(k,40)}<span id=hs>${P(k).n} ›</span></div><span onclick="call('${k}')" style=font-size:18px>📞</span></div><div class=bd id=tb data-b style="padding:8px 0;background:#fff">${c.msgs.map(bub).join("")}${rd(c)}</div><div class=ib><span style="font-size:22px;color:#8e8e93">＋</span><div class=wi><input id=wi placeholder="iMessage" oninput="wtg()" onfocus="wf(${i})" onkeydown="event.key=='Enter'&&wsT(${i})"><span>🎤</span></div><span id=sd onclick="wsT(${i})">↑</span></div></div>`};
const sc2=()=>{const b=$("#tb");if(b)b.scrollTop=b.scrollHeight};
const wtg=()=>{const s=$("#sd");if(s)s.classList.toggle("rdy",!!$("#wi").value.trim())};
const wadd=(c,x)=>{c.msgs.push(x);const b=$("#tb");if(cur2==c&&b){b.querySelectorAll(".rd").forEach(e=>e.remove());b.insertAdjacentHTML("beforeend",bub(x)+rd(c));sc2()}};
const wsT=i=>{const f=$("#wi"),v=f.value.trim(),c=D.chats[i];if(!v)return;wadd(c,{w:"me",t:v,tm:hm()});f.value="";wtg();const s=(c.script||[])[c.sp||0];if(s&&s[0]=="me"&&s[1]==v){c.sp=(c.sp||0)+1;wrep(c)}};
const wrep=c=>{const s=(c.script||[])[c.sp||0];if(!s||s[0]=="me")return;const b=$("#tb");if(b&&cur2==c){b.insertAdjacentHTML("beforeend",`<div class="m o ty" id=ty><i></i><i></i><i></i></div>`);sc2()}setTimeout(()=>{const e=$("#ty");e&&e.remove();c.sp++;wadd(c,{w:"him",t:s[1],tm:hm()});wrep(c)},1000+s[1].length*45)};
const wf=i=>{const c=D.chats[i],s=(c.script||[])[c.sp||0],f=$("#wi");if(!s||s[0]!="me"||f.value||busy)return;busy=1;let n=0;const t=setInterval(()=>{if(!$("#wi")){clearInterval(t);busy=0;return}f.value=s[1].slice(0,++n);wtg();if(n>=s[1].length){clearInterval(t);busy=0}},55)};

/* ---- profil: lihat, ganti foto, ganti nama (tersimpan di browser) ---- */
const winfo=k=>`<div class="app gp"><div class=nv><span onclick=bk() class=bkb>‹</span></div><div class=bd style="text-align:center;padding-top:10px">${av(k,110)}<h2 style=margin:10px>${P(k).n}</h2><div class=sub>${P(k).a||""}</div><div class=grp style="margin:20px 16px"><div class=gi onclick="setImg('${k}')" style=color:#0a84ff;cursor:pointer>📷 Ubah foto profil</div><div class=gi onclick="setName('${k}')" style=color:#0a84ff;cursor:pointer>✏️ Ubah nama</div></div></div></div>`;
const setImg=k=>{const f=document.createElement("input");f.type="file";f.accept="image/*";f.onchange=()=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const c=document.createElement("canvas"),s=Math.min(im.width,im.height);c.width=c.height=200;c.getContext("2d").drawImage(im,(im.width-s)/2,(im.height-s)/2,s,s,0,0,200,200);lss("pf_"+k,c.toDataURL("image/jpeg",.8));R()};im.src=r.result};r.readAsDataURL(f.files[0])};f.click()};
const setName=k=>{const n=prompt("Nama",P(k).n);if(n){D.p[k].n=n;lss("pn_"+k,n);R()}};

R();
