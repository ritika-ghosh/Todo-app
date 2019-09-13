// Set up filters default object
const filters = {
    searchText: '',
    hide: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = ({ searchText , hide}) => {
    if(typeof searchText === 'string'){
        filters.searchText = searchText
    }
    if(typeof hide === 'boolean'){
        filters.hide = hide
    }
}

// Make sure to set up the exports
export{ getFilters, setFilters}