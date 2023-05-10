import { Inter } from 'next/font/google'
import Footer from '../../components/Footer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useSession, signIn, signOut } from "next-auth/react";
import styles from '../styles/Index.module.css'
import { IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ backgroundColor: "#511454" }} position="static">
            <Toolbar className={styles.appBarLayout}>
              <div className={styles.appLogoandTitleLayout}>
                <img src='/logo-web.svg' height={60} width={60} />
                <p className={styles.brandName}>Pregnancy Pathway</p>
              </div>
              <div>
                <IconButton href='/patient_profile' sx={{ color: 'white', marginRight: 2 }}><AccountCircle /></IconButton>
                <Button onClick={() => signOut()} sx={{ color: 'white', borderColor: 'azure', }} variant="outlined" startIcon={<LoginIcon />}>
                  Sign Out
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <p className={styles.projectName}>Pregnancy Pathway: AI-Driven Women's Pregnancy Health Platform</p>
        <div className={styles.layoutIndexContent}>
          <div className={styles.layoutDiscover}>
            <div>
              <p className={styles.discover}>Discover Pregnancy Pathway!</p>
              <p className={styles.project_description}>Pregnancy Pathway is an AI-based platform that can be used to help
                pregnant womens monitor their health and provide personalized recommendations for optimal prenatal care. This platform could utilize machine learning algorithms to analyze patient medical records, genetic information, and lifestyle factors, while also considering the latest clinical research in the field. Additionally, the platform could incorporate a patient-facing app where users can track their symptoms, receive tailored lifestyle recommendations, and access a network of specialists for remote consultations.
              </p>
            </div>
            <img src='/mother.svg' className={styles.mother} height={300} width={300} />
          </div>
          <div className={styles.layoutSymptomTracker}>
            <img src='/diagnosis.svg' className={styles.symptom} height={300} width={300} />
            <div>
              <p className={styles.symptomTracker}>What does Diagnosis do?</p>
              <p className={styles.symptracker_description}>It displays the diagnosis results for the patient based on their symptoms and medical history. It can also display information about the diagnosis and potential treatment options.
              </p>
            </div>
          </div>
          <div className={styles.layoutDiscover}>
            <div>
              <p className={styles.discover}>What does Symptom Tracker do?</p>
              <p className={styles.project_description}>It keeps track their symptoms over time. The platform can use machine learning algorithms to analyze the data and provide personalized treatment recommendations based on the patient's symptoms and medical history.</p>
            </div>
            <img src='/symptom.svg' className={styles.mother} height={300} width={300} />
          </div>
          <div className={styles.layoutSymptomTracker}>
            <img src='/lifestyle_recommendation.svg' className={styles.symptom} height={300} width={300} />
            <div>
              <p className={styles.symptomTracker}>What does Lifestyle Recommendation & Specialist Network do?</p>
              <p className={styles.symptracker_description}>It provides personalized recommendations for lifestyle changes and habits that can help manage symptoms and improve overall health. It also provides a network of specialists that patients can contact for remote consultations or in-person appointments.</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ backgroundColor: "#511454" }} position="static">
            <Toolbar className={styles.appBarLayout}>
              <div className={styles.appLogoandTitleLayout}>
                <img src='/logo-web.svg' height={60} width={60} />
                <p className={styles.brandName}>Pregnancy Pathway</p>
              </div>
              <div>
                <Button href='/login' sx={{ color: 'white', borderColor: 'azure', }} variant="outlined" startIcon={<LoginIcon />}>
                  Sign in
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
        <p className={styles.projectName}>Pregnancy Pathway: AI-Driven Women's Pregnancy Health Platform</p>
        <div className={styles.layoutIndexContent}>
          <div className={styles.layoutDiscover}>
            <div>
              <p className={styles.discover}>Discover Pregnancy Pathway!</p>
              <p className={styles.project_description}>Pregnancy Pathway is an AI-based platform that can be used to help
                pregnant womens monitor their health and provide personalized recommendations for optimal prenatal care. This platform could utilize machine learning algorithms to analyze patient medical records, genetic information, and lifestyle factors, while also considering the latest clinical research in the field. Additionally, the platform could incorporate a patient-facing app where users can track their symptoms, receive tailored lifestyle recommendations, and access a network of specialists for remote consultations.
              </p>
            </div>
            <img src='/mother.svg' className={styles.mother} height={300} width={300} />
          </div>
          <div className={styles.layoutSymptomTracker}>
            <img src='/diagnosis.svg' className={styles.symptom} height={300} width={300} />
            <div>
              <p className={styles.symptomTracker}>What does Diagnosis do?</p>
              <p className={styles.symptracker_description}>It displays the diagnosis results for the patient based on their symptoms and medical history. It can also display information about the diagnosis and potential treatment options.
              </p>
            </div>
          </div>
          <div className={styles.layoutDiscover}>
            <div>
              <p className={styles.discover}>What does Symptom Tracker do?</p>
              <p className={styles.project_description}>It keeps track their symptoms over time. The platform can use machine learning algorithms to analyze the data and provide personalized treatment recommendations based on the patient's symptoms and medical history.</p>
            </div>
            <img src='/symptom.svg' className={styles.mother} height={300} width={300} />
          </div>
          <div className={styles.layoutSymptomTracker}>
            <img src='/lifestyle_recommendation.svg' className={styles.symptom} height={300} width={300} />
            <div>
              <p className={styles.symptomTracker}>What does Lifestyle Recommendation & Specialist Network do?</p>
              <p className={styles.symptracker_description}>It provides personalized recommendations for lifestyle changes and habits that can help manage symptoms and improve overall health. It also provides a network of specialists that patients can contact for remote consultations or in-person appointments.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }


}
