import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// For components using angular-animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Imports of used components
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [MatInputModule, MatCardModule],
  declarations: []
})
export class AngularMaterialModule {}
