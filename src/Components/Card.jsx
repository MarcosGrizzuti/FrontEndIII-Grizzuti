import styles from './Card.module.css'
const Card = ({name, car}) => {
  return (
    <div className={styles.container}>
      <div><h2>Hola {name}!</h2></div>
      <div><p className={styles.text}>Sabemos que tu auto favorito es:</p></div>
      <div><p className={styles.car}>{car}</p></div>
    </div>
  );
}

export default Card;
