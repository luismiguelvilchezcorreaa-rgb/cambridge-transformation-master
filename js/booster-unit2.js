// C2 Booster - Unit 02
// Original practice inspired only by the unit's skill map: Modal Verbs,
// Work & Careers, and English in Use. No book exercise is reproduced verbatim.

const people=['Amira','Theo','Maya','Daniel','Sofia','Leo','Nina','Omar','Chloe','Ethan','Priya','Lucas'];
const places=['the research centre','the design studio','the regional office','the legal department','the training centre','the city council'];

function tokens(answer,seed){return answer.replace(/[.?!]$/,'').split(/\s+/).map((word,i)=>({word,n:(i*37+seed*19)%113})).sort((a,b)=>a.n-b.n).map(x=>x.word)}
function item(id,activity,track,category,source,choices,answer,rule,keyword=''){
  const mode=keyword?'build':'choice';
  return {id:'b2-'+id,exam:'BOOSTER',cefr:'C2',unit:'Unit 02',activity,track,category,mode,source,keyword,answer:answer.replace(/[.?!]$/,''),choices,tokens:tokens(answer,Number(id.replace(/\D/g,''))||1),rule,explanation:`This item practises ${rule}.`,commonError:'Check the precise meaning, register and grammatical pattern before answering.',miniLesson:'At C2, small differences in modality and lexical pattern can change stance, certainty or implication.'};
}
function variantSource(source,i,span){const cycle=Math.floor(i/span);if(!cycle)return source;const lead=cycle===1?'In a later workplace scenario, ':'In a follow-up scenario, ';return lead+source.charAt(0).toLowerCase()+source.slice(1)}
function addChoice(list,prefix,count,activity,track,category,patterns){for(let i=0;i<count;i++){const x=patterns[i%patterns.length](i);list.push(item(prefix+String(i+1).padStart(2,'0'),activity,track,category,variantSource(x.source,i,patterns.length),x.choices,x.answer,x.rule))}}
function addBuild(list,prefix,count,activity,patterns){for(let i=0;i<count;i++){const x=patterns[i%patterns.length](i);list.push(item(prefix+String(i+1).padStart(2,'0'),activity,'Grammar','Modal Verbs',variantSource(x.source,i,patterns.length),[],x.answer,x.rule,x.keyword))}}

export const unit2Questions=[];

// GRAMMAR — 91 items: modal verbs and semi-modals.
const modalChoice=[
 i=>({source:`${people[i%people.length]} has been working for twelve hours. She ___ be exhausted.`,choices:['must','can','ought','would'],answer:'must',rule:'must for a strong present deduction'}),
 i=>({source:`That ___ be ${people[(i+2)%people.length]} at the door; she is in Bogotá this week.`,choices:["can't",'must','should','need'],answer:"can't",rule:"can't for logical impossibility"}),
 i=>({source:`The lights are still on, so the team ___ still be inside.`,choices:['may','has to','ought','used to'],answer:'may',rule:'may for present possibility'}),
 i=>({source:`You ___ submit the form today; Friday is the final deadline.`,choices:["don't have to",'must not','cannot','would not'],answer:"don't have to",rule:'lack of present necessity'}),
 i=>({source:`Visitors ___ enter the laboratory without protective equipment.`,choices:['must not','need not','would not','might not have'],answer:'must not',rule:'must not for prohibition'}),
 i=>({source:`When ${people[i%people.length]} was six, he ___ already read fluently in two languages.`,choices:['could','must','shall','may'],answer:'could',rule:'could for general past ability'}),
 i=>({source:`After three attempts, the engineers ___ restore the archived files.`,choices:['were able to','could always','must have','used to'],answer:'were able to',rule:'be able to for a specific successful past action'}),
 i=>({source:`You ___ have checked the figures before presenting them to the board.`,choices:['should','may','can','will'],answer:'should',rule:'should have for past criticism'}),
 i=>({source:`I ___ have left my badge at reception; I cannot find it anywhere.`,choices:['might','shall','need','ought'],answer:'might',rule:'might have for uncertain past possibility'}),
 i=>({source:`The parcel ___ have arrived yesterday; the courier has confirmed delivery.`,choices:['must','would rather','need','used to'],answer:'must',rule:'must have for strong past deduction'}),
 i=>({source:`You ___ have brought food; the organisers provided lunch for everyone.`,choices:["needn't",'must not','cannot','should not'],answer:"needn't",rule:"needn't have for an unnecessary completed action"}),
 i=>({source:`___ I open the window, or would you prefer it closed?`,choices:['Shall','Must','Need','Would have'],answer:'Shall',rule:'shall for an offer'}),
 i=>({source:`You ___ speak to the careers adviser before rejecting the offer.`,choices:['should','can have','must have','used to'],answer:'should',rule:'should for advice'}),
 i=>({source:`Employees ___ wear their ID cards while on the premises.`,choices:['have to','might have','would rather','could have'],answer:'have to',rule:'have to for external obligation'}),
 i=>({source:`Applicants ___ provide two references under the new regulations.`,choices:['are required to','might as well','used to','would'],answer:'are required to',rule:'formal expression of obligation'}),
 i=>({source:`You ___ tell anyone what I am about to show you.`,choices:["mustn't", "needn't",'may not have','would not have'],answer:"mustn't",rule:'must not for emphatic prohibition'})
];
addChoice(unit2Questions,'g1-',32,'Grammar 1 - Modal choice','Grammar','Modal Verbs',modalChoice);

