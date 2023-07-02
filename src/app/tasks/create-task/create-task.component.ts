import { Project } from 'src/app/interfaces/Project';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskValidation } from 'src/app/validations/TaskValidation';
import { ProjectService } from 'src/app/service/http/ProjectService';
import { TaskService } from 'src/app/service/http/TaskService';
import { Task } from 'src/app/interfaces/Task';
import { Status, status } from 'src/app/interfaces/Status';
import { getStatus } from 'src/app/interfaces/Status';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  projectId: string = ""
  project :Project | null = null
  taskForm: FormGroup = new TaskValidation().get()

  listStatus: Status[] = status

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private taskService: TaskService
  ){}

  ngOnInit() {
    this.projectId = this.activatedRoute.snapshot.params["projectId"]
    this.projectService.findById(this.projectId).then(r=>this.project = r)
  }

  async save() {
    let task:Task = this.taskForm.value
    task.projectId = this.projectId
    task.status = getStatus(this.taskForm.value.status)
    console.log(this.taskForm.value);    
    await this.taskService.add(task)
    this.router.navigate(['/projects',this.projectId,'tasks'])
  }
}
