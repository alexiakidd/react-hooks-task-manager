import './gerenciador-tarefas.css'
import { useRoutes } from 'hookrouter'
import ListarTarefas from './listar/listar-tarefas'
import CadastrarTarefa from './cadastrar/cadastrar-tarefa'
import AtualizarTarefa from './atualizar/atualizar-tarefas'

const routes = {
	'/': () => <ListarTarefas />,
	'/cadastrar': () => <CadastrarTarefa />,
	'/atualizar/:id': ({ id }) => <AtualizarTarefa id={id} />,
}

function GerenciadorTarefas() {
	return <div className="container"> {useRoutes(routes)}</div>
}
export default GerenciadorTarefas
