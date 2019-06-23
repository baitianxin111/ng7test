import { Injectable } from '@angular/core';
//创建服务命令 ng g service services/storage 在指定文件夹
//装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样。
@Injectable({
  providedIn: 'root' //生成服务骨架
})
export class StorageService {
  // heroes = '';
  // private storage: StorageService
  constructor() { }
  //方法
  // getHeroes(): void {
  //   this.heroes = this.StorageService.getHeroes();
  // }


//   addData(){
//     // alert(this.username);
//    this.list.push(this.username); 
//    this.storage.set('todolist',this.list);
// }
// removerData(key){
//    console.log(key); 
//    this.list.splice(key,1); 
//    this.storage.set('todolist',this.list);
// }
ngOnInit(): void {
//   this.getHeroes();//嗲用方法
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.
  
}
}
