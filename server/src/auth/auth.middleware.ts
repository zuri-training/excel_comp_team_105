import { Injectable, NestMiddleware } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import * as serviceAccount from './firebaseServiceAccount.json';

const firebase_params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientX509CertUrl: serviceAccount.client_x509_cert_url,
};

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private defaultApp: any;

  constructor() {
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebase_params),
      databaseURL: 'https://proj-team-105-xel-comp-default-rtdb.firebaseio.com',
    });
  }

  use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization;

    if (token != null && token != '') {
      this.defaultApp
        .auth()
        .verifyIdToken(token.replace('Bearer ', ''))
        .then(async (decodedToken: { email: any }) => {
          const user = { email: decodedToken.email };
          req['user'] = user;
          next();
        })
        .catch((error: any) => {
          console.error(error);
        });
    } else {
      next();
    }
  }
}
