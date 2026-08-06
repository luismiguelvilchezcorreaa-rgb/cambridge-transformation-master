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
// These five sets are deliberately hand-authored rather than recycled from a
// small pattern pool. This keeps long full-unit sessions varied and meaningful.
function pushGrammarSet(prefix,activity,items){items.forEach(([source,choices,answer,rule],i)=>unit1Questions.push(q(prefix+String(i+1).padStart(2,'0'),activity,'Grammar','Tenses',source,choices,answer,rule)))}

pushGrammarSet('g5-','Grammar 5 - Future forms',[
 ['By the end of the quarter, the auditors ___ every regional account.',['will have examined','will examine yesterday','have examined next year','are examining last month'],'will have examined','future perfect for completion before a future deadline'],
 ['Careful! You ___ that glass if you keep pushing the table.',['are going to knock over','will have knocked over yesterday','knock over every day','have knocked over tomorrow'],'are going to knock over','be going to for an evidence-based prediction'],
 ['At this hour next Saturday, the expedition ___ the northern ridge.',['will be crossing','crossed tomorrow','has crossed next week','will have cross'],'will be crossing','future continuous for an action in progress at a future time'],
 ['The keynote address ___ at 10:15 according to the published programme.',['begins','will have begun last night','is begin','has beginning'],'begins','present simple for a scheduled future event'],
 ['I suspect voters ___ the proposal unless its cost is explained more clearly.',['will reject','are rejecting yesterday','have rejected tomorrow','reject last week'],'will reject','will for prediction based on opinion'],
 ['We ___ the architect on Tuesday; the appointment was confirmed this morning.',['are seeing','saw next Tuesday','have seen tomorrow','will have saw'],'are seeing','present continuous for a fixed future arrangement'],
 ['In December, she ___ at the observatory for exactly twenty years.',['will have been working','will work yesterday','has been worked','is working last year'],'will have been working','future perfect continuous for duration up to a future point'],
 ['The phone is ringing. I ___ it.',['will answer','am answering yesterday','answered tomorrow','have answer'],'will answer','will for a spontaneous decision'],
 ['The final ferry ___ the island at 21:30 tonight.',['leaves','will have left yesterday','is leave','left tomorrow'],'leaves','present simple for a timetable'],
 ['Please come after lunch; I ___ candidates all morning.',['will be interviewing','interviewed tomorrow','have interview next week','am interviewed'],'will be interviewing','future continuous for an expected future activity'],
 ['By the time the museum reopens, conservators ___ the entire west wing.',['will have restored','restore last year','are restored tomorrow','will be restoring yesterday'],'will have restored','future perfect for a completed future result'],
 ['Those boxes are leaning dangerously; they ___ unless we move them.',['are going to fall','have fallen tomorrow','fall yesterday','will have fallen last week'],'are going to fall','be going to for visible present evidence'],
 ['This time next month, the research vessel ___ samples in Antarctic waters.',['will be collecting','collected next month','has collecting','will have collected yesterday'],'will be collecting','future continuous for a future activity in progress'],
 ['The academic year ___ on 7 September, as stated in the university calendar.',['commences','is commencing yesterday','has commenced tomorrow','commence'],'commences','present simple for an official schedule'],
 ['Do you think autonomous vehicles ___ private car ownership significantly?',['will reduce','reduced tomorrow','are reduce','have reduced next decade'],'will reduce','will for a neutral future prediction'],
 ['I ___ dinner with the visiting professor tonight; we booked the restaurant yesterday.',['am having','have yesterday','will have had last night','had tomorrow'],'am having','present continuous for a personal future arrangement'],
 ['By 2040, engineers ___ on the coastal barrier for more than a decade.',['will have been working','worked next year','have been work','will working'],'will have been working','future perfect continuous for accumulated future duration'],
 ['You look freezing. I ___ the heating up for you.',['will turn','turned tomorrow','am turn','have turned next winter'],'will turn','will for an immediate offer'],
 ['The application portal ___ automatically at midnight on 30 June.',['closes','closed next month','is close','will have closing'],'closes','present simple for a programmed future event'],
 ['When you arrive at six, the orchestra ___ its final rehearsal.',['will be finishing','finished tomorrow','has finish','will have been finished yesterday'],'will be finishing','future continuous around a specified future time']
]);

