
import './SuccessLogin.scss';

import { createClient } from '@supabase/supabase-js';
// import { Auth }  from '@supabase/auth-ui-react'
import { useNavigate } from 'react-router-dom';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
import  {useEffect, useState} from 'react';



const supabase = createClient(
    'https://poprpfzqyzbmsbhtvvjw.supabase.co', // Supabase URL
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcHJwZnpxeXpibXNiaHR2dmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MDYzMTEsImV4cCI6MjAyNzI4MjMxMX0.wMh3igzPTekhCkRSWyknGW2YEJII8JJH_8PvYnu3hXo' // API Key
);

const SuccessLogin = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user){
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);

    async function signOutUser(){
        // eslint-disable-next-line no-unused-vars
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }

    return (
        <div>
            { Object.keys(user).length !== 0 ?
                    <>
                    <div className='first-element info-success' >
                        <div>Вы вошли в свою учетную запись!</div>
                        <button onClick={() => signOutUser()} >Выйти</button>
                    </div>
                    </>
                    :
                    <>
                    <div className="fist-element info-success">
                        <div className='first-element'>Вы не вошли в систему.</div>
                        <button onClick={() => {navigate ("/") }} >На главную</button>
                    </div>
                    </>
            } 
        </div>
    );
}
 
export default SuccessLogin;

