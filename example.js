const express = require('express');
const app = express();
const admin = express();

app.set('view engine', 'ejs');

// Example admin route
admin.get('/dashboard', (req, res) => {
    res.send('Admin Dashboard');
});

// Mount the 'admin' sub-app on the main app
app.use('/admin', admin);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
