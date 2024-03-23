import { $authHost, $host } from "./index";

export const createPlace = async (place) => {
    const { data } = await $authHost.post('api/place', place)
    return data
}

export const fetchPlaces = async () => {
    const { data } = await $host.get('api/place')
    return data
}

export const createYear = async (year) => {
    const { data } = await $authHost.post('api/year', year)
    return data
}

export const fetchYears = async () => {
    const { data } = await $host.get('api/year',)
    return data
}

export const createFoto = async (foto) => {
    const { data } = await $authHost.post('api/foto', foto)
    return data
}

export const fetchFotos = async (yearId, placeId, page, limit = 18) => {
    const { data } = await $host.get('api/foto', {
        params: {
            yearId, placeId, page, limit
        }
    })
    return data
}

export const fetchOneFoto = async (id) => {
    const { data } = await $host.get('api/foto/' + id)
    return data
}

export const deleteFoto = async (id) => {
    const { data } = await $authHost.delete('api/foto/' + id)
    return data
}
