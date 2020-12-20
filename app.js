const Chance = require('chance');
const chance = new Chance();
const express = require('express');
const app = express();

const ip = process.env.IP || 'IP is not defined';
const az = process.env.AZ || 'AZ is not defined';

app.use('/health', require('express-healthcheck')());


app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'application/json'
  });
  const data = {
    name: chance.name(),
    AZ: az,
    IP: ip,
  };
  res.send(
    JSON.stringify(data)
  );
});

const port = +process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app listening on ${port}`);
});