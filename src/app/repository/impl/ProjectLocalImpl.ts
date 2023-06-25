import { Project } from "../../interfaces/Project";
import { ProjectRepository } from "../ProjectRepository";

export class ProjectLocalImpl implements ProjectRepository {
    projects: Project[] = []

    constructor() {
        this.all()
        .then(projects => this.projects = projects)
    }

    all(): Promise<Project[]> {
        let json = localStorage.getItem("projectsItens")
        if(json) {
            return Promise.resolve(JSON.parse(localStorage.getItem("projectsItens") || "") || [])
        }
        return Promise.reject()
    }

    save(project: Project): void {
        this.projects.push(project)
        localStorage.setItem("projectsItens", JSON.stringify(this.projects));
    }

    delete(id: string): void {
        this.projects.splice(this.findIndex(id), 1)
        localStorage.setItem("projectsItens", JSON.stringify(this.projects));
    }

    findById(id: string): Promise<Project> {
        let index = this.findIndex(id)
        return Promise.resolve(this.projects[index]);
    }

    update(project: Project): void {
        if(project.id == null) {
            return;
        }
        const index = this.findIndex(project.id);
        console.log("Projeto encontrado: "+index)
        this.projects[index] = project;
        localStorage.setItem("projectsItens", JSON.stringify(this.projects));
    }

    private findIndex(id: string): number {
        for(let i = 0; i < this.projects.length; i++) {
            if(this.projects[i].id == id) {
                return i
            }
        }

        return -1;
    }
}