import { Project } from "../../interfaces/Project";
import { ProjectRepository } from "../ProjectRepository";

export class ProjectLocalImpl implements ProjectRepository {
    all(): Project[] {
        let json = localStorage.getItem("projectsItens")
        if(json) {
            return JSON.parse(localStorage.getItem("projectsItens") || "") || []
        }
        return []
    }

    save(project: Project): void {
        let projects: Project[] = this.all()
        projects.push(project)
        localStorage.setItem("projectsItens", JSON.stringify(projects));
    }

    delete(id: number): void {
        let projects: Project[] = this.all()
        projects.splice(id, 1)
        localStorage.setItem("projectsItens", JSON.stringify(projects));
    }

    findById(id: string): Project {
        let projects: Project[] = this.all()
        let index = this.findIndex(id)
        return projects[index];
    }

    update(project: Project): void {
        const index = this.findIndex(project.id);
        console.log("Projeto encontrado: "+index)
        const projects: Project[] = this.all();
        projects[index] = project;
        localStorage.setItem("projectsItens", JSON.stringify(projects));
    }

    private findIndex(id: string): number {
        const projects: Project[] = this.all();
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].id == id) {
                return i
            }
        }

        return -1;
    }
}