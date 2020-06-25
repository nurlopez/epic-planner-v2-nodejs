//eventName: { type: String, required: true},  
//fullAddress: { type: String, required: true },
//location: { type: String, enum: ["Barceloneta", "Forum", "Gracia", "Horta-Guinardó", "Les Corts", "Poble Nou","Port Olimpic", "Port Vell", "Sant Andreu", "Sants", "Sant Martí", "Sarrià-Tibidabo" ]},
//   date: { type: Date, required: true },
//   time: { type: Date, required: true },
//date: { type: String, },
//startTime: { type: String, required: true},
//endTime: { type: String},
//price: { type: String },
//category: { type: String, enum: ["culture", "music", "food"], required: true  },
//coordinates: {type: {type: String, type: String} },
//meetupLink: {type: String},
//placesNearBy: {type: Array}

//for 1 to 10000
//Genera evento

const mongoose = require("mongoose");
const Event = require('./../models/Event');
require("dotenv").config();

const addresses = [
    'Carrer de Josep Pla, 2, 08019 Barcelona',
    'Carrer de la Selva de Mar, 19, 08019 Barcelona',
    'Carrer del Perú, 72, 08018 Barcelona',
    'Plaça del Mercat, 26, 08018 Barcelona',
    'Carrer de la Diputació, 326, 08009 Barcelona',
    'Carrer de València, 169, 08011 Barcelona',
    'Carrer de Rocafort, 152, 08015 Barcelona',
    'Carrer d\'Aribau, 149, 08036 Barcelona',
    'Carrer de Marià Cubí, 81, 08006 Barcelona',
    'Carrer del Vallespir, 44, 08014 Barcelona'
];

const categories = [
    "culture", "music", "food"
];

const cultureNames = ["Exposición", "Charla", "Taller de reciclaje", "Inauguración de un libro", "Conferencia espacial", "Charla antiespañolista", "Espanya ens roba"];
const musicNames = ["Concierto", "Cantautor", "Firma de discos", "DJ session", "Fiesta", "Noche universitaria", "Evento solo para gente con ocho apellidos catalanes"];
const foodNames = ["Taller de gofio", "Taller de calzots", "Degustación", "Cata de vinos", "Fiesta de la cerveza", "Comida internacional", "Secta de comidas catalanas", "yonkis del fuet"];

const locations = [
    "Barceloneta", "Forum", "Gracia", "Horta-Guinardó",
    "Les Corts", "Poble Nou","Port Olimpic", "Port Vell",
    "Sant Andreu", "Sants", "Sant Martí", "Sarrià-Tibidabo"
];

const startDate = new Date('May 1, 2020');

const endDate = new Date('May 30, 2021');

//new Date(date.setTime( date.getTime() + 86400000 ));

let date = startDate;
console.log('Fecha: ', date);

const eventList = [];

do {
    const numberOfEvents = Math.ceil(Math.random() * 9);
    for (i=0;i<=numberOfEvents;i++) {
        const category = categories[Math.ceil(Math.random() * categories.length-1)];
        const location = locations[Math.ceil(Math.random() * locations.length-1)];
        const address = addresses[Math.ceil(Math.random() * addresses.length-1)];
        
        switch (category) {
            case "culture": 
                var name = cultureNames[Math.ceil(Math.random() * cultureNames.length-1)];
                break;
            case "music":
                var name = musicNames[Math.ceil(Math.random() * musicNames.length-1)];
                break;
            case "food":
                var name = foodNames[Math.ceil(Math.random() * foodNames.length-1)];
                break;
        }
        
        const startTime = new Date(date.getTime() + Math.ceil(Math.random() * 24) * 3600000);
        const endTime = new Date(startTime.getTime() + Math.ceil(Math.random() * 4) * 3600000);

        const event = { category, location, fullAddress: address, name, startTime, endTime, date };
        console.log(event);
        eventList.push(event);

        date = new Date(date.setTime(date.getTime() + 86400000));
        name = undefined;

    }
}while(date <= endDate);

console.log(eventList);

mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then( () => {
    console.log(`Connected to database`);
    
  })
  .catch( (err) => console.error(err));

  mongoose
  .connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
  })
  .then(() => {
      console.log('Connected to database');
      Event.collection.drop();
      Event.insertMany(eventList)
        .then(_=>{
            console.log('Events seeded');
            mongoose.connection.close();
    })
        .catch(err => console.log(err));
    })
  .catch((err) => console.error(err));