const modalBuild=[
 i=>({source:`It is almost certain that ${people[i%people.length]} misunderstood the final instruction.`,keyword:'MUST',answer:`${people[i%people.length]} must have misunderstood the final instruction`,rule:'must have + past participle for past deduction'}),
 i=>({source:`Perhaps the committee overlooked one of the attachments.`,keyword:'MAY',answer:'The committee may have overlooked one of the attachments',rule:'may have + past participle for past possibility'}),
 i=>({source:`It was unnecessary for us to reserve seats, but we did.`,keyword:'NEED',answer:"We needn't have reserved seats",rule:"needn't have for unnecessary past action"}),
 i=>({source:`I regret not asking for clarification before I signed.`,keyword:'SHOULD',answer:'I should have asked for clarification before I signed',rule:'should have for past regret'}),
 i=>({source:`There is no possibility that ${people[(i+1)%people.length]} wrote this anonymous note.`,keyword:'CAN',answer:`${people[(i+1)%people.length]} can't have written this anonymous note`,rule:"can't have for impossible past deduction"}),
 i=>({source:`The rules oblige every contractor to wear a security pass.`,keyword:'HAS',answer:'Every contractor has to wear a security pass',rule:'have to for externally imposed obligation'}),
 i=>({source:`It would be sensible for you to keep a copy of every receipt.`,keyword:'BETTER',answer:"You had better keep a copy of every receipt",rule:'had better for strong advice'}),
 i=>({source:`The storm prevented the helicopter from landing, but it succeeded later.`,keyword:'ABLE',answer:'The helicopter was eventually able to land',rule:'be able to for a specific achievement'})
];
addBuild(unit2Questions,'g2-',16,'Grammar 2 - Modal transformations',modalBuild);

