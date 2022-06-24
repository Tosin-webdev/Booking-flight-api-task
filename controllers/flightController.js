const flights = require('../models/Flight.js');

// Gets all flights
exports.findAll = (req, res) => {
  res.send(flights);
};

// Retrieves a single flight
exports.get = (req, res) => {
  console.log(req.params.id);
  const flight = flights.find((c) => c.id === parseInt(req.params.id));
  if (!flight) {
    return res.status(404).send('The flight with the given ID was not found');
  }
  res.send(flight);
};

// Creates a Flight
exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send('title input is required');
  }
  const flight = {
    id: flights.length + 1,
    title: req.body.title,
    time: new Date().toLocaleTimeString(),
    price: '26000',
    date: new Date().toLocaleDateString(),
  };
  flights.push(flight);
  res.send(flight);
};

// Update a flight
exports.update = (req, res) => {
  const flight = flights.find((c) => c.id === parseInt(req.params.id));
  if (!flight) {
    return res.status(404).send('The flight with the given ID was not found');
  }
  flight.title = req.body.title;
  flight.time = new Date().toLocaleTimeString();
  flight.date = new Date().toLocaleDateString();
  res.send(flight);
};

// Delete a flight
exports.delete = (req, res) => {
  const flight = flights.find((c) => c.id === parseInt(req.params.id));
  if (!flight) {
    return res.status(404).send('The flight with the given ID was not found');
  }
  const index = flights.indexOf(flight);
  flights.splice(index, 1);
  res.send(flight);
};
