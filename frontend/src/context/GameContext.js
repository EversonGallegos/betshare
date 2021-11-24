import { createContext } from "react";

const GameContext = createContext({
    name: '',
    color: '',
    numbers_selected: {},
    total_numbers: 0,
    total_queuer: 0,
})

export default GameContext