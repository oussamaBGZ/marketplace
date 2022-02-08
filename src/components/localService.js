class HandelLocalState{
    ls = window.localStorage
    getItem(item){
        console.log(JSON.parse(this.ls.getItem(item)))
        return JSON.parse(this.ls.getItem(item))
    }

    setItem(itemName, item){
        this.ls.setItem(itemName, JSON.stringify(item))
    }

    removeItem(itemName){
        this.ls.removeItem(itemName)
    }
}

export default new HandelLocalState()