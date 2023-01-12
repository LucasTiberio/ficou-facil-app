type iGoogleAuthenticationOnSuccess = (params: iGoogleAuthenticationResponse) => void;
type iGoogleAuthenticationOnError = (error: any) => void | undefined;

interface iGoogleAuthenticationResponse { 
    type: string, 
    params: { 
        access_token: string
    }
}