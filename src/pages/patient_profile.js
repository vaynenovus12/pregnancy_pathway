import { useSession, signOut, getSession } from 'next-auth/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { EventNote, Home, MedicalInformation, PregnantWoman, Troubleshoot } from '@mui/icons-material';
import { IconButton, Paper, Container, Divider } from '@mui/material';
import styles from '../styles/Patient_Profile.module.css'
import Link from 'next/link';
import stylesFromIndex from '../styles/Index.module.css'
import Avatar from '@mui/material/Avatar';
import { FaBaby } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";



const patient_profile = () => {
    const { data: session, status } = useSession();
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState(new Date());
    const [bmi, setBMI] = useState("0.0");

    if (status == 'authenticated') {
        return (
            <div >
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar sx={{ backgroundColor: "#511454" }} position="static">
                        <Toolbar className={stylesFromIndex.appBarLayout}>
                            <div className={stylesFromIndex.appLogoandTitleLayout}>
                                <img src='/logo-web.svg' height={60} width={60} />
                                <p className={stylesFromIndex.brandName}>Pregnancy Pathway</p>
                            </div>
                            <div><IconButton href='/' sx={{ color: 'white', marginRight: 2 }}><Home /></IconButton>
                                <Button onClick={() => signOut()} sx={{ color: 'white', borderColor: 'azure', }} variant="outlined" startIcon={<LoginIcon />}>
                                    Sign Out
                                </Button>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>

                <div className={styles.navbarAndProfileLayout}>
                    <div className={styles.navbar}>
                        <Link href='/symptoms_tracker' className={styles.navigationMenu}><Troubleshoot fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles.navigationMenu}><EventNote fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles.navigationMenu}><PregnantWoman fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles.navigationMenu}><MedicalInformation fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles.navigationMenu}><FaBaby /></Link>
                    </div>
                    <div className={styles.alignContent}>
                        <Avatar src={session.user.image} sx={{ width: 254, height: 254, flexGrow: 1, marginTop: 3 }} />
                        <Paper elevation={2} sx={{ marginTop: 3, padding: 4, borderRadius: 5 }}>
                            <div className={styles.alignProfile}>
                                <p className={styles.personalInfoTitle}>Personal Information</p>
                                <TextField id="outlined-basic" label="Name" onChange={(name) => setName(name)} type='name' variant="outlined" style={{ marginTop: 20, marginBottom: 20 }} disabled value={session.user.name} />
                                <p className={styles.birth_date}>Date of Birth:</p>
                                <Container sx={{ marginLeft: '24%' }}><DatePicker label="Birth of Date" selected={birthDate} onChange={(date) => setBirthDate(date)} /></Container>
                                <TextField id="outlined-basic" type='tel' label="Phone Number" variant="outlined" style={{ marginTop: 20 }} />
                                <TextField id="outlined-basic" label="Email Address" variant="outlined" style={{ marginTop: 20 }} value={session.user.email} />
                                <TextField
                                    style={{ marginTop: 10 }}
                                    type="number"
                                    value={bmi}
                                    label="BMI"
                                    variant="outlined"
                                    inputProps={{
                                        maxLength: 13,
                                        step: "0.1"
                                    }}
                                    onChange={(e) => setBMI(parseFloat(e.target.value).toFixed(1))}
                                />
                                <Button variant="contained" color="success" sx={{ marginTop: 3}}>
                                    Edit Profile
                                </Button>
                            </div>
                        </Paper>
                        <Paper elevation={2} sx={{ marginTop: 3, padding: 4, marginBottom: 10, borderRadius: 5 }}>
                            <p className={styles.medicalHistTitle}>Medical History</p>
                            <p className={styles.medicalHistory}>Asthma, Coma, Diabetes, Cancer, Highblood sugar</p>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
            </div>
        )
    }
}

export default patient_profile;

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/login'
            }
        }
    }

    return {
        props: { session }
    }
}