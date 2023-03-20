import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public count = 0;
  public binhPhuong(n: number): number {
    return n * n;
  }
  public data = '';
  constructor() {}
  // public setCount(v: number): void {
  //   this.count = v;
  // }

  // public getCount(): number {
  //   return this.count;
  // }
  public submitForm(data: any): void {
    // console.log('Submit form is: ' + data);
    console.log({ data, age: 2 });
  }
}
