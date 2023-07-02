import { DialogService } from './../service/dialog/DialogService';
import { ProjectService } from './../service/http/ProjectService';
import { Project } from 'src/app/interfaces/Project';
import { Task } from 'src/app/interfaces/Task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../service/http/TaskService';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  project: Project = {
    id: null,
    name: null,
    description: null,
    createdAt: new Date()
  }
  tasks: Task[] = []
  projectId: string = ""

  constructor(
    private activeRoute: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService,
    private dialog: MatDialog
  ){
  }

  ngOnInit() {
    this.projectId = this.activeRoute.snapshot.params["projectId"]
    this.projectService.findById(this.projectId).then(r => this.project = r)
    this.getTasks()
  }

  openDialog(task: Task): void {
    this.dialog.open(DialogService, {
      data: {
        title: task.name,
        content: `Deseja realmente apagar a atividade ${task.name}?`,
        onSuccess: async () => {
          console.log("Iniciado o delete")
          await this.taskService.delete(task)
          console.log("Finalizado o delete e iniciado a listagem dos projetos")
          this.getTasks()
        }
      }
    })
  }

  getTasks() {
    this.taskService.findAllTasks(this.projectId).then(r => this.tasks = r)
  }
}
