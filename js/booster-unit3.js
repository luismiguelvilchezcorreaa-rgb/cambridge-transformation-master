// C2 Booster - Unit 03
// Original practice based only on the unit skill map: Infinitive & -ing forms,
// Arts & Media, and English in Use. No source-book exercise is reproduced.

function tokenise(answer,seed){return answer.replace(/[.?!]$/,'').split(/\s+/).map((word,i)=>({word,n:(i*41+seed*23)%127})).sort((a,b)=>a.n-b.n).map(x=>x.word)}
function q(id,activity,track,category,source,choices,answer,rule,keyword='',glosses={}){
  const mode=keyword?'build':'choice';
  return {id:'b3-'+id,exam:'BOOSTER',cefr:'C2',unit:'Unit 03',activity,track,category,mode,source,keyword,answer:answer.replace(/[.?!]$/,''),choices,tokens:tokenise(answer,Number(id.replace(/\D/g,''))||1),rule,glosses,explanation:`This item tests ${rule}.`,commonError:'Consider the governing verb, intended meaning and voice before selecting the complement.',miniLesson:'Infinitive and -ing choices often encode intention, completion, memory, consequence or an action already in progress.'};
}
function addChoiceSet(prefix,activity,track,category,items){items.forEach(([source,choices,answer,rule],i)=>unit3Questions.push(q(prefix+String(i+1).padStart(2,'0'),activity,track,category,source,choices,answer,rule)))}
function addBuildSet(prefix,activity,track,category,items){items.forEach(([source,keyword,answer,rule],i)=>unit3Questions.push(q(prefix+String(i+1).padStart(2,'0'),activity,track,category,source,[],answer,rule,keyword)))}

export const unit3Questions=[];

// GRAMMAR - 78 items.
addChoiceSet('g1-','Grammar 1 - Infinitive and -ing selection','Grammar','Infinitive & -ing Forms',[
 ['The curator did not know who ___ about the damaged frame.',['to consult','consulting','having consulted','to have consulted'],'to consult','question word followed by a full infinitive'],
 ['A minor technical fault might ___ the entire broadcast.',['disrupt','to disrupt','disrupting','to have disrupted'],'disrupt','bare infinitive after a modal verb'],
 ['The lighting technician is busy ___ the final cues.',['checking','to check','having checked','check'],'checking','be busy followed by an -ing form'],
 ['The panel spent nearly two hours ___ the ethical implications.',['debating','to debate','having to debate','debate'],'debating','spend time followed by an -ing form'],
 ['It takes considerable courage ___ a professional mistake publicly.',['to acknowledge','acknowledging','acknowledge','to be acknowledged'],'to acknowledge','full infinitive after a noun phrase with take'],
 ['There is far too much archival material ___ in a single afternoon.',['to examine','examining','to have examined','being examined'],'to examine','too much plus noun followed by an infinitive'],
 ['Her mentor encouraged her ___ for the international residency.',['to apply','applying','apply','to have applied'],'to apply','verb plus object plus full infinitive'],
 ['The storm forced the organisers ___ the outdoor performance.',['to postpone','postponing','postpone','having postponed'],'to postpone','compel or force plus object plus infinitive'],
 ['Nothing the critic said could make the director ___ his interpretation.',['reconsider','to reconsider','reconsidering','to have reconsidered'],'reconsider','bare infinitive after make in the active voice'],
 ['___ entirely honest, the second act felt unnecessarily long.',['To be','Being','Having been','Be'],'To be','fixed infinitive phrase introducing an opinion'],
 ['The collector was not so careless as ___ the painting in direct sunlight.',['to leave','leaving','leave','to have been left'],'to leave','so plus adjective plus as followed by an infinitive'],
 ['Independent filmmakers tend ___ smaller, more specialised audiences.',['to attract','to have attracted','to be attracting','to be attracted'],'to attract','tend followed by a full infinitive'],
 ['The scholarship gives emerging composers the opportunity ___ abroad.',['to study','studying','study','to have studied'],'to study','infinitive after opportunity'],
 ['She was delighted ___ that her screenplay had reached the final shortlist.',['to discover','discovering','to be discovered','having discover'],'to discover','infinitive after an adjective expressing reaction'],
 ['I cannot recall ___ such an emotionally restrained performance before.',['having seen','to see','see','to have been seeing'],'having seen','perfect -ing form for an earlier remembered experience'],
 ['The artist refused ___ into changing the title of the installation.',['to be pressured','being pressured','to pressure','having pressured'],'to be pressured','passive full infinitive after refuse'],
 ['Would you rather ___ the documentary now or wait for the director’s cut?',['watch','to watch','watching','having watched'],'watch','bare infinitive after would rather'],
 ['The producer suggested ___ a less predictable ending.',['using','to use','use','to have used'],'using','suggest followed by an -ing form'],
 ['The children were mature enough ___ the symbolism in the story.',['to understand','understanding','understand','to be understood'],'to understand','adjective plus enough followed by an infinitive'],
 ['The role involves ___ several demanding dance sequences.',['performing','to perform','perform','to have performed'],'performing','involve followed by an -ing form'],
 ['I dread ___ another last-minute request from the editor.',['receiving','to receive','receive','to be received'],'receiving','dread followed by an -ing form for a feared event'],
 ['We recommend that every applicant ___ a digital portfolio.',['submit','to submit','submitting','having submitted'],'submit','mandative subjunctive after recommend that'],
 ['She cannot imagine ___ anywhere without access to a theatre.',['living','to live','live','to have lived'],'living','imagine followed by an -ing form'],
 ['The audience was sufficiently attentive ___ the subtle change in tone.',['to notice','noticing','notice','to be noticed'],'to notice','adjective plus infinitive expressing result'],
 ['The director proposed ___ the interval until after the second act.',['delaying','to delay','delay','to have delayed'],'delaying','propose followed by an -ing form']
]);

