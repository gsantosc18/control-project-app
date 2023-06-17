import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../interfaces/Project';

export class ProjectValidation {
    validations: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern(/[\w]+\s(.*)/)
        ]),
        description: new FormControl('')
    })

    get() {
        return this.validations
    }

    getByProject(project: Project): FormGroup {
        const validation = this.get()
        validation.setValue({
            name: project.name,
            description: project.description
        })
        return validation
    }
}