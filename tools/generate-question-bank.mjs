import {writeFileSync} from 'node:fs';

const context={
  person:['Maya','Daniel','Sofia','Leo','Nina','Omar','Chloe','Ethan','Priya','Lucas'],
  thing:['the research paper','the funding proposal','the final report','the safety review','the training course','the policy document','the design brief','the case study','the conference plan','the budget forecast'],
  place:['the city library','the science museum','the regional office','the university campus','the research centre','the community hall','the main laboratory','the local archive','the training centre','the council building'],
  topic:['renewable energy','digital privacy','urban development','public health','language learning','climate policy','artificial intelligence','remote work','scientific literacy','cultural heritage'],
  event:['the workshop','the ceremony','the interview','the presentation','the inspection','the conference','the consultation','the debate','the exhibition','the assessment']
};
const patterns={
  CAE:[
    ['Comparatives','{thing} is much clearer than the earlier version.','NEARLY','The earlier version is not nearly as clear as {thing}','not nearly as + adjective + as','This pattern emphasizes a substantial difference.'],
    ['Passive Voice','People expect {person} to complete {thing} this week.','EXPECTED','{person} is expected to complete {thing} this week','subject + is expected + to-infinitive','A personal passive places the reported subject first.'],
    ['Reported Speech','“I am sorry I forgot {event},” {person} said.','APOLOGISED','{person} apologised for forgetting {event}','apologise for + gerund','After “apologise for”, use an -ing form.'],
    ['Inversion','{person} had never visited {place} before.','NEVER','Never before had {person} visited {place}','Never before + auxiliary + subject','A fronted negative adverbial triggers inversion.'],
    ['Conditionals','{person} did not read {thing}, so the mistake went unnoticed.','HAD','Had {person} read {thing} the mistake would have been noticed','Had + subject + past participle','This is an inverted third conditional.'],
    ['Modal Verbs','It was unnecessary for {person} to attend {event}.','NEED','{person} need not have attended {event}','need not have + past participle','Use this for a completed action that was unnecessary.'],
    ['Gerunds','{person} admitted that they had copied part of {thing}.','ADMITTED','{person} admitted copying part of {thing}','admit + gerund','“Admit” takes an -ing form when acknowledging an action.'],
    ['Infinitives','{person} managed to finish {thing} despite the delay.','SUCCEEDED','{person} succeeded in finishing {thing} despite the delay','succeed in + gerund','“Succeed” requires “in” followed by an -ing form.'],
    ['Relative Clauses','{place} has a new director. Her research concerns {topic}.','WHOSE','{place} has a new director whose research concerns {topic}','whose + noun','“Whose” introduces a possessive relative clause.'],
    ['Phrasal Verbs','{event} was postponed because {person} was unavailable.','PUT','{event} was put off because {person} was unavailable','put off = postpone','“Put off” means postpone.']
  ],
  CPE:[
    ['Articles','{person} was appointed director of {place} last month.','THE','{person} was appointed the director of {place} last month','the + specific role + of','Use “the” when a role is specified by an of-phrase.'],
    ['Quantifiers','Very few participants understood the implications of {thing}.','HARDLY','Hardly any participants understood the implications of {thing}','hardly any + plural noun','“Hardly any” means almost none.'],
    ['Idioms','{topic} seems familiar, although I cannot remember why.','BELL','{topic} rings a bell although I cannot remember why','ring a bell','This idiom means to seem familiar.'],
    ['Fixed Expressions','{thing} is completely irrelevant to {topic}.','BEARING','{thing} has no bearing on {topic}','have no bearing on','This fixed expression means to be irrelevant.'],
    ['Collocations','{person} strongly criticised the decision about {place}.','CRITICISM','{person} levelled strong criticism at the decision about {place}','level criticism at','This is a formal collocation.'],
    ['Nominalisation','The committee refused to release {thing}, which surprised everyone.','REFUSAL','The committee’s refusal to release {thing} surprised everyone','refusal + to-infinitive','Nominalisation turns “refused” into “refusal”.'],
    ['Cleft Sentences','I particularly admired {person}’s analysis of {topic}.','WHAT','What I particularly admired was {person}’s analysis of {topic}','What-clause + be + focus','A what-cleft foregrounds important information.'],
    ['Discourse Markers','The evidence was limited. Nevertheless, the committee approved {thing}.','SPITE','In spite of the limited evidence the committee approved {thing}','in spite of + noun phrase','This structure expresses concession.'],
    ['Formal English','{person} will consider {thing} carefully before responding.','CONSIDERATION','{person} will give careful consideration to {thing} before responding','give consideration to','This formal noun phrase replaces “consider”.'],
    ['Advanced Structures','{person} realised the importance of {topic} only after {event}.','DID','Only after {event} did {person} realise the importance of {topic}','Only after + auxiliary inversion','Fronted “only after” requires inversion.']
  ],
  ECPE:[
    ['Academic English','Researchers used {thing} to evaluate attitudes to {topic}.','BASIS','{thing} formed the basis for evaluating attitudes to {topic}','form the basis for + gerund','This academic expression states the foundation of an analysis.'],
    ['Vocabulary Transformations','{person} was unwilling to discuss {topic} publicly.','RELUCTANT','{person} was reluctant to discuss {topic} publicly','be reluctant + to-infinitive','“Reluctant” is equivalent to “unwilling”.'],
    ['Verb Patterns','{person} prevented the team from entering {place}.','STOPPED','{person} stopped the team from entering {place}','stop someone from + gerund','Use an object followed by “from” and an -ing form.'],
    ['Prepositions','{person} is responsible for preparing {thing}.','CHARGE','{person} is in charge of preparing {thing}','in charge of + gerund','The fixed phrase is “in charge of”.'],
    ['Mixed Review','It is possible that {person} misunderstood {thing}.','MAY','{person} may have misunderstood {thing}','may have + past participle','Use a perfect modal for uncertainty about the past.'],
    ['Passive Voice','Experts say that {place} was built over a century ago.','SAID','{place} is said to have been built over a century ago','is said + perfect passive infinitive','The perfect infinitive refers to an earlier passive action.'],
    ['Inversion','{person} rarely encounters such detailed work on {topic}.','RARELY','Rarely does {person} encounter such detailed work on {topic}','Rarely + auxiliary + subject','Fronted “rarely” triggers inversion.'],
    ['Idioms','{person} decided to improvise during {event}.','EAR','{person} decided to play it by ear during {event}','play it by ear','The idiom means to act without a fixed plan.'],
    ['Collocations','{thing} clearly demonstrates why {topic} matters.','LIGHT','{thing} sheds light on why {topic} matters','shed light on','This collocation means clarify or explain.'],
    ['Conditionals','Without {person}’s support, {event} would have failed.','BEEN','Had it not been for {person}’s support {event} would have failed','Had it not been for','This inverted conditional means “without” in the unreal past.']
  ]
};

