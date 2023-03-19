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
  public vietNam = [
    { tinh: 'Chọn tỉnh', quanHuyen: ['Quận Huyện'] },
    {
      tinh: 'An Giang',
      quanHuyen: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      tinh: 'Bà Rịa - Vũng Tàu',
      quanHuyen: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      tinh: 'Bạc Liêu',
      quanHuyen: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];
  public quanHuyens: String[] = ['Quận Huyện'];
  constructor() {}
  ngOnInit(): void {
    console.log('trai cay = ', this.traiCays);
  }
  public changeTinh(event: any) {
    const tinhChon = event.target.value;
    console.log('event', tinhChon);
    // Cách 1
    // const search = this.vietNam.filter((data) => data.tinh === tinhChon);
    // console.log('Tỉnh lấy được trong mảng', search);
    // if (search && search.length > 0) {
    //   this.quanHuyens = search[0].quanHuyen;
    // }

    this.quanHuyens =
      this.vietNam.find((data) => data.tinh === tinhChon)?.quanHuyen || [];
    // Trong đoạn code trên, ta đang lấy giá trị được chọn trong thẻ select thông qua event.target.value
    // và lưu giá trị này vào biến tinhChon. Sau đó, ta sử dụng phương thức find() để tìm kiếm phần tử đầu tiên
    //  trong mảng this.vietNam sao cho thuộc tính tinh bằng với giá trị của biến tinhChon. Nếu tìm thấy, ta sử dụng toán tử
    //  optional chaining (?.) để truy cập vào thuộc tính quanHuyen của phần tử đó và gán vào biến this.quanHuyens.
    //  Nếu không tìm thấy, ta gán một mảng rỗng vào biến this.quanHuyens.
  }
  public resetName(): void {
    console.log('Reset');
    this.name = '';
  }
}
