import { TaskRepositoryImpl } from 'src/app/repository/impl/TaskRepositoryImpl';
import { TaskRepository } from './../../repository/TaskRepository';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private taskRepository: TaskRepository
    constructor() {
        this.taskRepository = new TaskRepositoryImpl()
    }

    async findAllTasks(projectId: string) {
        return await this.taskRepository.findByProject(projectId)
    }

    async add(task: Task) {
        task.createdAt = new Date()
        task.id = uuidv4();
        await this.taskRepository.save(task)
        console.log(`Criada com sucesso a atividade ${task.name}`, task)
    }

    async delete(task: Task) {
        await this.taskRepository.delete(task)
        console.log(`Apagada a atividade ${task.name}`, task);
    }

    async findById(taskId: string, projectId: string) {
        return await this.taskRepository.findById(taskId, projectId);
    }

    async update(task: Task) {
        await this.taskRepository.update(task)
        console.log(`Atualizada a atividade ${task.name}`, task);
    }
}