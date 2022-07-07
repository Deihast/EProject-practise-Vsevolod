import express from 'express';

const router = express.Router();

router.get('/get-tomorrow-date', (req, res) => {
    const now = new Date();
    let weeklyDay = now.getDay();

    switch (weeklyDay) {
        case 6:
            weeklyDay = 'Sunday';
            break;
        case 0:
            weeklyDay = 'Monday';
            break;
        case 1:
            weeklyDay = 'Tuesday';
            break;
        case 2:
            weeklyDay = 'Wednesday';
            break;
        case 3:
            weeklyDay = 'Thursday';
            break;
        case 4:
            weeklyDay = 'Friday';
            break;
        case 5:
            weeklyDay = 'Saturday';
            break;
        default:
    }

    const today = now.getTime();
    const oneDay = 86400000;

    const result = `Tomorrow is ${weeklyDay} ( ${new Date(today + oneDay)} )`;
    res.send(result);
})

export default router;