import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { AddressComponent } from "./user-registration/address/address.component";
import { ColorsComponent } from "./user-registration/colors/colors.component";
import { BasicInfoComponent } from "./user-registration/basic-info/basic-info.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AngularMaterialModule],
  declarations: [
    UserRegistrationComponent,
    AddressComponent,
    BasicInfoComponent,
    ColorsComponent
  ],
  exports: [UserRegistrationComponent]
})
export class UserRegistrationModule {}
