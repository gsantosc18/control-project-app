import { Component, EventEmitter, Output } from '@angular/core';
import { Project } from '../interfaces/Project';
import { ProjectService } from '../service/http/ProjectService';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ProjectValidation } from '../validations/ProjectValidation';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent {
  public projectForm: FormGroup = new ProjectValidation().get()

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  save() {
    this.projectService.add(this.projectForm.value)
    this.router.navigate(["/"])
  }
}
