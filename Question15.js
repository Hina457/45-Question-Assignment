"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guest_list = ['Hina', 'Duaa', 'maria', 'junaid'];
let Not_present = 'junaid';
let New_guest = 'babar azam';
Guest_list[3] = New_guest;
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Respected sir/Madem ' + Guest_list[i] + ',\n we invited you on dinner tommorow.\n\nThank you');
}
console.log(`Mr. ${Not_present} will not coming tommorrow dinner.`);
