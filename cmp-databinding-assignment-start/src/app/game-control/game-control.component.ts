import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styles: [
  ]
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumer = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval( () => {
      this.intervalFired.emit(this.lastNumer + 1);
      this.lastNumer++;
    },1000)
  }

  onStopGame(){
    clearInterval(this.interval);
  }

}
