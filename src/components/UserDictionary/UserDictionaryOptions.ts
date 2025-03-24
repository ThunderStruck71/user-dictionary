import type { IUserDictionaryOption } from './UserDictionaryOption.interface';

export const UserDictionaryOptionDeliveryStatus: IUserDictionaryOption[] = [
	{ code: 0, description: "Формируется"},
	{ code: 10, description: "Товар прибыл"},
	{ code: 20, description: "Товар прибыл (срочная поставка)"},
	{ code: 30, description: "Оформление ДТ"},
	{ code: 40, description: "ДТ выпущена"},
	{ code: 50, description: "Поставка закрыта"}
];

export const UserDictionaryOptionMovementMode: IUserDictionaryOption[] = [
	{ id: 1, description: "Импорт" },
	{ id: 2, description: "Экспорт" }
];