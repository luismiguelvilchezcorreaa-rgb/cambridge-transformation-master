// C2 Booster - Unit 01
// The book is used only as a syllabus/skill map. Every prompt below is original.

const names=['Maya','Daniel','Sofia','Leo','Nina','Omar','Chloe','Ethan','Priya','Lucas','Amira','Noah','Elena'];
const projects=['the climate report','the funding proposal','the research paper','the exhibition plan','the policy review','the training programme','the design brief','the conference schedule','the survey results','the budget forecast'];

function shuffledTokens(answer,seed){return answer.replace(/[.?!]$/,'').split(/\s+/).map((word,index)=>({word,key:(index*31+seed*17)%101})).sort((a,b)=>a.key-b.key).map(x=>x.word)}
function q(id,activity,track,category,source,choices,answer,rule,keyword=''){
  const mode=keyword?'build':'choice';
  return {id:'b1-'+id,exam:'BOOSTER',cefr:'C2',unit:'Unit 01',activity,track,category,mode,source,keyword,answer:answer.replace(/[.?!]$/,''),choices,tokens:shuffledTokens(answer,Number(id.replace(/\D/g,''))||1),rule,explanation:'This item targets '+rule+'.',commonError:'Check the time reference, fixed pattern and exact meaning before choosing.',miniLesson:'Notice the grammatical signal first; then eliminate forms that do not fit the time or lexical pattern.'};
}
function pick(i){return {name:names[i%names.length],project:projects[i%projects.length]}}
function addChoice(list,prefix,count,activity,track,category,factory){for(let i=0;i<count;i++){const x=factory(i,pick(i));list.push(q(prefix+String(i+1).padStart(2,'0'),activity,track,category,x.source,x.choices,x.answer,x.rule))}}

const unit1Questions=[];

