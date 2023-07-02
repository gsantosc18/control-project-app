import { Task } from "../interfaces/Task";

export interface TaskRepository {
    findByProject(projectId: string): Promise<Task[]>
    save(task: Task): void
    delete(task: Task): void
    findById(taskId: string, projectId: string): Promise<Task>
    update(task: Task): void
}