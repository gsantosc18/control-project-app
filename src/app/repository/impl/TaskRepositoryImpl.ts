import { Task } from 'src/app/interfaces/Task';
import { TaskRepository } from './../TaskRepository';

export class TaskRepositoryImpl implements TaskRepository {
    private PROJECT_URL = "http://localhost:3000/projects"

    async findByProject(projectId: string): Promise<Task[]> {
        return await fetch(`${this.PROJECT_URL}/${projectId}/tasks`).then(r => r.json())
    }

    async save(task: Task) {
        const data = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }
        await fetch(`${this.PROJECT_URL}/${task.projectId}/tasks`, data)
    }

    async delete(task: Task) {
        await fetch(`${this.PROJECT_URL}/${task.projectId}/tasks/${task.id}`, {method: "DELETE"})
    }
}