import { useState } from 'react'
import Mensaje from './Mensaje'
import BtnCerrar from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleCerrarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }

    guardarGasto({nombre, cantidad, categoria})
    handleCerrarModal()
  }

  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={BtnCerrar} alt='cerrar modal' onClick={handleCerrarModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto</label>
          <input
            id='nombre'
            placeholder='Añade el nombre del gasto'
            type='text'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            id='cantidad'
            placeholder='Añade la cantidad del gasto'
            type='number'
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className='campo'>
          <label htmlFor='categoria'></label>
          <select
            id='categoria'
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=''>-- Seleccione --</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>
        <input type='submit' value='Añadir Gasto' />
      </form>
    </div>
  )
}

export default Modal
