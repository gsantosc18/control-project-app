import { Task } from "../interfaces/Task";

export interface TaskRepository {
    findByProject(projectId: string): Promise<Task[]>
    save(task: Task): void
    delete(task: Task): void
}