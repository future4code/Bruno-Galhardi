## Exercício 03
### Letra a:
```
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};
```
### Letra b:
```
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
```

### Letra c:
com essa forma de inversão você pode passar dois parametros usando apenas uma função para fazer as validações conforme vc escolher

## Exercício 04

### Letra a:
A função que deve ser criado o mock é o performAttack, pois a partir dele que será feita os tests individuais