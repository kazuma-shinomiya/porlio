import React, { useState, useEffect } from "react";
import LoginForm from '../components/LoginForm';
import { useAuthContext } from '../hooks/AuthContext';

const Login = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { setIsAuth } = useAuthContext();
    
    const login = async(e) => {
        e.preventDefault();
        axios
            .get("/sanctum/csrf-cookie")
            .then(response => {
                axios
                    .post("/login", {
                        email: formData.email,
                        password: formData.password,
                    })
                    .then(response => {
                        console.log('ログイン成功');
                        setIsAuth(true);
                    })
                    .catch(error => {
                        console.log(error.response);
                        console.log('ログイン失敗');
                    })
            })
    }
    
    const logout = async() => {
        await axios
                .post('/logout')
                .then(response => {
                    console.log('ログアウトしました');
                    setIsAuth(false);
                })
                .catch(error => {
                    console.log('ログアウト失敗');   
                })
    }
    
    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }
    
    return(
        <div>
            <LoginForm data={formData} inputChange={inputChange} login={login}/>
        </div>
    )
}
export default Login;