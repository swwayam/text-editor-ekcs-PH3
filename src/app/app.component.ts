import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BtnComponent } from './components/btn/btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  wordCount = 0;
  charCount = 0;

  upperCase(element: any) {
    element.value = element.value.toUpperCase();
  }

  lowerCase(element: any) {
    element.value = element.value.toLowerCase();
  }

  firstCaseCapital(element: any) {
    
  }

  copy(element: any) {
    navigator.clipboard.writeText(element.value)
  }

  getTextInfo(element: any) {
    this.countChar(element);
    this.countWord(element);
  }

  countWord(element: any) {
    if (element.value == '') {
      this.wordCount = 0;
    } else {
      this.wordCount = element.value.split(' ').length;
    }
  }

  countChar(element: any) {
    this.charCount = element.value.length;
  }
}
