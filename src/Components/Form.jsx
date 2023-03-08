import { useState } from "react";
import Card from './Card'
import styles from './Form.module.css'

function Form() {

    //UseState
    const [name, setName] = useState("");
    const [car, setCar] = useState("");
    const [error, setError] = useState("");
    const [showCard, setShowCard] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangeCar = (e) => setCar(e.target.value)

    const validateInputName = () => {return name.trim().length >= 3};
    const validateInputCar = () => {return car.trim().length >= 6};

    const handleOnChange = (e) => {
        e.preventDefault();

        const validatedInputName = validateInputName()
        const validatedInputCar = validateInputCar()
        
        if(validatedInputName && validatedInputCar) {
            setShowCard(true);
            setError("");
        } else {
            setShowCard(false);
            setError("Por favor chequea que la informacion sea correcta.");
        }
    }

    return (
        <div className={styles.container}>
            <h1>Completa los datos:</h1>
            <div className={styles.formContainer}>
                <form onSubmit={handleOnChange}>
                    <div>
                        <input type="text" placeholder="Ingresa tu nombre" value={name} onChange={onChangeName}/>
                    </div>
                    <div>
                        <input type="text" placeholder="Ingresa tu auto favorito" value={car} onChange={onChangeCar}/>
                    </div>
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
            {error ? <div className={styles.error}>{error}</div> : null}
            {showCard ? <Card name={name} car={car}/> : null}
        </div>
    );
}

export default Form;