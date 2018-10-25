export default function date (birthday) {
    let today = new Date().getFullYear()
    let birth = new Date(birthday).getFullYear()
    return today - birth - 1
}