import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteFavApi, catFavApi, catVoteApi } from "../../services/api";
import { ICatObj, ICatProps } from "../types";
import { updateCatStore } from "./cats.action";

function CatsGrid(props: ICatProps) {
  return (
    <div className="gridContainer">
      {props.cats.map((cat, idx) => {
        return <Cat key={idx} {...cat} />;
      })}
    </div>
  );
}

function Cat(props: ICatObj) {
  const dispath = useDispatch();

  return (
    <div className="wrapImg">
      <img src={props.url} />
      <p
        onClick={() => {
          props.fav
            ? deleteFavApi(props.favourite_id)
                .then(() => {
                  dispath(updateCatStore("fav", false, props.id));
                  toast.info("Favorite removed");
                })
                .catch((err: any) => {
                  toast.error(err.response.data.message);
                })
            : catFavApi(props.id, "myFav")
                .then(() => {
                  dispath(updateCatStore("fav", true, props.id));
                  toast.info("Favorite added");
                })
                .catch((err: any) => {
                  toast.error(err.response.data.message);
                });
        }}
        className={props.fav ? "fav showIt showHover" : "fav showHover"}
      >
        ❤️
      </p>
      <VotesComponent {...props} />
    </div>
  );
}

function VotesComponent(props: ICatObj) {
  const dispath = useDispatch();

  return (
    <div className="votesContainer">
      <span
        className="counterBtn"
        onClick={() => {
          catVoteApi(props.id, (props.vote ?? 0) - 1, "myVote")
            .then(() => {
              dispath(updateCatStore("vote", (props.vote ?? 0) - 1, props.id));
              toast.info("Vote removed");
            })
            .catch((err: any) => {
              toast.error(err.response.data.message);
            });
        }}
      >
        -
      </span>
      <span>{props.vote ?? 0}</span>
      <span
        className="counterBtn"
        onClick={() => {
          catVoteApi(props.id, (props.vote ?? 0) + 1, "myVote")
            .then(() => {
              dispath(updateCatStore("vote", (props.vote ?? 0) + 1, props.id));
              toast.info("Vote added");
            })
            .catch((err: any) => {
              toast.error(err.response.data.message);
            });
        }}
      >
        +
      </span>
    </div>
  );
}

export default CatsGrid;
