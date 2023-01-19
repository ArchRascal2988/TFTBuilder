import { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import Auth from '../utils/Auth';

// import { LOGIN, NEW_USER } from '../utils/mutations';
import { useEffect } from 'react';


const UserForm= ()=>{
    const[mode, setMode]= useState(true);
    const[erMsg, setMsg]= useState('');
    const[formState, setFormState]= useState({
        username: '',
        password: ''
    });

    // const[login, {error1}]= useMutation(LOGIN);
    // const[signup, {error2}]= useMutation(NEW_USER);

    useEffect(()=>{
        setFormState({
            username: '',
            password: ''
        });
        console.log(formState)
    }, [mode])

    const handleFormSubmit= async () =>{
        try{
            // const {data} = mode? await login({ variables: {...formState}})
            // : await signup({ variables: {...formState}});
            
            // Auth.login(data.login.token);
        } catch (err){
            console.error(err);
            displayError("Oops something went wrong..");
        }

    }

    const displayError= (err: any) =>{
        setMsg(err);

        setTimeout(()=>{
            setMsg('');
        }, 5000);
    }

    if(mode){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    handleFormSubmit();
                }}>
                    <input name='username' type='text' placeholder='Username' value={formState.username}
                    onChange={
                        ({target})=> setFormState({...formState, username: target.value})
                    }></input>
                    <input name='password' type='password' placeholder='Password'  value={formState.password}
                    onChange={
                        ({target})=> setFormState({...formState, password: target.value})
                    }></input>
                    <input type='submit'></input>
                </form>
                <p style={{ color: 'red' }} id='msg'>{erMsg}</p>
                <button onClick={()=>setMode(!mode)}>Don't Have an Account?</button>
            </div>
        )
    } else{
        return(
            <div>
                <h1>Signup</h1>
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    handleFormSubmit()
                }}>
                    <input name='username' type='text' placeholder='Username'  value={formState.username}
                    onChange={
                        ({target})=> setFormState({...formState, username: target.value})
                    }></input>
                    <input name='password' type='password' placeholder='Password' value={formState.password}
                    onChange={
                        ({target})=> setFormState({...formState, password: target.value})
                    }></input>
                    <input type='submit'></input>
                </form>
                <p style={{visibility: 'hidden', color: 'red'}} id='msg'>{erMsg}</p>
                <button onClick={()=>setMode(!mode)}>Already Have an Account?</button>
            </div>
        )
    }
}


export default UserForm;