import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss'
})
export class GameControlComponent {
  incrementalNumber = 0;
  intervalId: any;
  @Output() numberValue = new EventEmitter<number>()
  startGame() {
    this.intervalId = setInterval(() => {
      this.incrementalNumber++;
      this.numberValue.emit(this.incrementalNumber);
    }, 1000)
  }

  endGame() {
    clearInterval(this.intervalId);
  }
}
