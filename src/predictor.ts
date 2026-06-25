import { colleges } from './data';
import type { Category, Course } from './types';
export function predictColleges(input:{score:number;rank:number;category:Category;state:string;budget:number;course?:Course}){
 return colleges.filter(c=>(!input.course||c.course===input.course)&&c.managementQuotaFees<=input.budget*1.15&&input.rank<=c.cutoffRank*1.25).map(c=>{
  const rankFit=Math.max(0,Math.min(1,(c.cutoffRank-input.rank+c.cutoffRank*.25)/(c.cutoffRank*.5)));
  const budgetFit=input.budget>=c.managementQuotaFees?1:input.budget/c.managementQuotaFees;
  const stateBoost=c.state===input.state?.trim()?0.08:0;
  const categoryBoost=input.category==='UR'?0:.05;
  const probability=Math.round(Math.min(.96,rankFit*.65+budgetFit*.22+stateBoost+categoryBoost)*100);
  return {...c,probability,aiReason: probability>75?'Strong score-rank-budget match':'Moderate fit; verify current cutoff and seat matrix'};
 }).sort((a,b)=>b.probability-a.probability);
}
export function leadScore(score:number,status:string,budget:number){return Math.min(100,Math.round(score/8+(status.includes('Payment')?12:0)+(status.includes('Interested')?8:0)+Math.min(15,budget/300000)));}
