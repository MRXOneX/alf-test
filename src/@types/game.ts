type TTeam = {
    name: string
}

type TStadium = {
    name: string
}

type TGame = {
    _id?: number | string
    id?: number | string
    tourNumber: number | string
    teamHome: TTeam
    teamAway: TTeam
    scoreFtHome: number | string
    scoreFtAway: number | string
    date: string
    stadium: TStadium
}

export type {TGame}