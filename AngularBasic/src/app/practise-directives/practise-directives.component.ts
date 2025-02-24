import { Component } from '@angular/core';

@Component({
  selector: 'app-practise-directives',
  standalone:false,
  templateUrl: './practise-directives.component.html',
  styleUrl: './practise-directives.component.css'
})
export class PractiseDirectivesComponent {
  showSecret = false;
  log = [new Date()];
  onToggleDisplay(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
    console.log(this.log);
  }
}
