import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAuthUser} from "../app/userSlice";

const Auth = () => {
    const authUser = useSelector(state => state.AuthUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [dataBaseUsers, setDataBaseUsers] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const localUsername = localStorage.getItem('username')
    const localEmail = localStorage.getItem('email')
    useEffect(() => {

        const local = ()=>{
            if(localUsername && localEmail){
                dispatch(setAuthUser({username:localUsername,email:localEmail,password:'',isAuth:true}))
            }
        }

        local()
    }, []);
    useEffect(() => {



        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/users");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setDataBaseUsers(data);

            } catch (error) {
                console.error('Error fetching data:', error.message);
                // Handle error (e.g., set an error state)
            }
        };

        fetchData();

    }, []);

  async  function handlerAuth() {
      const newUser = {username:userName,email:email,password:password}
      if(isLogin===false){
          if(dataBaseUsers.filter(item=>item.username===newUser.username &&item.email===newUser.email).length!==0) {
              setErrMsg('Такой пользователь уже существует')
              setEmail('')
              setPassword('')
              setUserName('')

          }else{
              await fetch('http://localhost:3000/users', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({...newUser,admin:false})
              })
                  .then(response => {
                      if (!response.ok) {
                          throw new Error('Failed to add user');
                      }
                      return response.json();
                  })
                  .then(newUser => {
                      console.log('New user added:', newUser);

                  })
                  .catch(error => {
                      console.error('Error adding user:', error.message);
                  });
              localStorage.setItem('username',newUser.username)
              localStorage.setItem('email',newUser.email)
              localStorage.setItem('admin','false')

              navigate('/')
          }
      }else {
          if(dataBaseUsers.filter(item=>item.username===newUser.username &&item.email===newUser.email && item.password===newUser.password).length!==0){
              localStorage.setItem('username',newUser.username)
              localStorage.setItem('email',newUser.email)
              dataBaseUsers.filter(item=>item.username===newUser.username &&item.email===newUser.email && item.password===newUser.password)[0].admin && localStorage.setItem('admin','true')


              navigate('/')
          }
          else {
              setErrMsg('Логин или пароль не подходит')
          }

      }
    }



    return (
     <Container
     className="d-flex justify-content-center align-items-center"
     style={{height:window.innerHeight-54}}
     >
    <Card style={{width:600}} className="p-5">
        <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className='d-flex flex-column'>
                <Form.Control
                    value={userName}
                    onChange={e=>setUserName(e.target.value)}
                    className={'mt-3'}
                    placeholder="Введите ваш username..."/>
            <Form.Control
                value={email}
                onChange={e=>setEmail(e.target.value)}
                className={'mt-3'}
            placeholder="Введите ваш email..."/>
            <Form.Control
                value={password}
                onChange={e=>setPassword(e.target.value)}
                className={'mt-3'}
                placeholder="Введите ваш пароль..."/>
            <Row className={'d-flex justify-content-between pe-3'}>
                {
                    isLogin ?
                        <div onClick={()=>setIsLogin(false)} >
                            Нет аккаунта? <Link to=''>Зарегитсрируйся</Link>
                        </div>
                        :
                        <div onClick={()=>setIsLogin(true)}>
                            Есть аккаунт?  <Link to=''>Войдите</Link>

                        </div>
                }
                <p className='text-danger'>{errMsg}</p>
                <Button variant={"outline-success"} onClick={()=>handlerAuth()} className='mt-3 '>{isLogin?'Войти':'Регистрация'}</Button>

            </Row>
        </Form>
    </Card>
     </Container>
    );
};

export default Auth;