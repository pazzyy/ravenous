const apiKey = 'XILPMz6tVrYTbYgfuSnEEiG0qqPw8m5vTvIqUoWtsJcb_7ItevMvl3dgKdpPKBNy62XfTdH5Is9HR-1Hvvku0d1qbGATwQrHqXn5foFdY_EXUP_I-OLKrJbk6K86XHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business =>({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));                    
            }
        });
    }
};

export default Yelp;