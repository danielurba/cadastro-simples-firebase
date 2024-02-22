import Tabela from "../components/Tabela"
import Layout from "../components/Layout"
import Botao from "@/components/Botao"
import Formulario from "@/components/Formulario"
import useClientes from "@/hooks/useClientes"

export default function Home() {

    const { clienteSelecionado, clienteExcluido, salvarCliente, cliente, novoCliente, clientes, tabelaVisivel, exibirTabela } = useClientes()

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <Layout titulo="Cadastro Simples">
                {tabelaVisivel ? (
                    <>
                        <div className="flex justify-end">
                            <Botao onClick={novoCliente} cor="blue" className="mb-4">Novo Cliente</Botao>
                        </div>
                        <Tabela clienteExcluido={clienteExcluido} clienteSelecionado={clienteSelecionado} clientes={clientes}></Tabela>
                    </>
                ) : (
                    <Formulario clienteMudou={salvarCliente} cancelado={exibirTabela} cliente={cliente} />
                )}
            </Layout>
        </div>
    )
}