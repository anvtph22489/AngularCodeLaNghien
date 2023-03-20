import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public num = 0;
  public myColor = 'red';
  public count = 4;
  public countBinhPhuong = 0;
  constructor(private common: CommonService) {}
  ngOnInit(): void {
    this.count = this.common.count;
    this.countBinhPhuong = this.common.binhPhuong(this.count);
    this.common.count++;
  }
}