function fill(text,i){return text.replace(/\{(\w+)\}/g,(_,key)=>context[key][i]);}
function scramble(answer,seed){return answer.replace(/[.?!]$/,'').split(/\s+/).map((word,index)=>({word,key:(index*17+seed*13)%97})).sort((a,b)=>a.key-b.key).map(x=>x.word);}
function wrongAnswers(answer){
  const a=answer.replace(/[.?!]$/,'');
  const candidates=[a.replace(/\b(in|on|for|to|of|as|at)\b/i,''),a.replace(/\b(had|has|have|was|were|is|are|does)\b/i,'did'),a.replace(/\bnot\b/i,''),a.split(' ').map((w,i,x)=>i===2?x[3]||w:i===3?x[2]:w).join(' ')];
  const unique=[...new Set(candidates.filter(x=>x&&x!==a))].slice(0,3);while(unique.length<3)unique.push(a+' incorrectly');return [unique[0],a,unique[1],unique[2]];
}
for(const exam of Object.keys(patterns)){
  const bank=[];
  patterns[exam].forEach((p,pIndex)=>{for(let i=0;i<10;i++){const n=pIndex*10+i;const source=fill(p[1],i),answer=fill(p[3],i);bank.push({id:exam.toLowerCase()+'-'+String(n+1).padStart(3,'0'),exam,cefr:exam==='CAE'?'C1':'C2',category:p[0],mode:n%2===0?'build':'choice',source,keyword:p[2],answer,tokens:scramble(answer,n),choices:wrongAnswers(answer),rule:p[4],explanation:p[5],commonError:'Do not alter the fixed pattern: '+p[4]+'.',miniLesson:'Keep the key word unchanged and preserve the original meaning.',examples:[answer]});}});
  writeFileSync(new URL('../data/'+exam.toLowerCase()+'.json',import.meta.url),JSON.stringify(bank,null,2)+'\n');
}
console.log('Generated 300 exercises: 100 CAE, 100 CPE, 100 ECPE.');
