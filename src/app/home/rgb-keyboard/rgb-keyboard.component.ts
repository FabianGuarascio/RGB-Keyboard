import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
type saludo = 'hola' | 'adios'

@Component({
  selector: 'app-rgb-keyboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule  
  ],
  templateUrl: './rgb-keyboard.component.html',
  styleUrls: ['./rgb-keyboard.component.scss']
})


export class RgbKeyboardComponent {

  changeAnimation(element:DOMTokenList){
    const classes:string[] = [
      'top_to_bottom',
      'bottom_to_top',
      'right_to_left',
      'random',
      'to_left_diagonal'
    ]
    const currentIndex = classes.indexOf(element[1]);
    element.replace(element[1], classes[(currentIndex + 1) % classes.length]);
  }
}
