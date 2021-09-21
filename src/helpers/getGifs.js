




 export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=wGlqhmQl8UGQDP7A0JnHkadJ1MYFb10X&q=${ encodeURI(category)  }&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((image) => {
    

        return {
            id: image.id,
            title: image.title,
            url: image.images.original.url
        }
    });
  

    return gifs;



}