addChoiceSet('g2-','Grammar 2 - Meaning changes','Grammar','Infinitive & -ing Forms',[
 ['Remember ___ the exhibition alarm before you leave tonight.',['to activate','activating','having activated','activate'],'to activate','remember to do for an intended future action'],
 ['I clearly remember ___ this mural during my first visit to Lisbon.',['seeing','to see','see','to have see'],'seeing','remember doing for recall of a past event'],
 ['She forgot ___ the photographer, so the printed programme contained no credit.',['to mention','mentioning','having mentioned','mention'],'to mention','forget to do for an omitted intended action'],
 ['I had completely forgotten ___ that experimental film until you described its ending.',['watching','to watch','watch','to be watching'],'watching','forget doing for failure to recall a past experience'],
 ['We regret ___ you that tonight’s performance has been cancelled.',['to inform','informing','having informed','inform'],'to inform','regret to do for a formal announcement'],
 ['He now regrets ___ the original manuscript without keeping a digital copy.',['selling','to sell','sell','to have sell'],'selling','regret doing for remorse about a past action'],
 ['The technician tried ___ the projector twice, but the fault persisted.',['to restart','restarting','restart','to be restarted'],'to restart','try to do for an unsuccessful attempt'],
 ['If the dialogue sounds unnatural, try ___ the scene at a slower pace.',['rehearsing','to rehearse','rehearse','having rehearsed'],'rehearsing','try doing as an experimental solution'],
 ['The guide stopped ___ a question from a visitor before continuing the tour.',['to answer','answering','answer','having answered'],'to answer','stop to do for an interruption with a new purpose'],
 ['The orchestra stopped ___ as soon as the conductor lowered her hands.',['playing','to play','play','to have played'],'playing','stop doing for the end of an activity'],
 ['After discussing composition, the lecturer went on ___ colour symbolism.',['to examine','examining','examine','to have examined'],'to examine','go on to do for movement to a new activity'],
 ['Despite the interruption, the actor went on ___ as though nothing had happened.',['performing','to perform','perform','to have performed'],'performing','go on doing for continuation'],
 ['Accepting the commission would mean ___ the entire summer abroad.',['spending','to spend','spend','to have spent'],'spending','mean doing for entailment'],
 ['I meant ___ the catalogue yesterday, but the printing office had closed.',['to collect','collecting','collect','to have collected'],'to collect','mean to do for intention'],
 ['The rehearsal room needs ___ before the dancers arrive.',['cleaning','to clean','clean','having cleaned'],'cleaning','need doing with passive meaning'],
 ['I hate ___ this, but the final chapter still needs substantial revision.',['to admit','to be admitting','to have admitted','having admitted'],'to admit','hate plus infinitive for a specific reluctant statement']
]);

