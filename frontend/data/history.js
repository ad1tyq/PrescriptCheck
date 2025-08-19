const prescriptionHistory = [
  {
    id: 'RX1001',
    patientName: 'John Doe',
    doctorName: 'Dr. Sarah Smith',
    startDate: '2023-05-15',
    endDate: '2023-06-15',
    medicines: [
      {
        name: 'Amoxicillin',
        type: 'antibiotic',
        dosage: '500mg',
        frequency: '3 times daily',
        status: 'completed'
      },
      {
        name: 'Ibuprofen',
        type: 'pain-reliever',
        dosage: '200mg',
        frequency: 'as needed',
        status: 'completed'
      }
    ],
    status: 'completed',
    pharmacy: 'CVS Pharmacy #1234'
  },
  {
    id: 'RX1002',
    patientName: 'John Doe',
    doctorName: 'Dr. Michael Johnson',
    startDate: '2023-07-01',
    endDate: '2023-10-01',
    medicines: [
      {
        name: 'Atorvastatin',
        type: 'cholesterol',
        dosage: '20mg',
        frequency: 'once daily at bedtime',
        status: 'active'
      }
    ],
    status: 'active',
    pharmacy: 'Walgreens #5678'
  },
  {
    id: 'RX1003',
    patientName: 'John Doe',
    doctorName: 'Dr. Emily Chen',
    startDate: '2023-08-10',
    endDate: '2023-08-20',
    medicines: [
      {
        name: 'Lisinopril',
        type: 'blood-pressure',
        dosage: '10mg',
        frequency: 'once daily',
        status: 'completed'
      },
      {
        name: 'Metformin',
        type: 'diabetes',
        dosage: '500mg',
        frequency: 'twice daily',
        status: 'completed'
      }
    ],
    status: 'completed',
    pharmacy: 'Rite Aid #9012'
  },
  {
    id: 'RX1004',
    patientName: 'John Doe',
    doctorName: 'Dr. Robert Wilson',
    startDate: '2023-09-05',
    endDate: '2023-12-05',
    medicines: [
      {
        name: 'Albuterol Inhaler',
        type: 'asthma',
        dosage: '90mcg/spray',
        frequency: '2 puffs every 4-6 hours as needed',
        status: 'active'
      },
      {
        name: 'Fluticasone Nasal Spray',
        type: 'allergy',
        dosage: '50mcg/spray',
        frequency: '1 spray each nostril daily',
        status: 'active'
      }
    ],
    status: 'active',
    pharmacy: 'Kroger Pharmacy #3456'
  },
  {
    id: 'RX1005',
    patientName: 'John Doe',
    doctorName: 'Dr. Sarah Smith',
    startDate: '2023-11-01',
    endDate: '2023-11-10',
    medicines: [
      {
        name: 'Azithromycin',
        type: 'antibiotic',
        dosage: '250mg',
        frequency: '2 tablets on day 1, then 1 daily',
        status: 'completed'
      },
      {
        name: 'Guaifenesin',
        type: 'cough',
        dosage: '600mg',
        frequency: 'every 12 hours',
        status: 'completed'
      }
    ],
    status: 'completed',
    pharmacy: 'Walmart Pharmacy #7890'
  }
];

export default prescriptionHistory;