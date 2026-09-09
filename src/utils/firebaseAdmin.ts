// src/utils/firebaseAdmin.ts
import * as admin from "firebase-admin";

/**
 * Returns the Admin SDK database only from server-side code. The service-account
 * JSON is intentionally read lazily so importing this module never parses or
 * exposes credentials in routes that do not need administrative access.
 */
export function getAdminDb() {
  if (!admin.apps.length) {
    const encodedServiceAccount = process.env.FIREBASE_ADMIN_KEY;

    if (!encodedServiceAccount) {
      throw new Error(
        "FIREBASE_ADMIN_KEY is required before using the Firebase Admin SDK."
      );
    }

    const serviceAccount = JSON.parse(
      encodedServiceAccount
    ) as admin.ServiceAccount;

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  return admin.firestore();
}
