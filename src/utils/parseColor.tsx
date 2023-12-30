import { parseToRgb } from "polished";

export default function colorToRGB(color: string): string {
	const { red, green, blue } = parseToRgb(color);
	return `${red}, ${green}, ${blue}`;
}
