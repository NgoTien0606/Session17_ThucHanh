function MyDate(day, month, year) {
    console.log(this);
    this.day = day;
    this.month = month;
    this.year = year;

    // this.getDay = () => {
    //     return this.day;
    // }
    // this.getMonth = () => {
    //     return this.month;
    // }
    // this.getYear = () => {
    //     return this.year;
    // }
    this.toSting = () => {
        return this.day + "/" + this.month + "/" + this.year
    }

    // this.setDay = (day) => {
    //     this.day = day;
    // }
    // this.setMonth = (month) => {
    //     this.month = month;
    // }
    // this.setYear = (year) => {
    //     this.year = year;
    // }
    this.setDate = (day, month, year) => {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
let date = new MyDate(2, 2, 2007); // 2/2/2007

// let day = date.getDay(); //2 
// let month = date.getMonth(); // 2
// let year = date.getYear(); // 2007
// alert(day + "/" + month + "/" + year); // 2/2/2007

// date.setDay(10); // this.day = 10
// date.setMonth(10); // this.month = 10
// date.setYear(2019); // this.year = 2019
// alert(day + "/" + month + "/" + year);

console.log(date.toSting());

date.setDate(10, 4, 2023);

console.log(date.toSting());

