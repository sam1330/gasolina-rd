interface Character {
  id: number;
  name: string;
  race?: string; // Optional property
}

const characters: Character[] = [
  { id: 1, name: "Link", race: "Hylian" },
  { id: 2, name: "Zelda", race: "Hylian" },
];

const characterResolver = {
  characters: (): Character[] => {
    return characters;
  },
  character: (
    _parent: any,
    args: { id?: number },
    _context: any
  ): Character | null => {
    const { id } = args;
    if (id) {
      const character = characters.find(
        (character) => character.id.toString() === id.toString()
      );
      return character || null; // Return null if character not found
    } else {
      // Optional logic if no character ID is provided (e.g., return all characters)
      return null; // Or throw an error if no character found is expected
    }
  },
};

export default characterResolver;