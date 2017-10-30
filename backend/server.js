import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost:27017/crud-redux';

mongodb.MongoClient.connect(dbUrl, (err, db) => {

    app.get('/api/games', (req, res) => {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({ games });
        });
    });
});

app.listen(8080, () => console.log('server run on port 8080'));