addBuildSet('g3-','Grammar 3 - Infinitive and -ing transformations','Grammar','Infinitive & -ing Forms',[
 ['I have absolutely no intention of withdrawing the proposal.','REFUSE','I refuse to withdraw the proposal','refuse plus full infinitive'],
 ['Marta is not sufficiently experienced to direct such a large production.','TOO','Marta is too inexperienced to direct such a large production','too plus adjective plus infinitive'],
 ['I have no recollection of meeting the playwright before.','REMEMBER','I cannot remember meeting the playwright before','remember plus -ing form'],
 ['Long rehearsals were unfamiliar to the new cast.','USED','The new cast was not used to rehearsing for long periods','be used to plus -ing form'],
 ['You should not ignore the copyright restrictions.','UNWISE','It would be unwise to ignore the copyright restrictions','adjective plus infinitive'],
 ['At least attempt the audition; the outcome may surprise you.','TRY','At least try auditioning because the outcome may surprise you','try plus -ing as an experiment'],
 ['Perhaps studying art history will help her interpretation.','BENEFIT','She may benefit from studying art history','benefit from plus -ing form'],
 ['Elena prefers performing in small venues to appearing in stadiums.','RATHER','Elena would rather perform in small venues than appear in stadiums','would rather plus bare infinitive'],
 ['The gallery will probably require renovation next year.','NEED','The gallery will probably need to be renovated next year','need plus passive infinitive'],
 ['It was kind of you to reserve seats for us.','APPRECIATE','We appreciate you reserving seats for us','appreciate plus object plus -ing form'],
 ['Submitting an unfinished manuscript could damage your reputation.','RISK','You risk damaging your reputation by submitting an unfinished manuscript','risk plus -ing form'],
 ['I do not particularly want to attend the press reception.','FEEL','I do not feel like attending the press reception','feel like plus -ing form'],
 ['Meeting the composer in person delights me.','PLEASURE','It is a pleasure to meet the composer in person','noun phrase plus infinitive'],
 ['Restoring this fresco without expert guidance would be dangerous.','DANGER','There is a danger of damaging the fresco without expert guidance','danger of plus -ing form']
]);

addChoiceSet('g4-','Grammar 4 - Advanced complement patterns','Grammar','Infinitive & -ing Forms',[
 ['The archive has digitised enough material ___ researchers worldwide.',['to support','supporting','support','to be supported'],'to support','enough plus noun followed by an infinitive of purpose'],
 ['The soprano is too young ___ a character described as being in her seventies.',['to portray','portraying','portray','to be portrayed'],'to portray','too plus adjective plus infinitive'],
 ['Would you mind asking whether we could ___ before the final curtain?',['leave','to leave','leaving','having left'],'leave','bare infinitive after a modal'],
 ['Please remember ___ the microphones once the interview has finished.',['to switch off','switching off','switch off','having switched off'],'to switch off','remember to do an intended action'],
 ['It was a real nuisance ___ the application from the beginning.',['to have to complete','having completed','to be completing','to have completed'],'to have to complete','infinitive after a noun phrase expressing evaluation'],
 ['There were too few volunteers ___ every entrance safely.',['to supervise','supervising','supervise','to be supervised'],'to supervise','too few plus noun followed by an infinitive'],
 ['The novelist is widely expected ___ for the international prize.',['to be nominated','being nominated','to nominate','having nominated'],'to be nominated','passive infinitive after expect'],
 ['The remote studio was extremely difficult ___ without detailed directions.',['to find','finding','find','to be finding'],'to find','adjective followed by an infinitive with passive interpretation'],
 ['We tried ___ the lens, but the focusing ring remained stuck.',['to loosen','loosening as a habit','loosen','to be loosened'],'to loosen','try to do for a deliberate attempt'],
 ['She regrets ___ the adaptation before reading the original novel.',['criticising','to criticise','criticise','to be criticised'],'criticising','regret plus -ing for a past action'],
 ['The restoration became so costly that the trustees gave up ___ it privately.',['financing','to finance','finance','to have financed'],'financing','give up followed by an -ing form'],
 ['When learning jazz, students need ___ regularly with other musicians.',['to improvise','improvising','to have improvised','to be improvised'],'to improvise','need plus full infinitive for necessary action'],
 ['The tutor let me ___ the antique printing press under supervision.',['use','to use','using','to have used'],'use','bare infinitive after let plus object'],
 ['The choreographer began as she meant ___, with an exceptionally demanding sequence.',['to go on','going on','go on','to have gone on'],'to go on','mean plus infinitive for intention'],
 ['Several participants admitted not knowing how ___ the editing software.',['to operate','operating','operate','to be operating'],'to operate','how followed by a full infinitive'],
 ['The collective decided ___ a short film about disappearing rural traditions.',['to produce','producing','produce','to be produced'],'to produce','decide followed by a full infinitive'],
 ['I was astonished ___ the actor reproduce the accent so accurately.',['to hear','hearing throughout','hear','to be heard'],'to hear','infinitive after an adjective of reaction'],
 ['I had forgotten ___ that essay until I recognised its opening quotation.',['reading','to read','to have read','having to read'],'reading','forget plus -ing for a forgotten memory'],
 ['The museum permits visitors ___ photographs in the sculpture garden.',['to take','taking without an object','take','to have taken'],'to take','permit plus object plus infinitive'],
 ['On her way out, the editor stopped ___ the revised headline on the noticeboard.',['to examine','examining','having examined','to have examined'],'to examine','stop to do for a temporary interruption'],
 ['The percussion teacher advised us ___ the rhythm before playing it.',['to clap','clapping without an object','clap','to have clapped'],'to clap','advise plus object plus full infinitive'],
 ['He wished he had possessed the confidence ___ experimental theatre.',['to pursue','pursuing','pursue','to be pursued'],'to pursue','infinitive after a noun expressing capacity'],
 ['The performers left the stage ___ and waving to the audience.',['laughing','to laugh','laugh','to have laughed'],'laughing','-ing clause adding simultaneous information']
]);

