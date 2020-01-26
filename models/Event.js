const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const eventSchema = new Schema({
    eventName: { type: String, required: true},  
    fullAddress: { type: String, required: true },
    location: { type: String, enum: ["Barceloneta", "Forum", "Gracia", "Horta-Guinardó", "Les Corts", "Poble Nou","Port Olimpic", "Port Vell", "Sant Andreu", "Sants", "Sant Martí", "Sarrià-Tibidabo" ]},
 //   date: { type: Date, required: true },
 //   time: { type: Date, required: true },
    date: { type: String, },
    startTime: { type: String, required: true},
    endTime: { type: String},
    price: { type: String },
    category: { type: String, enum: ["culture", "music", "food"], required: true  },
    coordinates: {type: {type: String, type: String} },
    meetupLink: {type: String},
    placesNearBy: {type: Array}
},
{
    timestamps: {
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
});


const Event = mongoose.model("Event", eventSchema);
module.exports = Event;