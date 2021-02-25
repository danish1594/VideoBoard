import { Component, OnInit } from '@angular/core';
import { TableData } from './file-Data';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.css']
})
export class FileManagerComponent implements OnInit {
  tableData = TableData;
  constructor() { }

  ngOnInit(): void {
  }

}
