import { useSession, signIn, signOut } from "next-auth/react";

const login = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <div>
                <p>Welcome, {session.user.email}</p>
                <img src={session.user.image}></img>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        )
    }
}

export default login