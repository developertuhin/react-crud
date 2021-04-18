import React from 'react';
import  { createContext } from 'react';
import  { useState } from 'react';

export const UserContext = createContext()

export const UserProvider =(props) =>{
    const [users,setUsers] = useState(
        [
            {id:1, name:'Tuhin Khan', position:'Fullstack Developer', salary:50000},
            {id:2, name:'John Smith', position:'BackEnd Developer', salary:40000},
            {id:3, name:'Kim John Un', position:'FrontEnd Developer', salary:30000},
            {id:4, name:'Doland Bobs', position:'Android Developer', salary:60000},
            {id:5, name:'Mile Gates', position:'Graphics Designer', salary:20000},
        ]
    )
    return (
        <UserContext.Provider value ={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}