// VOCABULARY - Arts & Media, 121 items. Each option receives a Spanish gloss.
function lexicalSet(prefix,activity,category,entries){
  const glosses=Object.fromEntries(entries.map(([word,es])=>[word,es]));
  const pool=[...new Set(entries.map(([word])=>word))];
  entries.forEach(([answer,,source],i)=>{const alternatives=pool.filter(word=>word!==answer);const choices=[answer,...[1,3,5].map(step=>alternatives[(i+step)%alternatives.length])];unit3Questions.push(q(prefix+String(i+1).padStart(2,'0'),activity,'Vocabulary',category,source,choices,answer,`precise ${category.toLowerCase()} usage`,'',glosses))});
}

lexicalSet('v1-','Vocabulary 1 - Critical description','Arts & Media',[
 ['far-fetched','inverosímil / poco creíble','The final twist is so ___ that it undermines the otherwise realistic drama.'],
 ['spine-chilling','escalofriante','The podcast reconstructs the unsolved case in ___ detail.'],
 ['laboured','forzado / poco natural','The dialogue feels ___, as if every joke had been rewritten too many times.'],
 ['readable','ameno / fácil de leer','Despite its academic subject, the biography is remarkably ___.'],
 ['critical','de la crítica / crítico','The debut novel received widespread ___ acclaim.'],
 ['lowbrow','poco intelectual / de cultura popular','The programme embraces ___ comedy without pretending to be sophisticated.'],
 ['pacy','de ritmo ágil','A ___ narrative keeps the reader engaged across all twelve chapters.'],
 ['rambling','divagante / desordenado','His review is so ___ that its main argument becomes difficult to identify.'],
 ['naturalistic','naturalista / realista','The production uses ___ acting to make the domestic conflict feel authentic.']
]);
lexicalSet('v2-','Vocabulary 2 - Creative verbs','Arts & Media',[
 ['portray','retratar / representar','The mural seeks to ___ the neighbourhood as residents themselves experience it.'],
 ['compose','componer','She was commissioned to ___ an original score for the documentary.'],
 ['animate','animar / dar movimiento','The studio will ___ the hand-drawn characters using stop-motion techniques.'],
 ['audition','hacer una audición','More than two hundred performers will ___ for the leading role.']
]);
lexicalSet('v3-','Vocabulary 3 - Narrative and media nouns','Arts & Media',[
 ['flashback','escena retrospectiva','A brief ___ reveals why the detective distrusts her former partner.'],
 ['backstory','historia previa / trasfondo','The second episode gradually uncovers the antagonist’s ___.'],
 ['page-turner','libro que atrapa','With its short chapters and constant tension, the thriller is a genuine ___.'],
 ['paperback','edición de tapa blanda','The novel will appear in ___ six months after the hardback edition.'],
 ['parody','parodia','The sketch is a clever ___ of celebrity interview programmes.'],
 ['whodunnit','historia de misterio sobre el culpable','The play works as a traditional ___ in which every guest has a motive.'],
 ['biopic','película biográfica','The director is developing a ___ about the pioneering photojournalist.'],
 ['cliffhanger','final de suspenso','The season ends on a ___ that leaves the hero’s fate uncertain.'],
 ['sequel','secuela','The new film is a ___ set twenty years after the original story.'],
 ['subplot','trama secundaria','A comic ___ involving two stagehands balances the darker main story.'],
 ['adaptation','adaptación','The television ___ preserves the novel’s structure but changes its setting.']
]);
lexicalSet('v4-','Vocabulary 4 - Arts phrasal verbs','Phrasal Verbs',[
 ['stand by','respaldar / mantener','The newspaper continues to ___ its investigation despite legal threats.'],
 ['clear away','retirar / despejar','Stagehands must ___ the furniture before the dance sequence.'],
 ['hold back','frenar / impedir avanzar','A limited distribution budget may ___ the independent film.'],
 ['run through','repasar / ensayar rápidamente','Let us ___ the final scene once more before the audience arrives.'],
 ['set out','proponerse / comenzar','The exhibition ___ to challenge conventional ideas of beauty.'],
 ['carry off','lograr con éxito','Only a highly versatile actor could ___ such a demanding double role.'],
 ['bring out','publicar / lanzar','The label plans to ___ a remastered edition in November.'],
 ['take off','despegar / tener éxito repentino','Her illustration career began to ___ after the international award.'],
 ['go into','invertirse / dedicarse a','Months of detailed research ___ each historical episode.'],
 ['hold down','mantener un empleo','Many emerging musicians ___ another job while building their careers.'],
 ['line up','conseguir / programar','The festival has managed to ___ three acclaimed directors for its opening panel.'],
 ['stand up for','defender','The union continues to ___ performers facing unsafe working conditions.'],
 ['store up','guardar / acumular','Writers often ___ fragments of conversation for future characters.'],
 ['plunge into','sumergirse en','The residency allows participants to ___ an unfamiliar artistic tradition.']
]);
lexicalSet('v5-','Vocabulary 5 - Arts prepositions','Prepositions',[
 ['in','en','The novelist quietly exulted ___ the unexpected success of her first book.'],
 ['by','por','The children were completely entranced ___ the shadow-puppet performance.'],
 ['to','a','Please return the borrowed score ___ the music library by Friday.'],
 ['on','en / sobre','The final sequence was shot ___ location in the Peruvian Andes.'],
 ['to','a','Admission ___ the retrospective is free for students.'],
 ['of','de','The illustrator is confident ___ completing the commission on time.'],
 ['with','con','The artist depicts urban isolation ___ muted colours and empty spaces.'],
 ['in','en','Most of the feature was animated ___ 3D, with a few hand-drawn scenes.'],
 ['for','para','More than eighty singers auditioned ___ the chorus.'],
 ['about','sobre','The documentary is ___ communities rebuilding after natural disasters.'],
 ['in','en','The protagonist becomes implicated ___ an elaborate art theft.'],
 ['for','para','Being nominated ___ the prize transformed the composer’s career.'],
 ['from','de','The central character suffers ___ temporary memory loss.'],
 ['on','en','The screenplay is loosely based ___ the journalist’s memoir.'],
 ['in','en','I became so engrossed ___ the novel that I missed my stop.']
]);
lexicalSet('v6-','Vocabulary 6 - Arts collocations','Collocations',[
 ['profile','perfil','The documentary offers a detailed ___ of the celebrated architect.'],
 ['gig','concierto / presentación','The band played an intimate ___ at a converted warehouse.'],
 ['compose','componer','Several students were invited to ___ music for the short film.'],
 ['runaway','rotundo / inesperadamente exitoso','The modestly funded comedy became a ___ hit.'],
 ['gifted','talentoso / dotado','Even as a child, she was recognised as a ___ violinist.'],
 ['chair','presidir','A cultural historian will ___ the discussion after the screening.'],
 ['effort','esfuerzo','An extraordinary amount of ___ went into recreating the period costumes.'],
 ['big','gran','The actor got his first ___ break in a regional television drama.'],
 ['loyal','fiel','The podcast has developed a small but intensely ___ following.'],
 ['debut','debut / primer','Her ___ album combines Andean instruments with electronic production.'],
 ['classical','clásica','The station broadcasts contemporary jazz and ___ music.']
]);
lexicalSet('v7-','Vocabulary 7 - Arts fixed expressions','Fixed Expressions',[
 ['call him names','insultarlo / ponerle apodos ofensivos','Anonymous users began to ___ after the critic published his review.'],
 ['the opening night','la noche del estreno','The entire creative team attended ___ of the new production.'],
 ['take a bow','hacer una reverencia','The conductor returned to the stage to ___ after the prolonged applause.'],
 ['a leading role','un papel protagonista','The young performer secured ___ in the historical drama.'],
 ['a lost cause','una causa perdida','Restoring the water-damaged negatives initially seemed ___.'],
 ['have the cheek to','tener el descaro de','One spectator ___ demand a refund after arriving an hour late.'],
 ['movie trailer','tráiler de película','The ninety-second ___ reveals the setting without spoiling the plot.'],
 ['play it by ear','improvisar / decidir sobre la marcha','The outdoor concert depends on the weather, so we will ___.'],
 ['along the lines of','similar a / en la línea de','The producer wants something ___ a visual essay rather than a conventional documentary.'],
 ['strum a guitar','rasguear una guitarra','A street musician began to ___ outside the theatre entrance.'],
 ['a red-letter day','un día memorable','Winning the national arts grant was ___ for the small company.'],
 ['a drain on','una carga para / consumir recursos','Some officials wrongly regard community theatres as ___ public finances.'],
 ['save me a seat','guardarme un asiento','If you reach the auditorium first, could you ___ near the aisle?'],
 ['on air','al aire / en emisión','The presenter discovered the microphone was still ___ during the break.'],
 ['chair a meeting','presidir una reunión','The artistic director will ___ with representatives from every venue.'],
 ['on the dole','cobrando subsidio de desempleo','The actor spent six months ___ between touring productions.'],
 ['play it by ear','tocar de oído','The folk musician cannot read notation but can ___ with remarkable accuracy.']
]);
lexicalSet('v8-','Vocabulary 8 - Arts idioms','Idioms',[
 ['with flying colours','con excelentes resultados','The apprentice passed the conservatory audition ___.'],
 ['on the cards','muy probable / previsto','A second international tour is ___ after the sell-out season.'],
 ['beat about the bush','andar con rodeos','The reviewer did not ___ when explaining why the production had failed.'],
 ['take the world by storm','causar sensación mundial','The singer’s first single appeared to ___.'],
 ['pour money down the drain','tirar el dinero','Funding an empty venue indefinitely would be like ___.'],
 ['around the clock','las veinticuatro horas','The editing team worked ___ before the premiere.'],
 ['hot under the collar','enfadado / alterado','The publisher became ___ when reporters questioned the fabricated quotation.'],
 ['a pain in the neck','una molestia','Synchronising the old audio recordings has been ___.'],
 ['at odds with','en desacuerdo / contradicción con','The hostile reviews are ___ the enthusiastic audience response.'],
 ['down in the dumps','desanimado / deprimido','After the funding rejection, the playwright felt ___.'],
 ['in a nutshell','en pocas palabras','___, the exhibition asks who controls public memory.'],
 ['sell like hot cakes','venderse rapidísimo','The limited-edition prints are expected to ___.'],
 ['take it on board','tomarlo en cuenta','The director listened to the criticism and promised to ___.'],
 ['blow your mind','dejarte alucinado','The immersive final room will completely ___.'],
 ['get off on the wrong foot','empezar con mal pie','The interview ___ when the host mispronounced the actor’s name.'],
 ['make a splash','causar sensación','The unknown photographer managed to ___ at the biennale.'],
 ['read between the lines','leer entre líneas','To understand the memoir’s political message, you must ___.'],
 ['on cloud nine','feliz / en las nubes','The composer was ___ after hearing that her work had been selected.'],
 ['get the hang of','cogerle el truco a','It took me several sessions to ___ the animation software.'],
 ['go through the motions','actuar mecánicamente / sin interés','The exhausted actor seemed to ___ during the matinee.']
]);

