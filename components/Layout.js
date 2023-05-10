import Footer from "./Footer";
import styles from "../src/styles/Footer.module.css"

const Layout = ({ children }) => {
    return (
        <div>
            {children}
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;