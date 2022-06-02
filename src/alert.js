import { writable } from "svelte/store";

let timeout;
export const message = writable('');
export const setAlertMessage = (newMessage) => {
    message.set(newMessage);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        message.set('');
    }, 3000)
}