import { makeAutoObservable } from 'mobx'


export default class FotoStore {
    constructor() {
        this._places = []
        this._years = []
        this._fotos = []
        this._selectedPlace = {}
        this._selectedYear = {}
        this._selectedFoto = {}
        this._page = 0
        // this._totalCount = 0
        this._limit = 18
        makeAutoObservable(this)
    }

    setPlaces(place) {
        this._places = place
    }

    setYears(year) {
        this._years = year
    }

    setFotos(foto) {
        this._fotos = foto
    }

    setSelectedYear(year) {
        this.setPage(0)
        this._selectedYear = year
    }
    setSelectedPlace(place) {
        this.setPage(0)
        this._selectedPlace = place
    }
    setSelectedFoto(foto) {
        this._selectedFoto = foto
    }
    setPage(page) {
        this._page = page
    }
    // setTotalCount(count) {
    //     this._totalCount = count
    // }
    setLimit(limit) {
        this._limit = limit
    }

    get places() {
        return this._places
    }

    get years() {
        return this._years
    }

    get fotos() {
        return this._fotos
    }

    get selectedPlace() {
        return this._selectedPlace
    }
    get selectedYear() {
        return this._selectedYear
    }
    get selectedFoto() {
        return this._selectedFoto
    }
    // get totalCount() {
    //     return this._totalCount
    // }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}

