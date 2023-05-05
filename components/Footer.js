import styles from '../src/styles/Footer.module.css'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerSection}>
                <p className={styles.copyright}>© 2023 SupplyGO. All rights reserved.</p>
                <div className={styles.companySection}>
                    <p className={styles.company}>Company</p>
                    <Link href="/" className={styles.companyContent}>Privacy Policy</Link>
                    <Link href="/" className={styles.companyContent}>Contact Information</Link>
                </div>
                <div className={styles.socialMediaLayout}>
                    <Link href="/" className={styles.socialMedia}><FaFacebook /></Link>
                    <Link href="/" className={styles.socialMedia}><FaInstagram /></Link>
                    <Link href="/" className={styles.socialMedia}><FaTwitter /></Link>
                    <Link href="/" className={styles.socialMedia}><FaYoutube /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;