import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RomansComponent } from './romans/romans.component';
import { AddRomanComponent } from './add-roman/add-roman.component';
import { UpdateRomanComponent } from './update-roman/update-roman.component';

const routes: Routes = [
  {path : "romans", component : RomansComponent },
  {path: "add-roman", component : AddRomanComponent},
  {path: "", redirectTo: "romans", pathMatch: "full" },
  {path: "updateRoman/:id", component: UpdateRomanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
