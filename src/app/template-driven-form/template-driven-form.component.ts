import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent {
  constructor(private common: CommonService) {}
  public name = '';
  public submit() {
    // console.log('Name submit is ' + this.name);
    this.common.submitForm(this.name);
  }
}
