import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equation-solver-web';
  @Input() content?: string;

  ngOnInit(): void {

    this.content = "int x = 13";
   }

}
