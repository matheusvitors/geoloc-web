import { Service } from "core/service";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Tabela, Titulo } from "./styles";

const ListarRotas = () => {

	const [rotas, setRotas] = useState();
	const navigate = useNavigate();


	useEffect(() => {	
		document.title = "Geoloc - Listar Rotas";
		getRotas();
	}, []); 

	const getRotas = async () => {
		const response = await Service.listaRotas();
		setRotas(response.data.rotas)
	}

	return (
		<Container>
			<Titulo>Rotas</Titulo>
			<Tabela>
				<thead>
					<tr>
						<td style={{width: '20%'}}>ID</td>
						<td style={{width: '80%'}}>Data</td>
					</tr>
				</thead>

				<tbody>
				{rotas && rotas.map(
					rota => <tr key={rota.id} onClick={() => navigate(`/mapa/${rota.id}`)}>
								<td>{rota.id}</td>
								<td>{new Date(rota.createdAt).toLocaleDateString("pt-br")}</td>
							</tr>
					)
				}
				</tbody>
			</Tabela>
		</Container>
		);
};

export default ListarRotas;

