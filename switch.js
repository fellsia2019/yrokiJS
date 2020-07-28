let num = 50;

if (num < 49) {
    console.log("No")
} else if (num > 50) {
    console.log("SoMuch")
} else {
    console.log('ok')
};

(num == 50) ? console.log('ok') : console.log('No');

switch (num) {
    case num < 49:
        console.log("No");
        break;
    case num > 50:
        console.log("SoMuch");
        break;
    case 50:
        console.log('ok');
        break;
    default:
        console.log('uuups..');
        break;
}