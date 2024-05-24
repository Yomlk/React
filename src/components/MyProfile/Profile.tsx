import classes from "./Profile.module.scss";
export default function Profile() {
  const user = {
    firstName: "Андрей",
    lastName: "Копейкин",
    imageUrl: "./src/components/MyProfile/img/sinie-glaza-leoparda.jpg",
  };
  return (
    <>
      <div className={classes.profile}>
        <div className={classes.image}>
          <img src={user.imageUrl} />
        </div>
        <div className={classes.Username}>
          <p>Имя: {user.firstName}</p>
          <p>Первая буква фамилии: {user.lastName[0]}</p>
        </div>
      </div>
    </>
  );
}
