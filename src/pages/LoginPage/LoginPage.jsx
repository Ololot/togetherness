import React from 'react'
import "./LoginPage.scss"
import CustomInput from '../../UI/CustomInput/CustomInput'
import CustomButton from '../../UI/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setName } from '../../redux/status'

export function LoginPage() {
    const navigator = useNavigate();
    const name = useSelector((state) => state.status.name);
    const dispatch = useDispatch();

    return (
        <div className='LoginPage'>
            <label className='nameInputLabel'>Имя вашего персонажа:</label>
            <CustomInput value={name} onChange={(e) => { dispatch(setName(e.target.value)) }} />
            <CustomButton onClick={() => { if (name !== "") navigator("fraction") }} disabled={name === ""}>Далее</CustomButton>
        </div>
    )
}
