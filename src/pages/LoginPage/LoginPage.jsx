import React, { useState } from 'react'
import "./LoginPage.scss"
import CustomInput from '../../UI/CustomInput/CustomInput'
export function LoginPage(props) {

    const [name, set_name] = useState('');

    return (
        <div className='LoginPage'>
            <label className='nameInputLabel'>Имя вашего персонажа:</label>
            <CustomInput value={name} onChange={(e) => { set_name(e.target.value) }} />
        </div>
    )
}
