// console.log('HI')

var ChkArmstrong = ((iNo) => {
    // console.log("TCL: ChkArmstrong -> iNo", iNo)
    let i = 0, iValue = iNo, iDigit = 0, iCnt = 0, iPower = 0, iSum = 0;
    // Count the digits
    while (iValue !== 0) {
        iDigit = Math.round(iValue % 10);
        iValue = Math.round(iValue / 10);
        iCnt++;
    }
    // console.log("TCL: ChkArmstrong -> iValue", iValue)
    // console.log("TCL: ChkArmstrong -> iCnt", iCnt)

    iValue = iNo;

    // for separating digit
    while (iValue != 0) {
        // console.log("TCL: start -> iValue", iValue)

        iDigit = Math.round(iValue % 10);           //separate last digit
        // console.log("TCL: ChkArmstrong -> iDigit", iDigit)

        i = 1;                          //set i=1 for iteration digit power
        iPower = 1;                     //set power=1 for new power of each digit
        while (i <= iCnt)               //iterate till total count of digit
        {
            iPower = iPower * iDigit;  //calculate factorial of each digit
            i++;                       //increment i till icnt
        }
        // console.log("TCL: ChkArmstrong -> iPower", iPower)
        iSum = iSum + iPower;           //calculate sum of power of all digit

        console.log("bef  -> iValue", iValue)

        iValue = iValue / 10;
        console.log("aft  -> iValue", iValue)
        var a = iValue.toString().split("."); ///before
        // console.log("TCL: -> a", a[0])
        iValue = a[0];

    }
    // console.log("TCL: ChkArmstrong -> iSum", iSum)

    if (iSum == iNo)
        return 1;
    else
        return 0;

});

let ret = ChkArmstrong(123);
if (ret == 1)
    console.log('Armstrong');
else console.log('Not Armstrong');

let ret2 = ChkArmstrong(153);
if (ret2 == 1)
    console.log('Armstrong');
else console.log('Not Armstrong');
