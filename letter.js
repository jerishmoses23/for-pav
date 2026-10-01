const letter = `
My pav
"Some people deserve a little extra happiness in life. I hope you get everything your heart wishes for. Stay happy always! ✨🤍”
 “Heyy, wishing you a day filled with happiness and a lifetime full of beautiful moments. Keep being the wonderful person you are. Stay happy and keep smiling! 🤍✨
 epovum happy ya eru💕💕
 olunga night seikram thoongu❤️
 un health eh paathuko😉
 dont forget me👀
 

`;
const letterBox = document.getElementById("letterTyping");

let index = 0;

function typeLetter() {

    if (index < letter.length) {

        letterBox.innerHTML += letter.charAt(index);

        index++;

        setTimeout(typeLetter, 40);

    } else {

        document.querySelector(".continue-btn").style.opacity = "1";
        document.querySelector(".continue-btn").style.transform = "translateY(0)";

    }

}

window.onload = () => {

    document.querySelector(".continue-btn").style.opacity = "0";
    document.querySelector(".continue-btn").style.transform = "translateY(20px)";
    document.querySelector(".continue-btn").style.transition = "0.8s";

    typeLetter();

};