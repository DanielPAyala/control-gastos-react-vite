import Gasto from './Gasto'

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  elminarGasto,
  filtro,
  gastosFiltrados
}) => {
  return (
    <div className='listado-gastos contenedor'>
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? 'Gastos'
              : 'No has Gastos en esta Categoría'}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              gasto={gasto}
              key={gasto.id}
              setGastoEditar={setGastoEditar}
              elminarGasto={elminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? 'Gastos' : 'No has Gastos'}</h2>
          {gastos.map((gasto) => (
            <Gasto
              gasto={gasto}
              key={gasto.id}
              setGastoEditar={setGastoEditar}
              elminarGasto={elminarGasto}
            />
          ))}
        </>
      )}
    </div>
  )
}

export default ListadoGastos
