function inter(obj){
    let im = []

    for(let key in obj){
        im.push(obj[key])
    }

    let final = []

    for(let el of im[0]){
        let ok = true

        for(let arr of im){
            if(!arr.includes(el)){
                ok = false
                break
            }
        }

        if(ok) final.push(el)
    }

    return final
}

console.log(inter(inp))