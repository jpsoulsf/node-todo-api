const { MongoClient, ObjectID } = require('mongodb');

const dbUrl = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(dbUrl, (error, db) => {
    if(error) {
        return console.log('Unable to connect to MongoDB server');
    }
    
    // deleteMany
    // db.collection('Todos').deleteMany({test: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    // findAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({name: 'Jason Peters'}).then((result) => {
        console.log(result);
    })

    db.collection('Users').findOneAndDelete({
        _id: ObjectID('5c45564c8277bbf671c175cc')
    }).then((result) => {
        console.log(result);
    })

    console.log('Connected to MongoDb server');

    db.close();
})