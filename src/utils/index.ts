import Swal, { SweetAlertIcon } from 'sweetalert2';

export const showAlert = (
  titleText: string = 'Something has happened',
  alertType?: SweetAlertIcon
): void => {
  Swal.fire({
    title: titleText,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    toast: true,
    showConfirmButton: true,
    showCancelButton: true,
    cancelButtonText: 'Dismiss',
    icon: alertType,
    showClass: {
      popup: 'swal2-noanimation',
      backdrop: 'swal2-noanimation',
    },
    hideClass: {
      popup: '',
      backdrop: '',
    },
  });
};