// GRAMMAR - 111 items mirroring the nine practice sets in the unit.
const presentPatterns=[
  (i,c)=>({source:`At present, ${c.name} ___ ${c.project} with the legal team.`,choices:['reviews','is reviewing','has reviewed','reviewed'],answer:'is reviewing',rule:'present continuous for an action in progress'}),
  (i,c)=>({source:`${c.name} ___ this organisation since finishing university.`,choices:['knows','has known','is knowing','knew'],answer:'has known',rule:'present perfect with a state continuing to the present'}),
  (i,c)=>({source:`The new timetable ___ next Monday morning.`,choices:['is starting','starts','has started','will have started'],answer:'starts',rule:'present simple for a fixed timetable'}),
  (i,c)=>({source:`Why are your hands covered in paint? What ___?`,choices:['do you do','have you been doing','did you do every day','are you usually doing'],answer:'have you been doing',rule:'present perfect continuous for recent activity with visible results'}),
  (i,c)=>({source:`I ___ what you mean, but I still disagree.`,choices:['am seeing','see','have been seeing','saw'],answer:'see',rule:'state verb in the present simple'}),
  (i,c)=>({source:`This graph ___ a sharp increase in remote work since 2020.`,choices:['is showing','shows','has been showing now','showed tomorrow'],answer:'shows',rule:'present simple for commentary and description'}),
  (i,c)=>({source:`${c.name} ___ for the same qualification for nearly three years.`,choices:['studies','has been studying','is studied','studied now'],answer:'has been studying',rule:'present perfect continuous for duration'}),
  (i,c)=>({source:`I ___ this laptop twice this week and the fault keeps returning.`,choices:['repair','have repaired','am repairing every week','repaired next week'],answer:'have repaired',rule:'present perfect in an unfinished time period'}),
  (i,c)=>({source:`Be quiet - I ___ about the best way to answer this email.`,choices:['think','am thinking','have thought every day','thought tomorrow'],answer:'am thinking',rule:'continuous form for an active mental process'}),
  (i,c)=>({source:`Water ___ at 100°C at standard atmospheric pressure.`,choices:['is boiling','boils','has boiled tomorrow','boiled now'],answer:'boils',rule:'present simple for scientific fact'}),
  (i,c)=>({source:`${c.name} usually ___ from home, but this week the team is meeting on campus.`,choices:['works','is working usually','has been worked','work'],answer:'works',rule:'present simple for habitual action'}),
  (i,c)=>({source:`The committee ___ three times this month and still has not reached a decision.`,choices:['meets','has met','is meeting yesterday','met next week'],answer:'has met',rule:'present perfect for repeated action in an unfinished period'}),
  (i,c)=>({source:`The company ___ two new services this quarter.`,choices:['launches yesterday','is launching','has launch','launch'],answer:'is launching',rule:'present continuous for a current planned development'})
];
presentPatterns.forEach((f,i)=>{const x=f(i,pick(i));unit1Questions.push(q('g1-'+String(i+1).padStart(2,'0'),'Grammar 1 - Present forms','Grammar','Tenses',x.source,x.choices,x.answer,x.rule))});
addChoice(unit1Questions,'g2-',5,'Grammar 2 - State vs action verbs','Grammar','Tenses',(i,c)=>[
  {source:`${c.name} normally ___ coffee, but today is trying herbal tea.`,choices:['prefers','is preferring','has been preferred','prefer'],answer:'prefers',rule:'state verb for a stable preference'},
  {source:`I ___ whether to accept the offer; I have not decided yet.`,choices:['consider','am considering','have considered always','considers'],answer:'am considering',rule:'continuous form when consider means deliberate'},
  {source:`This soup ___ far too salty.`,choices:['is tasting','tastes','has been tasting','taste'],answer:'tastes',rule:'state use of a sense verb'},
  {source:`The chef ___ the sauce to check whether it needs more salt.`,choices:['tastes','is tasting','has taste','taste'],answer:'is tasting',rule:'action use of a sense verb'},
  {source:`${c.name} ___ a difficult week at work, so be patient.`,choices:['has','is having','have had every week','having'],answer:'is having',rule:'continuous have for an experience'}
][i]);
addChoice(unit1Questions,'g3-',5,'Grammar 3 - Been and gone','Grammar','Tenses',(i,c)=>[
  {source:`${c.name} has ___ to Kyoto twice and would happily return.`,choices:['been','gone','being','went'],answer:'been',rule:'have been to for a completed visit'},
  {source:`${c.name} has ___ to the bank; she will be back in twenty minutes.`,choices:['been','gone','went','being'],answer:'gone',rule:'have gone to when the person has not returned'},
  {source:`${c.name} has ___ in Lima for six years.`,choices:['been','gone','went','being'],answer:'been',rule:'have been in for residence over a period'},
  {source:`I have never ___ to a live opera before.`,choices:['been','gone','being','go'],answer:'been',rule:'have been to for life experience'},
  {source:`The director has ___ to Brussels for negotiations and cannot take calls.`,choices:['been','gone','being','go'],answer:'gone',rule:'have gone to for a current absence'}
][i]);
addChoice(unit1Questions,'g4-',9,'Grammar 4 - Perfect simple vs continuous','Grammar','Tenses',(i,c)=>[
  {source:`Researchers ___ the site for six months and expect to continue until December.`,choices:['have excavated once','have been excavating','excavate yesterday','are excavated'],answer:'have been excavating',rule:'present perfect continuous for ongoing duration'},
  {source:`The team ___ four major faults so far.`,choices:['has identified','has been identifying for hours','identifies tomorrow','identified next year'],answer:'has identified',rule:'present perfect simple for completed results'},
  {source:`How long ___ on ${c.project}?`,choices:[`has ${c.name} worked every day`, `has ${c.name} been working`, `is ${c.name} work`, `did ${c.name} working`],answer:`has ${c.name} been working`,rule:'present perfect continuous with how long'},
  {source:`I ___ your report and the conclusions are convincing.`,choices:['have read','have been reading but not started','am read','read tomorrow'],answer:'have read',rule:'present perfect simple for a completed recent action'},
  {source:`The printer is hot because we ___ documents all morning.`,choices:['have printed once','have been printing','print tomorrow','are printed'],answer:'have been printing',rule:'present perfect continuous for activity causing a present result'},
  {source:`${c.name} ___ three grant applications this week.`,choices:['has submitted','has been submitting since three','submits yesterday','is submitted'],answer:'has submitted',rule:'present perfect simple with a completed quantity'},
  {source:`Prices ___ steadily since the beginning of the year.`,choices:['have been rising','have risen once tomorrow','rose next month','are rise'],answer:'have been rising',rule:'present perfect continuous for an ongoing trend'},
  {source:`We ___ enough evidence to make a decision now.`,choices:['have gathered','have been gathering enough but none','are gathered','gather tomorrow'],answer:'have gathered',rule:'present perfect simple for achieved result'},
  {source:`My eyes hurt because I ___ at this screen for hours.`,choices:['have looked once','have been looking','am looked','look yesterday'],answer:'have been looking',rule:'present perfect continuous for a recent prolonged activity'}
][i]);

