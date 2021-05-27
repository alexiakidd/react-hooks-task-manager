import { render, screen } from '@testing-library/react'
import GerenciadorTarefas from './gerenciador-tarefas'

test('renders learn react link', () => {
	render(<GerenciadorTarefas />)
	const linkElement = screen.getByText(/learn react/i)
	expect(linkElement).toBeInTheDocument()
})
