import { Component, OnInit, Input } from '@angular/core';
import { ButtonColor } from '../../interfaces/colors';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {

  @Input() color :string = ButtonColor.PRIMARY;
  @Input() disabled: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
