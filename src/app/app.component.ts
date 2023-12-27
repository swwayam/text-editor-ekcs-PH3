import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  upperCase(element : any){
    element.value = element.value.toUpperCase()    
  }

  lowerCase(element : any){
    element.value = element.value.toLowerCase()
  }

  charCount(element : any){
    alert(element.value.length)
  }
}
