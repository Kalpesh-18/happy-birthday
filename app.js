const $=s=>document.querySelector(s),pick=a=>a[Math.floor(Math.random()*a.length)];
function burst(x,y,list,n=12,k=1){for(let i=0;i<n;i++){const s=document.createElement('span');s.className='sp';s.textContent=list[i%list.length];s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--dx',(Math.random()*240-120)*k+'px');s.style.setProperty('--dy',(Math.random()*-220-20)*k+'px');document.body.appendChild(s);setTimeout(()=>s.remove(),1500)}}
function rain(list,n=26){for(let i=0;i<n;i++){const s=document.createElement('span');s.className='fall';s.textContent=pick(list);s.style.left=Math.random()*100+'vw';s.style.animationDuration=2+Math.random()*3+'s';s.style.animationDelay=Math.random()*1.5+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),6500)}}
let t=0;addEventListener('pointermove',e=>{const n=Date.now();if(n-t>70){t=n;burst(e.clientX,e.clientY,['✨'],1,.25)}});
let buf='';addEventListener('keydown',e=>{buf=(buf+e.key).slice(-8).toLowerCase();if(buf.endsWith('oui')){rain(['🥖']);flashBaguette()}if(buf.endsWith('allez'))rain(['⚽','🇫🇷','⭐']);if(buf.endsWith('ippon'))document.body.animate([{transform:'rotate(0)'},{transform:'rotate(180deg)'},{transform:'rotate(360deg)'}],{duration:1000})});
let baguetteTimer;
function flashBaguette(){
let toast=$('#oui-toast');
if(!toast){toast=document.createElement('div');toast.id='oui-toast';toast.className='oui-toast';toast.setAttribute('role','status');toast.setAttribute('aria-live','polite');toast.textContent='oui oui baguette 🥖';document.body.appendChild(toast)}
clearTimeout(baguetteTimer);toast.classList.remove('show');void toast.offsetWidth;toast.classList.add('show');
baguetteTimer=setTimeout(()=>toast.classList.remove('show'),2400);
}
const current=location.pathname.split('/').pop()||'index.html';
const page=current.replace('.html','');
document.body.classList.add(`scene-${page}`);
const links=[['index.html','✉️'],['journey.html','🚂'],['play.html','🍰'],['finale.html','🎆']];
if(!document.querySelector('nav'))document.body.insertAdjacentHTML('afterbegin','<nav>'+links.map(l=>`<a href="${l[0]}" ${current==l[0]?'class="on"':''}>${l[1]}</a>`).join('')+'</nav>');
if(current==='index.html'||current==='finale.html'){
const birthdayMusic=new Audio('data/birthday.mp3');
birthdayMusic.loop=true;
birthdayMusic.volume=.3;
birthdayMusic.preload='auto';
const startBirthdayMusic=()=>{
birthdayMusic.play().then(()=>{
removeEventListener('pointerdown',startBirthdayMusic);
removeEventListener('keydown',startBirthdayMusic);
}).catch(error=>{
if(error.name!=='NotAllowedError')console.error('Birthday music could not play:',error);
});
};
addEventListener('pointerdown',startBirthdayMusic);
addEventListener('keydown',startBirthdayMusic);
startBirthdayMusic();
}

