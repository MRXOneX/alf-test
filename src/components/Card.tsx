import { memo, FC } from "react"

// @TYPES 
import { TGame } from "../@types/game"



const Card: FC<TGame> = ({id, tourNumber, teamHome, teamAway, scoreFtHome, scoreFtAway, date, stadium}) => {

    // get logo
    const logo = `https://footballista.ru/api/img/logos/logo-middle.png?logoId=${id}`

    // for true format
    const newDate = new Date(date).toLocaleDateString()

    return (
        <div className="card">
            <div className="card__img">
                <img height={60} width={60} src={logo} alt={`logoId ${id}`} />
            </div>
            <div>
                <p>Номер тура: {tourNumber}</p>
                <p>{teamHome.name}/{teamAway.name}</p>
                <p>счет: {scoreFtHome}/{scoreFtAway}</p>
                <p>Дата матча: {newDate}</p>
                <p>Название стадиона: {stadium?.name}</p>
            </div>
        </div>
    )
}

export default memo(Card)