const modalBuild2=[
 i=>({source:`I am sure ${people[i%people.length]} did not intentionally delete the folder.`,keyword:'CAN',answer:`${people[i%people.length]} can't have intentionally deleted the folder`,rule:"can't have for a negative past deduction"}),
 i=>({source:`It is possible that the negotiations finished earlier than expected.`,keyword:'MIGHT',answer:'The negotiations might have finished earlier than expected',rule:'might have for past possibility'}),
 i=>({source:`The guide says we are not allowed to photograph the manuscripts.`,keyword:'MUST',answer:'We must not photograph the manuscripts',rule:'must not for prohibition'}),
 i=>({source:`It was wrong of me to dismiss her concern so quickly.`,keyword:'OUGHT',answer:'I ought not to have dismissed her concern so quickly',rule:'ought not to have for past criticism'}),
 i=>({source:`There was no requirement for staff to attend in person.`,keyword:'HAVE',answer:'Staff did not have to attend in person',rule:'did not have to for absence of past necessity'}),
 i=>({source:`Perhaps ${people[(i+3)%people.length]} is waiting in the other building.`,keyword:'COULD',answer:`${people[(i+3)%people.length]} could be waiting in the other building`,rule:'could for present possibility'}),
 i=>({source:`I recommend that you do not postpone the medical appointment.`,keyword:'SHOULD',answer:'You should not postpone the medical appointment',rule:'should for advice'}),
 i=>({source:`In my childhood, our neighbours regularly shared produce from their garden.`,keyword:'WOULD',answer:'Our neighbours would regularly share produce from their garden',rule:'would for repeated past habits'}),
 i=>({source:`The evidence strongly suggests that the figures were altered.`,keyword:'MUST',answer:'The figures must have been altered',rule:'modal perfect passive deduction'}),
 i=>({source:`Would you mind helping me move this cabinet?`,keyword:'COULD',answer:'Could you help me move this cabinet',rule:'could for a polite request'})
];
addBuild(unit2Questions,'g3-',20,'Grammar 3 - Advanced modal transformations',modalBuild2);
addChoice(unit2Questions,'g4-',23,'Grammar 4 - Modal meaning in context','Grammar','Modal Verbs',[
 i=>({source:`The meeting ___ finish by six, but that depends on the final vote.`,choices:['might','must have','used to','has got to'],answer:'might',rule:'might for tentative future possibility'}),
 i=>({source:`You ___ smoke anywhere on the hospital grounds.`,choices:["aren't allowed to", "don't need to",'might not have','would not'],answer:"aren't allowed to",rule:'be allowed to in the negative for prohibition'}),
 i=>({source:`I ___ rather discuss the details privately, if you do not mind.`,choices:['would','must','can','shall have'],answer:'would',rule:'would rather for preference'}),
 i=>({source:`There ___ to be a pharmacy here, before the building was renovated.`,choices:['used','must','ought','could have'],answer:'used',rule:'used to for a past state no longer true'}),
 i=>({source:`How ___ you accuse her without checking the evidence first?`,choices:['dare','need','must','shall'],answer:'dare',rule:'dare as a semi-modal expressing indignation'}),
 i=>({source:`We ___ as well take the earlier train; there is nothing else to do here.`,choices:['might','must have','need','used'],answer:'might',rule:'might as well for a reasonable course of action'}),
 i=>({source:`All expenses ___ be supported by original receipts.`,choices:['must','could have','would rather','used to'],answer:'must',rule:'must for formal necessity'}),
 i=>({source:`The new software ___ to reduce processing time considerably.`,choices:['should','can have','must have','need not have'],answer:'should',rule:'should for reasonable expectation'})
]);

// VOCABULARY — Work & Careers, 118 items.
function lexicalSet(prefix,activity,category,entries,wrong=['position','task','office']){entries.forEach(([answer,source],i)=>unit2Questions.push(item(prefix+String(i+1).padStart(2,'0'),activity,'Vocabulary',category,source,[answer,...wrong].slice(0,4),answer,`precise ${category.toLowerCase()} usage`)))}
lexicalSet('v1-','Vocabulary 1 - Workplace language','Work & Careers',[
 ['boardroom','The final merger proposal will be discussed in the ___.'],['casual','The company permits ___ dress on Fridays.'],['counterpart','Our finance director met her Canadian ___ during the summit.'],['dismissal','Repeated breaches of safety rules may result in ___.'],['enterprise','The family ___ now exports to twelve countries.'],['establishment','The hotel is a long-standing local ___.'],['mission','Our central ___ is to make legal advice accessible.'],['overloaded','The support team is ___ with requests after the launch.'],['overworked','Several junior doctors said they felt seriously ___.'],['resignation','The minister unexpectedly announced her ___.'],['stock','Staff were offered company ___ as part of the package.'],['takeover','The hostile ___ was rejected by the board.'],['turnover','Employee ___ fell after flexible hours were introduced.'],['vacancy','There is a ___ for a senior laboratory technician.'],['venture','Their first commercial ___ attracted international investors.'],['vocation','For her, teaching is a ___ rather than merely a job.']
]);
lexicalSet('v2-','Vocabulary 2 - Jobs and people','Work & Careers',[
 ['adviser','A financial ___ helped us compare the pension schemes.'],['archaeologist','The ___ documented pottery found beneath the old station.'],['counsellor','The college ___ supports students facing personal difficulties.'],['developer','A software ___ redesigned the booking system.'],['executive','The senior ___ presented the strategy to shareholders.'],['jobseeker','Each ___ can request a free CV review.'],['miner','The former ___ described conditions underground.'],['official','A government ___ confirmed the new employment figures.'],['personnel','Only authorised ___ may enter the control room.'],['recruit','The new ___ completed an intensive induction programme.'],['solicitor','Her ___ reviewed every clause before she signed.'],['striker','Each ___ returned to work after the agreement was reached.'],['successor','The outgoing director has not yet named a ___.'],['supervisor','Ask your ___ to approve any change of shift.'],['technician','A laboratory ___ calibrated the equipment this morning.'],['trainee','Every graduate ___ rotates through three departments.']
]);
lexicalSet('v3-','Vocabulary 3 - Phrasal verbs','Phrasal Verbs',[
 ['bear with','Please ___ us while the payroll system is being upgraded.'],['break into','She hopes to ___ the highly competitive games industry.'],['break up','The mediator tried to ___ the argument between two colleagues.'],['bring off','The tiny team managed to ___ an extraordinarily complex launch.'],['call off','Management may ___ the interviews because of the transport strike.'],['catch on','The new scheduling method quickly began to ___ across the company.'],['cut off','The supplier threatened to ___ credit if the invoices remained unpaid.'],['drop off','Productivity tends to ___ late in an excessively long shift.'],['give away','Do not ___ confidential salary information during negotiations.'],['lay off','The factory may have to ___ temporary workers this winter.'],['live on','It is difficult to ___ an entry-level wage in the city centre.'],['look over','Could you ___ my contract before I sign it?'],['stand in for','Maya will ___ the operations manager during his absence.'],['stand out','A concise portfolio can help an applicant ___ from the crowd.'],['stand up for','Good managers ___ staff who are treated unfairly.'],['take to','He immediately ___ remote working and became more productive.']
],['phase out','turn over','make up']);
lexicalSet('v4-','Vocabulary 4 - Prepositions','Prepositions',[
 ['in','She has considerable choice ___ how she organises her team.'],['with','The new procedure is consistent ___ current safety guidance.'],['at','The service was launched ___ an introductory price.'],['to','The revised terms were agreeable ___ both parties.'],['to','Access is confined ___ accredited researchers.'],['about','Several employees felt apprehensive ___ the restructuring.'],['of','More is being required ___ supervisors than ever before.'],['for','His disregard ___ basic procedure caused avoidable delays.'],['with','The client was delighted ___ the final prototype.'],['of','She sits on the board ___ a renewable-energy company.']
],['on','from','by']);
lexicalSet('v5-','Vocabulary 5 - Collocations','Collocations',[
 ['agreement','After hours of negotiation, both sides finally came to an ___.'],['resignation','The chair was asked to submit her ___.'],['wrongful','The tribunal awarded compensation for ___ dismissal.'],['labour','The industry once depended heavily on cheap ___.'],['dispute','A bitter ___ over working hours continued for months.'],['promotion','He earned a ___ after successfully leading the expansion.'],['rewarding','Community medicine can be an intensely ___ job.'],['entry-level','The scheme creates ___ jobs for recent graduates.'],['landed','After six interviews, she finally ___ a job in publishing.'],['living','Many freelancers struggle to make a stable ___.'],['minimum','The employer offered only the bare ___.']
],['career','salary','contract']);