const scenes={
index:`<path d="M0 730Q180 640 380 730T770 690T1120 710T1440 675V900H0Z" fill="#53628a"/><path d="M0 790Q260 700 520 780T1040 755T1440 770V900H0Z" fill="#3d786f"/>
<circle cx="1345" cy="170" r="68" fill="#ffe8ae"/><circle cx="1372" cy="151" r="64" fill="#282b55"/>
<g class="paris-tower">
<path d="M1035 815C1085 760 1125 663 1157 584H1243C1275 663 1315 760 1365 815H1306C1270 755 1243 701 1227 644H1173C1157 701 1130 755 1094 815Z" fill="#503d59" stroke="#f0bf98" stroke-width="8" stroke-linejoin="round"/>
<path d="M1157 584L1172 373H1228L1243 584Z" fill="#503d59" stroke="#f0bf98" stroke-width="7" stroke-linejoin="round"/>
<path d="M1172 373L1182 235H1218L1228 373Z" fill="#503d59" stroke="#f0bf98" stroke-width="6" stroke-linejoin="round"/>
<path d="M1182 235L1193 135H1207L1218 235Z" fill="#503d59" stroke="#f0bf98" stroke-width="5" stroke-linejoin="round"/>
<path d="M1193 135L1198 91H1202L1207 135M1200 91V68" fill="none" stroke="#f8d5a1" stroke-width="5" stroke-linecap="round"/>
<path d="M1200 61L1209 78L1227 82L1211 92L1208 111L1200 96L1183 92L1196 81Z" fill="#ffe8ae" stroke="#fff5d7" stroke-width="3" class="tower-star"/>
<path d="M1065 815L1174 373M1335 815L1226 373M1120 729H1280M1144 650H1256M1157 584H1243M1172 373H1228M1178 300H1222M1182 235H1218M1186 190H1214" fill="none" stroke="#f4c799" stroke-width="6" stroke-linecap="round"/>
<path d="M1104 815L1156 729L1094 729L1144 650L1120 650L1157 584M1296 815L1244 729L1306 729L1256 650L1280 650L1243 584M1163 584L1200 373L1237 584M1177 373L1200 235L1223 373M1185 235L1200 135L1215 235" fill="none" stroke="#d99486" stroke-width="4" stroke-linejoin="round"/>
<path d="M1090 788Q1200 566 1310 788M1170 545Q1200 495 1230 545" fill="none" stroke="#f8d5a1" stroke-width="7"/>
<path d="M1147 596H1253V572H1147ZM1164 384H1236V361H1164ZM1175 246H1225V226H1175Z" fill="#71516a" stroke="#ffe0a2" stroke-width="6" stroke-linejoin="round"/>
<g fill="#ffe8ae" stroke="#fff5d7" stroke-width="2"><circle cx="1080" cy="790" r="6"/><circle cx="1320" cy="790" r="6"/><circle cx="1141" cy="645" r="5"/><circle cx="1259" cy="645" r="5"/><circle cx="1165" cy="380" r="5"/><circle cx="1235" cy="380" r="5"/><circle cx="1181" cy="243" r="4"/><circle cx="1219" cy="243" r="4"/></g>
</g>
<g transform="translate(155 405)"><g class="balloon"><path d="M0 0C-48-56-28-112 0-118C28-112 48-56 0 0Z" fill="#e99582" stroke="#fff0d2" stroke-width="4"/><path d="M-28-79Q0-59 28-79M-38-50Q0-32 38-50M-10 0L-8 20M10 0L8 20" fill="none" stroke="#ffe8ae" stroke-width="4"/><path d="M-18 20H18L13 48H-13Z" fill="#b87951" stroke="#ffe8ae" stroke-width="3"/></g></g>
<path d="M0 824Q360 775 720 830T1440 812V900H0Z" fill="#2e694f"/><g class="birds" fill="none" stroke="#fff0d2" stroke-width="5"><path d="M170 284q18-24 36 0q18-24 36 0"/><path d="M250 337q13-19 26 0q13-19 26 0"/></g>`,
journey:`<path d="M0 655L260 360L470 610L730 300L1010 640L1220 390L1440 645V900H0Z" fill="#38446f"/><path d="M0 725L260 470L480 685L730 420L1000 700L1220 500L1440 720V900H0Z" fill="#526c78"/><circle cx="1170" cy="200" r="65" fill="#ffd88a"/>
<path d="M0 760H1440V900H0Z" fill="#30243b"/><path d="M0 830L1440 830M0 880L1440 880" stroke="#d5a86d" stroke-width="8" stroke-dasharray="38 28"/><path d="M180 900L620 746M1260 900L820 746" fill="none" stroke="#c29a70" stroke-width="14"/>
<g class="train-art" transform="translate(180 615)"><rect x="0" y="60" width="490" height="120" rx="18" fill="#9b453c"/><path d="M490 180V35Q490 0 455 0H390V180Z" fill="#37405c"/><rect x="32" y="83" width="76" height="49" rx="8" fill="#f5d99b"/><rect x="135" y="83" width="76" height="49" rx="8" fill="#f5d99b"/><rect x="238" y="83" width="76" height="49" rx="8" fill="#f5d99b"/><path d="M390 55H460V110H390Z" fill="#f5d99b"/><path d="M-40 157H535" stroke="#e8bd75" stroke-width="17"/><circle cx="100" cy="185" r="27" fill="#292439"/><circle cx="400" cy="185" r="27" fill="#292439"/><path d="M70 35Q35 0 78-26M170 35Q135 0 178-26" fill="none" stroke="#eee0c4" stroke-width="12" opacity=".6"/></g>
<g class="waiting-friends">
<path d="M800 617Q830 592 860 617L868 694L858 754H805L794 694Z" fill="#bd7653" stroke="#e7c38e" stroke-width="4"/>
<path d="M810 744L806 775M845 744L851 775" stroke="#d5a77d" stroke-width="12" stroke-linecap="round"/><path d="M799 775H819M842 775H862" stroke="#292439" stroke-width="9" stroke-linecap="round"/>
<path d="M805 625Q797 597 820 588Q847 583 857 605L852 634L839 647H814Z" fill="#d5a77d" stroke="#292439" stroke-width="4"/>
<path d="M801 613Q797 587 821 582L848 590L859 606L843 601L832 610L816 603Z" fill="#72c6ca"/>
<circle cx="819" cy="619" r="2.5" fill="#292439"/><circle cx="840" cy="619" r="2.5" fill="#292439"/><path d="M821 632Q830 638 839 632" fill="none" stroke="#8f5054" stroke-width="3" stroke-linecap="round"/>
<g class="friend-wave wave-one"><path d="M850 637L872 619L879 588" fill="none" stroke="#d5a77d" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="M879 590L875 575M879 590L888 577M879 590L895 585" fill="none" stroke="#d5a77d" stroke-width="6" stroke-linecap="round"/></g>
<path d="M887 635Q916 611 945 635L951 699L941 754H890L880 699Z" fill="#684d91" stroke="#f0c394" stroke-width="4"/>
<path d="M898 744L894 775M931 744L935 775" stroke="#98694f" stroke-width="12" stroke-linecap="round"/><path d="M887 775H907M927 775H947" stroke="#292439" stroke-width="9" stroke-linecap="round"/>
<path d="M891 631Q884 602 907 591Q934 585 946 609L940 637L926 649H900Z" fill="#98694f" stroke="#292439" stroke-width="4"/>
<path d="M889 612Q885 591 907 585Q929 584 944 600L936 606L925 599L916 609L905 599L895 617Z" fill="#c9a0e8"/>
<circle cx="905" cy="620" r="2.5" fill="#292439"/><circle cx="927" cy="620" r="2.5" fill="#292439"/><path d="M907 634Q916 640 925 634" fill="none" stroke="#e5bd85" stroke-width="3" stroke-linecap="round"/>
<g class="friend-wave wave-two"><path d="M941 645L960 626L966 598" fill="none" stroke="#98694f" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="M966 600L962 584M966 600L975 587M966 600L982 595" fill="none" stroke="#98694f" stroke-width="6" stroke-linecap="round"/></g>
<path d="M974 617Q1004 591 1034 617L1042 694L1032 754H979L969 694Z" fill="#4b9a85" stroke="#e7c38e" stroke-width="4"/>
<path d="M985 744L981 775M1018 744L1022 775" stroke="#bd8d69" stroke-width="12" stroke-linecap="round"/><path d="M974 775H994M1014 775H1034" stroke="#292439" stroke-width="9" stroke-linecap="round"/>
<path d="M978 630Q971 602 994 591Q1021 585 1035 609L1028 637L1013 649H987Z" fill="#bd8d69" stroke="#292439" stroke-width="4"/>
<g fill="#f5d178"><circle cx="984" cy="599" r="9"/><circle cx="997" cy="591" r="10"/><circle cx="1011" cy="591" r="10"/><circle cx="1025" cy="600" r="10"/><circle cx="1031" cy="612" r="8"/></g>
<circle cx="992" cy="620" r="2.5" fill="#292439"/><circle cx="1014" cy="620" r="2.5" fill="#292439"/><path d="M994 634Q1003 640 1012 634" fill="none" stroke="#72454b" stroke-width="3" stroke-linecap="round"/>
<path d="M983 662L1005 687L1027 662" fill="none" stroke="#e8bd75" stroke-width="8"/>
<g class="friend-wave wave-three"><path d="M1029 636L1048 616L1052 586" fill="none" stroke="#bd8d69" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/><path d="M1052 588L1048 574M1052 588L1061 575M1052 588L1068 583" fill="none" stroke="#bd8d69" stroke-width="6" stroke-linecap="round"/></g>
<path d="M792 581Q902 549 1077 581" fill="none" stroke="#ffe8ae" stroke-width="3" stroke-dasharray="5 10" opacity=".8"/>
</g>`,
play:`<path d="M0 675Q360 620 720 670T1440 650V900H0Z" fill="#345f4f"/><path d="M0 745H1440M0 820H1440" stroke="#b8d795" stroke-width="4" opacity=".38"/><path d="M105 900V580H430V900M105 650H430" fill="none" stroke="#f7e6bb" stroke-width="14"/><circle cx="268" cy="738" r="90" fill="none" stroke="#f7e6bb" stroke-width="6" opacity=".7"/><circle class="balloon" cx="900" cy="704" r="42" fill="#fff3d8" stroke="#f6c945" stroke-width="8"/><path d="M875 680L925 728M925 680L875 728" stroke="#e23d3d" stroke-width="9"/><path d="M955 760Q1080 620 1225 760" fill="none" stroke="#f6c945" stroke-width="9" stroke-dasharray="15 14"/><g fill="#f6c945"><circle cx="1170" cy="300" r="5"/><circle cx="1220" cy="248" r="4"/><circle cx="1270" cy="320" r="6"/><circle cx="1340" cy="270" r="4"/></g>`,
finale:`<circle cx="1160" cy="245" r="102" fill="#efb579" opacity=".75"/><path d="M0 680L130 680V505H245V625H340V440H480V690H590V540H750V700H875V470H1010V650H1140V530H1270V680H1440V900H0Z" fill="#393654"/><path d="M0 740Q360 680 720 745T1440 715V900H0Z" fill="#4c526e"/><path d="M0 846Q360 800 720 850T1440 824V900H0Z" fill="#293653"/><g class="hero-streaks" fill="none" stroke="#ffd98a" stroke-width="5" opacity=".7"><path d="M180 330L390 250M215 380L470 290M910 380L1130 295M980 430L1240 332"/><path d="M90 250l25-38 25 38M1320 220l25-38 25 38"/></g><g fill="#fff0d2"><circle cx="185" cy="180" r="5"/><circle cx="860" cy="240" r="4"/><circle cx="1320" cy="405" r="5"/></g>`,
dossier:`<path d="M0 620H1440V900H0Z" fill="#3c2c43"/><path d="M0 685H1440M0 805H1440" stroke="#d49b64" stroke-width="18"/><g class="book-art"><path d="M105 510H255V680H105ZM270 450H410V680H270ZM425 535H590V680H425ZM630 485H780V680H630ZM810 530H980V680H810ZM1015 455H1150V680H1015ZM1185 515H1340V680H1185Z" fill="#9e514e" stroke="#e7c38e" stroke-width="8"/><path d="M180 520V675M337 462V675M498 548V675M704 498V675M886 543V675M1081 470V675M1253 528V675" stroke="#f0d4a5" stroke-width="7"/><path d="M80 805H290V890H80ZM330 805H570V890H330ZM620 805H840V890H620ZM890 805H1110V890H890ZM1160 805H1360V890H1160Z" fill="#55517b" stroke="#d49b64" stroke-width="8"/></g><g fill="#ffe7a8"><path d="M1120 250l12 28 30 2-23 19 7 29-26-16-26 16 7-29-23-19 30-2Z"/><circle cx="310" cy="270" r="7"/><circle cx="900" cy="330" r="6"/></g>`,
ghibli:`<circle cx="1160" cy="170" r="68" fill="#ffe8ae"/><path d="M0 640Q180 480 390 650T810 620T1200 600T1440 635V900H0Z" fill="#435b69"/><path d="M0 730Q360 610 720 735T1440 700V900H0Z" fill="#344e4b"/><g class="forest-trees" fill="#283c45"><path d="M80 830L145 460L210 830ZM170 830L260 330L350 830ZM1110 840L1200 345L1290 840ZM1240 850L1345 440L1440 850Z"/><path d="M0 720Q145 610 290 720T580 720T870 720T1160 720T1440 720V790H0Z" fill="#536b55"/></g><g fill="#ffe8ae" opacity=".9"><circle cx="360" cy="285" r="5"/><circle cx="490" cy="210" r="4"/><circle cx="820" cy="290" r="6"/><circle cx="980" cy="225" r="4"/><circle cx="670" cy="155" r="4"/></g>`
};
document.body.insertAdjacentHTML('afterbegin',`<div class="bg" aria-hidden="true"><svg class="scene-art" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax meet">${scenes[page]||scenes.index}</svg></div>`);
if(page==='index'||page==='ghibli'){
const colors=page==='index'?['#ffe4b8','#f8c6ba','#ffffff']:['#b1d9ae','#d6e6a7','#f0cf89'];
for(let i=0;i<12;i++){const p=document.createElement('i'),s=7+Math.random()*7;p.className='pt';p.style.cssText=`left:${Math.random()*100}vw;width:${s}px;height:${s*1.5}px;background:${pick(colors)};animation-duration:${9+Math.random()*9}s;animation-delay:${-Math.random()*14}s`;document.body.appendChild(p)}
}
document.addEventListener('click',e=>{
const anchor=e.target.closest('a[href]');
if(!anchor||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||anchor.target||anchor.hasAttribute('download'))return;
const destination=new URL(anchor.href,location.href);
if(destination.origin!==location.origin||destination.pathname===location.pathname&&destination.hash)return;
e.preventDefault();
if(matchMedia('(prefers-reduced-motion: reduce)').matches){location.assign(destination.href);return}
document.body.classList.add('page-leaving');
setTimeout(()=>location.assign(destination.href),280);
});
