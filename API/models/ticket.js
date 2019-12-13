'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TicketSchema = Schema({
  name: String,
  email: String,
  phone: String,
  question: String
});

module.exports = mongoose.model('Ticket',TicketSchema);