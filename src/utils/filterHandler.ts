import { Component } from "react";
import Discipline from "./Discipline";

export default class Filter {

    static bySemester(discs: Array<Discipline>, semester: number) {

        let filtered = discs.filter(disc => {
            return disc.semester === semester
        })

        return filtered
    }
}