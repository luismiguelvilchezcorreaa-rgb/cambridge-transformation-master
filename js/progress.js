const KEY='ctm-progress-v1';
const defaults={xp:0,streak:0,total:0,correct:0,studySeconds:0,answered:{},categories:{},theme:'light',sound:true,lastStudy:null};
export function loadProgress(){try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return {...defaults}}}
export function saveProgress(state){localStorage.setItem(KEY,JSON.stringify(state))}
export function recordAnswer(state,question,isCorrect,seconds){state.total++;state.correct+=isCorrect?1:0;state.xp+=isCorrect?10:2;state.studySeconds+=seconds;state.answered[question.id]=(state.answered[question.id]||0)+1;const c=state.categories[question.category]||{total:0,correct:0};c.total++;c.correct+=isCorrect?1:0;state.categories[question.category]=c;updateStreak(state);saveProgress(state)}
function updateStreak(state){const today=new Date().toISOString().slice(0,10);if(state.lastStudy===today)return;const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);state.streak=state.lastStudy===yesterday?state.streak+1:1;state.lastStudy=today}
export function resetAll(){localStorage.removeItem(KEY);return {...defaults}}
export function accuracy(state){return state.total?Math.round(state.correct/state.total*100):0}
export function level(state){return Math.floor(state.xp/500)+1}
