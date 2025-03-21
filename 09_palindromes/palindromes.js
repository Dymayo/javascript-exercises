const palindromes = function (string) {
    
    const finalString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    
    const reversed = finalString.split("").reverse().join("");
    

    return reversed === finalString;
};

// Do not edit below this line
module.exports = palindromes;
