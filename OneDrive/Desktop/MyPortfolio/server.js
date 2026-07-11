const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./backend/config/db');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Link to the routing files we created inside backend/routes
app.use('/api/users', require('./backend/routes/user.routes'));
app.use('/api/contacts', require('./backend/routes/contact.routes'));
app.use('/api/projects', require('./backend/routes/project.routes'));
app.use('/api/qualifications', require('./backend/routes/qualification.routes'));

// Base Route
app.get('/', (req, res) => {
    res.send("Portfolio API is running cleanly.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});