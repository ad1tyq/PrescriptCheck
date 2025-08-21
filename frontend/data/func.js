export const text1 = `extract and give the drug names from this text as only single names in the form of a javascript array in this format : {
    name: 'Amoxicillin',
    type: 'antibiotic',
    dosage: '500mg',
    frequency: '3 times daily',
    status: 'active',
    startDate: '2023-05-15',
    endDate: 'N/A',
  },
  {
    name: 'Ibuprofen',
    type: 'pain-reliever',
    dosage: '200mg',
    frequency: 'as needed',
    status: 'completed',
    startDate: '2023-05-15',
    endDate: '2023-06-15',
  }, and keep the types under this list`;

  export const text2 = `this is my drug history extract and give me the bad drug interaction in between my prescribed drugs only and nothing outside, and keep med names same as in the drug list, only single names, if you find any bad drug interactions, all in the form of a javascript array and no other information outside the array, in the format : HighRisk: [
            {
              med1: "Atorvastatin",
              med2: "Gemfibrozil",
              med3: "Gemfibrozil",
              message: "Risk of severe muscle damage (rhabdomyolysis)",
            },
            {
              med1: "Warfarin",
              med2: "Aspirin",
              message: "Increased risk of bleeding",
            },
          ],
          DosageWarning: [
            {
              med: "Gemfibrozil",
              message: "Dosage exceeds maximum for elderly patients",
            },
            {
              med: "Metformin", 
              message: "Dosage adjustment needed for renal impairment",
            },
          ], and this is my drug history`;