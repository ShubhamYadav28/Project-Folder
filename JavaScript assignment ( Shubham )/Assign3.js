// color Mixer
let color1 = "red";
let color2 = "yellow";

    switch(color1, color2){
        case "red", "blue":
            console.log(`the resulting color mixer of ${color1} and ${color2} is Purple`);
            break;
            case "red", "yellow":
            console.log(`the  resulting color mixer of ${color1} and ${color2} is Orange`);
            break;
            case "blue", "yellow":
            console.log(`the  resulting color mixer of ${color1} and ${color2} is Green`);
            break;
    default:
        console.log("Invalid Color Comination");
        break;
    }