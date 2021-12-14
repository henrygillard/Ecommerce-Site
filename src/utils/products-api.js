import sendRequest from "./send-request.mjs";

const BASE_URL = 'https://7a6c286c986da6f151c6184fbf0c2530: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@test-store-henry-gillard.myshopify.com/admin/api/2021-10/products'

export function getAll() {
    return sendRequest(BASE_URL);
    
}

getAll();