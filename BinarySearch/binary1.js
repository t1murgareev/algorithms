const findNumberByName = function (phoneBook, word) {
    let left = 0
    let right = phoneBook.length - 1
    let mid;

    while (left <= right) {
        mid = Math.round((right - left) / 2) + left

        if (word === phoneBook[mid].name) {
            return phoneBook[mid].number
        } else if (word < phoneBook[mid].name) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return null
}

let phoneBook = [

    {}
]
console.log(findNumberByName(phoneBook, 'Tom Holland'))