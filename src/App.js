import React,{ useState } from 'react';
import { Row, Button, Card, Divider } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import './App.css';
import { auth, provider,db} from './firebase'
const Auth = props =>{
 const signInwithGoogle = () =>{ 
   console.log("started");
    auth.signInWithPopup(provider).then(function(result) {
      db.collection("users").
      doc(result.user.uid).
      set({
        email: result.user.email,
        user_name: result.user.displayName,
        createdAt:new Date()
      })
     localStorage.setItem("token",result.user.uid)
  }).then(()=>{
    props.history.push('/dashboard')
   
    
  }).catch(function(error) {
    console.log(error)
  });

 }
  return (
    <div className="App">
      <header className="App-header">
        <Row justify="center">
            <Card title="Login to Github" bordered={true} style={{ borderColor:'black',border:1,width: '350px' }}>
              <p>
                <Button type="primary" icon={<GithubOutlined />} onClick={signInwithGoogle} style={{borderColor:'rgba(0, 0, 0, 0.07);'}}>
                  <Divider type="vertical" />
                    Sign In
                </Button>
              </p>
            </Card>
        </Row>
       
      </header>
    </div>
  );

}


export default Auth;
