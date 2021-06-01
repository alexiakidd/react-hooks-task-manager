import React, { useState } from 'react'
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap'
import { navigate, A } from 'hookrouter'
import Tarefa from '../models/tarefa.model'

// import { Container } from './styles';

function CadastrarTarefa() {
	const [tarefa, setTarefa] = useState('')
	const [formValidado, setformValidado] = useState(false)
	const [exibirModal, setexibirModal] = useState(false)

	function cadastrar(event) {
		event.preventDefault()
		setformValidado(true)
		if (event.currentTarget.checkValidity() === true) {
			//obtem as tarefas
			const tarefasDb = localStrorage['tarefas']
			const tarefas = tarefasDb ? JSON.parse(tarefasDB) : []

			//persiste a tarefa
			tarefas.push(new Tarefa(new Date().getTime(), tarefa, false))
			localStorage['tarefas'] = JSON.stringify(tarefas)
			setexibirModal(true)
		}
	}

	function handleTxtTarefa(event) {
		setTarefa(event.target.value)
	}

	function handleFecharModal() {
		navigate('/')
	}

	return (
		<div>
			<h3 className="text-center">Cadastrar</h3>
			<Jumbotron>
				<Form validated={formValidado} noValidate onSubmit={cadastrar}>
					<Form.Group>
						<Form.Label>Tarefa</Form.Label>
						<Form.Control
							type="text"
							placeholder="Digite a tarefa"
							minLength="5"
							maxLength="100"
							required
							value={tarefa}
							onChange={handleTxtTarefa}
						/>
					</Form.Group>
					<Form.Control.Feedback type="invalid">
						A tarefa deve conter ao menos 5 caracteres
					</Form.Control.Feedback>
					<Form.Group className="text-center">
						<Button variant="success" type="submit">
							Cadastrar
						</Button>
						&nbsp;
						<A href="/" className="btn btn-light">
							Voltar
						</A>
					</Form.Group>
				</Form>
				<Modal show={true} onHide={handleFecharModal}>
					<Modal.Header>
						<Modal.Title>Sucesso</Modal.Title>
					</Modal.Header>
					<Modal.Body>Tarefa adicionada com sucesso!</Modal.Body>
					<Modal.Footer>
						<Button onClick={handleFecharModal} variant="success">
							Continuar
						</Button>
					</Modal.Footer>
				</Modal>
			</Jumbotron>
		</div>
	)
}

export default CadastrarTarefa
