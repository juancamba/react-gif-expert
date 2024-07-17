export const getGifs = async (category) =>{
        
    const url =`https://api.giphy.com/v1/gifs/search?api_key=gqUyAwQ0NqQNyzMizfALutMxKdNBuuqf&q=${category}&limit=3`;

    const resp = await fetch(url);

    const {data}  = await resp.json();
    const gifts = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    //console.log(gifts)
    return gifts;
}