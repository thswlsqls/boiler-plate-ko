import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { registerUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch()

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
        

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)

    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); //페이지가 리프레시 되는 것을 막는다.
        
        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.') 
        }
        
        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        dispatch(registerUser(body)) //action을 취하기 위한 메서드이다.
            .then(response => {
                if(response.payload.success) {
                    props.history.push("/login") //회원가입을 성공하면 로그인 페이지로 이동한다.
                } else {
                    alert("Failed to sign up")
                }
            })

    }
    return (
        <div
        style= {{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh' 
        }}>
            <form style={{ display:'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                
                <br />
                <button type="Submit">
                    Register
                </button>
            </form>
        
        </div>
    )
}

export default withRouter(RegisterPage)
