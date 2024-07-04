interface Game {
  id: number;
  name: string;
  description: string;
}

const games: Game[] = [
  { id: 1, name: "Zelda", description: "Zelda" },
  { id: 2, name: "Mario", description: "Mario" },
];

const gameResolver = {
  games: (): Game[] => {
    return games;
  },
  game: (_parent: any, args: { id?: number }): Game | null => {
    const { id } = args;
    if (id) {
      const game = games.find((game) => game.id.toString() === id.toString());
      return game || null; // Return null if game not found
    } else {
      // Optional logic if no game ID is provided (e.g., return all games)
      return null; // Or throw an error if no game found is expected
    }
  },
};

export default gameResolver;
