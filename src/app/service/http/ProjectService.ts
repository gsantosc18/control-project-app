import { ProjectRepository } from './../../repository/ProjectRepository';
import { Injectable } from "@angular/core";
import { Project } from "../../interfaces/Project";
import { v4 as uuidv4 } from 'uuid';
import { ProjectRepositoryImpl } from 'src/app/repository/impl/ProjectRepositoryImpl';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projectRepository: ProjectRepository

    constructor() {
        this.projectRepository = new ProjectRepositoryImpl()
    }

    all(): Promise<Project[]> {
        return this.projectRepository.all()
    }

    async add(project: Project) {
        project.createdAt = new Date()
        project.id = uuidv4();
        await this.projectRepository.save(project)
        console.log("Criado novo projeto: project="+JSON.stringify(project))
    }

    async delete(id: string) {
        await this.projectRepository.delete(id)
        console.log("Deletado projeto: id="+id)
    }
    
    findById(id: string): Promise<Project> {
        return this.projectRepository.findById(id)
    }

    async update(project: Project) {
        await this.projectRepository.update(project)
    }
}