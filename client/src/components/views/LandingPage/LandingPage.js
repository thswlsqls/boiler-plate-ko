import React,{ useEffect} from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, []) //cors정책에 의해 보안적인 이유로 서로 다른 포트를 갖고 있는 서버는 req를 보낼 수 없다.
            //cross origin request sharing의 약자이다. 서버와 클라이어에서 별도의 설정을 해주는 것으로 해결할 수도 있지만 proxy를 사용할 수도 있다.
    return (
        <div>
            LandingPage 랜딩페이지
        </div>
    )
}

export default LandingPage