addBuildSet('v9-','Vocabulary 9 - Arts transformations','Vocabulary','Vocabulary Transformations',[
 ['Have you ever considered changing artistic careers?','MIND','Has it ever crossed your mind to change artistic careers','cross someone’s mind'],
 ['The two sculptures belong to completely different artistic categories.','COMPARISON','There is no comparison between the two sculptures','there is no comparison between'],
 ['The columnist criticises independent cinema continuously.','LIMIT','There is no limit to the columnist’s criticism of independent cinema','there is no limit to'],
 ['We do not normally attend performances this early.','USED','We are not used to attending performances this early','be used to plus -ing'],
 ['What is your impression of the redesigned theatre?','STRIKE','How does the redesigned theatre strike you','how does something strike you'],
 ['The critic shows absolutely no sympathy for inexperienced writers.','DEVOID','The critic is entirely devoid of sympathy for inexperienced writers','be devoid of'],
 ['The documentary will probably receive an award.','CARDS','It is on the cards that the documentary will receive an award','be on the cards'],
 ['We were extremely happy when the gallery accepted our proposal.','MOON','We were over the moon when the gallery accepted our proposal','be over the moon'],
 ['Performers who ignore the safety rules will be dismissed immediately.','SACK','Performers who ignore the safety rules will be given the sack immediately','give someone the sack'],
 ['The editor criticises every draft I submit.','FAULT','The editor is constantly finding fault with every draft I submit','find fault with'],
 ['It does not matter to me which performance we attend.','DIFFERENCE','It makes no difference to me which performance we attend','make no difference'],
 ['Female directors outnumber male directors by three to one at the festival.','TIMES','There are three times as many female directors as male directors at the festival','multiplicative comparison'],
 ['The exhibition will very probably reopen next month.','CHANCE','There is a strong chance that the exhibition will reopen next month','there is a strong chance that'],
 ['The producer disliked the new actor immediately.','DISLIKE','The producer took an instant dislike to the new actor','take a dislike to'],
 ['Could you examine my portfolio briefly before the interview?','CAST','Could you cast an eye over my portfolio before the interview','cast an eye over'],
 ['The singer’s technique has become much better since she changed teachers.','IMPROVED','The singer’s technique has improved considerably since she changed teachers','improve considerably'],
 ['Audiences responded furiously to the cancellation.','DREW','The cancellation drew an angry response from audiences','draw a response from'],
 ['The company has changed substantially under its new director.','UNDERGONE','The company has undergone substantial changes under its new director','undergo changes'],
 ['The understudy is very unlikely to receive the leading role.','PROSPECT','There is little prospect of the understudy receiving the leading role','little prospect of plus -ing'],
 ['The council’s cultural policy contradicts its election promises completely.','CONTRAST','The council’s cultural policy is in stark contrast to its election promises','in stark contrast to']
]);

