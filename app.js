let express = require('express'),
	
    app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {		
    res.render('index');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('SERVER IS RUNNING!');
});