pushGrammarSet('g6-','Grammar 6 - Future in context',[
 ['By next spring, the laboratory ___ enough data to publish the longitudinal study.',['will have gathered','gathers yesterday','is gathered last week','will gathering'],'will have gathered','future perfect for an achieved quantity'],
 ['Judging by the queue outside, the lecture ___ completely full.',['is going to be','was tomorrow','has been next week','will have been yesterday'],'is going to be','be going to for a prediction based on present evidence'],
 ['At noon tomorrow, the jury ___ the final submissions from both legal teams.',['will be considering','considered next week','has considered tomorrow','is consider'],'will be considering','future continuous for an ongoing future process'],
 ['The next solar eclipse visible here ___ on 2 August, according to the observatory.',['occurs','occurred tomorrow','is occur','has occurring'],'occurs','present simple for a calendared event'],
 ['I am convinced the discovery ___ the way we understand early migration.',['will change','changed next decade','is changed yesterday','has changing'],'will change','will for a confident prediction'],
 ['The dean ___ the student representatives tomorrow afternoon; it is already in her diary.',['is meeting','met tomorrow','has meet','will have met yesterday'],'is meeting','present continuous for an arranged meeting'],
 ['By July, the satellite ___ measurements continuously for five years.',['will have been transmitting','transmitted next July','is transmit','has transmitted tomorrow'],'will have been transmitting','future perfect continuous for continuous future duration'],
 ['I have just noticed we are out of printer paper. I ___ some on my way back.',['will buy','bought tomorrow','am bought','have buying'],'will buy','will for a decision made at the moment of speaking'],
 ['The selection panel ___ its decision at 4 p.m. on the official livestream.',['announces','announced tomorrow','has announce','is announced yesterday'],'announces','present simple for an announced schedule'],
 ['Do not expect an immediate reply tonight; the delegates ___ across three time zones.',['will be travelling','travelled tomorrow','have travelled next week','will have travel'],'will be travelling','future continuous for a likely future situation']
]);

pushGrammarSet('g7-','Grammar 7 - Past forms',[
 ['The guests had already left when the fire alarm ___.',['went off','has gone off tomorrow','was going off next week','goes off yesterday'],'went off','past simple for a completed event after an earlier past action'],
 ['I ___ through the archive when I came across the missing letter.',['was looking','have looked yesterday','had look','am looking last night'],'was looking','past continuous for background activity'],
 ['Before the merger, the two firms ___ independently for nearly forty years.',['had been operating','are operating yesterday','have operated tomorrow','were operate'],'had been operating','past perfect continuous for duration before a past change'],
 ['Every winter during university, we ___ a cabin near the national park.',['would rent','have rented tomorrow','are renting then','had renting'],'would rent','would for a repeated past habit'],
 ['The committee ___ the revised code at its meeting last Thursday.',['approved','has approved last Thursday','was approve','approves yesterday'],'approved','past simple with a finished past time'],
 ['At midnight, rescue teams ___ the hillside despite the heavy rain.',['were still searching','have searched tomorrow','search every night','had search'],'were still searching','past continuous at a particular past moment'],
 ['Only after opening the envelope did she realise that she ___ the wrong documents.',['had brought','brings yesterday','has brought tomorrow','was bring'],'had brought','past perfect for an action before a later realisation'],
 ['The ground was unusually dry because the region ___ very little rain for months.',['had been receiving','receives tomorrow','is receiving last year','has receive'],'had been receiving','past perfect continuous for an earlier ongoing cause'],
 ['As the chairperson ___ the results, several reporters rushed towards the exit.',['was announcing','has announced tomorrow','announces last night','had announce'],'was announcing','past continuous interrupted by another event'],
 ['She ___ three different posts before she eventually became department head.',['had held','holds yesterday','has held next year','was hold'],'had held','past perfect for completed experiences before a past milestone']
]);

