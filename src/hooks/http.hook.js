export const useHttp = () => {

    const getItems = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            const items = data.map((item) => {
                return {
                    id: item.id,
                    name: item.title,
                    price: '$'+item.price,
                    img: item.image,
                    rating: item.rating.rate,
                }
            })
            return items
        } catch(e) {
            throw e;
        }
    };

    return {getItems}
}