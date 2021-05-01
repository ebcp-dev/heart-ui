import { positiveAvg, negativeAvg } from './analysisData'

export const barChart = (patient) => {
  return {
    type: 'bar',
    data: {
      labels: [
        'cp','fbs','restecg','exang','oldpeak','slope','ca','thal'
      ],
      datasets: [
        {
          label: 'You',
          data: [
            patient.cp, patient.fbs, patient.restecg, patient.exang, patient.oldpeak, patient.slope, patient.ca, patient.thal 
          ],
          backgroundColor: 'rgba(153, 102, 255, 0.8)'
        },
        {
          label: 'Avg(Positive)',
          data: [
            positiveAvg.cp, positiveAvg.fbs, positiveAvg.restecg, positiveAvg.exang, positiveAvg.oldpeak, positiveAvg.slope, positiveAvg.ca, positiveAvg.thal 
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.8)'
        },
        {
          label: 'Avg(Negative)',
          data: [
            negativeAvg.cp, negativeAvg.fbs, negativeAvg.restecg, negativeAvg.exang, negativeAvg.oldpeak, negativeAvg.slope, negativeAvg.ca, negativeAvg.thal 
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.8)'
        }
      ]
    },
    options: {
      responsive: true
    }
  }
}

export const ageChart = (patient) => {
  return {
    type: 'bar',
    data: {
      labels: [
        'age (years)'
      ],
      datasets: [
        {
          label: 'You',
          data: [
            patient.age
          ],
          backgroundColor: 'rgba(153, 102, 255, 0.8)'
        },
        {
          label: 'Avg(Positive)',
          data: [
            positiveAvg.age
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.8)'
        },
        {
          label: 'Avg(Negative)',
          data: [
            negativeAvg.age
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.8)'
        }
      ]
    },
    options: {
      responsive: true
    }
  }
}

export const trestbpsChart = (patient) => {
  return {
    type: 'bar',
    data: {
      labels: [
        'trestbps (mm Hg)', 'thalach (bpm)'
      ],
      datasets: [
        {
          label: 'You',
          data: [
            patient.trestbps, patient.thalach
          ],
          backgroundColor: 'rgba(153, 102, 255, 0.8)'
        },
        {
          label: 'Avg(Positive)',
          data: [
            positiveAvg.trestbps, positiveAvg.thalach
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.8)'
        },
        {
          label: 'Avg(Negative)',
          data: [
            negativeAvg.trestbps, negativeAvg.thalach
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.8)'
        }
      ]
    },
    options: {
      responsive: true
    }
  }
}

export const cholChart = (patient) => {
  return {
    type: 'bar',
    data: {
      labels: [
        'Cholesterol (mg/dl)'
      ],
      datasets: [
        {
          label: 'You',
          data: [
            patient.chol
          ],
          backgroundColor: 'rgba(153, 102, 255, 0.8)'
        },
        {
          label: 'Avg(Positive)',
          data: [
            positiveAvg.chol
          ],
          backgroundColor: 'rgba(255, 99, 132, 0.8)'
        },
        {
          label: 'Avg(Negative)',
          data: [
            negativeAvg.chol
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.8)'
        }
      ]
    },
    options: {
      responsive: true
    }
  }
}