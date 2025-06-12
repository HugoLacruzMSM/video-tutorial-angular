import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngfot-vs-fot',
  imports: [
    FormsModule
  ],
  templateUrl: './structural-directive-ngfot-vs-fot.component.html',
  styleUrl: './structural-directive-ngfot-vs-fot.component.scss'
})
export class StructuralDirectiveNgfotVsFotComponent {
  employees: any[] = [
    {empName: 'Hugo', empNumber: '101', empEmail: 'hugo@gmail.com', empDept: 'IT'},
    {empName: 'Dani', empNumber: '202', empEmail: 'dani@gmail.com', empDept: 'HR'},
    {empName: 'Miguel', empNumber: '303', empEmail: 'miguel@gmail.com', empDept: 'QA'}
  ]
}
