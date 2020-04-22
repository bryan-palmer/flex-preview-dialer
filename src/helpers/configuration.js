export const getAttributes = manager => {

    const file = require(__dirname + "/../configs/" + process.env.REACT_APP_CAMPAIGNS_PATH);

    return {
        serviceBaseUrl: process.env.REACT_APP_SERVICE_BASE_URL,
        campaigns: file.campaigns || [ { name: "Default" } ]
    }
}