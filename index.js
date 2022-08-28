const myEach = function (collection, cb){
    let result = Array.isArray(collection) ? collection : Object.values(collection);
    for(let i =0; i< result.length; i++){
        cb(result[i])
    }
    return collection;
}

const myMap = function(collection, cb){
    let result = Array.isArray(collection) ? collection : Object.values(collection);
    const newCollection = [];
    for(let i =0; i< result.length; i++){
        newCollection.push(cb(result[i]))
    }
    return newCollection;
}

const myReduce = function(collection, cb, acc){
    let result = Array.isArray(collection) ? collection : Object.values(collection);
    let curr = 0;

    if(acc){
        curr = acc;
        for(let i = 0; i< result.length; i++){
            curr = cb(curr, result[i],result);
        }
    }else{
        curr = result[0];
        for(let i = 1; i< result.length; i++){
        curr = cb(curr, result[i],result);
        }
    }    
    return curr;
}

const myFind = function(collection, predicate){
    let result = Array.isArray(collection) ? collection : Object.values(collection);

    for(let i = 0; i< result.length; i++){
        if(predicate(result[i])){
        return result[i];
        }
    }
}

const myFilter = function(collection, predicate){
    let result = Array.isArray(collection) ? collection : Object.values(collection);

    let resultArr = []
    for(let i=0; i< result.length; i++){
        if(predicate(result[i])){
            resultArr.push(result[i])
        }
    }

    return resultArr;
}

const mySize = function(collection){
    let result = Array.isArray(collection) ? collection : Object.keys(collection);
    return result.length;
}

const myFirst = function(arr, n){
    if(n){
        return arr.slice(0,n)
    }else{
        return arr[0];
    }
}

const myLast = function(arr, n){
    if(n){
        return arr.slice(-n)
    }else{
        return arr[arr.length - 1]
    }
}

const myKeys = function(obj){
    return Object.keys(obj);
}

const myValues = function(obj){
    return Object.values(obj);
}