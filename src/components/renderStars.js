function RenderStars(props) {
    const {star, rating} = props;

    const starArr = Array(rating).fill(0).map((idx) => idx + 1)

    const starsRating = starArr.map((_, i) => {
        return <img src={star} alt='rating' className="products__rating" key={i}/>
    })
    return starsRating
}

export default RenderStars;