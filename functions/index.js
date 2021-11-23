const functions = require("firebase-functions");
const express = require('express');
const app = express();

const {getAllConcepts, postOneConcept} = require('./handlers/concepts')
const { signup, login, uploadImage, addUserDetails } = require('./handlers/users');
const FBAuth = require('./utils/fbAuth');

app.get('/concepts',getAllConcepts);
app.post('/concept',FBAuth ,postOneConcept);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user',FBAuth, addUserDetails);

app.post('/signup',signup);
app.post('/login', login);


exports.api = functions.https.onRequest(app);