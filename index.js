import { DateTime } from "./modules/luxon.js";



// define the current local time 
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current-date').innerHTML = currentDate;