import { validateCharacter } from "../src";
import { Character } from "../src/model/character";


//A-
test("Should return false for empty name", () => {
    
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });
//B-
  test("Should return false for life for 0", () =>{
      
    const result = validateCharacter({
          name:"Batman",
          life: 0,
          strength: 300,
          defense: 500,
      })

      expect(result).toBe(false)
  })
//C-
  test("Should return false for strength for 0", () =>{
      
    const result = validateCharacter({
          name:"Batman",
          life: 1500,
          strength: 0,
          defense: 500,
      })

      expect(result).toBe(false)
  })
//D-
  test("Should return false for defense for 0", () =>{
      
    const result = validateCharacter({
          name:"Batman",
          life: 1500,
          strength: 300,
          defense: 0,
      })

      expect(result).toBe(false)
  })
//E-
  test("Should return true for life for negative", () =>{
      
    const result = validateCharacter({
          name:"Batman",
          life: -600,
          strength: 300,
          defense: 500,
      })

      expect(result).toBe(false)
  })
//F-

test("Should return true for all valid inputs", () => {
    
    const result = validateCharacter({
      name: "Batman",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });


    