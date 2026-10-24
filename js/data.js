/* ============ DATA: semua isi ada di sini ============ */
const D={
/* orang: n=nama, c=warna avatar, e=huruf/emoji avatar, a=status/about, img=foto profil (mis. "img/seth.jpg").
   Foto & nama juga bisa diganti langsung di aplikasi: Pesan > ketuk avatar/nama kontak > Ubah foto / Ubah nama */
p:{
 me:{n:"Podzolik",c:"#6d9a3f",e:"P",h:"@nachtkralie",ig:"podzolik"},
 seth:{n:"Seth",c:"#e0673a",e:"S",img:"img/seth.jpg"},
 ayen:{n:"Ayen",c:"#ec6aa0",e:"A",img:"img/ayen.jpg"},
 noah:{n:"Noah Bengkel",c:"#3b82f6",e:"N",img:"img/noah.jpg"},
 shu:{n:"Shu",c:"#8b5cf6",e:"S",img:"img/shu.jpg"}},
cfg:{pin:"2821",wall:"",lock:""},
/* chat: m: = Podzolik, h: = lawan bicara, d:Label|JJ:MM = pergantian hari + jam mulai (jam tiap pesan otomatis +1 menit) */
chats:[
{k:"seth",src:`
d:Hari ini|14:50
m:Se, masih ada bawang ga di warung lu?
h:ada banyak
m:Cakep, gw beli 3 siung ye bungkusin
h:yaa ok
m:tapi kupasin yak, trus iris-iris halus sklian. Oiya sama anter ke kostan gw ye
h:tai lu kata gua koki pribadi lu?
h:beli 3 siung minta dikupasin + diiris + dianterin
h:otak lu ketinggalan dmn dah?
m:Lah pembeli kan raja Se, lu layanin pelanggan tau ga lu
h:ELU YG HARUSNYA TAU
h:TAU DIRI NYET
h:mana ada raja cuma punya duit goceng beli bawang 3 biji, mikir
m:Hehe
m:Yaudah sekalian beli daging ayam dah, masih ada kaga?
h:ada nih, mau seekor atau req bagian?
m:request bagian paha yg ayamnya kaga pernah jalan-jalan dong Se, biar empuk bat gitu
h:yg kaga pernah jalan2 mah elu noh ama mika, doi dichat senin dibales klo ganteng doang
m:lah gwmah ganteng
h:bacot, udh cepet serius mau beli ga lu, pelanggan gua ga lu doang
m:jirlah gw kira gw satu-satunya, ternyata salah satunya
m:ok serius, potongin ayam sekilo bagi 8 bagian ya
h:nah gitu kek dari tadi, bentar gua siapin
m:nice, btw potongannya harus presisi simetris sama ukuran trus masing-masing beratnya 125g ya Seth biar adil, persen errornya 10% gpp dah
h:monyet
h:lu beli ayam apa lagi praktikum jing??
h:nih gua bonusin parang biar lu potong sndri sambil diukur pake jangka sorong
m:WKWKW BERCANDA BANG. yaudah ntar jam 5an gw ambil sendiri ke lapak lu
h:dah ga usah kesini, keburu emosi gua jgn ampe muka lu gua lemparin kangkung
m:GWMINTAMAAF`},
{k:"noah",src:`
d:Kemarin|13:40
h:Zol, ini sebelumnya lu servis di mana?
m:lah ngapa bang, ada yg salah kh
h:Anjir, ini siapa yang ngoprek goblok banget.
h:Oli mesin hitam pekat kayak kopi kapal karam.
h:Baut tap oli slek, packing blok rembes.
h:Kabel busi lu longgar, anjir.
m:oh hell nawh pdhl gw udah liat tutor yutub yg viewsnya jutaan bang
h:LU NGERJAIN SENDIRI?
m:hehe iya sekalian belajar
h:BELAJAR APA, ZOL?
h:Ini motor atau bahan praktikum?
h:Langsam aja ngga napak, karbu banjir, busi hitam legam.
m:tapi kmrn masih bisa nyala ege bg
h:Ya, kalau sekarang motor lu tinggal nama doang.
h:Sebentar gua cek bawah.
h:LAH CVT LU JUGA KENAPA ANJIR.
m:ngapa lagi bang
h:Roller peyang, rumah roller lu oblak, v-belt udah retak-retak. Lu apain aja, sih, ni motor?
m:kemaren gua bongkar bang mau bersihin debu
h:Debu apa yang lu bersihkan sampai rollernya peyang, Zol?
m:gua amplas dikit bang biar alus, kata tutornya gitu
h:ROLLER LU AMPLAS?
h:LINK TUTORNYA MANA SINI BIAR GUA REPORT RAME-RAME
m:WKWKW MAAF BG JGN MARAH2 DLU
h:Intinya gini, Podzolik. Gua belum tau lu mau servis motor atau mau restorasi dosa masa lalu.
m:duh, jadinya abis brp bang kira-kira?
h:Gua hitung dulu.
h:Oli, busi, packing, beresin karbu, CVT bongkar ulang, cek kompresi, benerin kabel, rem sama komstir dicek lagi.
m:waduh 200k dapet kaga ye bang
h:Ambil.
m:serius bang?
h:Lu ambil wudhu, sholat taubat, minta maaf sama motor lu.
h:Gua kasih tau, ya, Zol. Motor ini bukan rusak karena umur, dia rusak karena lu punya akses internet.
m:PDHL TUTORNYA 3JT VIEWS BANG`},
{k:"shu",src:`
d:Senin|19:12
m:Shu, meja pojok kosong ga?
h:kosong yol, biasa?
m:nice, kopsus black aren satu ya, sama air putih sekalian
h:siap yol, ngelaprak lagi?
m:iyalah wkwk laprak kaga bisa ngerjain dirinya sendiri
h:WKWKW YAELAH YOL
h:udah gua siapin meja sama terminal listriknya sekalian ya
d:Rabu|20:47
m:Shu gua otw, kopi biasa siapin ye
h:okay yol, meja pojoknya juga?
m:yoi shu, tuh meja gw booking ampe gw lulus ye, ampe ada yg duduk pas gw dateng, usir
h:kurang ajar lu
h:btw, laptop lu gaming ya?
m:iya shu, kenapa tuh
h:pantesan tagihan listrik cafe gua bengkak tiap lu dateng
h:lu sembari ngegame apa gimana sih?
m:gua cuma buka autocad doang shu
h:AUTOCAD DOANG KATANYA
h:kipas laptop lu suaranya udh ngalahin exhaust dapur
m:hehe, namanya juga laptop gaming
h:yaudah gapapa, yg penting jgn sampe listrik cafe gua jepret aja
d:Sabtu|16:29
h:oi yol ke mana aja lu, kok udah ga dateng lg
h:biasanya nongol mulu bawa laptop gaming brebet, charger segede batu bata, sama laprak segunung
h:ini meja pojok jarang ada yg ngisi yol, tagihan listrik gua jg mulai waras
m:cie nyariin, kangen gua ya lu?
h:dih, bersyukur malah gua, jd ga boros token
h:bercanda yaak, tapi lu aman kan?
m:WKWK aman guaa, lg ngirit aja, abis dipalak tukang bengkel gw jir
m:3 hari ini ngopi golda indomaret 3 rebuan cukup lah
h:LAH IBA BGT GUA LIATNYA
h:kenapa sama bengkel?
m:motor gua servis shu, mekaniknya ngitung biaya kek lg nyicil aerox
h:HAHAHA PANTES NGILANG
h:kirain udah wisuda
m:aamiin ya Allah klo bsk gw wisuda gw isiin token listrik cafe lu setaun`},
{k:"ayen",src:`
d:Senin, 12 Oktober|10:05
m:yen, bungkusin ayam geprek dada sambel bawang, balik kelas gw ambil
h:ok lik, pesen minum ngga sekalian?
m:es jeruk dah, tapi jgn yg asem bgt ye, hidup gw dah asem jir
h:DIH WKWKW yaudah bntr lagi aku bungkusin, resto lagi rame nih
d:Kamis, 15 Oktober|12:30
m:ayen, geprek dada 2 potong ya, nasinya seporsi aja
h:hmz km ga bosen2 kah geprek terus...
m:yaelah namanya jg anak kost, bahkan klo diitung-itung, 1 silsilah keluarga ayam udah ada nih dalem perut gua
h:AOWKAOWK BENER JUGA, kalo bapak ayamnya nyariin anaknya, bilang aja udah pindah lapak ke usus kamu
m:parah luu, dah buruan bikin
d:Minggu, 18 Okt|18:10
m:yen masih buka?
h:buka dong, biasa?
m:hmm geprek tapi gapake sambel bisa ga, lagi agak radang nih
h:orang mah klo radang belinya bubur, sop, yg anget-anget
m:pengennya gitu tapi lu kan kaga jual
h:lah kata siapa ak ga jual, semuanya mah ada di sini
m:josjis seller gacor, jual tanda tangan asisten buat laprak kaga?
h:itu usaha sendiri yah, podzolik tiduurr besok ngemis acc lagi
m:sial wkwk yaudah pesen sop ayam aja, pake nasi
h:okaayy meluncur`}],
/* chat interaktif (opsional): c.script=[["me","teks"],["him","balasan"]] -> ketuk kolom pesan = animasi ngetik, lalu tekan kirim */
calls:{},rc:[],
/* aplikasi lain: dikosongkan dulu, isi nanti */
ph:[],posts:[],tw:[],bio:"",ev:[],wx:["Kota","--°","—"],music:[],
apps:[["Telepon","📞","#34c759"],["Pesan","💬","#34c759"],["Instagram","📷","#e1306c"],["X","𝕏","#000"],["Foto","🌼","#fff"],["Mail","✉️","#1e90ff"],["Kalender","📅","#fff"],["Jam","🕐","#111"],["Catatan","📝","#facc15"],["Cuaca","⛅","#3b8de0"],["Pengaturan","⚙️","#8e8e93"],["Peta","🗺️","#4ade80"],["Musik","🎵","#fb2c55"],["Safari","🧭","#fff"]],
g:{Mail:[],Kalender:[],Jam:[],Catatan:[],Cuaca:[],Pengaturan:[],Peta:[],Musik:[],Safari:[]}
};
