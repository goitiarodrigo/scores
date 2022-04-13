import { useState } from "react"

interface IProps {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    setIsLogged: (value: boolean) => void
}

const ModalLogin = ({isOpen, setIsOpen, setIsLogged}: IProps) => {
    const [logUser, setLogUser] = useState({user: '', password: ''})
    const credential = {user: "gerva", password: "gervacrespo1234"}
    
    const handleLoggin = () => {
        if (logUser.user === credential.user && logUser.password === credential.password) {
            setIsLogged(true)
            setIsOpen(false)
        }else {
            alert("Usuario o contraseña incorrecta")
        }
    }

  return (
    <div className="modal-login">
        <div className="svg-container" onClick={() => setIsOpen(false)}><svg  xmlns="http://www.w3.org/2000/svg" fill="white" width={15} height={15} viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></div>
        <h1>Iniciar sesión</h1>
        <input autoComplete="false" type="text" className="input" placeholder="Usuario" name="user" value={logUser.user} onChange={(e) => setLogUser({...logUser, [e.target.name]: e.target.value})} />
        <input autoComplete="false" className="input" type="password" placeholder="Contraseña" name="password" value={logUser.password} onChange={(e) => setLogUser({...logUser, [e.target.name]: e.target.value})}/>
        <button onClick={handleLoggin} className="buttonLog">Entrar</button>
    </div>
  )
}

export default ModalLogin