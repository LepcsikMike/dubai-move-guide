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
  housingEUR: number;
  utilitiesEUR: number;
  groceriesEUR: number;
  transportEUR: number;
  educationEUR: number;
  entertainmentEUR: number;
  healthcareEUR: number;
  miscEUR: number;
  totalEUR: number;
}

export interface CalculatorInputs {
  housingBudget: number;
  familySize: number;
  schoolAge: number;
  lifestyle: 'budget' | 'moderate' | 'premium' | 'luxury';
}

const AED_TO_EUR = 0.25; // Umrechnungskurs: 1 AED = 0.25 EUR

export const calculateMonthlyCost = ({
  housingBudget,
  familySize,
  schoolAge,
  lifestyle
}: CalculatorInputs): CostBreakdown => {
  // Updated housing cost calculation
  const housingCost = housingBudget;
  
  // Revised utility costs with more accurate scaling
  const utilitiesCost = 800 + (familySize * 200);
  
  // Updated food and groceries cost with inflation and family size consideration
  const groceriesCost = familySize * 1500;
  
  // Transportation costs reflecting Dubai's transportation landscape in 2025
  const transportCost = 2000;
  
  // Education cost adjusted for Dubai's private school market
  const educationCost = schoolAge * 5000;
  
  // Lifestyle multiplier with more nuanced adjustments
  let lifestyleMultiplier = 1;
  switch(lifestyle) {
    case 'budget':
      lifestyleMultiplier = 0.7;
      break;
    case 'moderate':
      lifestyleMultiplier = 1;
      break;
    case 'premium':
      lifestyleMultiplier = 1.5;
      break;
    case 'luxury':
      lifestyleMultiplier = 2.2;
      break;
  }
  
  // Entertainment and leisure with updated lifestyle considerations
  const entertainmentCost = 2500 * lifestyleMultiplier;
  
  // Healthcare estimate with more comprehensive family coverage
  const healthcareCost = familySize * 500;
  
  // Miscellaneous expenses with inflation and lifestyle impact
  const miscCost = 1500 * lifestyleMultiplier;
  
  // Total monthly cost calculation
  const totalCost = (housingCost + utilitiesCost + groceriesCost + transportCost + 
                     educationCost + entertainmentCost + healthcareCost + miscCost);
  
  const costs = {
    housing: housingCost,
    utilities: utilitiesCost,
    groceries: groceriesCost,
    transport: transportCost,
    education: educationCost,
    entertainment: entertainmentCost,
    healthcare: healthcareCost,
    misc: miscCost,
    total: totalCost,
    // Euro conversions
    housingEUR: Math.round(housingCost * AED_TO_EUR),
    utilitiesEUR: Math.round(utilitiesCost * AED_TO_EUR),
    groceriesEUR: Math.round(groceriesCost * AED_TO_EUR),
    transportEUR: Math.round(transportCost * AED_TO_EUR),
    educationEUR: Math.round(educationCost * AED_TO_EUR),
    entertainmentEUR: Math.round(entertainmentCost * AED_TO_EUR),
    healthcareEUR: Math.round(healthcareCost * AED_TO_EUR),
    miscEUR: Math.round(miscCost * AED_TO_EUR),
    totalEUR: Math.round(totalCost * AED_TO_EUR)
  };

  return costs;
};
