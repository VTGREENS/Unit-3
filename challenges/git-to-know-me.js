
let leif = {
    name: 'Leif',
    age: 35,
    graduatedHSYear: 2005,
    Pets: true,
    petNames: ['Apu'],
    mostRecentMovieWatched: 'The Three Amigos',
    carsOwned: [{make:'Mazda', model: 'B3000 Truck', year: 2001,}],
    favoriteSinger: 'Phish',
}

let jonas = {
    name: 'Jonas',
    age: 18,
    graduatedHSYear: null,
    Pets: true,
    petNames: ['penney', 'djin'],
    mostRecentMovieWatched: 'lil ballzac 2',
    carsOwned: [{make:'Ford', model: 'E450',}],
    favoriteSinger: 'Illenium'
}

let danika = {
    name: 'Danika',
    age: 31,
    graduatedHSYear: 2009,
    Pets: true,
    petNames: ['Shoki'],
    mostRecentMovieWatched: 'Spaceship Earth',
    carsOwned: [{make:'Subaru', model: 'Impreza'}],
    favoriteSinger: 'Sharon Van Etten'
}


let groupArray = [leif, jonas, danika];
// console.log(groupArray);


/* 


Students will then create an array with everyone's info from the variables they created. 

For the final part -  console log a sentence from the newly created array. 
"There were  3 . people in our group. Their names were  Rob , Ted,  Fred.  Rob graduated in 1998. Ted's favorite singer is Michael jackson. And Fred does not have any pets."

*/

console.log(`There were ${groupArray.length} people in our group. Their names are 
${groupArray[0].name}, ${groupArray[1].name}, and ${groupArray[2].name}. ${groupArray[0].name} graduated Highschool in ${groupArray[0].graduatedHSYear}. ${groupArray[1].name}'s favorite singer is ${groupArray[1].favoriteSinger} and ${groupArray[2].name} has ${groupArray[2].petNames.length} pet.`)

/*Output: There were 3 people in our group. Their names are 
Leif, Jonas, and Danika. Leif graduated Highschool in 2005. Jonas's favorite singer is Illenium and Danika has 1 pet.*/