lexicalSet('v6-','Vocabulary 6 - Idiomatic work English','Idioms',[
 ['spoilt for choice','With six excellent offers, the graduate was ___.'],['feel it in my bones','I cannot prove the promotion is coming, but I can ___.'],['rings a bell','The company name ___, although I cannot remember where I heard it.'],['on the line','One serious compliance failure could put his job ___.'],['makes my blood boil','Seeing interns exploited for free labour really ___.'],['break even','The start-up expects to ___ by the end of its second year.'],['broke','After the venture failed, the founder was virtually ___.'],['out of the blue','The invitation to join the board arrived completely ___.'],['by and large','___, employees have welcomed the four-day trial.'],['hold down','He found it hard to ___ a full-time job while caring for his father.'],['carries weight','Her recommendation ___ because she has decades of experience.'],['best of both worlds','Hybrid work can offer the ___: autonomy and regular contact.'],['on track','The recruitment drive is ___ to meet its target.'],['in safe hands','With Priya managing the account, the client is ___.'],['red tape','The small business spent months dealing with unnecessary ___.'],['climb the ladder','She is ambitious but unwilling to sacrifice everything just to ___.'],['learn the ropes','New staff receive a mentor to help them ___.']
],['under pressure','in charge','at work']);
lexicalSet('v7-','Vocabulary 7 - Career language','Fixed Expressions',[
 ['labour market','Graduates are entering a highly competitive ___.'],['living wage','Campaigners argue that every employee deserves a ___.'],['steady job','After years of freelancing, he wanted a ___.'],['menial work','The internship consisted largely of repetitive, ___ rather than training.'],['might as well','The office is empty, so we ___ finish the meeting online.'],['make her way','She had to ___ in an industry with few established contacts.'],['internship','A summer ___ gave him his first experience of publishing.'],['out of a job','Automation left several temporary staff ___.'],['skeleton crew','A ___ kept essential services running over the holiday.'],['gap in the market','The founders spotted a ___ for low-cost translation tools.'],['hanging in the balance','With funding undecided, the entire project is ___.'],['hand in my notice','I intend to ___ once the new contract is confirmed.'],['career change','After fifteen years in banking, she made a radical ___.'],['work overtime','The team had to ___ to meet the regulatory deadline.'],['target market','Researchers interviewed people in the product’s ___.'],['on the panel','Two external specialists will sit ___ for the final interviews.']
],['career path','working day','pay rise']);

