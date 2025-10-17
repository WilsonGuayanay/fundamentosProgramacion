// Tarea de ciclos

export let base: number = 10;
let limit: number = 50;


// for (let i = 1; i <= 50; i++) {
//     console.log(base, ' x ', i, '=', base * i);
//     limit--;
// }

console.log(" ========================= ");

// let i = 1;
// while (i <= limit) {
//     console.log(base, ' x ', i, '=', base * i);
//     i++;
// }


let i = 1;
do {
    console.log(base, ' x ', i, '=', base * i);
    i++;

}
while (i <= limit);