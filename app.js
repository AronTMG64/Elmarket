const arrow = document.getElementById('arrow')

arrow.addEventListener('click', function () {
    if (document.getElementById('sidebar').style.width == '20%') {
        document.getElementById('sidebar').style.width = '0px'
        arrow.style.transform = 'rotate(180deg)'
    } else {
        document.getElementById('sidebar').style.width = '20%'
        arrow.style.transform = 'rotate(0deg)'
    }
})