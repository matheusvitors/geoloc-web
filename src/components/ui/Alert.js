import Swal from "sweetalert2";

export const Alert = {

    clean: (message) => {
        Swal.fire(message)
    },

    success: (message)  => {
        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: message,
        })
    },

    error: (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Erro!',
            text: message,
        })
    },

}