// ENGLISH IN USE - 32 items.
const wordFormation=[
 ['various','The archive contains ___ interpretations of the same folk song.','VARY'],['seductive','The installation has a visually ___ quality that draws visitors closer.','SEDUCE'],
 ['motionless','The dancer remained completely ___ before the music began.','MOTION'],['inspiration','The composer found unexpected ___ in the sounds of the harbour.','INSPIRE'],
 ['minorities','The festival gives greater visibility to linguistic ___.','MINOR'],['graceful','The performer’s ___ movements concealed the physical difficulty involved.','GRACE'],
 ['precedence','Historical accuracy took ___ over commercial appeal.','PRECEDE'],['precision','The miniature was painted with extraordinary ___.','PRECISE']
];
wordFormation.forEach(([answer,source,base],i)=>unit3Questions.push(q('e1-'+String(i+1).padStart(2,'0'),'English in Use 1 - Word formation','English in Use','Word Formation',`${source} (${base})`,[answer,base.toLowerCase(),answer+'ly','un'+answer],answer,'word formation from the supplied base')));

addBuildSet('e2-','English in Use 2 - Key word transformations','English in Use','Key Word Transformations',[
 ['Everyone was silent when the curator asked who had touched the sculpture.','REMAINED','Everyone remained silent when the curator asked who had touched the sculpture','remain plus adjective'],
 ['Nicolás is certain that rejecting the commission was the correct decision.','REGRETS','Nicolás has no regrets about rejecting the commission','have no regrets about plus -ing'],
 ['They have decided to hold the exhibition in Cusco this winter.','INTENTION','It is their intention to hold the exhibition in Cusco this winter','it is someone’s intention to'],
 ['The announcement shocked the entire cast.','ABACK','The entire cast was taken aback by the announcement','be taken aback by'],
 ['My sole purpose in attending was to meet the illustrator.','REASON','My only reason for attending was to meet the illustrator','reason for plus -ing'],
 ['You will probably relocate before the residency begins.','CHANCES','What are the chances of you relocating before the residency begins','the chances of plus -ing'],
 ['Very few people attended the final screening.','TURNOUT','There was a poor turnout for the final screening','a poor turnout for'],
 ['Security staff forced me to open the equipment case.','MADE','I was made to open the equipment case','passive of make plus full infinitive']
]);

