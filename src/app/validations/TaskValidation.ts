import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Task } from "../interfaces/Task"

export class TaskValidation {
    validations: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(4)
        ]),
        description: new FormControl('')
    })

    get() {
        return this.validations
    }

    getByProject(task: Task): FormGroup {
        const validation = this.get()
        validation.setValue({
            name: task.name,
            description: task.description
        })
        return validation
    }
}