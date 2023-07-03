const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        gameID: {
            //this will be just a string since its coming from the API
            type: String,
            required: true,
        },
        cover: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date
        },
        lobbies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Lobby'
            }
        ]
    }
);

const Game = model('Game', gameSchema);

module.exports = Game;

