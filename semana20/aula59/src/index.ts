import { Character } from '../src/model/character'




export const validateCharacter = (input: Character): boolean => {
    if (
      !input.name ||
      input.life === undefined || 
      input.strength === undefined ||
      input.defense === undefined
    ) {
      return false;
    }
  
    if (input.life <=0 || input.strength <=0 || input.defense <=0) {
      return false;
    }
  
    return true;
  };

  
  export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };

  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});

test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});

test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Batman",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Joker",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "Batman",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Joker",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });