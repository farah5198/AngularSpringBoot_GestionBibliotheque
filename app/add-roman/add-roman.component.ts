import { Component, OnInit } from '@angular/core';
import { Roman } from '../model/roman';
import { RomanService } from '../services/roman.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-roman',
  templateUrl: './add-roman.component.html'
})
export class AddRomanComponent implements OnInit {
 
  newRoman = new Roman();
  message!: string;

  constructor(private romanService: RomanService,
    private router :Router,) { }

  ngOnInit(): void {
  }
  
  addRoman() {
    this.romanService.ajouterRoman(this.newRoman).subscribe (rom => {console.log(rom); });
    this.router.navigate(['romans']);
    }

}