const futurePatterns=[
  (i,c)=>({source:`By this time next month, ${c.name} ___ ${c.project}.`,choices:['will complete','will have completed','is completing yesterday','has completed last year'],answer:'will have completed',rule:'future perfect for completion before a future point'}),
  (i,c)=>({source:`Look at those clouds - it ___ within minutes.`,choices:['will have rained yesterday','is going to rain','rains every Monday','has rained tomorrow'],answer:'is going to rain',rule:'be going to for evidence-based prediction'}),
  (i,c)=>({source:`This time tomorrow, we ___ over the Andes.`,choices:['will be flying','will have flown yesterday','fly last week','have flown now'],answer:'will be flying',rule:'future continuous for an action in progress at a future time'}),
  (i,c)=>({source:`The seminar ___ at 9:00 sharp on Friday.`,choices:['starts','will have started yesterday','is start','has starting'],answer:'starts',rule:'present simple for scheduled future events'}),
  (i,c)=>({source:`I think the new policy ___ considerable resistance.`,choices:['will face','is facing yesterday','has faced tomorrow','faces last year'],answer:'will face',rule:'will for a prediction based on opinion'}),
  (i,c)=>({source:`We ___ the research team at four; the appointment is already arranged.`,choices:['are meeting','meet yesterday','will have met last year','have meeting'],answer:'are meeting',rule:'present continuous for a future arrangement'}),
  (i,c)=>({source:`By 2030, the scientists ___ this project for a full decade.`,choices:['will have been running','will be run','have ran tomorrow','run yesterday'],answer:'will have been running',rule:'future perfect continuous for duration up to a future point'}),
  (i,c)=>({source:`I forgot the files. Do not worry - I ___ them to you now.`,choices:['will send','am sending yesterday','sent tomorrow','have send'],answer:'will send',rule:'will for an on-the-spot decision'}),
  (i,c)=>({source:`The train ___ at 18:42, according to the timetable.`,choices:['leaves','is leaving yesterday','has left tomorrow','leave'],answer:'leaves',rule:'present simple for timetabled future'}),
  (i,c)=>({source:`Do not call at eleven; ${c.name} ___ the final presentation then.`,choices:['will be giving','gives yesterday','will have gave','has given tomorrow'],answer:'will be giving',rule:'future continuous for an expected action in progress'})
];
for(let i=0;i<20;i++){const x=futurePatterns[i%futurePatterns.length](i,pick(i));unit1Questions.push(q('g5-'+String(i+1).padStart(2,'0'),'Grammar 5 - Future forms','Grammar','Tenses',x.source,x.choices,x.answer,x.rule))}
for(let i=0;i<10;i++){const x=futurePatterns[(i+3)%futurePatterns.length](i+20,pick(i+3));unit1Questions.push(q('g6-'+String(i+1).padStart(2,'0'),'Grammar 6 - Future in context','Grammar','Tenses',x.source,x.choices,x.answer,x.rule))}

