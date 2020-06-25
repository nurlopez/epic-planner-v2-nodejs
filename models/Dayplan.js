const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const dayPlanSchema = new Schema({
    
    //quité la fecha porque ya está incluida en startingTime
    //esto puede abrir las puertas a planes de varios días???
    name:    {type: String, required: true},
    startingTime: { type: Date, required: true},
    endingTime: { type: Date, required: true},
    events:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
    imageSrc: {type: String},
    
},{
    timestamps: {
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
});

const DayPlan = mongoose.model("DayPlan", dayPlanSchema);

module.exports = DayPlan;

