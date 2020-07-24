### EJS files
Index page include: destination gallery and contact us form;
Login and register are two separate pages;
Extra.ejs page will show single destination based on images clicked in Destination/Index.ejs
Invalid page represent custom made page when error 404 is occured

### CSS files:

Style.css belong to index.ejs file
gallery.css belongs to invalid page and extra.ejs to display each page individually
login and register.css belong to login and register.ejs files
responsive.css belongs to all the files and responsible to show website on different screens

### JS files:
app.js will represent each individual image on extra.ejs page
menu.css responsible for toggle button to hide a menu on smaller screen sizes
navbar.css is answering for showing the current active page based on URL

### Schema/model definition_DB seed: Destination array
DB is set up on MongoDB and have current gallery in place. 
models and seeds folder contains both array and model itself.

### Dependacies
available in package.json, but here is a list
"cors": "^2.8.5",
"dotenv": "^8.2.0",
"ejs": "^3.1.3",
"express": "^4.17.1",
"moment": "^2.27.0",
"mongoose": "^5.9.24"

