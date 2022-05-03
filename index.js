import { DateTime } from "./modules/luxon.js";
import Book from "./modules/book.js"
import UI from "./modules/ui.js"
import Store from "./modules/store.js"



// define the current local time 
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('current-date').innerHTML = currentDate;