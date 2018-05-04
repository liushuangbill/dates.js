function fromNow(time, now) {
  now = now || new Date()

  const ms = isNaN(+time) ? new Date(time).getTime() : +time
  const msNow = isNaN(+now) ? new Date(now).getTime() : +now

  if (isNaN(ms) || typeof ms !== 'number' || time === '') throw new Error("argv[0] can not convert to Date");
  if (isNaN(msNow) || typeof msNow !== "number") throw new Error("argv[1] can not convert to Date");
  if (msNow < ms) throw new Error("grav[1] must > grgv[0]")

  const gap = msNow - ms

  const msMinute = 60 * 1000,
    msHour = msMinute * 60,
    msDay = msHour * 24,
    msMonth = msDay * 30,
    msYear = msDay * 365

  const se = Math.floor(gap / 1000),
    mi = Math.floor(gap / msMinute),
    hour = Math.floor(gap / msHour),
    day = Math.floor(gap / msDay),
    mo = Math.floor(gap / msMonth),
    y = Math.floor(gap / msYear);

  if (se === 0) return '刚刚'
  else if (se < 60) return `${se}秒以前`;
  else if (mi < 60) return `${mi}分钟以前`;
  else if (hour < 24) return `${hour}小时以前`;
  else if (day < 30) return `${day}天以前`;
  else if (mo < 12) return `${mo}个月以前`;
  else return `${y}年以前`;
}

//fromNow("", "1525399201000");

export default fromNow
