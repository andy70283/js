let btn = document.querySelector('.btn2');
    let birthdate = document.querySelector('#birthdate');
    let birthmonth = document.querySelector('#birthmonth');
    let birthyear = document.querySelector('#birthyear');
    let warning1 = document.querySelector('.warning1');
    let road = document.querySelector('#road');
    let flexCheckDefault = document.querySelector('#flexCheckDefault');
    let warning2 = document.querySelector('.warning2');
    let country = document.querySelector('#country');
    let name = document.querySelector('#name');
    let gender = document.querySelector('#gender');
    let idnumber = document.querySelector('#idnumber');
    let birth = document.querySelectorAll('.birth');
    let email = document.querySelector('#email');
    let city = document.querySelector('#city');
    let district = document.querySelector('#district');
    let roadname = document.querySelector('#roadname');
    let address = document.querySelector('#address');
    let mobilephone = document.querySelector('#mobilephone');
    let phone = document.querySelector('#phone');
    let emergencycontactname = document.querySelector('#emergencycontactname');
    let emergencymobilephone = document.querySelector('#emergencymobilephone');
    let inputcheck = document.querySelectorAll('.input-check');
    let automatic = document.querySelector('#automatic');
    let reg = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
    let reg1 = /^[0]{1}[9]{1}[0-9]{8}$/;

    birthyear.innerHTML = '<option value="" selected disabled>年</option>';
    birthmonth.innerHTML = '<option value="" selected disabled>月</option>';
    birthdate.innerHTML = '<option value="" selected disabled>日</option>';

    for (let i = 1940; i <= 2020; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        birthyear.appendChild(option);
    }
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        birthmonth.appendChild(option);
    }
    birthmonth.addEventListener('change',function(){
    birthdate.innerHTML = '';
    if (birthmonth.value == 2) {
        birthdate.innerHTML = '<option value="" selected disabled>日</option>';
        for (let i = 1; i <= 28; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        birthdate.appendChild(option);
        }
    } else if (birthmonth.value == 4 || birthmonth.value == 6 || birthmonth.value == 9 || birthmonth.value == 11) {
        birthdate.innerHTML = '<option value="" selected disabled>日</option>';
        for (let i = 1; i <= 30; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        birthdate.appendChild(option);
        }
    } else {
        birthdate.innerHTML = '<option value="" selected disabled>日</option>';
        for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        birthdate.appendChild(option);
        }
    }
    }
)

    function auto() {
        automatic.value = city.value + district.value + roadname.value + address.value ;
    }
    country.addEventListener('change', function() {
        auto()
    });
    district.addEventListener('change', function() {
        auto()
    });
    roadname.addEventListener('change', function() {
        auto()
    });
    address.addEventListener('input', function() {
        auto()
    });

    console.log(automatic.value);
    btn.addEventListener('click', function() {
        let isValid = true;
        inputcheck.forEach(item => {
            if (!item.value) {
                let warning = item.parentNode.children[2];
                warning.textContent = '請填寫完整';
                swal(
                '錯誤!',
                '請填寫完整!',
                'error'
                );
                isValid = false;
            }
            return;
        });

        if (!birthdate.value || !birthmonth.value || !birthyear.value) {
            warning1.textContent = '請填寫完整';
            swal(
                '錯誤!',
                '請填寫完整!',
                'error'
            );
            isValid = false;
            return;
        }


        if(reg.test(idnumber.value) === false) {
            let warning = idnumber.parentNode.children[2];
            swal(
                '錯誤!',
                '身分證請填寫正確!',
                'error'
            );
            return;
        }

        if(reg1.test(mobilephone.value) === false) {
            let warning = mobilephone.parentNode.children[2];
            swal(
                '錯誤!',
                '手機請填寫正確!',
                'error'
            );
            return;
        }

        if (isValid) {
            let formData = {
                country: country.value,
                name: name.value,
                gender: gender.value,
                idnumber: idnumber.value,
                birthyear: birthyear.value,
                birthmonth: birthmonth.value,
                birthdate: birthdate.value,
                email: email.value,
                city: city.value,
                district: district.value,
                roadname: roadname.value,
                address: address.value,
                mobilephone: mobilephone.value,
                phone: phone.value,
                emergencycontactname: emergencycontactname.value,
                emergencymobilephone: emergencymobilephone.value
            };
            localStorage.setItem('formData', JSON.stringify(formData));
            window.location.href = 'cart-done.html';
        } else {
            swal(
                '錯誤!',
                '請填寫完整!',
                'error'
            );
        }
    });

    function res() {
        inputcheck.forEach(item => {
            if (item.value) {
                let warning = item.parentNode.querySelector('.warning');
                warning.textContent = '';
            }
        });

        if (birthdate.value && birthmonth.value && birthyear.value) {
            warning1.textContent = '';
        }
    }

    country.addEventListener('change', res);
    name.addEventListener('input', res);
    gender.addEventListener('change', res);
    idnumber.addEventListener('input', res);
    birth.forEach(item => {
        item.addEventListener('change', res);
    });
    email.addEventListener('input', res);
    city.addEventListener('change', res);
    district.addEventListener('change', res);
    roadname.addEventListener('change', res);
    address.addEventListener('input', res);
    mobilephone.addEventListener('input', res);
    phone.addEventListener('input', res);
    emergencycontactname.addEventListener('input', res);
    emergencymobilephone.addEventListener('input', res);
emergencymobilephone.addEventListener('input', res);
