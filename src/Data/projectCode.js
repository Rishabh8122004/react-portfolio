/* ==================================================
   PROJECT SOURCE CODE
   The .cpp files in ./code are imported as plain text
   (the ?raw suffix is a Vite feature). The details page
   shows exactly what is inside those files.
================================================== */

import ticTacToe from './code/tic_tac_toe.cpp?raw'
import numberConversion from './code/number_conversion.cpp?raw'
import hospitalManagement from './code/hospital_management.cpp?raw'

const projectCode = {
  'tic-tac-toe': {
    fileName: 'tic_tac_toe.cpp',
    source: ticTacToe,
  },
  'number-conversion-system': {
    fileName: 'number_conversion.cpp',
    source: numberConversion,
  },
  'hospital-management-system': {
    fileName: 'hospital_management.cpp',
    source: hospitalManagement,
  },
}

export default projectCode