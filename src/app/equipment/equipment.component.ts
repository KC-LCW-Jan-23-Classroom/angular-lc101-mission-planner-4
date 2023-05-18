import { Component, OnInit } from '@angular/core';

interface equipment {
  name: string;
  mass: number;
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: equipment[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: equipment[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItems(equipmentPiece:equipment):boolean {
    if (this.underTwoItems(equipmentPiece)) {
      this.cargoHold.push(equipmentPiece);
      this.cargoMass += equipmentPiece.mass;
    }
    if (this.cargoMass+200 > this.maximumAllowedMass || this.maxItems === this.cargoHold.length) {
      return false;
    }
    return true;
   }

   removeItems(equipmentPiece:equipment) {
    let equipmentIndex = this.cargoHold.indexOf(equipmentPiece);
    this.cargoHold.splice(equipmentIndex,1);
    this.cargoMass = this.cargoMass-equipmentPiece.mass;
   }

   clearHold(){
    let result = window.confirm('Are you sure you want to remove all items?');
    if (result) {
      this.cargoHold=[];
      this.cargoMass=0;
    }
   }

   underTwoItems(newItem:equipment) {
    let numOfItems: number = 0;
    for (let i=0;i<this.cargoHold.length;i++) {
      if (this.cargoHold[i] === newItem) {
        numOfItems++
      }
    }
    if (numOfItems >= 2) {
      return false;
    } else {
      return true;
    }
   }
}
