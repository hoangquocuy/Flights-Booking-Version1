
function handleClick() {
//            console.log((document.querySelector('#return-date').value);
    console.log(document.querySelector('#check-oneway').value);
    console.log(document.querySelector('#round').checked);
    console.log(document.querySelector('#check-oneway').checked);
    var arrivalElement = document.querySelector('#arrival');
    var errorElementArrival = arrivalElement.parentElement.querySelector('.form-message');
    errorElementArrival.innerText = '';
    document.getElementById('arrival').value = null;
    document.getElementById('arrival').disabled = true;

}
;

function handleClick2() {
//            console.log((document.querySelector('#return-date').value);
    console.log(document.querySelector('#round').checked);
    console.log(document.querySelector('#check-oneway').checked);
    document.getElementById('arrival').disabled = false;
}
;


function Validator(options) {
    function validate(selectElement, rule) {
        var errormessage = rule.test(selectElement.value);
        var errorElement = selectElement.parentElement.querySelector('.form-message');
        if (errormessage) {
            errorElement.innerText = errormessage;
            return errormessage;
        } else {
            errorElement.innerText = '';
        }
    }
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function (rule) {
            var selectElement = formElement.querySelector(rule.selector);

            if (selectElement) {
                selectElement.onblur = function () {
                    validate(selectElement, rule);
                };
                selectElement.onchange = function () {
                    validate(selectElement, rule);
                };

                selectElement.oninput = function () {
                    validate(selectElement, rule);
                };

            }

        });

        formElement.onsubmit = function (event) {
            check = true;
            check2 = true;
            check3 =true;
            
            options.rules.forEach(function (rule) {

                var selectElement = formElement.querySelector(rule.selector);

                if (validate(selectElement, rule)) {
                    check = false;
                    return;
                }

            });
            
            var elementIdCarts = document.querySelectorAll('.validate-id-cart');
            var inputElementCart = document.querySelector('#id-cart');
            if(elementIdCarts && inputElementCart) {
                elementIdCarts.forEach(function (elementIdCart) {
                    if (inputElementCart.value === elementIdCart.value) {
                        console.log('S??? CMND/H??? chi???u b??? tr??ng tr?????c ????');
                        var errorElement2 = inputElementCart.parentElement.querySelector('.form-message');
                        errorElement2.innerText = 'S??? CMND/H??? chi???u b??? tr??ng tr?????c ????';
                        check2 = false;
                        return;
                    } 
            });
            }
            
            console.log('kich lai ');
            if (!check || !check2 || !check3) {
                event.preventDefault();
            }
        };

    }
}
;
Validator.isDeparture = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            if (value === 'null') {
                return 'Vui l??ng ch???n ??i???m kh???i h??nh';
            } else {
                return undefined;
            }
        }
    };
};
Validator.isDestination = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            if (value === 'null') {
                return 'Vui l??ng ch???n ??i???m ?????n';
            } else {
                return undefined;
            }
        }
    };
};

Validator.isDepart = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            if (value == '') {
                return 'Vui l??ng ch???n ng??y kh???i h??nh';
            } else {
                return undefined;
            }
        }
    };
};

Validator.isArrival = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            var valueTrip = document.querySelector('#round').checked;
            if (valueTrip == true && value == '') {
                return 'Vui l??ng ch???n ng??y ?????n';
            } else {
                return undefined;
            }
        }
    };
};

Validator.isFullName = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            if (value == '') {
                return 'Vui l??ng nh???p t??n ?????y ?????';
            } else {
                return undefined;
            }
        }
    };
};
Validator.isGender = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            if (value == '') {
                return 'Vui l??ng ch???n gi???i t??nh';
            } else {
                return undefined;
            }
        }
    };
};
Validator.isPhoneNumber = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            var numberPhone = /^(?:[0-9]\d*|\d)$/;
            if (value == '') {
                return 'Vui l??ng nh???p s??? ??i???n tho???i';
            } else if (!numberPhone.test(value) || value.length != 10) {
                return 'S??? ??i???n tho???i kh??ng h???p l???';
            } else {
                return undefined;
            }
        }
    };
};

Validator.isBirthDay = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            if (value == '') {
                return 'Vui l??ng ch???n ng??y th??ng n??m sinh';
            } else {
                return undefined;
            }
        }
    };
};
Validator.isEmail = function (selector) {
    
    return {
        selector: selector,
        test: function (value) {
            var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if (value == '') {
                return 'Vui l??ng nh???p Email';
            } else if (!email.test(value) ) {
                return '?????a ch??? email kh??ng h???p l???';
            }
            else {
                return undefined;
            }
        }
    };
};

Validator.isAddress = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            if (value == '') {
                return 'Vui l??ng nh???p ?????a ch???';
            } else {
                return undefined;
            }
        }
    };
};

Validator.isIdCart = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            
            var idCart = /^(?:[0-9]\d*|\d)$/;
            if (value == '') {
                return 'Vui l??ng nh???p CMND/H??? chi???u';
            } else if (!idCart.test(value) || value.length != 9) {
                return 'S??? CMND/H??? chi???u kh??ng h???p l???';
            } else {
                        return undefined;
                };
            }
        }
    };



Validator.isSeat = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng ch???n gh??? ng???i';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isSeatType = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng ch???n h???ng gh???';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isSeatArrival = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng ch???n gh??? ng???i';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isSeatTypeArrival = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng ch???n h???ng gh???';

            } else {
                return undefined;
            }
        }
    };
};

Validator.isCreditCardName = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng nh???p t??n c???a b???n';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isCreditCardNumber = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            var CreditCardNumber = /^(?:[0-9]\d*|\d)$/;
            if (value == '') {
                return 'Vui l??ng nh???p s??? th???';
            } else if (!CreditCardNumber.test(value) || value.length != 9) {
                return 'S??? th??? kh??ng h???p l???';
            } else {
                        return undefined;
                };
        }
    };
};
Validator.isCreditCardMonth = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng ch???n th??ng';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isCreditCardYear = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng ch???n n??m';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isCreditCardCVV = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng nh???p m?? cvv';

            } else {
                return undefined;
            }
        }
    };
};

Validator.isUserName = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng nh???p t??n t??i kho???n';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isPassword = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng nh???p m???t kh???u';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isNewPassword = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng nh???p tr?????ng n??y';

            } else {
                return undefined;
            }
        }
    };
};
Validator.isNewPasswordConfirm = function (selector) {

    return {
        selector: selector,
        test: function (value) {

            if (value == '') {
                return 'Vui l??ng nh???p tr?????ng n??y';

            } else {
                return undefined;
            }
        }
    };
};

// begin validator onsubmit


                  

            