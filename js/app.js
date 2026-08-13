import {loadQuestions,grammarTopics} from './questions.js';
import {unit1Questions,boosterSections} from './booster.js';
import {unit2Questions,unit2Sections} from './booster-unit2.js';
import {unit3Questions,unit3Sections} from './booster-unit3.js';
import {unit4Questions,unit4Sections} from './booster-unit4.js';
import {unit5Questions,unit5Sections} from './booster-unit5.js';
import {unit6Questions,unit6Sections} from './booster-unit6.js';
import {unit7Questions,unit7Sections} from './booster-unit7.js';
import {unit8Questions,unit8Sections} from './booster-unit8.js';
import {unit9Questions,unit9Sections} from './booster-unit9.js';
import {unit10Questions,unit10Sections} from './booster-unit10.js';
import {unit11Questions,unit11Sections} from './booster-unit11.js';
import {unit12Questions,unit12Sections} from './booster-unit12.js';
import {spanishGloss} from './translations.js';
import {loadProgress,saveProgress,recordAnswer,resetAll} from './progress.js';
import {renderDashboard,renderStatistics} from './statistics.js';

let questions=[],allQuestions=[],sessionQuestions=[],state=loadProgress(),currentIndex=0,currentSelection=[],selectedChoice='',questionStarted=Date.now(),answered=false;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

