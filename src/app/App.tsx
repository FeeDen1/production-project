import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";

import {useTheme} from "shared/config/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;