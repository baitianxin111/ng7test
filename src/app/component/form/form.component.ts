import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {StorageService} from '../../services/storage.service';//引入服务

// @ViewChild {'myarr'} myarr:
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {//逻辑代码
  public peopleInfo :any = {
    username: '',
    sex: '2',
    cityList: ['北京', '上海', '深圳'],
    city: '上海',

    hobby:[{
          title: '吃饭',
          checked:false
      },{
            title:'睡觉',
            checked:false
        },{

          title:'敲代码',
          checked:true
      }],

      mark:''
  }
 //注册服务
  constructor(private storage:StorageService) { }
  //使用服务 暂时没写完
  addData (){

  }
  removeData() {

   }
   //校验dom操作
   ngAfterViewInit (){ //函数名是个固定函数
    let boxDom : any = document.getElementById('box');
    boxDom.style.color = 'red';

   }
  ngOnInit() {
  }
  doSubmit () {
    console.log(this.peopleInfo);
  }

}