pushGrammarSet('g8-','Grammar 8 - Past tense choice',[
 ['By the time the ambulance reached the village, local volunteers ___ the injured climber.',['had already found','already find','have found tomorrow','were find'],'had already found','past perfect for prior completion'],
 ['While the researchers ___ the cave, their radio signal suddenly disappeared.',['were mapping','had mapped tomorrow','map yesterday','have been mapping next week'],'were mapping','past continuous for an interrupted past action'],
 ['She was exhausted because she ___ witness statements since dawn.',['had been taking','takes yesterday','has taken tomorrow','was take'],'had been taking','past perfect continuous for preceding duration'],
 ['As teenagers, my cousins ___ for hours about which band was better.',['would argue','are arguing yesterday','have argued tomorrow','had arguing'],'would argue','would for characteristic repeated past behaviour'],
 ['The gallery ___ the painting in 1998 and kept it in storage for a decade.',['acquired','has acquired in 1998','was acquire','acquires last year'],'acquired','past simple with a definite finished date'],
 ['At the moment the power failed, surgeons ___ an emergency operation.',['were performing','have performed yesterday','perform tomorrow','had perform'],'were performing','past continuous for an activity in progress'],
 ['I did not recognise the street because developers ___ most of the old buildings.',['had demolished','demolish tomorrow','have demolished next year','were demolish'],'had demolished','past perfect for a change preceding another past event'],
 ['Her hands were covered in clay because she ___ pottery all afternoon.',['had been making','makes yesterday','has made tomorrow','was made'],'had been making','past perfect continuous explaining a past result'],
 ['The witness ___ the suspect immediately when police showed her the photographs.',['identified','has identified tomorrow','was identify','identifies last night'],'identified','past simple for a single completed action'],
 ['When we arrived at the theatre, the audience ___ quietly for the doors to open.',['was waiting','has waited tomorrow','had wait','waits yesterday'],'was waiting','past continuous for a background state in progress'],
 ['He finally understood the reference after I ___ him the historical context.',['had explained','explain yesterday','have explained tomorrow','was explain'],'had explained','past perfect for an earlier explanation'],
 ['The river burst its banks after it ___ continuously for almost two days.',['had been raining','rains last night','has rained tomorrow','was rain'],'had been raining','past perfect continuous for a sustained past cause'],
 ['In those days, the local newspaper ___ an evening edition every weekday.',['used to publish','is publishing then','has published tomorrow','had publishing'],'used to publish','used to for a discontinued past routine'],
 ['During the interview, I noticed that the candidate ___ eye contact whenever salary was mentioned.',['was avoiding','has avoided next week','avoids yesterday','had avoid'],'was avoiding','past continuous for repeated behaviour within a past scene'],
 ['The laboratory closed temporarily after inspectors ___ several safety breaches.',['had discovered','discover tomorrow','have discovered next month','were discover'],'had discovered','past perfect for discovery preceding a past consequence'],
 ['She ___ the final paragraph, saved the file and shut down her laptop.',['rewrote','has rewritten tomorrow','was rewrite','rewrites yesterday'],'rewrote','past simple for a sequence of completed past actions']
]);

