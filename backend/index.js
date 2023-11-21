/*
 ******************************************************************************
 * File Name: app.js                                                          *
 * Author: Xavier Araque | xavieraraque@gmail.com                             *
 * Description: This script contains functions for...                        *
 * Project: Backend with express...                                           *
 * Date: November 20, 2023                                                    *
 ******************************************************************************
 */

const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const app = express()
const PORT = 3210

app.use(cors())


// Server listening on PORT
app.listen(PORT, () => {
	console.log(`The server is running, port ${PORT}`)
})

// Default route
app.get('/', (req, res) => {
	res.send('The silence is gold!')
})
