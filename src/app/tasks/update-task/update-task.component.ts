import { Status, getStatus, status } from './../../interfaces/Status';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/Project';
import { ProjectService } from 'src/app/service/http/ProjectService';
import { FormGroup } from '@angular/forms';
import { TaskValidation } from 'src/app/validations/TaskValidation';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/service/http/TaskService';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  projectId: string = ""
  taskId: string = ""
  project: Project | null = null
  task: Task

  taskForm: FormGroup
  listStatus: Status[] = status

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private taskService: TaskService
  ){
    this.task = {id: null, name: null, description: null, createdAt: null, projectId: this.projectId, status: { id: 1, name: "Atividade" }}
    this.taskForm = new TaskValidation().getByTask(this.task)
  }

  async ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.params['projectId']
    this.taskId = this.activatedRoute.snapshot.params['taskId']
    this.projectService.findById(this.projectId).then(r => this.project = r)
    this.task = await this.taskService.findById(this.taskId, this.projectId)
    console.log("Carrgado a atividade", this.task);    
    this.taskForm = new TaskValidation().getByTask(this.task)
  }

  async save() {
    let task:Task = this.taskForm.value
    task.id = this.taskId
    task.projectId = this.projectId
    task.createdAt = this.task.createdAt
    task.status = getStatus(this.taskForm.value.status)

    console.log(this.taskForm.value);
    
    
    await this.taskService.update(task)
    this.router.navigate(['/projects',this.projectId,'tasks'])
  }
}
