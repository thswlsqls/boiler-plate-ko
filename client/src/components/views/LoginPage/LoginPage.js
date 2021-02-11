import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; 
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {

    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)

    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); //페이지가 리프레시 되는 것을 막는다.

        console.log('Email', Email);
        console.log('Password', Password);
                        
        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body)) //action을 취하기 위한 메서드이다.

            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/') //리액트에서 페이지를 이동하는 방법이다.
                } else {
                    alert('Error')
                }
            })

        // Axios.post('api/users/login', body)
        //     .then(response => { //해당 주소로 서버에 요청을 보낸다.
                
        //     })
    }
    return (
        <div style= {{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh' 
        }}>

            <form style={{ display:'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
                >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        
        </div>
    )
}

export default withRouter(LoginPage)



