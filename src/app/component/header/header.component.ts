import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit { //函数逻辑，初始化函数
  //声明属性 public(公有) protected(当前类和子类使用) private (当前类)
  public title = '我是新闻组件';
  public flag=false;
  public today=new Date();
  msg = '我是一个新闻组件msg';
  str='dgfdhfgh'
  username:string='zs';
  id = 'test';
  public student :any ='推荐的变量定义的形式';
  arr = [{ name: 'poetries', age: 22 }, { name: 'jing' , age: 31}];
  score = '3';
  inputVal = '';
  //  管道 大小写转换、数值和日期格式化等 angular中的管道(pipe) 以及自定义管道适用于angular4 angualr5 angualr6 angular7
  constructor() {
    // this.h="<h2>这是一个 h2 用[innerHTML]来解析</h2>";

   }
   getData(){ /*自定义方法获取数据*/ //获取
    alert(this.msg);
  } 
  setData(){
      //设置值
      this.msg='这是设置的值';
      alert(this.msg);
  }
  keyUpFn(e){
    var self = this; 
    console.log(self.inputVal)
    // console.log(e)
}
    
  ngOnInit() {
  }

}
