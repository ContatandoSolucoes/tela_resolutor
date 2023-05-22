import React, {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'

import './Style.css'
import api from '../api.js'

function Tabela() {

    const [denuncia, setDenuncia] = useState([])

    useEffect(() => {
        async function getDenuncia() {
            const {data} = await api.get('/resolutor')
            setDenuncia(data) 
        }
        getDenuncia()
    }, [denuncia])

  return (
    <>
        <Table striped bordered hover className='tabela'>
            <thead>
                <tr>
                    <th>ID denuncia</th>
                    <th>Quantidade</th>
                    <th>Tipo de problema</th>
                    <th>CEP</th>
                </tr>
            </thead>
            <tbody>
                {
                    denuncia.map((item) => (
                        <tr key={item.id_denuncia}>
                            <td>{item.id_denuncia}</td>
                            <td>{item.qnt_denuncia}</td>
                            <td>{item.tipo_problema}</td>
                            <td>{item.fk_cep}</td>
                            
                            <td>
                                <button className='btn modal-trigger btn-editar'>Resolver</button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </>
  )
}

export default Tabela