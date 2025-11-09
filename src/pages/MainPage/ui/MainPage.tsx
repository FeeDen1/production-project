import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {BugButton} from "app/providers/ErrorBoundary";
import {Input} from "shared/ui/Input/Input";


const MainPage = () => {
    const {t} = useTranslation('mainPage')
    const [value, setValue] = useState('');

    const onChange = (val:string) => {
        setValue(val);
    };
    return (
        <div>
            <BugButton/>
            {t('Main page')}
            <Input onChange={onChange} value={value} label='Почта' autoFocus/>
        </div>
    );
};

export default MainPage;