export function formatTime(time: number) {
    if (typeof time !== 'number' || time < 0) {
        return time
    }

    const hour = (time / 3600).toFixed(0)
    time %= 3600
    const minute = (time / 60).toFixed(0)
    const second = (time % 60).toFixed(0)

    return ([hour, minute, second]).map((n) => {
        return n[1] ? n : '0' + n
    }).join(':')
}

export function formatLocation(longitude: number, latitude: number) {
    const lng = longitude.toFixed(2)
    const lat = latitude.toFixed(2)
    return {
        longitude: lng.split('.'),
        latitude: lat.split('.')
    }
}

export function fib(n: number): number {
    if (n < 1) return 0
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}

export function formatLeadingZeroNumber(n: number, digitNum = 2) {
    const needNum = Math.max(digitNum - n.toString().length, 0)
    return new Array(needNum).fill(0).join('') + n
}

export function formatDateTime(date: Date, withMs = false) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const ms = date.getMilliseconds()

    let ret = [year, month, day].map(value => formatLeadingZeroNumber(value, 2)).join('-') +
        ' ' + [hour, minute, second].map(value => formatLeadingZeroNumber(value, 2)).join(':')
    if (withMs) {
        ret += '.' + formatLeadingZeroNumber(ms, 3)
    }
    return ret
}

export function compareVersion(v1: string, v2: string) {
    let v1arr = v1.split('.')
    let v2arr = v2.split('.')
    const len = Math.max(v1arr.length, v2arr.length)

    while (v1arr.length < len) {
        v1arr.push('0')
    }
    while (v2arr.length < len) {
        v2arr.push('0')
    }

    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1arr[i], 10)
        const num2 = parseInt(v2arr[i], 10)
        if (num1 > num2) {
            return 1
        } else if (num1 < num2) {
            return -1
        }
    }
    return 0
}
