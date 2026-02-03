export const  createQueryParams = (params) => {
    let query = new URLSearchParams(params)
    
    Object.entries(query).forEach(([key, value]) => {
        if(value !== undefined && value !== "" && value !== null){
            query.append(key, value)
        }
    })
    
    return query.toString()
}