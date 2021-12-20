const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;
}


const transpose = letters => {
    const transposedArray = [];

    if (letters.length === 0 ) {
        return letters;
    }

    for (let i = 0; i < letters[0].length; i++) {
        transposedArray.push([]);
    }

    for (let y = 0; y < letters.length; y++) {
        for (let x = 0; x < letters[y].length; x++) {
            transposedArray[x][y] = letters[y][x];
        }
    }

    return transposedArray;
};


module.exports = wordSearch