import { StarFill, Star as StarEmpty, StarHalf} from "react-bootstrap-icons";

const FiveStarRating = ({ rating }) => { //
   //Declare Star icon array
   const starList = [];

   //Store number of filled Stare
   const starFillCount = Math.floor(rating); //4
 
   //Store if there is a half star
   const hasHalfStar = rating - parseInt(rating) >= 0.5; //4.45 - 4 = 0.45 | >= 0.5 = false
 
   //Store the number od empty starts
   const emptyStarCount = 5 - starFillCount - (hasHalfStar ? 1 : 0); // 5 - 4 = 1 - 0 = 1 
 
   //Push the fillled stars icons
   for (let i = 1; i <= starFillCount; i++) {
     starList.push(<StarFill key={"star-fill" + i} />);
     
   }

   //Push empty star icons
   for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
    
  }
 
   return <div>{starList}</div>;
};

export default FiveStarRating;
