import Discipline from "./Discipline";

export default class Filter {

    static bySemester(discs: Array<Discipline>, semester: string) {

        let filtered = discs.filter(disc => {
            return disc.semester === parseInt(semester)
        })

        return filtered
    }
}