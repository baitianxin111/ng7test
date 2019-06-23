import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './component/form/form.component' //input双向绑定添加模块
import { StorageService } from "./services/storage.service";
// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

@NgModule({  // 声明模块里有什么东西 只能声明：组件/指令/管道
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent, //用命令行添加的组件 z组件应用
  ],
  // 声明该模块所依赖的模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //引入模块
  ],
  // 默认情况下是空的
  providers: [StorageService],//注入服务
  // 声明模块的主组件是什么
  bootstrap: [AppComponent]
})
export class AppModule { }
