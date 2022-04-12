import { Ivalidator } from "../interface/interface"; 

class ValidatorCLS implements Ivalidator {
    
    isValidStr(s: string,regex:RegExp,min:Number,max?:Number): boolean{

        return(max)?(s.length>=min && s.length<=max && regex.test(s)):(regex.test(s));
    }
}
export { ValidatorCLS };