import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const HomePage = () => {
    const auth = getAuth;
const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log(user);
    })
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default HomePage;