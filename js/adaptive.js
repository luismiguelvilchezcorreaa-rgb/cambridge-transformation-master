// Phase 6: the adaptive scheduler will prioritize categories with repeated errors.
export function priorityScore(stats={total:0,correct:0}){return stats.total?1-(stats.correct/stats.total):0.5}
