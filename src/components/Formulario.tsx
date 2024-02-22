import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? "")
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada className="mb-5" texto="Código" valor={id} somenteLeitura />
            ): false}
            <Entrada className="mb-5" valorMudou={setNome} texto="Nome" valor={nome} />
            <Entrada valorMudou={setIdade} texto="Idade" valor={idade} tipo="number" />
            <div className="flex justify-end mt-3">
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))} cor="blue" className="mr-2">
                    {id ? "Alterar" : "Salvar"}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}