const pastPatterns=[
  (i,c)=>({source:`By the time ${c.name} arrived, the committee ___ the meeting.`,choices:['had already started','already starts','has started tomorrow','was start'],answer:'had already started',rule:'past perfect for an earlier past action'}),
  (i,c)=>({source:`While I ___ home, I received the call.`,choices:['was walking','had walk','have walked','am walking tomorrow'],answer:'was walking',rule:'past continuous for background action'}),
  (i,c)=>({source:`${c.name} ___ in Berlin for five years before moving to Madrid.`,choices:['had been living','is living','has lived tomorrow','was live'],answer:'had been living',rule:'past perfect continuous for duration before a past event'}),
  (i,c)=>({source:`When we were children, we ___ by the river every summer evening.`,choices:['would play','are playing','have played tomorrow','had playing'],answer:'would play',rule:'would for repeated past habits'}),
  (i,c)=>({source:`I ___ the document yesterday and sent it to the director.`,choices:['finished','have finished tomorrow','was finish','finish now'],answer:'finished',rule:'past simple with a finished time reference'}),
  (i,c)=>({source:`At eight last night, the technicians ___ the server.`,choices:['were still repairing','have repaired tomorrow','repair every day','had repair'],answer:'were still repairing',rule:'past continuous at a specific past time'}),
  (i,c)=>({source:`${c.name} ___ the error only after the client complained.`,choices:['noticed','has noticed next week','was notice','notices yesterday'],answer:'noticed',rule:'past simple for a completed past event'}),
  (i,c)=>({source:`The roads were flooded because it ___ for hours.`,choices:['had been raining','is raining','has rained tomorrow','rains every day'],answer:'had been raining',rule:'past perfect continuous for past cause and duration'})
];
for(let i=0;i<10;i++){const x=pastPatterns[i%pastPatterns.length](i,pick(i));unit1Questions.push(q('g7-'+String(i+1).padStart(2,'0'),'Grammar 7 - Past forms','Grammar','Tenses',x.source,x.choices,x.answer,x.rule))}
for(let i=0;i<16;i++){const x=pastPatterns[(i+2)%pastPatterns.length](i+10,pick(i+2));unit1Questions.push(q('g8-'+String(i+1).padStart(2,'0'),'Grammar 8 - Past tense choice','Grammar','Tenses',x.source,x.choices,x.answer,x.rule))}
const mixed=[...presentPatterns,...futurePatterns,...pastPatterns];
for(let i=0;i<23;i++){const x=mixed[(i*3)%mixed.length](i+40,pick(i+4));unit1Questions.push(q('g9-'+String(i+1).padStart(2,'0'),'Grammar 9 - Mixed tense challenge','Grammar','Tenses',x.source,x.choices,x.answer,x.rule))}

