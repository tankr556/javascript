const str = "sun rises in East";
const reverseWords = str => {
    let reversed = '';
    reversed = str.split(" ")
        .map(word => {
            return word
                .split("")
                .reverse()
                .join("");
        })
        .join(" ");
    return reversed;
}
console.log(reverseWords(str));