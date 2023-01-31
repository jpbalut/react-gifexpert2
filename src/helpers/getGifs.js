
export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gRhHz9Hj7Zu9IxgrEb3yRrzy8Ij1WITx&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    //console.log(gifs)
    return gifs;

}