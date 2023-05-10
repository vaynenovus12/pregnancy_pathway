import { useSession, signOut, getSession } from 'next-auth/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { EventNote, Home, MedicalInformation, PregnantWoman, Troubleshoot } from '@mui/icons-material';
import { IconButton, Paper, FormControl, InputLabel, Select, Divider, OutlinedInput, MenuItem, Chip } from '@mui/material';
import styles from '../styles/Patient_Profile.module.css'
import Link from 'next/link';
import stylesFromIndex from '../styles/Index.module.css'
import { FaBaby } from 'react-icons/fa';
import styles2 from '../styles/SymptomTracker.module.css'
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const symptoms = [
    'Nausea and vomiting',
    'Missed period',
    'Breast changes',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const symptoms_tracker = () => {
    const theme = useTheme();
    const [value, setValue] = useState(dayjs('2022-04-17'));
    const { data: session, status } = useSession();
    const [symptom, setSymptoms] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSymptoms(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

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

                <div className={styles2.navbarAndSymptomLayout}>
                    <div className={styles.navbar}>
                        <Link href='/symptoms_tracker' className={styles.navigationMenu}><Troubleshoot fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles.navigationMenu}><EventNote fontSize='30' /></Link>
                        <Divider />
                        <Link href='/lifestyle' className={styles.navigationMenu}><PregnantWoman fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles.navigationMenu}><MedicalInformation fontSize='30' /></Link>
                        <Divider />
                        <Link href='/' className={styles.navigationMenu}><FaBaby /></Link>
                    </div>
                    <div className={styles2.symptom}>

                        <Paper elevation={2}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p className={styles2.symptomTitle}>Add Symptom</p>
                                <FormControl sx={{ m: 1, width: 400 }}>
                                    <InputLabel id="demo-multiple-chip-label">Symptom</InputLabel>
                                    <Select
                                        className={styles2.inputSymptom}
                                        labelId="demo-multiple-chip-label"
                                        id="demo-multiple-chip"
                                        multiple
                                        value={symptom}
                                        onChange={handleChange}
                                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={MenuProps}
                                    >
                                        {symptoms.map((symptom) => (
                                            <MenuItem
                                                key={symptom}
                                                value={symptom}
                                                style={getStyles(symptoms, symptom, theme)}
                                            >
                                                {symptom}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                </FormControl>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker sx={{ marginTop: 2 }} label="From" defaultValue={dayjs('2022-04-17')} />
                                    <DatePicker
                                        sx={{ marginTop: 2, marginBottom: 2 }}
                                        label="Until"
                                        value={value}
                                        onChange={(newValue) => setValue(newValue)}
                                    />
                                </LocalizationProvider>
                                <Button variant="contained" className={styles2.SaveButton}>
                                    Save
                                </Button>
                            </div>
                        </Paper>
                        <Paper elevation={2} sx={{ marginTop: 3 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p className={styles2.symptomTitle}>Symptom History</p>
                                <Timeline
                                    sx={{
                                        [`& .${timelineOppositeContentClasses.root}`]: {
                                            flex: 0.2,
                                        },
                                    }}
                                >
                                    <TimelineItem>
                                        <TimelineOppositeContent color="textSecondary">
                                            2/4/2023 09:30 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>Headache</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="textSecondary">
                                            4/4/2023 10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>Nausea and Vomiting</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="textSecondary">
                                            4/5/2023 10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>Breast Changes</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent color="textSecondary">
                                            6/5/2023 10:00 am
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>Missed Period</TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </div>
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

export default symptoms_tracker;

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