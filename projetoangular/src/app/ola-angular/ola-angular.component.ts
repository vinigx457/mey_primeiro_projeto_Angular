import { Component } from '@angular/core';

@Component({
  selector: 'ola-angular', //responsavel pra quando o html chamar ele trar a classe OlarAngularCompon
  templateUrl: './ola-angular.component.html',
  styleUrls: ['./ola-angular.component.css'],
})
export class OlarAngularComponent {
  framework = 'Angular';
}
