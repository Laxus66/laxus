import './style.css'
import { imgTemplates } from "./db.json"
const app = document.querySelector("#app")

const imgT = () => {
    return `<div class="container-fluid mt-5">
    <div class="table-responsive">
    <table class="table table-striped table-dark text-white table-hover">
    <thead>
    <th colspan="8" class="text-center bg-success bg-gradient">TRANG WEB DOWNLOAD HÌNH MINH HỌA MIỄN PHÍ</th>
    <tr>
    <th class="text-center">ID</th>
    <th class="text-center">Name</th>
    <th>TITLE</th>
    <th class="text-center">🌐</th>
    </tr>
    </thead>
        <tbody>
            ${imgTemplates.map((img) => {
        return `<tr>
                <td class="text-center">${img.id}</td>
                <td class="text-center">${img.name}</td>
                <td>${img.title}</td>
                <td class="">
                    <a class="border text-center border-danger p-2 d-flex align-items-center rounded text-light text-decoration-none" href="${img.link}">Click Here</a>
                </td>
            </tr>`
    })}
        </tbody>
        </table>
        </div>
        </div>`
}


app.innerHTML = imgT()