addChoiceSet('e3-','English in Use 3 - Multiple-choice cloze','English in Use','Multiple-choice Cloze',[
 ['The company has challenged established artistic ___.',['conventions','delegations','allowances','specifications'],'conventions','lexical selection in a cloze'],
 ['The proposal has been met with cautious ___.',['optimism','cheerfulness','delight','contentment'],'optimism','collocation cautious optimism'],
 ['A conventional ensemble often promotes a ___ visual uniformity.',['stereotypical','conceptual','accidental','provisional'],'stereotypical','precise adjective in context'],
 ['The symmetrical arrangement was associated with visual ___.',['harmony','coordination','proportioning','sympathy'],'harmony','abstract noun collocation'],
 ['The principal dancer is of Peruvian ___.',['descent','succession','breeding','pedigree'],'descent','be of national descent'],
 ['Artists from diverse cultural ___ now receive greater recognition.',['origins','outsets','sources','inspirations'],'origins','cultural origins collocation'],
 ['Without innovation, the genre risks becoming a perfectly ___ relic.',['preserved','cherished','unspoiled','pristine'],'preserved','past participle describing an unchanged relic'],
 ['Every living artistic tradition must ___ if it is to survive.',['evolve','emerge','elaborate','radiate'],'evolve','verb expressing gradual adaptation']
]);
addChoiceSet('e4-','English in Use 4 - Open cloze','English in Use','Open Cloze',[
 ['The playwright permanently altered the ___ of modern theatre.',['course','route','directional','pathway'],'course','fixed phrase alter the course of'],
 ['The venue remained open ___ repeated objections from local officials.',['despite','although','however','whereas'],'despite','preposition introducing concession'],
 ['Several wealthy spectators wore masks to ___ their identity.',['conceal','reserve','withdraw','suspend'],'conceal','verb fitting identity as its object'],
 ['Afternoon performances depended entirely on natural ___.',['light','clear','bright','shine'],'light','uncountable noun in context'],
 ['People from every social class ___ attended the performances.',['alike','together','equally so','same'],'alike','postpositive adverb after coordinated nouns'],
 ['Audiences actively interacted ___ actors throughout the performance.',['with','to','for','at'],'with','interact with'],
 ['Several seating options were available ___ spectators who could afford them.',['to','for using','with','by'],'to','available to'],
 ['Groundlings stood for the ___ duration of the play.',['entire','complete of','fullest','absolute'],'entire','entire duration collocation']
]);

export const unit3Sections=[
 {track:'Grammar',count:78,description:'Infinitives, bare infinitives, -ing forms, passive and perfect forms, and verbs whose meaning changes with the complement.'},
 {track:'Vocabulary',count:121,description:'Arts & Media: critical language, narrative terms, phrasal verbs, prepositions, collocations, idioms and transformations.'},
 {track:'English in Use',count:32,description:'Word formation, key word transformations, multiple-choice cloze and open cloze at C2 level.'}
];

if(unit3Questions.length!==231) throw new Error(`Unit 03 expected 231 items, got ${unit3Questions.length}`);
