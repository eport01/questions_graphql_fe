import React, {useState} from 'react';
import image from '../assets/computer.jpg';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import '../App.css';
import { useQuery, gql, useMutation } from "@apollo/client"
import { AUTH_TOKEN } from '../constants';

const SIGNUP_MUTATION = gql`
mutation {
  createUser(input:{
    name: String,
    authProvider: {
      credentials: {
        email: String,
        password: String
      }
    }}
  ) {
    name
    email
  }
}
`;

const LOGIN_MUTATION = gql`
mutation {
  signinUser(input:{credentials: {
    email: String,
    password: String
  }}){
    token
    user {
      id
    }
  }
}

`








export default function Login() {

  
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '', 
    name: ''
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      navigate('/bquestions');
    }
  });
  
  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      navigate('/bquestions');
    }
  })


  return(

    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>

      <div className='bg-gray-100 flex flex-col justify-center'>
        <div className='max-w-[400px] w-full mx-auto bg-white p-4'>
          <h2 className='text-4xl font-bold text-center py-6'>Task Master</h2>
          <h4 className="mv3">
            {formState.login ? 'Login' : 'Sign Up'}
          </h4>

        <div div className='flex flex-col py-2'>
          {!formState.login && (
            <input
              value={formState.name}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  name: e.target.value
                })
              }
              type="text"
              placeholder="Your name"
            />
          )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Password"
          />
        </div>

        <div className="flex mt3">
          <button
            className="pointer mr2 button"
            onClick={formState.login ? login : signup}
          >
          {formState.login ? 'login' : 'create account'}
          </button>
        <button
          className="pointer button"
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login
            ? 'need to create an account?'
            : 'already have an account?'}
        </button>
        </div>

          {/* <button className='border w-full my-5 py-2 bg-indigo-500 hover:bg-indigo-400 text-white'>Sign In</button>
          <div className='flex justify-between'>
            <p className='flex items-center' ><input className='mr-2' type="checkbox"/>Remember Me</p>
            <p>Create an Account</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}