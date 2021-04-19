import { performPurchase } from '../src'
import  {User}  from '../src/model/user'


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

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Bruno",
		balance: 80
	}

	const result = performPurchase(user, 250)
	
	expect(result).not.toBeDefined()
})