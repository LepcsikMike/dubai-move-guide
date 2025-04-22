
export interface CostBreakdown {
  housing: number;
  utilities: number;
  groceries: number;
  transport: number;
  education: number;
  entertainment: number;
  healthcare: number;
  misc: number;
  total: number;
}

export interface CalculatorInputs {
  housingBudget: number;
  familySize: number;
  schoolAge: number;
  lifestyle: 'budget' | 'moderate' | 'premium' | 'luxury';
}

export const calculateMonthlyCost = ({
  housingBudget,
  familySize,
  schoolAge,
  lifestyle
}: CalculatorInputs): CostBreakdown => {
  // Basic housing cost based on input
  const housingCost = housingBudget;
  
  // Utility costs (adjust with family size)
  const utilitiesCost = 500 + (familySize * 150);
  
  // Food and groceries
  const groceriesCost = familySize * 1200;
  
  // Transportation
  const transportCost = 1500;
  
  // Education cost per child in school
  const educationCost = schoolAge * 3500;
  
  // Lifestyle multiplier
  let lifestyleMultiplier = 1;
  switch(lifestyle) {
    case 'budget':
      lifestyleMultiplier = 0.8;
      break;
    case 'moderate':
      lifestyleMultiplier = 1;
      break;
    case 'premium':
      lifestyleMultiplier = 1.3;
      break;
    case 'luxury':
      lifestyleMultiplier = 1.8;
      break;
  }
  
  // Entertainment and leisure
  const entertainmentCost = 2000 * lifestyleMultiplier;
  
  // Healthcare estimate
  const healthcareCost = familySize * 300;
  
  // Miscellaneous
  const miscCost = 1000 * lifestyleMultiplier;
  
  // Total monthly cost
  const totalCost = (housingCost + utilitiesCost + groceriesCost + transportCost + 
                     educationCost + entertainmentCost + healthcareCost + miscCost);
  
  return {
    housing: housingCost,
    utilities: utilitiesCost,
    groceries: groceriesCost,
    transport: transportCost,
    education: educationCost,
    entertainment: entertainmentCost,
    healthcare: healthcareCost,
    misc: miscCost,
    total: totalCost
  };
};
