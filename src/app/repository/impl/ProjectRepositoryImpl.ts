import { Project } from "src/app/interfaces/Project";
import { ProjectRepository } from "../ProjectRepository";

export class ProjectRepositoryImpl implements ProjectRepository {
    url: string = "http://localhost:3000/projects"

    async all(): Promise<Project[]>{
        return fetch(this.url)
        .then(response => response.json())
    }

    async save(project: Project) {
        const data = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }
        await fetch(this.url, data)
    }

    async delete(id: string) {
        await fetch(`${this.url}/${id}`, {method: "DELETE"})
    }

    async findById(id: string): Promise<Project> {
        return await fetch(`${this.url}/${id}`)
        .then(response => response.json())
    }

    async update(project: Project) {
        const data = {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }
        await fetch(`${this.url}/${project.id}`, data)
    }
}