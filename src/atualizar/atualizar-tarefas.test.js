import AtualizarTarefa from './atualizar-tarefas'

describe('Teste do componente de atualizar tarefas', () => {
	it('deve renderizar o componente sem erros', () => {
		const div = document.createElement('div')
		ReactDOM.render(<AtualizarTarefa id={1} />, div)
		ReactDOM.unmountComponentAtNode(div)
	})
})
