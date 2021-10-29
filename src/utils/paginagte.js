import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // START INDEX = 
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();

}
//const ibadd = [1, 3, 4, 5, 6, 7,9,10,13];