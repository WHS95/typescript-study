{
    /**
     * Enum
     */
    //JavaScript에서는 존재하지 않음
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS =10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WENDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0,"TUESDAY":1,"WEDNESDAY":2})
    const dayOfToday = DAYS_ENUM.MONDAY;
     
    console.log(dayOfToday);

    //TypeScript
    type DaysOfWeek ='Monday'|'Tuseday'|'Wednesday'
    enum Days {
        Monday,
        Tuesday,
        Wensday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Days.Tuesday);
    let day: Days = Days.Saturday;
    day =10;//<-이 점이 Enum의 문제 점이다. 즉 타입을 정확하게 보장하지 않는다.
    console.log(day);

    //위 와 같은 이유가 있기에  Union type을 사용하면 오히려 타입보장에 유용하다.
    let daysOfWeek: DaysOfWeek = "Monday"
    // daysOfWeek = 'Other' 
}