export interface Task {
    id: string | null,
    name: string | null, 
    description: string | null, 
    createdAt: Date | null,
    projectId: string
}