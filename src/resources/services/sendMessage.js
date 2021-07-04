import axios from 'axios';
import moment from 'moment';

moment.locale('pt-br')

export class ApiTelegram {
    async sendMessage(data) {
        const { name, whats, email, description } = data;
        const message = `<b>Data:</b> ${ moment().format('DD/MM/YYYY HH:mm:ss') }%0A<b>Nome:</b> ${ name }%0A<b>Whatsapp:</b> ${ whats }%0A<b>E-mail:</b> ${ email }%0A<b>Descrição:</b> ${ description }`;
        const URL = (token, chat, message) => `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&text=${message}&parse_mode=html`
        const TOKEN = '1652801314:AAE_XRZdfDBa0r4hp2kiyAnZi_puP_r-F8g';
        const CHAT_ID = '1094771835';
        return await axios.get(URL(TOKEN, CHAT_ID, message));
    }
}