// VOCABULARY - Communication & Language (118 items).
const communicationNouns=[
 ['allegation','The newspaper withdrew the ___ after new evidence proved it false.'],['assurance','We received an ___ that the data would remain confidential.'],['channel','Please use the official ___ for all complaints.'],['cliché','Calling every challenge “a journey” has become a tired ___.'],['dialect','The documentary explores a regional ___ spoken along the coast.'],['dispute','The two companies settled their contract ___ outside court.'],['groan','A collective ___ came from the audience when the screen went blank.'],['memo','The director circulated a ___ outlining the new procedure.'],['plea','The charity issued an urgent ___ for medical supplies.'],['proverb','There is an old ___ about patience being rewarded.'],['refusal','Their ___ to release the figures attracted criticism.'],['reminder','The empty reservoir is a stark ___ of the drought.'],['reproach','Her professional conduct was beyond ___.'],['tribute','The concert was held as a ___ to the late composer.']
];
communicationNouns.forEach(([answer,source],i)=>unit1Questions.push(q('v1-'+String(i+1).padStart(2,'0'),'Vocabulary 1 - Communication nouns','Vocabulary','Communication & Language',source,[answer,'argument','message','statement'],answer,'precise communication noun')));
const wordForms=[
 ['voice','The residents decided to ___ their concerns at the public meeting.'],['caution','Experts ___ against interpreting the preliminary results too quickly.'],['utter','He ___ a brief apology before leaving the room.'],['assert','The new chair learned to ___ herself in difficult negotiations.'],['lobby','Several organisations plan to ___ for stronger privacy laws.'],['notify','Please ___ all applicants of the revised deadline.'],['reassure','The doctor tried to ___ the family that the procedure was routine.'],
 ['coherent','Her argument was clear, logical and completely ___.'],['interactive','The course is highly ___, with students making decisions throughout.'],['chatty','The newsletter uses a warm, ___ style rather than formal prose.'],['explicit','The instructions need to be more ___ about what evidence is required.'],['implicit','His silence was taken as ___ criticism of the proposal.'],
 ['precisely','That is ___ the distinction I was trying to make.'],['highly','She is ___ regarded in the field of applied linguistics.'],['truly','You cannot ___ appreciate the scale until you see it in person.'],['anyhow','The issue has not been discussed recently - not publicly, ___.']
];
wordForms.forEach(([answer,source],i)=>unit1Questions.push(q('v2-'+String(i+1).padStart(2,'0'),'Vocabulary 2 - Word choice','Vocabulary','Communication & Language',source,[answer,'roughly','silently','ordinary'],answer,'precise lexical choice')));
const phrasals=[
 ['act on','The board promised to ___ the recommendations immediately.'],['answer back','Children were expected not to ___ when adults corrected them.'],['answer to','The regional managers ___ the national director.'],['back up','Can you ___ that claim with independent evidence?'],['get at','I understand what you are trying to ___, but the wording is unclear.'],['bear with','Please ___ me while I locate the original file.'],['go into','The report does not ___ the financial implications in enough detail.'],['go on','He can ___ for hours about the benefits of the system.'],['own up','Eventually, somebody will have to ___ to deleting the records.'],['slip out','The confidential name seemed to ___ during the interview.'],['stick up for','Even when they disagree, she will ___ her colleagues when they are treated unfairly.']
];
phrasals.forEach(([answer,source],i)=>unit1Questions.push(q('v3-'+String(i+1).padStart(2,'0'),'Vocabulary 3 - Phrasal verbs','Vocabulary','Phrasal Verbs',source,[answer,'turn down','make out','set aside'],answer,answer+' - fixed phrasal verb')));
const preps=[['of','on the grounds ___ safety'],['on','vote ___ the proposal'],['of','a reminder ___ our responsibility'],['about','notified ___ the delay'],['against','lobby ___ the restriction'],['beyond','venture ___ the obvious explanation'],['in','___ opposition to the merger'],['about','concern ___ rising costs'],['with','conclude ___ a recommendation'],['on','focus ___ practical solutions'],['with','barter ___ local traders'],['on','a ban ___ single-use plastics'],['about','boast ___ recent achievements'],['for','beg ___ another opportunity'],['for','consideration ___ other passengers'],['of','allegations ___ misconduct'],['in','___ tribute to the volunteers'],['in','___ dispute with the landlord']];
preps.forEach(([answer,phrase],i)=>unit1Questions.push(q('v4-'+String(i+1).padStart(2,'0'),'Vocabulary 4 - Prepositions','Vocabulary','Prepositions',`Choose the missing preposition: ${phrase.replace('___','___')}.`,[answer,'at','by','from'],answer,'fixed prepositional pattern')));
const collocations=[['pay','___ somebody a compliment'],['reach','___ a conclusion after reviewing the evidence'],['pay','___ tribute to the rescue workers'],['broaden','___ your mind through travel and reading'],['make','___ a plea for calm'],['voice','___ concerns about the timetable'],['stark','a ___ reminder of the risks']];
collocations.forEach(([answer,source],i)=>unit1Questions.push(q('v5-'+String(i+1).padStart(2,'0'),'Vocabulary 5 - Collocations','Vocabulary','Collocations',source,[answer,'do','set','put'],answer,'advanced collocation')));
const chunks=[['all things considered','___, the pilot programme has been remarkably successful.'],['all just the same','The task was exhausting, but worthwhile ___.'],['be all set','We are ___ to launch once the final checks are complete.'],['for one thing','I would not move there; ___, the commute would be unbearable.'],['in a sense','___, both sides are arguing for the same outcome.'],['in all probability','The results will, ___, be published next week.'],['in no uncertain terms','The regulator told the company ___ that the practice must stop.'],['of its own accord','The door opened ___ even though nobody was nearby.'],['on hold','The expansion has been placed ___ until funding is secured.'],['on no account','___ should confidential data be emailed to a personal address.'],['once and for all','We need to settle this question ___.'],['so to speak','The discovery opened a new door, ___.'],['take it from me','___: preparation makes the interview far less stressful.'],['in any case','The forecast may improve; ___, we should take waterproof clothing.'],['by and large','___, the reforms have received public support.']];
chunks.forEach(([answer,source],i)=>unit1Questions.push(q('v6-'+String(i+1).padStart(2,'0'),'Vocabulary 6 - Language chunks','Vocabulary','Language Chunks',source,[answer,'at random','by mistake','in turn'],answer,'fixed language chunk')));
const idioms=[['get it off your chest','If the problem is bothering you, talk to someone and ___.'],['bone of contention','Remote-working days became a ___ between management and staff.'],['beside herself with worry','When nobody answered the phone, she was ___.'],['across the board','The organisation announced salary increases ___.'],['put you in the picture','Let me ___ before the meeting begins.'],['on the ball','Our support team is really ___ and usually resolves issues within minutes.'],['for all intents and purposes','The old system is, ___, no longer operational.'],['speak volumes','The way he thanked every volunteer ___ about his character.'],['inside out','She knows the regulations ___.'],['out of bounds','The laboratory is ___ to visitors without protective equipment.'],['out of the question','Buying a second office is ___ at the moment.'],['back in the black','After two difficult years, the company is finally ___.'],['of all people','You, ___, should understand why accuracy matters.'],['tighten your belt','With prices rising, many households have had to ___.'],['before you know it','Keep practising and, ___, the patterns will feel automatic.'],['clear the air','They met privately to ___ after the disagreement.'],['break the ice','A quick game helped ___ at the beginning of the workshop.'],['read between the lines','To understand the message fully, you sometimes need to ___.'],['get your point across','Use a concrete example if you want to ___.']];
idioms.forEach(([answer,source],i)=>unit1Questions.push(q('v7-'+String(i+1).padStart(2,'0'),'Vocabulary 7 - Idioms','Vocabulary','Idioms',source,[answer,'lose the plot','take a shortcut','draw a blank'],answer,'C2 idiomatic expression')));

