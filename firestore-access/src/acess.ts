import admin from 'firebase-admin'

import serviceAccount from "../firestore.json"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});


export { admin }