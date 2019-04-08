

const sorter = () => {
    var input = document.getElementById("piggy").value
    console.log(input);

    var inputArray = input.split(' ')

    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

    let word = inputArray.map(value => {

        let char0 = value.charAt(0)
        let char1 = value.charAt(1)
        let char2 = value.charAt(2)
        let char3 = value.charAt(3)
        let char4 = value.charAt(4)
        let char5 = value.charAt(5)

        if (value.charAt(0) === "y") {
            return value.substring(1) + "yay"

        } else if (value.charAt(0) === "s" && value.charAt(1) === "q"
            && value.charAt(2) === "u") {
                return value.substring(3) + char0 + char1 + char2 + "ay"

        } else if (value.charAt(0) === "q" && value.charAt(1) === "u") {
                return value.substring(2) + char0 + char1 + "ay"

        } else if (vowels.includes(char0)) {
            return value + "way"

        } else if (vowels.includes(char1)) {
            return value.substring(1) + char0 + "ay"
        }
         else if (vowels.includes(char2)) {
            return value.substring(2) + char0 + char1 + "ay"

        } else if (vowels.includes(char3)) {
            return value.substring(3) + char0 + char1 + char2 + "ay"

        } else if (vowels.includes(char4)) {
            return value.substring(4) + char0 + char1 + char2 + char3 + "ay"

        } else if (vowels.includes(char5)) {
            return value.substring(5) + char0 + char1 + char2 + char3 + char4 + "ay"
        }
    })
    document.getElementById("result").innerHTML = word.join(" ")
}
