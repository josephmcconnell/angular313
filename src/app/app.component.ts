import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular' + VERSION.major;
  imageUrl:string = 

  isSpecial: boolean = false;
  username: string = 'bob';

onMouseOver(): void{
  this.isSpecial = !this.isSpecial;
}

checkEmpty():boolean{
  this.username == '';
}

onClick():void{
  this.username = 'hello world'
}

}
