import styles from "./Card.module.css";

export default function Card(props) {
    return (
       <div className={styles.container}>
         <div className={styles.button}> 
            <button 
            onClick={props.onClose}
            >X</button>
         </div>
      <div className={styles.dataContainer}>
          <h2>{props.name}</h2>
          <h3>{props.species}</h3>
          <h4>{props.gender}</h4>
          </div>
          <img className={styles.image} src={props.image} alt={props.name} />
       </div>
    );
 }
 