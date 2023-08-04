

export const mapping = <T>(formData:FormData):T => {
    const entries = formData.entries()
    let result = {}
    while (true) {
        const {done, value} = entries.next();
        if (done) {
            break;
        } else {
            result = {...result,[value[0]]:value[1]}
        }
    }

    return result as T
}