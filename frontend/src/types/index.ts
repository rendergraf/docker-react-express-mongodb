export interface NumberType {
	value: number
}

export interface UserType {
	user: {
		name: string
		last_name: string
		email: string
	}
}

export interface CounterControlsProps {
	count: number;
	onIncrement: () => void;
	onDecrement: () => void;
}
