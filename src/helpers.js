// Convert time to hours and minutes
export const calcTime = (time) => {
    const hours = Math.floor(time / 60)
    const mins = time % 60
    return `${hours}h ${mins}m`
}
// Convert a number to money formatting
export const convertMoney = (money) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    })
    return formatter.format(money)
}

/**
 @param API_URL: base url to access the API
 @param API_KEY: API key to fetch, stored in .env file
 @param type: Popular or All
 @param loadMore: Was the load more button clicked?
 @param searchTerm: Was the search value updated?
 @param currentPage: Integer of the pages already fetched
 @return: updated url endpoint
*/
export const createEndpoint = (
    API_URL,
    API_KEY,
    type,
    loadMore,
    searchTerm,
    currentPage
) => {
    return `${API_URL}${type}?api_key=${API_KEY}&language=en-US&page=${
        loadMore && currentPage + 1
    }&query=${searchTerm}`
}
