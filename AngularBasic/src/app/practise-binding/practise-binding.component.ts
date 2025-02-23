import { Component } from '@angular/core';

@Component({
  selector: 'app-practise-binding',
  standalone:false,
  templateUrl: './practise-binding.component.html',
  styleUrl: './practise-binding.component.css'
})
export class PractiseBindingComponent {
  userName='';

  updateUser(){
    this.userName='';
  }
}
