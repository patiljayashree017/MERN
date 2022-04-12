import { constant } from './constant/constant';
import { ValidatorCLS } from './validator/validator';

let email = 'hp149@gmail.com';
let zipCode = '382415';
let Phone_Number="9874563210";
let validator = new ValidatorCLS();

let resultOfEmailValidate = validator.isValidStr(email,constant.emailregex,6,30);
let resultOfZipCodeValidate = validator.isValidStr(zipCode,constant.numregex,6);
let resultofPhoneValidate = validator.isValidStr(Phone_Number,constant.numregex,10);


console.log("Valid Email Id OR Not: "+resultOfEmailValidate);
console.log("Valid Zip Code OR Not: "+resultOfZipCodeValidate);
console.log("Valid Phone Number OR Not: "+resultofPhoneValidate);

