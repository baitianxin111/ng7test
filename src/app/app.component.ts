import { Component } from '@angular/core';

//所有组件必须使用这个装饰器来注解
@Component({
  /*组件元数据  Angular会通过这里面的属性来渲染组件并执行逻辑
  * selector就是css选择器，表示这个组件可以通过app-root来调用，index.html中有个<app-root>Loading...</app-root>标签，这个标签用来展示该组件的内容
  *templateUrl  组件的模板，定义了组件的布局和内容
  *styleUrls   该模板引用那个css样式
  * */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent { //组件的控制器，里面写业务逻辑
  title = 'my-ngapp';
}
// 参考地址https://www.jianshu.com/p/f0f81a63cbcb
//据徐看angualr7 的文档
