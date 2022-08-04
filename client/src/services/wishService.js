import { get } from "./requester";

const baseUrl = 'http://localhost:3030';

export const getAll=() => get(`${baseUrl}/data/wishes`)
