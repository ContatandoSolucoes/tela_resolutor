import React, {useEffect, useState} from 'react'

import Table from 'react-bootstrap/Table'
import { Link, useNavigate } from 'react-router-dom'

import './Style.css'
import api from '../api.js'

function Tabela() {

    const [denuncia, setDenuncia] = useState([])
    let navigate = useNavigate();

    useEffect(() => {
        async function getDenuncia() {
            const {data} = await api.get('/resolutor')

            setDenuncia(data) 
        }
        getDenuncia()
    }, [denuncia])

    // sessionStorage.setItem("id", denuncia[0].id_denuncia)

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
                                <button onClick={() => {navigate(`/forms/${item.id_denuncia}`)}} className='btn modal-trigger btn-editar'>Resolver</button>
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