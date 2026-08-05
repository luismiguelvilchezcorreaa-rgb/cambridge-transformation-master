// Load the three independent exam banks. Keeping them separate makes expansion simple.
export async function loadQuestions(){
  const files=['data/cae.json','data/cpe.json','data/ecpe.json'];
  const banks=await Promise.all(files.map(async file=>{
    const response=await fetch(file);
    if(!response.ok) throw new Error(`Could not load ${file}`);
    return response.json();
  }));
  return banks.flat();
}

export const grammarTopics=[
  ['Comparatives','Precise similarity and difference with advanced comparative patterns.','C1–C2'],
  ['Passive Voice','Impersonal and reporting passives used in formal English.','C1–C2'],
  ['Reported Speech','Reporting verbs and the patterns that follow them.','C1–C2'],
  ['Inversion','Auxiliary–subject inversion after negative and restrictive adverbials.','C1–C2'],
  ['Conditionals','Mixed, inverted and implied conditional structures.','C1–C2'],
  ['Modal Verbs','Past deduction, criticism, necessity and unreal meaning.','C1–C2'],
  ['Gerunds','Advanced verbs and expressions followed by -ing forms.','C1–C2'],
  ['Infinitives','Advanced infinitive patterns and meaning contrasts.','C1–C2'],
  ['Relative Clauses','Defining, non-defining and possessive relative structures.','C1–C2'],
  ['Phrasal Verbs','High-level multi-word verbs in formal and informal contexts.','C1–C2'],
  ['Articles','Advanced use and omission of a, an and the.','C2'],
  ['Quantifiers','Precise quantity with hardly any, little, few and related forms.','C2'],
  ['Idioms','High-level idiomatic transformations used in ECPE and CPE.','C1–C2'],
  ['Fixed Expressions','Exam-relevant chunks whose wording cannot be freely changed.','C1–C2'],
  ['Collocations','Natural combinations used in formal and academic English.','C1–C2'],
  ['Nominalisation','Transform clauses and verbs into concise noun phrases.','C2'],
  ['Cleft Sentences','What-clefts and it-clefts for emphasis and focus.','C2'],
  ['Discourse Markers','Concession, contrast, result and cohesive relationships.','C2'],
  ['Formal English','Formal verb-to-noun and phrase transformations.','C2'],
  ['Advanced Structures','Complex emphasis, inversion and clause patterns.','C2'],
  ['Academic English','Concise, formal structures for academic contexts.','C2'],
  ['Vocabulary Transformations','Precise lexical changes that preserve meaning.','C1–C2'],
  ['Verb Patterns','Advanced verb + infinitive, gerund and preposition patterns.','C1–C2'],
  ['Prepositions','Fixed advanced prepositional patterns.','C1–C2'],
  ['Mixed Review','Integrated review of advanced transformation skills.','C1–C2']
];
