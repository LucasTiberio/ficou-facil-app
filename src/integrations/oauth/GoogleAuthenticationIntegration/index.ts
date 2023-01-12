import * as AuthSession from "expo-auth-session"

import { ENV_GOOGLE_AUTH_CLIENT_ID, ENV_GOOGLE_AUTH_REDIRECT_URI } from "../../../shared/envs";

class GoogleAuthenticationIntegration {
    private url;

    constructor() {
        const SCOPE = encodeURI("profile email")
        const RESPONSE_TYPE = "token"

        this.url = "https://accounts.google.com/o/oauth2/v2/auth" +
            "?client_id=" + ENV_GOOGLE_AUTH_CLIENT_ID +
            "&redirect_uri=" + ENV_GOOGLE_AUTH_REDIRECT_URI +
            "&response_type=" + RESPONSE_TYPE +
            "&scope=" + SCOPE;
        }

    async signIn(onSuccess: iGoogleAuthenticationOnSuccess, onError?: iGoogleAuthenticationOnError) {
        try {
            const response = await AuthSession.startAsync({ authUrl: this.url }) as iGoogleAuthenticationResponse

            const { type, params } = response;

            if (type === "success" && !!params.access_token) {
                onSuccess(response);
            }
        } catch (error) {
            onError?.(error)
            console.error("GoogleAuthenticationIntegration - Sign In Error", error)
        }
    }

}

export default GoogleAuthenticationIntegration