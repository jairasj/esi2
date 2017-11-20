// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

/*
 HTTP Cloud Function.

 @param {Object} req Cloud Function request context.
 @param {Object} res Cloud Function response context.
*/

exports.everisRecruiting1 = functions.https.onRequest((req, res) => {
  const googleTTS = require('google-tts-api');
  var intent = req.body.result.action; 
  var resp;

  function tts(text){  	
  	res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type  
    res.setHeader('Access-Control-Allow-Origin', '*');  
  	googleTTS(text, 'en', 1)   // speed normal = 1 (default), slow = 0.24 
    	.then(function (url) {
      		res.send(JSON.stringify({ "data": {"facebook": { "attachment": url.replace("https","http") }}, "speech": text}));
		})
		.catch(function (err) {
  	  		res.send(JSON.stringify({"speech": err.stack}));  	
  	});
  	return;
  }

  if(intent==="input.welcome"){
    var name = req.body.result.parameters.user_name;
  	resp = "¡Hola " + name +", soy tu asistente virtual para entrevistas. Para grabar su respuesta presione el botón y libérelo al terminar. Responda cada pregunta en no más de 40 palabras ¿Listo para comenzar?";
  	tts(resp);	
  }

  if(intent==="input.welcome.fallback"){
    resp = "Disculpa, no te he entendido. ¿Deseas comenzar la entrevista?";
    tts(resp);  
  }

  if(intent==="input.unknown"){
  	resp = "Disculpa, ¿podrías repetirlo por favor? no te he entendido";
  	tts(resp);	
  } 

  if(intent==="end.interview"){
  	resp = "Muchas gracias por tu tiempo, enviaremos el informe a Recursos Humanos, y estos se pondrán en contacto.";
  	tts(resp);	
  } 
  
  if(intent==="no.interview"){
  	resp = "Lo siento. Yo solo puedo ayudarte con la entrevista de trabajo de everis. ¿Estás listo para ello?";
  	tts(resp);	
  }

  if(intent==="first.question"){
  	resp = "¿Por qué quieres trabajar en Everis?";
  	tts(resp);	
  }	  

  if(intent==="second.question"){
  	resp = "¿Cómo te ves en 5 años?";
  	tts(resp);	
  }

  if(intent==="third.question"){
  	resp = "¿Qué te falta para llegar a eso?";
  	tts(resp);	
  }

  if(intent==="fourth.question"){
  	resp = "Menciona algunos de tus logros.";
  	tts(resp);	
  }

  if(intent==="fifth.question"){
  	resp = "¿Qué hiciste estos últimos meses con tu tiempo para mejorar tus conocimientos?";
  	tts(resp);	
  }

  if(intent==="six.question"){
  	resp = "Dime algún punto de mejora que hayas propuesto en el último año.";
  	tts(resp);	
  }

  if(intent==="seven.question"){
  	resp = "¿Consideras que trabajas bien bajo presión? Podrías explicar con un ejemplo.";
  	tts(resp);	
  }

  if(intent==="eight.question"){
  	resp = "Piensa en alguien que admires y dame cinco adjetivos que lo describas.";
  	tts(resp);	
  }

  if(intent==="nine.question"){
  	resp = "De los cinco adjetivos anteriores dame tres en los que aún necesites trabajar para mejorar como persona.";
  	tts(resp);	
  }

  if(intent==="ten.question"){
  	resp = "Dime una decisión que hayas tomado sin tener toda la información necesaria.";
  	tts(resp);	
  }  

  if(intent==="eleven.question"){
  	resp = "Cuéntame alguna vez que hayas tenido que asumir las consecuencias de una mala decisión que hayas tomado.";
  	tts(resp);	
  }

  if(intent==="twelfth.question"){
  	resp = "¿has gestionado algún equipo de colaboradores?";
  	tts(resp);	
  }

  if(intent==="twelfth.question.fallback"){
    resp = "Lo siento, no entiendo lo que dices ¿has gestionado algún equipo de colaboradores?";
    tts(resp);  
  }

  if(intent==="thirteenth.question"){
  	resp = "Dame un ejemplo de cómo le das seguimiento a un subordinado tuyo.";
  	tts(resp);	
  }

  if(intent==="fourteenth.question"){
  	resp = "Platícame un ejemplo donde hayas tenido que mediar en la solución de un conflicto.";
  	tts(resp);	
  }
  
  if(intent==="fifteenth.question1"){
  	resp = "¿Cuánto tiempo pretendes trabajar con nosotros si te contratamos y por qué?";
  	tts(resp);	
  }

  if(intent==="fifteenth.question2"){
  	resp = "¿Cuánto tiempo pretendes trabajar con nosotros si te contratamos y por qué?";
  	tts(resp);	
  }
});