import { ProjectLocalImpl } from './../../repository/impl/ProjectLocalImpl';
import { ProjectRepository } from './../../repository/ProjectRepository';
import { Injectable } from "@angular/core";
import { Project } from "../../interfaces/Project";
import { Observable, of } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projectRepository: ProjectRepository

    constructor() {
        this.projectRepository = new ProjectLocalImpl()
    }

    all(): Observable<Project[]> {
        return of(this.projectRepository.all())
    }

    add(project: Project) {
        project.createdAt = new Date()
        project.id = uuidv4();
        this.projectRepository.save(project)
        console.log("Criado novo projeto: project="+JSON.stringify(project))
    }

    delete(id: number) {
        this.projectRepository.delete(id)
        console.log("Deletado projeto: id="+id)
    }
    
    findById(id: string) {
        return this.projectRepository.findById(id)
    }

    update(project: Project) {
        this.projectRepository.update(project)
    }
}