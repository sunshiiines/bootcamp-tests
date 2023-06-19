function isWeekday(notWeekend) {
    return !notWeekend.startsWith("S");
    }
    console.log(isWeekday("Saturday"))