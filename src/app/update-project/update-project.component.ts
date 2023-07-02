import { ProjectService } from './../service/http/ProjectService';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectValidation } from '../validations/ProjectValidation';
import { Project } from '../interfaces/Project';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  projectForm: FormGroup
  private project: Project

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private projectService: ProjectService
  ) {
    this.project = {id: null, name: null, description: null, createdAt: null}
    this.projectForm = new ProjectValidation().getByProject(this.project)
  }

  async ngOnInit() {
    const idProject = this.activeRoute.snapshot.params['id']
    this.project = await this.projectService.findById(idProject).then(data => data as Project)
    this.projectForm = new ProjectValidation().getByProject(this.project)
  }

  save() {
    const projectValue = this.projectForm.value
    
    this.project.name = projectValue.name
    this.project.description = projectValue.description

    this.projectService.update(this.project)
    this.route.navigate(["/"])
  }
}
