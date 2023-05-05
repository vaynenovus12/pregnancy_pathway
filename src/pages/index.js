import { Inter } from 'next/font/google'
import Footer from '../../components/Footer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useSession, signIn, signOut } from "next-auth/react";


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: 'teal' }} position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pregnancy Pathway
            </Typography>
            <Button onClick={() => signOut()} sx={{ color: 'white', borderColor: 'azure', }} variant="outlined" startIcon={<LoginIcon />}>
              Sign Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Footer />
    </div>
    );
  } else {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ backgroundColor: 'teal' }} position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Pregnancy Pathway
              </Typography>
              <Button href='/login' sx={{ color: 'white', borderColor: 'azure', }} variant="outlined" startIcon={<LoginIcon />}>
                Sign in
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Footer />
      </div>
    )
  }
  
  
}
