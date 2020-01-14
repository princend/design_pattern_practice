export class DateType {
    public hasToday: () => ['today']
}



export const dic = {
    hasToday: ['today'], hasWeek: ['thisWeek', 'lastWeek']
}



var setting = {
    hasToday: false,
    hasWeek: true
}


function getArr() {
    let arr = []
    Object.keys(setting).forEach(e => {

        if (setting[e]) { arr = arr.concat(dic[e]) }
    }

    )

    return arr;

}




console.log(getArr(), 'n');

