// Your code here
const mapToNegativize = (a) => {
    return a.map(n => n * -1)
}

const mapToNoChange = (a) => {
    return a
}

const mapToDouble = (a) => {
    return a.map(n => n * 2)
}

const mapToSquare = (a) => {
    return a.map(n => n**2)
}


const reduceToTotal = (sourceArray, startingPoint) => {
    const myfunc = (total, num) => {
        return total + num
    }
    if (startingPoint) {
    
        return sourceArray.reduce(myfunc, startingPoint)
    }
    else {
        return sourceArray.reduce(myfunc, 0)
    }
}

const reduceToAllTrue = (a) => {
    const myfunc = (a, cv) => {
        if (cv == false) {
            a = false
        }
        return a
    }
    return a.reduce(myfunc, true)
}

const reduceToAnyTrue = (a) => {
    const myfunc = (a, cv) => {
        if (cv == true) {
            a = true
        }
        return a
    }
    return a.reduce(myfunc, false)
}