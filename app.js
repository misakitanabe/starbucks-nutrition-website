const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors'); 
const path = require('path');
const fs = require('fs');

// // MySQL database credentials
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Embed7422!',
//   database: 'Starbucks2',
// });

// Get the database URL 
// const dbUrl = process.env.JAWSDB_URL;
const dbUrl = "mysql://jiwzfb7lgc19qepj:ztlea9s7f9umwr28@wcwimj6zu5aaddlj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/fdep9tfasyt0a27r";
const connection = mysql.createConnection(dbUrl);

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
  } else {
    console.log('Connected to the database');
  }
});

app.use(express.json());
app.use(cors());

//////////////////////////// necessary files ////////////////////////////////
app.get('/', (req, res) => {
  console.log('__dirname:', __dirname);
  // Read the contents of index.html
  const indexPath = path.join(__dirname, 'index.html');
  fs.readFile(indexPath, 'utf8', (err, content) => {
    if (err) {
      console.error('Error reading index.html:', err);
      return res.status(500).send('Internal Server Error');
    }

    res.send(content);
  });
});

app.get('/style.css', (req, res) => {
  const stylePath = path.join(__dirname, 'style.css');
  fs.readFile(stylePath, 'utf8', (err, content) => {
    if (err) {
      console.error('Error reading style.css:', err);
      return res.status(500).send('Internal Server Error');
    }

    res.setHeader('Content-Type', 'text/css'); // Set the content type to CSS
    res.send(content);
  });
});

app.get('/script.js', (req, res) => {
  const scriptPath = path.join(__dirname, 'script.js');
  fs.readFile(scriptPath, 'utf8', (err, content) => {
    if (err) {
      console.error('Error reading script.js:', err);
      return res.status(500).send('Internal Server Error');
    }

    res.setHeader('Content-Type', 'application/javascript'); // Set the content type to JavaScript
    res.send(content);
  });
});

app.get('/images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, 'images', imageName);

  fs.readFile(imagePath, (err, data) => {
    if (err) {
      console.error(`Error reading image ${imageName}:`, err);
      return res.status(404).send('Image Not Found');
    }

    // Determine the MIME type based on the image file extension
    const imageExtension = path.extname(imageName).toLowerCase();
    let contentType = 'image/jpeg'; // Default to JPEG
    if (imageExtension === '.png') {
      contentType = 'image/png';
    } else if (imageExtension === '.gif') {
      contentType = 'image/gif';
    }

    res.setHeader('Content-Type', contentType);
    res.send(data);
  });
});

///////////////////////// database queries ///////////////////////
app.get('/items', (req, res) => {
    const sqlQuery = 'SELECT * FROM starbucks2'; 
  
    connection.query(sqlQuery, (error, results) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json(results); 
      }
    });
});


// ":" indicated that id will be a dynamic variable
app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
  
    const sqlQuery = 'SELECT * FROM starbucks2 WHERE id = ?'; // id replaces ? when query sent
    connection.query(sqlQuery, [itemId], (error, results) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (results.length === 0) {
          res.status(404).json({ error: 'Item not found' });
        } else {
          res.status(200).json(results[0]); 
        }
      }
    });
  });

  app.get('/items/types/:type', (req, res) => {
    const itemType = req.params.type; 
  
    const sqlQuery = 'SELECT * FROM starbucks2 WHERE type = ?'; // id replaces ? when query sent
      connection.query(sqlQuery, [itemType], (error, results) => {
        if (error) {
          console.error('Error executing SQL query:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          if (results.length === 0) {
            res.status(404).json({ error: 'Item not found' });
          } else {
            res.status(200).json(results); // Send all items as a JSON response
          }
        }
      });
  });
  
const port = process.env.PORT || 3000; // port number default 3000 for local
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
