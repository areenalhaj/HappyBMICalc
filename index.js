var tall
var weight
var bmi = weight / (tall * tall);
var message = ""

document.getElementById("calc-button").addEventListener('click', function () {
    tall = document.getElementById("tall-field").value
    weight = document.getElementById("weight-field").value
    bmi = weight / (tall * tall);
    switch (true) {
        case (bmi < 16):
            message = "عندك نحافة شديدة"
            break
        case (bmi <= 17 && bmi >= 16):
            message = "عندك نحافة معتدلة"
            break
        case (bmi <= 18.5 && bmi > 17):
            message = "عندك نحافة خفيفة"
            break
        case (bmi <= 25 && bmi > 18.5):
            message = "وزنك طبيعي"
            break
        case (bmi <= 30 && bmi > 25):
            message = "عندك زيادة وزن"
            break
        case (bmi <= 35 && bmi > 30):
            message = "عندك سمنة من الفئة الأولى"
            break
        case (bmi <= 40 && bmi > 35):
            message = "عندك سمنة من الفئة الثانية"
            break
        case (bmi > 40):
            message = "عندك سمنة من الفئة الثالثة"
            break
        default:
            bmi = 0
            message = "(عندك خطأ في البيانات)"
    }
    if (bmi != 0)
        message = "نتيجتك: " + bmi.toFixed(1) + "، " + message

    document.getElementById("bmi-result").innerHTML = message

})

document.getElementById("reset-btn").addEventListener('click', () => {
    document.getElementById("tall-field").value = ""
    document.getElementById("weight-field").value = ""
})