const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
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

let prochainIdTicket = 1;
const tickets = [];

let prompt = require("prompt-sync")();
let choix;

do {
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
    choix = Number(prompt('Votre choix :  '));
    switch (choix) {
        case 1:
            afficherTrajets();
            break;
        case 2:
            acheterTicket();
            break;
        case 3:
            afficherTickets();
            break;
        case 4:
            annulerTicket();
            break;
        case 5:
            rechercherTicket();
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

} while (choix !== 0);


function quitter() {
    console.log("merci pour votre visite");
}

function afficherTrajets() {
    console.log("=== TRAJETS DISPONIBLES ===");
    for (let i = 0; i < trips.length; i++) {
        console.log(`

                #${trips[i].id} ${trips[i].departure} → ${trips[i].destination}
                Départ : ${trips[i].departureTime} 
                Arrivée : ${trips[i].arrivalTime}
                Prix : ${trips[i].price}
                Places disponibles : ${trips[i].availableSeats}

        `)
    }
}

function acheterTicket() {
    let numeroPlace = 1;
    for (let i = 0; i < trips.length; i++) {
        console.log(`   
                #${trips[i].id} ${trips[i].departure} → ${trips[i].destination} Prix : ${trips[i].price}:
        `)
    }

    let choixIdTrajet;
    let nomPassager;

    do {

        nomPassager = String(prompt("Entrez votre nom : "));
        choixIdTrajet = Number(prompt("Entrez numéro de trajet : "));

        if (choixIdTrajet < 1 || choixIdTrajet > 20) {

            console.log("Le numero de trajet est invalide.");

        } else if (nomPassager.length <= 2) {

            console.log("Le nom est invalide.");

        } else if (trips[choixIdTrajet - 1].availableSeats > 0) {

            console.log("Il y a une place.");

        } else {

            console.log("Il n'y a pas de place.");
        }

    } while (
        choixIdTrajet < 1 ||
        choixIdTrajet > 20 ||
        nomPassager.length <= 2 ||
        (choixIdTrajet >= 1 && choixIdTrajet <= 20 &&
            trips[choixIdTrajet - 1].availableSeats <= 0)
    );

    numeroPlace = 51 - trips[choixIdTrajet-1].availableSeats; 


    tickets.push({
        idTicket: prochainIdTicket,
        idTrajet: choixIdTrajet,
        nomPassager: nomPassager,
        prix: trips[choixIdTrajet - 1].price,
        numeroPlace: numeroPlace
    });

    prochainIdTicket++;
    trips[choixIdTrajet - 1].availableSeats--;

    console.log("Ticket acheté avec succès.");
}

function afficherTickets() {
    console.log("=== TICKETS ===");
    if (tickets.length === 0) {
        console.log("Aucun ticket achete pour le moment.");
        return;
    }
    for (let i = 0; i < tickets.length; i++) {
        const trajet = trips[tickets[i].idTrajet - 1];
        console.log(`
                        Ticket #${tickets[i].idTicket}
                        Passager : ${tickets[i].nomPassager}
                        Trajet : ${trajet.departure} → ${trajet.destination}
                        Place : ${tickets[i].numeroPlace}
                        Prix : ${tickets[i].prix} DH
        `);
    }
}
//=====================================================================================


function annulerTicket() {
    let choixIdTicket = Number(prompt("entrez le numéro de ticket : "));
    let indexTicket = -1;
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i].idTicket === choixIdTicket) {
            indexTicket = i;
            break;
        }
    }
    if (indexTicket === -1) {
        console.log("id de ticket invalide.");
        return;
    }
    let idTrajetAnnule = tickets[indexTicket].idTrajet;
    tickets.splice(indexTicket, 1);
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === idTrajetAnnule) {
            trips[i].availableSeats++;
            break;
        }
    }
    console.log("Ticket annulé avec succès.");
}

function rechercherTicket() {

    let nom = String(prompt("Entrez le nom du passager : "));

    let trouve = false;

    for (let i = 0; i < tickets.length; i++) {

        if (tickets[i].nomPassager === nom) {

            trouve = true;

            const trajet = trips[tickets[i].idTrajet - 1];

            console.log(`
                            Ticket #${tickets[i].idTicket}
                            Passager : ${tickets[i].nomPassager}
                            Trajet : ${trajet.departure} → ${trajet.destination}
                            Place : ${tickets[i].numeroPlace}
                            Prix : ${tickets[i].prix} DH
            `);
        }
    }

    if (trouve === false) {
        console.log("Aucun ticket trouve pour ce passager.");
    }
}



function filtrerTrajets() {

    let ville = String(prompt("Entrez la ville de depart : ")).toLowerCase();

    let villeTrouve = [];

    for (let i = 0; i < trips.length; i++) {

        if (trips[i].departure.toLowerCase().includes(ville)) {

            villeTrouve.push(trips[i]);
        }
    }

    if (villeTrouve.length === 0) {
        console.log("Aucun trajet trouvé.");
        return;
    }

    for (let i = 0; i < villeTrouve.length; i++) {
        console.log(`
                ${villeTrouve[i].departure} → ${villeTrouve[i].destination} : ${villeTrouve[i].price} DH
        `);
    }

}


function trierTrajets() {

    
}