const settingCogEL = document.getElementById("settingsIcon");
const settingContentEL = document.getElementById("settingsContent");
let isDOBOpen = open;

const toggleDateOfBirthSelector = () => {
    if(isDOBOpen){
        settingContentEL.classList.add("hide");
    }else{
        settingContentEL.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
};
