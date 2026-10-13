export const KEY='arise.v1';
export const attributes=['Strength','Knowledge','Wisdom','Vitality','Discipline','Focus','Social'];
export const starter=[
{id:'workout',title:'Move your body',detail:'Complete a workout at your own pace',category:'Strength',xp:60},
{id:'read',title:'Explore a new chapter',detail:'Read for 20 minutes',category:'Knowledge',xp:40},
{id:'meditate',title:'Find your stillness',detail:'Meditate for 10 minutes',category:'Wisdom',xp:40},
{id:'meals',title:'Fuel the journey',detail:'Enjoy balanced meals',category:'Vitality',xp:30},
{id:'water',title:'Stay hydrated',detail:'Meet your personal water goal',category:'Vitality',xp:25},
{id:'study',title:'Sharpen your mind',detail:'Study for 45 minutes',category:'Focus',xp:60},
{id:'sport',title:'Join the game',detail:'Play a physical sport',category:'Social',xp:50},
{id:'sleep',title:'Rest is a skill',detail:'Follow your personal sleep goal',category:'Vitality',xp:35},
{id:'scroll',title:'Reclaim your attention',detail:'Stay within your social media limit',category:'Discipline',xp:35}];
export function localDate(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
export const level=xp=>1+Math.floor(xp/200);
export const rank=xp=>['E','D','C','B','A','S'][Math.min(5,Math.floor((level(xp)-1)/5))];
export function fresh(hunter){return {version:1,hunter,xp:0,energy:0,stats:Object.fromEntries(attributes.map(a=>[a,10])),custom:[],completions:[],logs:[],bossHp:300,victories:0,history:[],levelHistory:[],restDays:[]}}
export function award(s,xp,label,date=localDate()){const next={...s,xp:s.xp+xp,history:[...s.history,{id:crypto.randomUUID(),date,xp,label}]};for(let l=level(s.xp)+1;l<=level(next.xp);l++)next.levelHistory=[...next.levelHistory,{level:l,date}];return next}
export function complete(s,id,date=localDate()){const q=[...starter,...s.custom].find(q=>q.id===id);if(!q||s.completions.some(c=>c.id===id&&c.date===date))return s;return award({...s,energy:s.energy+1,stats:{...s.stats,[q.category]:s.stats[q.category]+2},completions:[...s.completions,{id,date,category:q.category}]},q.xp,q.title,date)}
export const damage=s=>25+Math.floor(s.stats.Strength/2)+level(s.xp)*2;
export function attack(s,date=localDate()){if(s.energy<1||s.bossHp<=0)return s;const next={...s,energy:s.energy-1,bossHp:Math.max(0,s.bossHp-damage(s))};return next.bossHp===0?award({...next,victories:next.victories+1},150,'Defeated the Hollow Sentinel',date):next}
export const badges=[{id:'first',name:'First light',detail:'Complete your first quest',test:s=>s.completions.length>=1},{id:'five',name:'Finding rhythm',detail:'Complete 5 quests',test:s=>s.completions.length>=5},{id:'level',name:'Awakened',detail:'Reach level 2',test:s=>level(s.xp)>=2},{id:'boss',name:'Gatebreaker',detail:'Defeat the Sentinel',test:s=>s.victories>=1},{id:'read',name:'Curious mind',detail:'Complete 3 reading quests',test:s=>s.completions.filter(c=>c.id==='read').length>=3},{id:'rest',name:'Room to breathe',detail:'Plan a recovery day',test:s=>s.restDays.length>=1}];
export function valid(s){return s?.version===1&&typeof s.hunter?.name==='string'&&Number.isFinite(s.xp)&&s.xp>=0&&Number.isFinite(s.energy)&&s.energy>=0&&Number.isFinite(s.bossHp)&&s.bossHp>=0&&s.bossHp<=300&&Number.isFinite(s.victories)&&attributes.every(a=>Number.isFinite(s.stats?.[a]))&&['custom','completions','logs','history','levelHistory','restDays'].every(k=>Array.isArray(s[k]))}
