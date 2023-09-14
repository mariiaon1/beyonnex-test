import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-indicator',
  templateUrl: './temperature-indicator.component.html',
  styleUrls: ['./temperature-indicator.component.scss']
})
export class TemperatureIndicatorComponent {
  @Input() minTemperature: number;
  @Input() maxTemperature: number;
  @Input() targetTemperature: number;
}
