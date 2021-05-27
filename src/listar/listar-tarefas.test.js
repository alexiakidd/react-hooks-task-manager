import ListarTarefas from './listar-tarefas'
import ReactDOM from 'react-dom'
describe('Teste do componente de listagem e tarefas', () => {
	it('deve renderizar o componente sem erros', () => {
		const div = document.createElement('div')
		ReactDOM.render(<ListarTarefas />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
