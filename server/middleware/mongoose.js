function deleteEmptyProperties(document) {

    Object.keys(document._doc).forEach((key) => {

        const value = !document[key]
            ? undefined
            : document[key]

        document[key] = value

    })

    return

}


// exports
module.exports = {
    deleteEmptyProperties,
}
