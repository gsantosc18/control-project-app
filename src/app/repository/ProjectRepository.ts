import { Project } from "../interfaces/Project";
export interface ProjectRepository {
    all(): Project[];
    save(project: Project): void;
    delete(id: number): void;
    findById(id: string): Project
    update(project: Project): void
}