const arrayCreator = (array:Array<any>, fieldName:string) => {
    return array.map((value) => value[fieldName])
}

export default arrayCreator;