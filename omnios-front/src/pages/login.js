import { Card } from 'antd'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { setAppTest } from "../actions/appActions"
import LoginForm from '../components/loginForm'


const Login=(props)=>{
    useEffect(()=>{
    
    })
    return (
         <div>
    <>
    <Card title="Welcome" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <LoginForm/>
    </Card>
 
  </>,
       
    </div>)
}

const mapStateToProps = (state) => ({
    test:state.app.test
  });

export default connect(mapStateToProps,{setAppTest})(Login)