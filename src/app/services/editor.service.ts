import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EditorService {
  historyData : any[] = []

  constructor() { }
}
