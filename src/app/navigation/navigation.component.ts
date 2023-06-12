import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() title = "Controle de projetos";
  @Input() showAddButton: boolean = false
  @Input() router: string = ""
}