pushGrammarSet('g9-','Grammar 9 - Mixed tense challenge',[
 ['This semester, the department ___ a pilot mentoring scheme for first-year students.',['is running','ran tomorrow','has run next year','runs yesterday'],'is running','present continuous for a temporary current project'],
 ['I ___ that author for years, but I have never attended one of her lectures.',['have admired','am admiring since 2020','admired tomorrow','have been admire'],'have admired','present perfect with a continuing state'],
 ['The conference programme ___ three parallel workshops after lunch tomorrow.',['includes','is included yesterday','has included next year','include'],'includes','present simple for an official programme'],
 ['You seem relieved. ___ for the scholarship results all morning?',['Have you been waiting','Do you wait yesterday','Did you waiting','Are you waited'],'Have you been waiting','present perfect continuous for recent duration'],
 ['I ___ why the board is cautious; the legal risk is substantial.',['understand','am understanding','have been understood','understood tomorrow'],'understand','present simple with a stative verb'],
 ['Recent evidence ___ that the settlement is centuries older than previously believed.',['suggests','is suggesting yesterday','has suggest','suggested tomorrow'],'suggests','present simple for reporting evidence'],
 ['The technicians ___ the network since six this morning and have not located the fault yet.',['have been testing','tested tomorrow','are tested','test yesterday'],'have been testing','present perfect continuous for an unfinished current activity'],
 ['We ___ five candidates so far today, with three still to come.',['have interviewed','interview tomorrow','are interviewed yesterday','had interviewing'],'have interviewed','present perfect for completed quantity in unfinished time'],
 ['By the time you read this message, I ___ the country.',['will have left','leave yesterday','am left tomorrow','have leaving'],'will have left','future perfect for completion before a future reference point'],
 ['See how quickly the water is rising? The footpath ___ flooded soon.',['is going to be','was tomorrow','has been yesterday','is being last week'],'is going to be','be going to based on direct evidence'],
 ['At nine tomorrow evening, the crew ___ the final scene on location.',['will be filming','filmed tomorrow','has film','will have filmed yesterday'],'will be filming','future continuous at a specified future time'],
 ['The awards ceremony ___ at 7:30 and doors open an hour earlier.',['starts','started tomorrow','has start','is start yesterday'],'starts','present simple for a scheduled event'],
 ['I expect the committee ___ further evidence before changing its recommendation.',['will request','requested tomorrow','has requested next year','is request'],'will request','will for an expected future action'],
 ['We ___ the new tenants on Friday evening; everything is already arranged.',['are meeting','met next Friday','have meeting','will have met yesterday'],'are meeting','present continuous for a future arrangement'],
 ['When the curator unlocked the cabinet, she discovered that moisture ___ the lower shelf.',['had damaged','damages tomorrow','has damaged next month','was damage'],'had damaged','past perfect for an earlier hidden event'],
 ['I ___ notes when the lecturer suddenly asked me a direct question.',['was taking','have taken tomorrow','had take','am taking yesterday'],'was taking','past continuous for an interrupted background action'],
 ['Before changing careers, he ___ as a civil engineer for more than a decade.',['had been working','is working yesterday','has worked tomorrow','was work'],'had been working','past perfect continuous for duration before a past change'],
 ['As children, we ___ the same old detective film whenever it was shown on television.',['would watch','are watching then','have watched tomorrow','had watching'],'would watch','would for a repeated past habit'],
 ['The university ___ the archive to the public for the first time in 2012.',['opened','has opened in 2012','was open tomorrow','opens last year'],'opened','past simple for a dated completed event'],
 ['At 3 a.m., firefighters ___ to contain the blaze on the upper floor.',['were still trying','have tried tomorrow','try next week','had try'],'were still trying','past continuous at a precise past time'],
 ['She ___ the discrepancy only after comparing the two original datasets.',['noticed','has noticed tomorrow','was notice','notices last month'],'noticed','past simple for a completed discovery'],
 ['The path was slippery because snow ___ throughout the previous night.',['had been falling','falls tomorrow','has fallen next week','was fall'],'had been falling','past perfect continuous for an earlier cause'],
 ['By next October, I ___ this longitudinal study for exactly four years.',['will have been conducting','conducted next year','am conducted','have conduct tomorrow'],'will have been conducting','future perfect continuous for duration up to a future point']
]);

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
 (i,c)=>({source:`Only ${c.name} found a workable solution.`,keyword:'SUCCEEDED',answer:`Only ${c.name} succeeded in finding a workable solution`,rule:'succeed in + gerund'}),
 (i,c)=>({source:`The spokesperson refused to reveal who had supplied the confidential figures.`,keyword:'DRAWN',answer:`The spokesperson would not be drawn on who had supplied the confidential figures`,rule:'be drawn on = be persuaded to discuss'}),
 (i,c)=>({source:`The editor said the factual error was entirely her responsibility.`,keyword:'BLAME',answer:`The editor took the blame for the factual error`,rule:'take the blame for'}),
 (i,c)=>({source:`I only understood the seriousness of the warning several days later.`,keyword:'DAWNED',answer:`It only dawned on me several days later how serious the warning was`,rule:'it dawns on someone that/how'}),
 (i,c)=>({source:`The negotiators are trying to reduce the differences between the two positions.`,keyword:'BRIDGE',answer:`The negotiators are trying to bridge the gap between the two positions`,rule:'bridge the gap between'}),
 (i,c)=>({source:`The chairperson deliberately avoided discussing the funding problem.`,keyword:'STEERED',answer:`The chairperson steered clear of discussing the funding problem`,rule:'steer clear of + gerund'}),
 (i,c)=>({source:`Her explanation was so clear that nobody could misunderstand the central point.`,keyword:'ROOM',answer:`Her explanation left no room for misunderstanding the central point`,rule:'leave no room for'}),
 (i,c)=>({source:`The two witnesses described the incident in completely different ways.`,keyword:'ODDS',answer:`The two witnesses were at odds over how the incident had happened`,rule:'be at odds over'}),
 (i,c)=>({source:`The unexpected criticism did not make the researcher abandon her argument.`,keyword:'DETERRED',answer:`The researcher was not deterred from pursuing her argument by the unexpected criticism`,rule:'deter someone from + gerund'})
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
