const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const placeSchema = new Schema({
    // placeName: { type: String, required: true},  
    // fullAddress: { type: String, required: true },
    // location: { type: String, enum:  ["Barceloneta", "Forum", "Gracia", "Horta-Guinardó", "Les Corts", "Poble Nou","Port Olimpic", "Port Vell", "Sant Andreu", "Sants", "Sant Martí", "Sarrià-Tibidabo" ], required: true },
    // openingSchedule: { type: String, required: true },
    // category: { type: String, enum: ["eat", "cocktail", "dance", "coffee"], required: true  },
    // coordinates: {type: {type: String, type: String} },
    // webLink: {type: String}

    place_id: String

},
{
    timestamps: {
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
}
);


const Place = mongoose.model("Place", placeSchema);
module.exports = Place;