const kwPatterns=[
 (i,c)=>({source:`${c.name} could not explain the sudden change in the figures.`,keyword:'ACCOUNT',answer:`${c.name} could not account for the sudden change in the figures`,rule:'account for = explain'}),
 (i,c)=>({source:`The documentary made ${c.name} eager to discover more about the case.`,keyword:'APPETITE',answer:`The documentary whetted ${c.name}’s appetite for discovering more about the case`,rule:'whet someone’s appetite for'}),
 (i,c)=>({source:`${c.name} does not mind working alone when necessary.`,keyword:'AVERSE',answer:`${c.name} is not averse to working alone when necessary`,rule:'be averse to + gerund'}),
 (i,c)=>({source:`The coordinator will explain the new procedure to ${c.name}.`,keyword:'ACQUAINT',answer:`The coordinator will acquaint ${c.name} with the new procedure`,rule:'acquaint someone with'}),
 (i,c)=>({source:`I need to compensate ${c.name} for cancelling at such short notice.`,keyword:'AMENDS',answer:`I need to make amends to ${c.name} for cancelling at such short notice`,rule:'make amends to someone for'}),
 (i,c)=>({source:`Everyone expects ${c.name} to win the scholarship.`,keyword:'SAYING',answer:`It goes without saying that ${c.name} will win the scholarship`,rule:'it goes without saying that'}),
 (i,c)=>({source:`The supervisor dislikes staff leaving before the meeting ends.`,keyword:'APPROVE',answer:`The supervisor does not approve of staff leaving before the meeting ends`,rule:'approve of + gerund'}),
 (i,c)=>({source:`Visitors cannot see the archive documents before 2030.`,keyword:'ACCESS',answer:`Visitors cannot have access to the archive documents before 2030`,rule:'have access to'}),
 (i,c)=>({source:`You should consider that ${c.name} has only just joined the team.`,keyword:'ALLOWANCES',answer:`You should make allowances for the fact that ${c.name} has only just joined the team`,rule:'make allowances for'}),
 (i,c)=>({source:`Only ${c.name} found a workable solution.`,keyword:'SUCCEEDED',answer:`Only ${c.name} succeeded in finding a workable solution`,rule:'succeed in + gerund'})
];
for(let i=0;i<18;i++){const x=kwPatterns[i%kwPatterns.length](i,pick(i+2));unit1Questions.push(q('v8-'+String(i+1).padStart(2,'0'),'Vocabulary 8 - Key word transformations','Vocabulary','Key Word Transformations',x.source,[],x.answer,x.rule,x.keyword))}

