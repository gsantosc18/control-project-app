import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Task } from "../interfaces/Task"

export class TaskValidation {
    validations: FormGroup = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(4)
        ]),
        description: new FormControl(''),
        status: new FormControl(1)
    })

    get() {
        return this.validations
    }

    getByTask(task: Task): FormGroup {
        console.log("Minha atividade", task);
        
        const validation = this.get()
        validation.setValue({
            name: task.name,
            description: task.description,
            status: task.status?.id
        })
        return validation
    }
}