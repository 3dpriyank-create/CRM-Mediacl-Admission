export function conversionRate(total:number,converted:number){return total===0?0:Number(((converted/total)*100).toFixed(2));}
export function revenuePerLead(revenue:number,totalLeads:number){return totalLeads===0?0:Number((revenue/totalLeads).toFixed(2));}
