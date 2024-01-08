import { Component } from '@angular/core';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {


  constructor(private editorService : EditorService){}


  historyText  = this.editorService.historyData
}
