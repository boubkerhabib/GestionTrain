
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 5
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let nextTicketId = 1;
const tickets = [];
const idTicks = 0 ;
const seatNumber = 0;

let prompt = require("prompt-sync")();
do{
    console.log(`

                =================================
                        RAILWAY MANAGER
                =================================

                1. Afficher les trajets
                2. Acheter un ticket
                3. Afficher les tickets
                4. Annuler un ticket
                5. Rechercher un ticket
                6. Filtrer les trajets
                7. Trier les trajets
                0. Quitter



    `)
    var choix = Number(prompt('Votre choix :  '));
    switch(choix){
        case 1: 
                    afficherTrajets();
                    break;
        case 2: 
                    AcheterTicket();
                    break;
        case 3: 
                    afficherTickets();
                    break;
        case 4: 
                    AnnulerTicket();
                    break;
        case 5: 
                    RechercherTicket();
                    break;


        case 6: 
                    filtrerTrajets();
                    break;
        case 7: 
                    trierTrajets();
                    break;

        case 0: 
                    quitter();
                    break;
        default: 
                    console.log("pardon! votre choix n'est pas valide");
                    break;


            
               




    }

}while (choix !== 0);


function quitter(){
    console.log("merci pour votre visite");
}

function afficherTrajets(){
    console.log("=== TRAJETS DISPONIBLES ===");
    for (let i = 0;i < trips.length;i++){
        console.log(`

                #${trips[i].id} ${trips[i].departure} → ${trips[i].destination}
                Départ : ${trips[i].departureTime} 
                Arrivée : ${trips[i].arrivalTime }
                Prix : ${trips[i].price}
                Places disponibles : ${trips[i].availableSeats}

        `)

    }
    
}

function AcheterTicket(){
    for (let i = 0;i < trips.length;i++){
        console.log(`   
                #${trips[i].id} ${trips[i].departure} → ${trips[i].destination} Prix : ${trips[i].price}:
        `)
    }
    let choixIdTrips;
    let userName;

    do{
        userName = String(prompt("entrez votre name : "));
        choixIdTrips = Number(prompt("entrez nomber de traget : "));
        if (choixIdTrips < 1 || choixIdTrips > 20){
            console.log("le nomber de traget est invalid :");
        }else if(userName.length <= 2){
            console.log("le name est invalid :");
        }else if(trips[choixIdTrips-1].availableSeats > 0){
            console.log("il y un place");
        }else if(trips[choixIdTrips-1].availableSeats <= 0){
            console.log("iln'y pas un place");
        }
    }while(choixIdTrips > 20 || choixIdTrips < 1 || userName.length <= 2 || trips[choixIdTrips-1].availableSeats <= 0);

    let seatNumber = 1;
    let placeTrouvee;
    do {
        placeTrouvee = false;
        for (let i = 0; i < tickets.length; i++){
            if (tickets[i].id === choixIdTrips && tickets[i].seatNumber === seatNumber){
                placeTrouvee = true;
                break;
            }
        }
        if (placeTrouvee){
            seatNumber++;
        }
    } while (placeTrouvee);

    tickets.push({
        id : choixIdTrips,
        name : userName,
        idTicks : nextTicketId,
        prix : trips[choixIdTrips-1].price,
        seatNumber : seatNumber
    });

    nextTicketId++;
    trips[choixIdTrips-1].availableSeats--;
}
function afficherTickets(){
    for (let i = 0;i < tickets.length;i++){
        console.log(`
            #idTickets:${tickets[i].idTicks}:
            #tripId:${tickets[i].id}:
            passengerName: ${tickets[i].name}:
            prix : ${tickets[i].prix}:
            place : ${tickets[i].seatNumber}:
    
        `)
    }

}



function AnnulerTicket(){
    let choixIdTickits = Number(prompt("entrez le nomber de tickit : "));
    let indexIdTichits = -1;
    for (let i = 0;i < tickets.length;i++){
        if (tickets[i].idTicks === choixIdTickits){
            indexIdTichits = i;
            break;
        }
    }
    if (indexIdTichits === -1){
        console.log("id de tickets est invalid :");
        return;
    }
    let idTrajetAnnule = tickets[indexIdTichits].id;
    tickets.splice(indexIdTichits, 1);
    for (let i = 0;i < trips.length;i++){
        if (trips[i].id === idTrajetAnnule){
            trips[i].availableSeats++;
            break;
        }
    }
    console.log("Ticket annule avec succes.");
}

function RechercherTicket(){

}

function filtrerTrajets(){

}
function trierTrajets(){

}

