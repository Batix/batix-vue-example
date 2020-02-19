import "@/extensions/DateExtension";

function random(max) {
    return Math.floor(Math.random() * max);
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

export default {
    createMachinesData: function (von, bis, machine) {
        let dates = getDates(von, bis)

        return dates.map(d => {
            return {
                date: d,
                manufactured: random(machine.capacity)
            }
        })
    }
}