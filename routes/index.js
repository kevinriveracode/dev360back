var express = require('express');
var router = express.Router();
const fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  let tickets = [
    {
      email:'htmlkevinrivera@gmail.com',
      telefono:'654826781',
      resumen:'Hola quiero comprar un pack ibiza'
    },
    {
      email:'kevinrivera.a4b@gmail.com',
      telefono:'654826781',
      resumen:'Hola quiero comprar un pack monaco'
    }
  ]
  res.json(tickets)
  //res.render('index', { title: 'Express' });
});

router.post('/create-message',(req,res,next)=>{
  let dataReceived = req.body;
  let dataTime = new Date();
  let data = '';
  data += `======================================================= \n`;
  data += `[${dataTime.getDate()}/${dataTime.getMonth()+1}/${dataTime.getFullYear()}]Nuevo Mensaje: \n`;
  data += `Emisor: ${dataReceived.nombre} \n`;
  data += `Email: ${dataReceived.email} \n`;
  data += `Telefono: ${dataReceived.telefono} \n`;
  data += `Mensaje: ${dataReceived.resumen} \n`;
  data += `=======================================================`;
  fs.appendFile('logs/contact-log.txt', data , (err) => {
    console.log('Nuevo Mensaje!');
  });
  console.log(data)
  res.json({status : 200});
});

module.exports = router;
