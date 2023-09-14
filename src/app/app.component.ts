import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DEFAULT_TEMPERATURE } from './constants/list.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  minTemp = new FormControl(DEFAULT_TEMPERATURE);
  maxTemp = new FormControl(DEFAULT_TEMPERATURE);
  targetTemp = new FormControl(DEFAULT_TEMPERATURE);
}
