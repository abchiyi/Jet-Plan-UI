export function cssAttrsStringToObj(String) {
    const temp = {}
    const attrs = String.split(';');
    for (let n = 0; n < attrs.length; n++) {
        if (attrs[n].trim()) {
            let [key, value] = attrs[n].split(':')
            temp[key.trim()] = value.trim();
        }
    }
    return temp
}
