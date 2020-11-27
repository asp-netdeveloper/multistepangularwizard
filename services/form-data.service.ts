import { Injectable } from '@angular/core';
import { AddressDetails } from 'src/models/address-details';
import { PersonalDetails } from 'src/models/personal-details';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  personalDetails : PersonalDetails;
  addressDetails : AddressDetails;

  constructor() {
    this.personalDetails = new PersonalDetails();
    this.addressDetails = new AddressDetails();
   }

   postData(){
     let newCombinedObject = {
       personalDetails : this.personalDetails,
       addressDetails : this.addressDetails.fullAddress
     }
   }
}
