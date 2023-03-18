import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'AN';
  public age = 19;
  public traiCays = ['Cam', 'Đào', 'Nho'];
  public students = [
    { name: 'Nguyễn Văn A', age: 19, status: true },
    { name: 'Trần Đức Bo', age: 11, status: false },
  ];
  constructor() {}
  ngOnInit(): void {
    console.log('trai cay = ', this.traiCays);
  }
  public resetName(): void {
    console.log('Reset');
    this.name = '';
  }
}
