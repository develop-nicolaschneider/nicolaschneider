import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import './assets/styles/App.css';
import SiteLoader from "./components/helpers/SiteLoader";
import Footer from "./components/helpers/Footer";

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const { t} = useTranslation()

    useEffect(() => {
        const loadPage = () => {
            setTimeout(() => {
                setIsLoading(false)
            }, 4000)
            //}, 0)
        }
        loadPage()
    }, []);

    return isLoading ? (
            <SiteLoader/>
        ) : (
            <div><h1>{t("pageTitle")}</h1><Footer/></div>
    )
}

export default App;
