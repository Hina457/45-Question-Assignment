
/*Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, and it should return a Object containing 
these two pieces of information. Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly*/


function make_album(Artistname:string,Albumtitle:string){
    return {Artistname,Albumtitle}

}

let album1 = make_album("Ali" ,"Rang_e_Mohabbat");
let album2= make_album("Madad" ,"Roshan Andhera");
let album3 = make_album("Ayaz" ,"Mausam_e_Dil");

console.log(album1);
console.log(album2);
console.log(album3);

/*Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album.*/

 //NUMBER OF TRACKS\\
 function make_album2(Artistname:string,Albumtitle:string,numberoftrack?:number){
    return {Artistname,Albumtitle,numberoftrack}

}

let album4 = make_album2("Ali" ,"Dill hai",40);
let album5= make_album2("Madad" ,"Ajeeb kahani",55);
let album6 = make_album2("Leonardo da Vinci" ,"The Last Supper",20);
console.log(album4)
console.log(album5)
console.log(album6)