// ENGLISH IN USE - 42 items.
const formations=[['VISIBLE','visibility','Dense smoke reduced ___ to almost zero.'],['CONSISTENT','consistency','The candidate has shown remarkable ___ throughout the course.'],['EFFECT','ineffective','The original strategy proved largely ___.'],['STABLE','instability','Political ___ has discouraged long-term investment.'],['SOLID','solidarity','Students organised the event in ___ with striking workers.'],['EMERGE','emergence','The rapid ___ of the technology surprised regulators.'],['FORGIVE','forgiveness','He apologised sincerely and asked for ___.'],['METHOD','methodology','The researchers developed a new ___ for analysing interviews.'],['LONE','loneliness','Social isolation can intensify feelings of ___.'],['ELECT','electoral','The commission proposed major changes to the ___ system.'],['CARE','caretaker','A night ___ checks that every entrance is locked.'],['CONTEST','contestant','Each ___ receives the same amount of preparation time.']];
formations.forEach(([base,answer,source],i)=>unit1Questions.push(q('e1-'+String(i+1).padStart(2,'0'),'English in Use 1 - Word formation','English in Use','Word Formation',`${source} (${base})`,[answer,base.toLowerCase(),answer+'ly',answer+'ness'],answer,'word formation from '+base)));
const euKw=[
 (i,c)=>({source:`I last spoke to ${c.name} several months ago.`,keyword:'CONTACT',answer:`I have not been in contact with ${c.name} for several months`,rule:'be in contact with'}),
 (i,c)=>({source:`${c.name} has never been this confident before.`,keyword:'EVER',answer:`This is the most confident ${c.name} has ever been`,rule:'superlative + ever + present perfect'}),
 (i,c)=>({source:`${c.name} was about to resign when the promotion was announced.`,keyword:'POINT',answer:`${c.name} was on the point of resigning when the promotion was announced`,rule:'on the point of + gerund'}),
 (i,c)=>({source:`This is not the first time ${c.name} has applied for the grant.`,keyword:'BEFORE',answer:`${c.name} has applied for the grant before`,rule:'present perfect + before'}),
 (i,c)=>({source:`The team has not won this competition for many years.`,keyword:'TIME',answer:`It is a long time since the team won this competition`,rule:'it is a long time since + past simple'}),
 (i,c)=>({source:`${c.name} will certainly apologise for the mistake.`,keyword:'BOUND',answer:`${c.name} is bound to apologise for the mistake`,rule:'be bound to'}),
 (i,c)=>({source:`${c.name} realised immediately that the figures were wrong.`,keyword:'AWARE',answer:`${c.name} became aware that the figures were wrong immediately`,rule:'become aware that'}),
 (i,c)=>({source:`I think the person we need is sitting near the entrance.`,keyword:'FEELING',answer:`I have a feeling that the person near the entrance is the one we need`,rule:'have a feeling that'}),
 (i,c)=>({source:`The committee proposed building a new research centre.`,keyword:'FORWARD',answer:`The committee put forward a proposal to build a new research centre`,rule:'put forward a proposal'}),
 (i,c)=>({source:`The interviews will take place on Friday.`,keyword:'SCHEDULED',answer:`The interviews are scheduled to take place on Friday`,rule:'be scheduled to + infinitive'}),
 (i,c)=>({source:`In my opinion, another price increase is likely soon.`,keyword:'ESTIMATION',answer:`In my estimation another price increase is likely soon`,rule:'in my estimation'}),
 (i,c)=>({source:`Nobody answered the final question correctly.`,keyword:'ANSWER',answer:`Nobody could give a correct answer to the final question`,rule:'give an answer to'}),
 (i,c)=>({source:`There is no uncertainty that ${c.name} will be selected.`,keyword:'DOUBT',answer:`There is no doubt that ${c.name} will be selected`,rule:'there is no doubt that'}),
 (i,c)=>({source:`${c.name} began writing the report almost two years ago.`,keyword:'STARTED',answer:`It is almost two years since ${c.name} started writing the report`,rule:'it is + time + since + past simple'})
];
euKw.forEach((f,i)=>{const x=f(i,pick(i));unit1Questions.push(q('e2-'+String(i+1).padStart(2,'0'),'English in Use 2 - Transformations','English in Use','Key Word Transformations',x.source,[],x.answer,x.rule,x.keyword))});
const clozeLex=[['established','The research network was ___ in 2018 and now operates internationally.'],['attained','The project has ___ a level of accuracy few competitors can match.'],['admiration','Her calm handling of the crisis won the ___ of her colleagues.'],['confined','Access to the raw data is ___ to authorised researchers.'],['correspondence','Please keep copies of all official ___ with the supplier.'],['medieval','The archive contains several ___ manuscripts from the thirteenth century.'],['merchants','Local ___ began organising regular trade routes across the region.'],['courier','The signed documents will be delivered by ___ tomorrow.']];
clozeLex.forEach(([answer,source],i)=>unit1Questions.push(q('e3-'+String(i+1).padStart(2,'0'),'English in Use 3 - Multiple-choice cloze','English in Use','Multiple-choice Cloze',source,[answer,'temporary','ordinary','unlikely'],answer,'lexical precision in a multiple-choice cloze')));
const openCloze=[['against','Several researchers have spoken out ___ the proposed restriction.'],['no','There is virtually ___ evidence to support that claim.'],['who','I was unsure ___ to contact about the problem.'],['on','We decided to err ___ the side of caution.'],['for','Ignoring the warning would simply be asking ___ trouble.'],['keep','Always ___ in mind that correlation does not prove causation.'],['terms','In ___ of long-term cost, the second option is preferable.'],['long','As ___ as the device is connected, it will continue to transmit data.']];
openCloze.forEach(([answer,source],i)=>unit1Questions.push(q('e4-'+String(i+1).padStart(2,'0'),'English in Use 4 - Open cloze','English in Use','Open Cloze',source,[answer,'by','from','than'],answer,'grammar and fixed expressions in an open cloze')));

export const boosterSections=[
  {track:'Grammar',count:111,description:'Present, perfect, future, past and mixed tense control.'},
  {track:'Vocabulary',count:118,description:'Communication & Language, phrasal verbs, collocations, idioms and chunks.'},
  {track:'English in Use',count:42,description:'Word formation, transformations, multiple-choice cloze and open cloze.'}
];

if(unit1Questions.length!==271) throw new Error(`Unit 01 expected 271 items, got ${unit1Questions.length}`);
export {unit1Questions};
