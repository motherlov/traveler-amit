import Swal from 'sweetalert2';

function SweetAlertComponent({ confirm, cancel, title, subtitle, type }) {
  Swal.fire({
    title: title,
    text: subtitle,
    icon: type !== undefined ? type : 'error',
    showCancelButton: true,
    confirmButtonColor: '#024b98',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
    allowOutsideClick: false,
    showCloseButton: false,
  }).then((result) => {
    if (result.isConfirmed) {
      if (confirm) {
        confirm();
      }
    } else if (result.isDismissed) {
      if (cancel) {
        cancel();
      }
    }
  });

  return null;
}

export default SweetAlertComponent;
