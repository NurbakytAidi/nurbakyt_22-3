var userInfo = {
    name: 'Supernatural',
    releaseDate:'13 September',
    date:'2005 year',
    mainActor:'Jensen Ackles, Jared Padalecki, Misha Collins, Mark Sheppard',
    episodes:'327',
    numberofSeasons: '15',
    information:{
        Genre:'Horror, Drama, Action, Detective',
        country:'American',
    }
}
console.log(typeof userInfo)
console.log(userInfo.name)
console.log(userInfo.releaseDate)
console.log(userInfo.date)
console.log(userInfo.mainActor)
console.log(userInfo)


var week = 'saturday'

switch (week){
    case 'Monday':
    case 'monday':
        console.log('день недели понедельник')
        break;
    case 'Tuesday':
    case 'tuesday':
        console.log('день недели', week = 'вторник')
        break;
    case 'Wednesday':
    case 'wednesday':
        console.log('день недели', week = 'среда')
        break;
    case 'Thursday':
    case 'thursday':
        console.log('день недели', week = 'четверг')
        break;
    case 'Friday':
    case 'friday':
        console.log('день недели', week = 'пятница')
        break;
    case 'Saturday':
    case 'saturday':
        console.log('день недели', week = 'суббота')
        break;
    case 'Sunday':
    case 'sunday':
        console.log('день недели', week = 'воскресенье')
        break;
}






