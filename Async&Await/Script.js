console.log("person1: Show Tickets");
console.log("person2: Show Tickets");

const preMovie = async () => {

    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => reject('tickets'),3000);
    });

    let ticket
    try{
        tickets= await promiseWifeBringingTickets;
    } catch(e){
        tickets = 'sad face';

    }

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));

    const getCandy = new Promise((resolve, reject) => resolve('candy'));    
    
    const getCoke = new Promise((resolve, reject) => resolve('coke')); 

    const addButter = new Promise((resolve, reject) => resolve('Butter'));

    const addcoldDrinks = new Promise((resolve, reject) => resolve('coldDrinks'));

    let tickets = await promiseWifeBringingTickets;

    let [ popcorn, candy, coke ] = await Promise.all([getPopcorn,getCandy,getCoke])

    console.log(`${popcorn}, ${candy}, ${coke}`)

    // console.log(`wife: I have the ${tickets}`);
    // console.log('husband: we should go in');
    // console.log('Wife: No I am Hungry');

    // let popcorn = await getPopcorn;
    // console.log(`Husband: I got some ${popcorn}`); 
    // console.log('husband: we should go in');
    // console.log('Wife: I need butter on my popcrorn'); 



    let butter = await addButter;

    console.log(`Husband: I got some ${butter}`); 
    console.log(`Husband:anything else darling`); 
    console.log(`Wife: Lets go we are getting alte`);  
    console.log(`husband: thank you for the reaminder *grins*`); 

    let coldDrinks = await addcoldDrinks;

    console.log(`Wife: I need some ${coldDrinks} also`);
    console.log(`husband: here i got some ${coldDrinks}`)


    



    return tickets; 
};

preMovie().then((m) => console.log( `person3: shows: ${m}`));

// // promiseWifeBringingTickets.then((t) => {
// //     console.log('person3: Show Tickets ${t}');
// // });

// const getPopcorn = promiseWifeBringingTickets.then((t) => {
//     console.log('wife: I have the tickets');
//     console.log('husband: we should go in');
//     console.log('Wife: No I am Hungry');
//     return new Promise((resolve, reject) => resolve('${t} popcorn'));
// });

// const getButter = getPopcorn.then((t) => {
//     console.log('Husband: I got some popcorn'); 
//     console.log('husband: we should go in');
//     console.log('Wife: I need butter on my popcrorn');
//     return new Promise((resolve, reject) => resolve('${t} butter'));
        
// });

// getButter.then((t) => console.log(t));

    console.log("person4: Show Tickets");
    console.log("person5: Show Tickets");



