import { Home } from "@mui/icons-material";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from '../styles/Login.module.css';
import Link from "next/link";
import stylesFromIndex from '../styles/Index.module.css';

const login = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar sx={{ backgroundColor: "#511454" }} position="static">
                        <Toolbar>
                            <Typography component="div" sx={{ flexGrow: 1 }}>
                                <img src='/logo-web.svg' height={60} width={60} />
                            </Typography>
                            <Button href="/" sx={{ color: 'white', borderColor: 'azure', }} variant="outlined" startIcon={<Home />}>
                                HOME
                            </Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <p>Welcome, {session.user.email}</p>
                <img src={session.user.image}></img>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar sx={{ backgroundColor: "#511454" }} position="static">
                        <Toolbar className={stylesFromIndex.appBarLayout}>
                            <div className={stylesFromIndex.appLogoandTitleLayout}>
                                <img src='/logo-web.svg' height={60} width={60} />
                                <p className={stylesFromIndex.brandName}>Pregnancy Pathway</p>
                            </div>
                            <div> <Button href="/" sx={{ color: 'white', borderColor: 'azure', }} variant="outlined" startIcon={<Home />}>
                                HOME
                            </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
                <div className={styles.loginLayout}>
                    <img src='/images/mother_with_son.jpg' className={styles.loginBackgroundImg} />
                    <div className={styles.innerLayout}>
                        <p className={styles.greeting}>Welcome back, beloved mother!</p>
                        <Button onClick={() => signIn()} className={styles.buttonGoogleSignIn} variant="outlined" startIcon={<img src='/icon_google.svg' height={30} width={30} />}>
                            Sign in with Google
                        </Button>

                        <p className={styles.agreement}>By clicking the sign in button, I agree with the</p>
                        <div className={styles.alignAgreement}>
                            <Link href='/'><p className={styles.termsConditionsPP}>Terms & Conditions</p></Link>
                            <p className={styles.agreement}>and</p>
                            <Link href='/'><p className={styles.termsConditionsPP}>Privacy Policy.</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default login;

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (session) {
        return {
            redirect: {
                destination: '/patient_profile'
            }
        }
    }

    return {
        props: { session }
    }
}