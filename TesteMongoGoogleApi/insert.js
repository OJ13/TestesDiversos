db.passageiros.insert({
    _id: "P1",
    "nome": "João da Silva",
    "loc": {
        type: "Point",
        "coordinates": [125.6, 10.1]
    }
}, {
    "type": "Feature",
    "geometry": {
        "type": "Point",
        "coordinates": [125.6, 10.1]
    },
    "properties": {
        "name": "João da Silva"
    }
})

db.passageiros.find()