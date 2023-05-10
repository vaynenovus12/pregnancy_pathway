import { useSession, signOut, getSession } from 'next-auth/react';
import { useState } from 'react';
import { useEffect } from 'react'; // Import the useEffect hook
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from 'next/link';
import LoginIcon from '@mui/icons-material/Login';
import styles from '../styles/lifestyle1.module.css';
import stylesFromIndex from '../styles/Index.module.css'
import { FaBaby } from 'react-icons/fa';
import styles2 from '../styles/SymptomTracker.module.css'
import styles3 from '../styles/Patient_Profile.module.css'


import { IconButton, Paper, Container, Divider } from '@mui/material';
import { EventNote, Home, MedicalInformation, PregnantWoman, Troubleshoot } from '@mui/icons-material';




const Lifestyle = () => {
    const { data: session, status } = useSession();
    const cardData = [
        {
            image: 'https://i.pinimg.com/564x/48/dc/17/48dc17e7aead0cfa252f807504c6cdf5.jpg',
            title: 'Diet',
            content: 'For expectant mothers and their unborn children, a balanced and healthy diet is essential. Consume a range of foods that are high in nutrients, such as fruits, vegetables, whole grains, lean meats, and healthy fats. Instead of counting calories, consider quality. Include folic acid, iron, calcium, and omega-3 fatty acid-rich foods in your diet. Steer clear of unpasteurized dairy, some fish, and raw or undercooked meat. Plan your meals to ensure a balanced diet and regular eating',
        },
        {
            image: 'https://i.pinimg.com/564x/3e/e3/38/3ee338f84f16d6452e88df4628ec7493.jpg',
            title: 'Sleep',
            content: 'The health and wellbeing of pregnant women depend on getting enough sleep. It alleviates discomfort, mood changes, and weariness. Set a regular bedtime and wake-up time to create a routine. Keep the bedroom silent, dark, and chilly. For increased comfort, use pregnant or supporting pillows. For sleep disorders including insomnia or sleep apnea, seek medical attention',
        },
        {
            image: 'https://i.pinimg.com/564x/80/c1/19/80c1195d6c158d23223e3e2d581ae204.jpg',
            title: 'Stress Management',
            content: 'Stress management is essential throughout pregnancy. Use relaxing methods like guided imagery and deep breathing. Try prenatal yoga and meditation. To lessen stress, seek out social support, keep a positive attitude, and utilise your time wisely',
        },
        {
            image: 'https://i.pinimg.com/564x/93/6d/c8/936dc8a49f8dd0d5302f153d3f38e9b3.jpg',
            title: 'Healthy Habits',
            content: 'For a safe pregnancy, maintain good cleanliness, go to prenatal checkups, abstain from dangerous behaviour, and heed the advice of your healthcare practitioner',
        },
        // Add more card data objects as needed

    ];

    if (status === 'authenticated') {
        return (
            <div className={styles.container} style={{ backgroundColor: '#eacaff' }}>

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
                <div className={styles2.navbarAndSymptomLayout}>
                    <div className={styles3.navbar}>
                        <Link href='/symptoms_tracker' className={styles3.navigationMenu}><Troubleshoot fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles3.navigationMenu}><EventNote fontSize='30' /></Link>
                        <Divider />
                        <Link href='/lifestyle' className={styles3.navigationMenu}><PregnantWoman fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles3.navigationMenu}><MedicalInformation fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles3.navigationMenu}><FaBaby /></Link>
                    </div>
                    <div className={styles.cardContainer}>
                        <p  className={styles.titleLifestyle}>Lifestyle Recommendation</p>
                        <div className={styles.card}>
                            <img src={cardData[0].image} alt="pict" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h2>{cardData[0].title}</h2>
                                <p>{cardData[0].content}</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={cardData[1].image} alt="Image" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h2>{cardData[1].title}</h2>
                                <p>{cardData[1].content}</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={cardData[2].image} alt="Image" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h2>{cardData[2].title}</h2>
                                <p>{cardData[2].content}</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <img src={cardData[3].image} alt="Image" className={styles.cardImage} />
                            <div className={styles.cardContent}>
                                <h2>{cardData[3].title}</h2>
                                <p>{cardData[3].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (

            <div>
                <p>You are not signed in.</p>
            </div>
        );
    }
};

export default Lifestyle;