String.prototype.toIsoDate = function () {
    if (this.split('.').length === 3) {
        return new Date(this.split('.').reverse().join('-'));
    }
    return new Date(this);
}

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}