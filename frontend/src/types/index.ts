export interface NumberType {
	value: number
}

export interface UserType {
	name: string
	last_name: string
	email: string
}

export interface CounterControlsProps {
	count: number;
	onIncrement: () => void;
	onDecrement: () => void;
}
export type { RootState, AppDispatch } from '@store';