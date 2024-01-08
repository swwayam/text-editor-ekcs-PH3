import { Component, inject } from '@angular/core';
import { BtnComponent } from '../../components/btn/btn.component';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  editorService = inject(EditorService);

  wordCount = 0;
  charCount = 0;

  // historyText: any[] = [];

  upperCase(element: any) {
    element.value = element.value.toUpperCase();
  }

  lowerCase(element: any) {
    element.value = element.value.toLowerCase();
  }

  firstCaseCapital(element: any) {
    element.value = element.value.charAt(0).toUpperCase() + element.value.slice(1)
  }

  copy(element: any) {
    navigator.clipboard.writeText(element.value);
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

  save(element: any) {
    console.log(element.value);
    this.editorService.historyData.push(element.value);
  }
}
