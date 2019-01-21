const { MongoClient, ObjectID } = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(dbUrl, (error, db) => {
    if(error) {
        return console.log('Unable to connect to MongoDB server');
    }
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c45557d1469e7f669019316')
    // }).toArray()
    //     .then((docs) => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     })
    //     .catch((error) => {
    //         console.log('Unable to fetch todos', error)
    //     });

    // db.collection('Todos').find().count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     })
    //     .catch((error) => {
    //         console.log('Unable to fetch todos', error)
    //     });
    
    db.collection('Users').find({name: 'Jason Peters'}).toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        })
        .catch((error) => {
            console.log('Unable to fetch todos', error)
        });


    console.log('Connected to MongoDb server');

    //db.close();
})