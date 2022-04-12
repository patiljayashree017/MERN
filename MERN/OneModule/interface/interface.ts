interface Ivalidator{
    isValidStr(s:string,regex:RegExp,min?:number,max?:number):boolean;
    // isValidNumber(s:string):boolean;
}
export{Ivalidator};