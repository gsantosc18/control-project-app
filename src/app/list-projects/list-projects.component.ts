import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/Project';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from "../service/dialog/DialogService";

import { PaginatorConfig, PaginatorIntl } from "./custom/PaginatorIntl";
import { MatPaginatorIntl } from '@angular/material/paginator';

import { ProjectService } from "../service/http/ProjectService";

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
  providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntl }],
})
export class ListProjectsComponent implements OnInit {
  listProjects: Array<Project> = []
  config: PaginatorConfig = { length: 5, options: [5, 10, 25] }

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectService
  ){ }

  ngOnInit(): void {
    this.getProjects()
  }

  openDialog(project: Project, index: number): void {
    this.dialog.open(DialogService, {
      data: {
        title: project.name,
        content: `Deseja realmente apagar o projeto ${project.name}?`,
        onSuccess: () => {
          this.projectService.delete(index)
          this.getProjects()
        }
      }
    })
  }

  getProjects() {
    this.projectService
    .all()
    .subscribe(p => this.listProjects = p)
  }
}
