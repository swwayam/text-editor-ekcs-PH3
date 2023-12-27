import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Output() clicked = new EventEmitter()
  @Input() btnTxt !: any
  @Input() bsClass : any = "cmd-button btn btn-outline-dark"

  btnClick(){
    this.clicked.emit()
  }
}
