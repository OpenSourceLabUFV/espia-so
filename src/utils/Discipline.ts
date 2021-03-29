export default class Discipline {
    title: string
    semester: number
    slug: string

    constructor(sl: string, t: string, s: string) {
        this.slug = sl
        this.title = t
        this.semester = parseInt(s)
    }
}