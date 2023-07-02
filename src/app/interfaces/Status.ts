export interface Status {
    id: number,
    name: string
}

export const status: Status[] = [
    { id: 1, name: "Em Refinamento" },
    { id: 2, name: "A fazer" },
    { id: 3, name: "Em Desenvolvimento" },
    { id: 4, name: "Em Teste" },
    { id: 5, name: "Em Homologação" },
    { id: 6, name: "Em Implantação" },
    { id: 7, name: "Concluído" },
]

export function getStatus(id: number): Status {
    return status[id-1]
}