const admin = require('firebase-admin')

var serviceAccount = require('./schoolwebapp-4e498-firebase-adminsdk-pdc4q-6204baa836.json')

module.exports = function(io){

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })

  let db = admin.firestore()

  io.on('connection', (socket) => {
    console.log('User connected!')
    socket.on('emit_method', (data) => {
      var docRef = db.collection('users').doc('nurit')
      var setido = docRef.set({
        first: 'Nurit',
        last: 'Bronfeld',
        born: 1956
      })
      console.log('Clicked!')
    });
  });
}

function getTemplate(db){
  db.collection('template').doc('home').get().then((doc) => {
    if (doc.exists) {
      
    }
  })
}