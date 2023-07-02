import { Project } from "../interfaces/Project";
export interface ProjectRepository {
    all(): Promise <Project[]>;
    save(project: Project): any;
    delete(id: string): any;
    findById(id: string): Promise<Project>
    update(project: Project): any;
}