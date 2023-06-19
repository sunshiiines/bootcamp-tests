function yearsAgo(date) {
    const date1 = new Date().getFullYear();
    return date1 - date;
  }
    console.log(yearsAgo(2000))