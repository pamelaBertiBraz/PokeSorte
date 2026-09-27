const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemon() {
    try {
        const pokemon = await fetch(
            `${BASE_URL}/pokemon?limit=151&offset=0`
        );
        
        if (!pokemon.ok) {
            throw new Error('Não foi possível carregar os Pokémon.');
        }

        return await pokemon.json();
    } catch (error) {
        throw new Error('Não foi possível carregar os Pokémon.');
    }
}

export async function getPokemonById(id) {
    try {
        const pokemon = await fetch(`${BASE_URL}/pokemon/${id}`);

        if(!pokemon.ok) {
            throw new Error('Não foi possível obter os dados do Pokémon.');
        }

        return await pokemon.json();
    } catch (error) {
        throw new Error('Não foi possível obter os dados do Pokémon.');
    }
}

export async function getPokemonDetails(id) {
    try {
        const pokemon = await getPokemonById(id);

        return {
            id: pokemon.id,
            nome: pokemon.name,
            imagem: pokemon.sprites.other['official-artwork'].front_default,
            numero: pokemon.id,
            altura: `${pokemon.height / 10} m`,
            peso: `${pokemon.weight / 10} kg`,
            tipos: pokemon.types.map(
                (type) => type.type.name
            ),
            habilidades: pokemon.abilities.map(
                (ability) => ability.ability.name
            ),
            hp: pokemon.stats.find(
                (stat) => stat.stat.name === 'hp'
            )?.base_stat,
            ataque: pokemon.stats.find(
                (stat) => stat.stat.name === 'attack'
            )?.base_stat,
            defesa: pokemon.stats.find(
                (stat) => stat.stat.name === 'defense'
            )?.base_stat,
            velocidade: pokemon.stats.find(
                (stat) => stat.stat.name === 'speed'
            )?.base_stat
        };
    } catch (error) {
        throw new Error('Não foi possível obter os detalhes do Pokémon.');
    }
}

export async function getAllPokemonDetails() {
    try {
        const pokemon = await getPokemon();

        const detalhes = await Promise.all(
            pokemon.results.map((pokemon) => {
                const id = pokemon.url.split('/').filter(Boolean).pop();

                return getPokemonDetails(id);
            })
        );

        return detalhes;
    } catch (error) {
        throw new Error('Não foi possível carregar os detalhes dos Pokémon.');
    }
}

