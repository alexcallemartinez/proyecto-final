import React, { useContext, useState } from 'react'
import AuthContext from '../../../../context/auth/authContext';
import { postLogin } from '../../../../services/authService';
import logo  from "../../../../assets/img/logo-login-admin.jpg"


const AuthLoginScreen = (props) => {

  const { iniciarSesionContext } = useContext(AuthContext);

  const [formulario, setFormulario] = useState({
    correo: "",
    password: ""
  });

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault();
    // TODO: Aplicar validación
    postLogin(formulario).then(rpta => {
      console.log(rpta);
      if (rpta.ok) {
        /// significa login exitoso =)
        iniciarSesionContext(rpta.token);
        props.history.push("/admin/home")
      }
    })
  }

  return (
<main className="text-center" >
    <form className="form-signin" onSubmit={submit}>
      <img className="mb-4" src={logo} alt="" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Iniciar sesión</h1>
      <label for="inputEmail" className="sr-only">Corro Electronico</label>
      <input type="email" id="inputEmail" className="form-control" placeholder="Ejm: jgarnica@mail.com" required autofocus id="correo" name="correo" onChange={handleChange} value={formulario.correo} />
      <label for="inputPassword" className="sr-only">Contraseña</label>
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required name="password" id="password"
                     className="form-control" onChange={handleChange}
                    value={formulario.password}/>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Recordar  mi contraseña
    </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Iniciar sesión</button>
      <p className="mt-5 mb-3 text-muted">&copy;2021</p>
    </form>
    </main>



  )
}

export default AuthLoginScreen
