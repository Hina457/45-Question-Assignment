

/*Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array
  to show that you have one array of the original names and one array with the Great added to each magician’s name.*/


  let magiciansnames: string [] = ["Teller","Dynamo","Criss Angel"]

  //making  a copy of an array 
  let magiciansnamescopy =[...magiciansnames];

 function show_magicians (greet : string){
    let withgreetings ="";
    for(let item of magiciansnamescopy){
       withgreetings += `${greet} ${item}`
    }
    return withgreetings;
 };

 let mygreetings = show_magicians(" hello");
 let makearray = mygreetings.split(`\n`);
 console.log(makearray);