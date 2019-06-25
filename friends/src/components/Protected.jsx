import React from 'react'
import Login from './Login'

const Protected = props  => {
    const verify = () => {
        const token = localStorage.getItem('token') || '';
        if(!!token) {
            return true
        }
        return false
    }
        if(verify()) {
          return  <props.component />
        }
        return <Login />
}

export default Protected
