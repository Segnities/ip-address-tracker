export function getUTCTime(timezoneName) {
    const now = new Date().toLocaleString("en-US", { timeZone: timezoneName });

    const fullDate = now.split('/');
    const fullTime = now.split(' ')[1].split(':');

    const year = parseInt(fullDate.slice(2));
    const month = parseInt(fullDate.slice(0))
    const day = parseInt(fullDate.slice(1))

    const hours = parseInt(fullTime[0]);
    const minutes = parseInt(fullTime[1]);
    const seconds = parseInt(fullTime[2]);

    const fullTimeToUtc = new Date(Date.UTC(year, month, day, hours, minutes, seconds))

    const utcHours = fullTimeToUtc.getHours();
    const utcMinutes = fullTimeToUtc.getMinutes();

    const totalTime = `${utcHours < 10 ? '0' + utcHours : utcHours}:${utcMinutes < 10 ? '0' + utcMinutes : utcMinutes}`;

    return totalTime;
}