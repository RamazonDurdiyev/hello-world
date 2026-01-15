export const NameList = ()=> {
    const names = ["Bruce", "Clark", "Diana", "Bruce"]
    const namesList = names.map((name, index)=> {
        return (
            <h2 key={index}>{name}</h2>
        )
    })
    return (
        <div>
            {namesList}
        </div>
    )
}