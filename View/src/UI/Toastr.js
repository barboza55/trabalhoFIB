const toastrDefaultOptions = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': true,
    'progressBar': true,
    'positionClass': 'toast-top-right',
    'preventDuplicates': true,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
};

let Toastr = (tipo, message, titulo) => {
    if (tipo == 'warning') {
        //eslint-disable-next-line
        return toastr.warning(message, titulo, toastrDefaultOptions)
    }
    if (tipo == 'success') {
        //eslint-disable-next-line
        return toastr.success(message, titulo, toastrDefaultOptions)
    }
    if (tipo == 'error') {
        //eslint-disable-next-line
        return toastr.error(message, titulo, toastrDefaultOptions);
    }
};

export default Toastr;