const careerBuild=[
 i=>({source:`The unexpected promotion made ${people[i%people.length]} extremely excited.`,keyword:'MOON',answer:`${people[i%people.length]} was over the moon about the unexpected promotion`,rule:'idiomatic expression be over the moon'}),
 i=>({source:`I have absolutely no idea why the director rejected the proposal.`,keyword:'BAFFLED',answer:'I am completely baffled by the director rejecting the proposal',rule:'be baffled by'}),
 i=>({source:`The conference takes place at the same time as our annual review.`,keyword:'COINCIDES',answer:'The conference coincides with our annual review',rule:'coincide with'}),
 i=>({source:`Her mentor encouraged her to apply for the leadership programme.`,keyword:'SPURRED',answer:'Her mentor spurred her on to apply for the leadership programme',rule:'spur someone on to do something'}),
 i=>({source:`Losing that contract eventually created a much better opportunity.`,keyword:'BLESSING',answer:'Losing that contract was a blessing in disguise',rule:'a blessing in disguise'}),
 i=>({source:`The consultant’s fee was surprisingly cheap considering her expertise.`,keyword:'BARGAIN',answer:"The consultant's fee was a real bargain",rule:'a real bargain'}),
 i=>({source:`He is always extremely busy before the end-of-year audit.`,keyword:'BEE',answer:'He is as busy as a bee before the end-of-year audit',rule:'as busy as a bee'}),
 i=>({source:`I always feel nervous just before a major job interview.`,keyword:'BUTTERFLIES',answer:'I always get butterflies before a major job interview',rule:'get butterflies'})
];
for(let i=0;i<16;i++){const x=careerBuild[i%careerBuild.length](i);unit2Questions.push(item('v8-'+String(i+1).padStart(2,'0'),'Vocabulary 8 - Career transformations','Vocabulary','Vocabulary Transformations',variantSource(x.source,i,careerBuild.length),[],x.answer,x.rule,x.keyword))}

// ENGLISH IN USE — 42 items.
const wordFormation=[
 ['privacy','Employees raised concerns about the ___ of biometric data.','PRIVATE'],['international','The firm has built an ___ reputation for sustainable design.','NATION'],['inactive','An ___ account is automatically archived after twelve months.','ACT'],['underestimate','Do not ___ how long the accreditation process can take.','ESTIMATE'],['disconnection','A temporary ___ from the network affected remote staff.','CONNECT'],['justifiable','The additional expense is ___ given the safety improvements.','JUSTIFY'],['strategically','The company is ___ positioned near two major ports.','STRATEGY'],['cancellation','Late ___ of the venue will incur a fee.','CANCEL'],['captivating','Her presentation was so ___ that nobody checked the time.','CAPTURE'],['waterproof','Field engineers are issued with ___ protective cases.','WATER'],['breathless','The steep climb left the survey team ___.','BREATH'],['beneficial','Flexible scheduling has proved ___ for staff retention.','BENEFIT']
];
wordFormation.forEach(([answer,source,keyword],i)=>unit2Questions.push(item('e1-'+String(i+1).padStart(2,'0'),'English in Use 1 - Word formation','English in Use','Word Formation',`${source} (${keyword})`,[answer,keyword.toLowerCase(),answer+'ly','un'+answer],answer,'word formation from the given base')));

