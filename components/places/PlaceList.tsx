import PlaceItem from "./PlaceItem";
import classes from "./PlaceList.module.scss";
import postObj from "../../models/postObj";
import Button from "../shared/FormElements/Button";

const PlaceList: React.FC<{ items: postObj[] }> = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={`${classes.placeList} ${classes.notFound}`}>
        <h2>No Posts found. Try creating one!</h2>
        <Button href='/posts/new'>Create a Post!</Button>
      </div>
    );
  }

  return (
    <ul className={classes.placeList}>
      {props.items
        .slice(0)
        .sort((a, b) => (a.createdAt > b.createdAt || b.createDate ? -1 : 1))
        .map((post) => (
          <PlaceItem key={post.id} maxHeight='45vh' post={post} />
        ))}
    </ul>
  );
};
export default PlaceList;
