import { A } from 'hookrouter'
import React from 'react'

// import { Container } from './styles';

function ListarTarefas() {
	return (
		<A href="/cadastrar">
			<div className="btn btn-success btn-sm">Nova tarefa</div>
		</A>
	)
}

export default ListarTarefas
