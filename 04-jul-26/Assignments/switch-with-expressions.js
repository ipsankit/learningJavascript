let score = 55;
switch (Math.floor(score / 10)) {
case 10:
case 9:
    console.log("Grade: A (Excellent)");
    break;
case 8:
    console.log("Grade: B (Good)");
    break;
case 7:
    console.log("Grade: C (Average)");
    break;
case 6:
    console.log("Grade: D (Pass)");
    break;
    default:
        console.log("Grade: F (Fail)");

}