async function init(){applyPreferences();bindNavigation();bindPractice();try{questions=await loadQuestions();allQuestions=[...questions,...unit1Questions,...unit2Questions,...unit3Questions,...unit4Questions,...unit5Questions,...unit6Questions,...unit7Questions,...unit8Questions,...unit9Questions,...unit10Questions,...unit11Questions,...unit12Questions];sessionQuestions=[...allQuestions];populateFilters();renderLibrary();renderBooster();renderDashboard(state,allQuestions.length);showView(location.hash.slice(1)||'dashboard');window.addEventListener('hashchange',()=>showView(location.hash.slice(1)||'dashboard'))}catch(error){document.querySelector('.main').innerHTML=`<section class="empty-view active"><h2>Question bank unavailable</h2><p>${error.message}. Make sure the data folder is published.</p></section>`}}
function bindNavigation(){$$('.nav-item').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.view)));$$('[data-action]').forEach(b=>b.addEventListener('click',()=>{const a=b.dataset.action;navigate(a==='continue'?'practice':a)}));$('#menuButton').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));$('#themeToggle').addEventListener('click',toggleTheme);$('#soundToggle').addEventListener('click',toggleSound);$('#exitPractice').addEventListener('click',()=>navigate('dashboard'));$('#resetProgress').addEventListener('click',()=>{if(confirm('Reset all locally saved progress?')){state=resetAll();renderDashboard(state,questions.length);renderStatistics(state);toast('Progress reset')}})}
function navigate(view){location.hash=view;showView(view)}
function showView(view){const valid=['dashboard','practice','booster','mock','statistics','library'].includes(view)?view:'dashboard';$$('.view').forEach(v=>v.classList.toggle('active',v.id===`${valid}View`));$$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===valid));$('#pageTitle').textContent={dashboard:'Dashboard',practice:'Practice Session',booster:'C2 Booster',mock:'Mock Exam',statistics:'Statistics',library:'Grammar Library'}[valid];$('#sidebar').classList.remove('open');if(valid==='practice')renderQuestion();if(valid==='statistics')renderStatistics(state);if(valid==='dashboard')renderDashboard(state,allQuestions.length)}
function bindPractice(){$('#checkAnswer').addEventListener('click',checkAnswer);$('#nextQuestion').addEventListener('click',()=>{currentIndex=(currentIndex+1)%sessionQuestions.length;renderQuestion()});$('#resetQuestion').addEventListener('click',()=>{currentSelection=[];selectedChoice='';renderInteraction(sessionQuestions[currentIndex])});$('#applyFilters').addEventListener('click',applyFilters)}
function populateFilters(){const categories=[...new Set(allQuestions.map(q=>q.category))].sort();$('#categoryFilter').innerHTML='<option value="ALL">All categories</option>'+categories.map(c=>`<option>${c}</option>`).join('')}
function applyFilters(){const exam=$('#examFilter').value,category=$('#categoryFilter').value,mode=$('#modeFilter').value;sessionQuestions=allQuestions.filter(q=>(exam==='ALL'||q.exam===exam)&&(category==='ALL'||q.category===category)&&(mode==='ALL'||q.mode===mode));if(!sessionQuestions.length){toast('No exercises match these filters');return}currentIndex=0;renderQuestion();toast(`${sessionQuestions.length} exercises loaded`)}
function instructionFor(q){
  if(q.mode==='build')return 'Build a sentence with the same meaning using the key word.';
  if(q.category==='Prepositions')return 'Choose the correct preposition.';
  if(q.category==='Phrasal Verbs')return 'Choose the correct phrasal verb to complete the sentence.';
  if(q.category==='Collocations')return 'Choose the word or expression that forms the correct collocation.';
  if(q.category==='Idioms'||q.category==='Fixed Expressions')return 'Choose the expression that best completes the sentence.';
  if(q.category==='Word Formation')return 'Choose the correct form of the word in capitals.';
  if(q.category==='Multiple-choice Cloze')return 'Choose the option that best fits the gap.';
  if(q.category==='Open Cloze')return 'Choose the word that best fits the gap.';
  if(q.track==='Vocabulary')return 'Choose the word or expression that best completes the sentence.';
  return 'Choose the option that best completes the sentence.';
}
function renderQuestion(){const q=sessionQuestions[currentIndex];answered=false;currentSelection=[];selectedChoice='';questionStarted=Date.now();$('#questionCounter').textContent=`Question ${currentIndex+1} of ${sessionQuestions.length}`;$('#practiceProgress').style.width=`${(currentIndex+1)/sessionQuestions.length*100}%`;$('#examBadge').textContent=q.exam;$('#cefrBadge').textContent=q.cefr;$('#modeBadge').textContent=q.mode==='build'?'BUILD THE SENTENCE':'MULTIPLE CHOICE';$('#instruction').textContent=instructionFor(q);$('#sourceSentence').textContent=q.source;$('#keyword').textContent=q.keyword||'';$('#keywordLine').hidden=!q.keyword;$('#feedback').hidden=true;$('#nextQuestion').hidden=true;$('#checkAnswer').hidden=false;renderInteraction(q)}
function orderedChoices(q){if(!q.choices.includes(q.answer))return q.choices;let seed=2166136261;for(const ch of q.id){seed^=ch.charCodeAt(0);seed=Math.imul(seed,16777619)}seed>>>=0;const distractors=q.choices.filter(choice=>choice!==q.answer),rotation=seed%distractors.length,rotated=[...distractors.slice(rotation),...distractors.slice(0,rotation)],target=seed%q.choices.length;rotated.splice(target,0,q.answer);return rotated}
function renderInteraction(q){const area=$('#interactionArea');if(q.mode==='build'){area.innerHTML='<div class="answer-zone" id="answerZone"></div><div class="word-bank" id="wordBank"></div>';q.tokens.forEach((word,i)=>{const b=document.createElement('button');b.className=`word-card ${currentSelection.includes(i)?'used':''}`;b.textContent=word;b.onclick=()=>{currentSelection.push(i);renderInteraction(q)};$('#wordBank').append(b)});currentSelection.forEach((i,pos)=>{const b=document.createElement('button');b.className='word-card';b.textContent=q.tokens[i];b.onclick=()=>{currentSelection.splice(pos,1);renderInteraction(q)};$('#answerZone').append(b)})}else{area.innerHTML='<div class="choice-list" id="choiceList"></div>';orderedChoices(q).forEach(choice=>{const b=document.createElement('button'),gloss=q.track==='Vocabulary'?(q.glosses?.[choice]||spanishGloss(choice)):'';b.className=`choice-card ${gloss?'has-translation':''} ${selectedChoice===choice?'selected':''}`;if(gloss){const en=document.createElement('span'),es=document.createElement('span');en.className='choice-english';en.textContent=choice;es.className='choice-translation';const tag=document.createElement('small');tag.textContent='ES';es.append(tag,document.createTextNode(gloss));b.append(en,es)}else b.textContent=choice;b.onclick=()=>{selectedChoice=choice;renderInteraction(q)};$('#choiceList').append(b)})}}
function checkAnswer(){if(answered)return;const q=sessionQuestions[currentIndex];const response=q.mode==='build'?currentSelection.map(i=>q.tokens[i]).join(' '):selectedChoice;if(!response){toast('Choose an answer first');return}const normalize=s=>s.toLowerCase().replace(/[.,’']/g,'').replace(/\s+/g,' ').trim();const correct=normalize(response)===normalize(q.answer);answered=true;recordAnswer(state,q,correct,Math.max(1,Math.round((Date.now()-questionStarted)/1000)));const fb=$('#feedback');fb.hidden=false;fb.className=`feedback ${correct?'correct':'incorrect'}`;fb.innerHTML=`<strong>${correct?'✓ Correct!':'✕ Not quite'}</strong><span><b>Answer:</b> ${q.answer}</span><span><b>Rule:</b> ${q.rule}. ${q.explanation}</span><span><b>Common error:</b> ${q.commonError}</span>`;$('#checkAnswer').hidden=true;$('#nextQuestion').hidden=false;renderDashboard(state,allQuestions.length);playTone(correct)}
function renderLibrary(){$('#libraryGrid').innerHTML=grammarTopics.map(([title,text,level])=>`<article class="library-card"><span>${level}</span><h3>${title}</h3><p>${text}</p><button class="text-button" data-topic="${title}">Practise topic →</button></article>`).join('');$$('[data-topic]').forEach(b=>b.onclick=()=>{sessionQuestions=questions.filter(q=>q.category===b.dataset.topic);currentIndex=0;navigate('practice')})}
function renderBooster(){
  $('#boosterTracks').innerHTML=boosterSections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks2').innerHTML=unit2Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster2-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks3').innerHTML=unit3Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster3-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks4').innerHTML=unit4Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster4-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks5').innerHTML=unit5Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster5-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks6').innerHTML=unit6Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster6-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks7').innerHTML=unit7Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster7-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks8').innerHTML=unit8Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster8-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks9').innerHTML=unit9Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster9-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks10').innerHTML=unit10Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster10-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks11').innerHTML=unit11Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster11-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $('#boosterTracks12').innerHTML=unit12Sections.map(section=>`<article class="booster-track"><span>${section.count} ITEMS</span><h3>${section.track}</h3><p>${section.description}</p><button class="button primary" data-booster12-track="${section.track}">Practise ${section.track}</button></article>`).join('');
  $$('[data-booster-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.boosterTrack,'01'));
  $$('[data-booster2-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster2Track,'02'));
  $$('[data-booster3-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster3Track,'03'));
  $$('[data-booster4-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster4Track,'04'));
  $$('[data-booster5-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster5Track,'05'));
  $$('[data-booster6-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster6Track,'06'));
  $$('[data-booster7-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster7Track,'07'));
  $$('[data-booster8-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster8Track,'08'));
  $$('[data-booster9-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster9Track,'09'));
  $$('[data-booster10-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster10Track,'10'));
  $$('[data-booster11-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster11Track,'11'));
  $$('[data-booster12-track]').forEach(button=>button.onclick=()=>startBooster(button.dataset.booster12Track,'12'));
  $('#startFullUnit').onclick=()=>startBooster('ALL','01');
  $('#startFullUnit2').onclick=()=>startBooster('ALL','02');
  $('#startFullUnit3').onclick=()=>startBooster('ALL','03');
  $('#startFullUnit4').onclick=()=>startBooster('ALL','04');
  $('#startFullUnit5').onclick=()=>startBooster('ALL','05');
  $('#startFullUnit6').onclick=()=>startBooster('ALL','06');
  $('#startFullUnit7').onclick=()=>startBooster('ALL','07');
  $('#startFullUnit8').onclick=()=>startBooster('ALL','08');
  $('#startFullUnit9').onclick=()=>startBooster('ALL','09');
  $('#startFullUnit10').onclick=()=>startBooster('ALL','10');
  $('#startFullUnit11').onclick=()=>startBooster('ALL','11');
  $('#startFullUnit12').onclick=()=>startBooster('ALL','12');
}
function startBooster(track,unit='01'){const bank={'01':unit1Questions,'02':unit2Questions,'03':unit3Questions,'04':unit4Questions,'05':unit5Questions,'06':unit6Questions,'07':unit7Questions,'08':unit8Questions,'09':unit9Questions,'10':unit10Questions,'11':unit11Questions,'12':unit12Questions}[unit]||unit1Questions;sessionQuestions=track==='ALL'?[...bank]:bank.filter(q=>q.track===track);currentIndex=0;navigate('practice');toast(`${sessionQuestions.length} Unit ${unit} exercises loaded`)}
function toggleTheme(){state.theme=state.theme==='dark'?'light':'dark';applyPreferences();saveProgress(state)}function toggleSound(){state.sound=!state.sound;applyPreferences();saveProgress(state)}function applyPreferences(){document.documentElement.dataset.theme=state.theme;$('#themeToggle').innerHTML=`${state.theme==='dark'?'☀':'☾'} <span>${state.theme==='dark'?'Light':'Dark'} mode</span>`;$('#soundToggle').innerHTML=`${state.sound?'♫':'⊘'} <span>Sound ${state.sound?'on':'off'}</span>`}function playTone(correct){if(!state.sound)return;try{const c=new AudioContext(),o=c.createOscillator(),g=c.createGain();o.connect(g);g.connect(c.destination);o.frequency.value=correct?620:180;g.gain.setValueAtTime(.05,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+.18);o.start();o.stop(c.currentTime+.18)}catch{}}function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}
init();
