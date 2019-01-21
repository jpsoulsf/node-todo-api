const { MongoClient, ObjectID } = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(dbUrl, (error, db) => {
    if(error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name: 'Jason Peters',
    //     age: 44,
    //     location: 'El Cerrito',
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.close();
})