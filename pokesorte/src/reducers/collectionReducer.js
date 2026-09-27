export const initialState = {
    colecao: []
};

export function collectionReducer(state, action) {
    switch (action.type) {
        case 'ADICIONAR_POKEMONS': {
            const novosPokemons = action.payload.filter(
                (id) => !state.colecao.includes(id)
            );

            return {
                ...state,
                colecao: [
                    ...state.colecao,
                    ...novosPokemons
                ]
            };
        }

        default:
            return state;
    }
}