const eiuBuild=[
 i=>({source:`I do not know the correct way to approach the selection panel.`,keyword:'HOW',answer:'I do not know how to approach the selection panel',rule:'how + infinitive'}),
 i=>({source:`The company reviews salaries once each year without exception.`,keyword:'EVERY',answer:'The company reviews salaries every single year',rule:'every single + noun for emphasis'}),
 i=>({source:`The new policy is certain to attract criticism.`,keyword:'BOUND',answer:'The new policy is bound to attract criticism',rule:'be bound to for strong likelihood'}),
 i=>({source:`There is no way we can meet the deadline with two people absent.`,keyword:'IMPOSSIBLE',answer:'It is impossible for us to meet the deadline with two people absent',rule:'it is impossible for + infinitive'}),
 i=>({source:`The sudden fall in orders suggests that demand is weakening.`,keyword:'SIGN',answer:'The sudden fall in orders is a sign that demand is weakening',rule:'be a sign that'}),
 i=>({source:`I expect the vacancy to attract more than a hundred applicants.`,keyword:'LIKELY',answer:'The vacancy is likely to attract more than a hundred applicants',rule:'be likely to + infinitive'}),
 i=>({source:`The early shift is convenient for my current circumstances.`,keyword:'SUITS',answer:'The early shift suits my current circumstances',rule:'suit + person or circumstances'}),
 i=>({source:`I do not want to work under that kind of pressure again.`,keyword:'LIKE',answer:'I would not like to work under that kind of pressure again',rule:'would like + infinitive'}),
 i=>({source:`All new staff must attend the safety briefing.`,keyword:'COMPULSORY',answer:'The safety briefing is compulsory for all new staff',rule:'be compulsory for'}),
 i=>({source:`Would it bother you if I joined the meeting remotely?`,keyword:'MIND',answer:'Would you mind if I joined the meeting remotely',rule:'would you mind if + past simple'}),
 i=>({source:`A technical fault stopped us from submitting the application.`,keyword:'PREVENTED',answer:'A technical fault prevented us from submitting the application',rule:'prevent someone from + gerund'}),
 i=>({source:`Company policy does not permit personal devices in this room.`,keyword:'RULES',answer:'It is against the rules to use personal devices in this room',rule:'against the rules to + infinitive'}),
 i=>({source:`The department has reduced its training budget by half.`,keyword:'CUT',answer:'The department has cut its training budget in half',rule:'cut something in half'})
];
eiuBuild.forEach((make,i)=>{const x=make(i);unit2Questions.push(item('e2-'+String(i+1).padStart(2,'0'),'English in Use 2 - Key word transformations','English in Use','Key Word Transformations',x.source,[],x.answer,x.rule,x.keyword))});

const clozeChoices=[
 ['prospect','The ___ of a four-day week attracted hundreds of applicants.',['prospect','outlook','view','scene']],['retain','The company introduced mentoring to ___ experienced staff.',['retain','contain','sustain','detain']],['scope','The new role gives her considerable ___ to shape policy.',['scope','range','extent','size']],['meet','Applicants must ___ all three essential criteria.',['meet','reach','arrive','touch']],['draw','The organisation hopes to ___ on expertise from several sectors.',['draw','pull','drag','take']],['undergo','Successful candidates must ___ a security check.',['undergo','undertake','underlie','overcome']],['eligible','Only employees with two years of service are ___ for the scheme.',['eligible','legible','credible','edible']],['prospects','The qualification should improve her long-term career ___.',['prospects','visions','scenes','aspects']]
];
clozeChoices.forEach(([answer,source,choices],i)=>unit2Questions.push(item('e3-'+String(i+1).padStart(2,'0'),'English in Use 3 - Multiple-choice cloze','English in Use','Multiple-choice Cloze',source,choices,answer,'lexico-grammatical choice in a multiple-choice cloze')));
const openCloze=[
 ['to','The new director is expected ___ take office in September.'],['of','Several members spoke in favour ___ extending the trial.'],['been','Remote work has ___ part of the organisation for years.'],['than','No sooner had the email arrived ___ the phones started ringing.'],['what','The survey revealed ___ employees valued most about the scheme.'],['as','The programme is regarded ___ one of the best in the sector.'],['which','The office was relocated, ___ caused considerable disruption.'],['by','Applications must be submitted ___ noon on Friday.'],['whether','The panel has not decided ___ to appoint internally or advertise.']
];
openCloze.forEach(([answer,source],i)=>unit2Questions.push(item('e4-'+String(i+1).padStart(2,'0'),'English in Use 4 - Open cloze','English in Use','Open Cloze',source,[answer,'at','for','so'].filter((x,j,a)=>a.indexOf(x)===j).slice(0,4),answer,'function word or grammatical linker in open cloze')));

export const unit2Sections=[
 {track:'Grammar',count:91,description:'Modal verbs and semi-modals: deduction, possibility, obligation, permission, ability, advice and modal-perfect transformations.'},
 {track:'Vocabulary',count:118,description:'Work & Careers: professional lexis, roles, phrasal verbs, prepositions, collocations, idioms and transformations.'},
 {track:'English in Use',count:42,description:'Word formation, key word transformations, multiple-choice cloze and open cloze at C2 level.'}
];
