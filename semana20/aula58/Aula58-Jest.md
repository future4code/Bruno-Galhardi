## Exercício 01
### Letra A:
```
export interface User {
	name: string
	balance: number
}
```

### Letra B:
```
export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
```
## Exercício 02
### Letra A:
```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Bruno",
		balance: 80
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Bruno",
		balance: 40
	})
})
```

### Letra B:
```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Bruno",
		balance: 80
	}

	const result = performPurchase(user, 80)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})
```

### Letra C:
```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Bruno",
		balance: 80
	}

	const result = performPurchase(user, 250)
	
	expect(result).not.toBeDefined()
})
```