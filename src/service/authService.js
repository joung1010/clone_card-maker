import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
} from 'firebase/auth';

class AuthService {
    constructor(config) {
        this.firebaseAuth = getAuth(config);
        this.googleProvider = new GoogleAuthProvider();
        this.githubProvider = new GithubAuthProvider();
    }


    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(this.firebaseAuth, authProvider);
    }

    logout() {
        this.firebaseAuth.signOut();
    }

    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return this.googleProvider;
            case 'Github':
                return this.githubProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`);
        }
    }

    onAuthStateChanged(onUserChange) {
        getAuth().onAuthStateChanged(user => {
            onUserChange(user);
        });
    }
}

export default AuthService;