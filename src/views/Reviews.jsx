import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "services/api";



export default function Reviews () {
    const [reviews, setReviews] = useState([]);
    const{movieId} = useParams();
    
    useEffect(() => {
        (async function fetchReviewsList(){
            try{
                const response = await fetchReviews(movieId);
                setReviews(response);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [movieId]);

    const showReviews = Boolean(reviews.length);

    return(
        <>
        <h3>Reviews</h3>

        {showReviews ? (
            <ul>
                {reviews.map(({id, author, content}) =>
                 <li key={id}>
                   <h4>
                    Author:{author}
                   </h4>
                   <p>{content}</p>
                </li>
                )}
            </ul>
        ) : (
            <p>We don't have any reviews for this movie.</p>
        )}
        </>
    );
};


