(function() {
    
    // set the modal close element
    const closeBtn = document.getElementById('modal-close');
    const cancelBtn = document.getElementById('cancel-btn');
    const modal = document.getElementById('modal');
    const modalBtn = document.getElementById('modal-btn');

    closeBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    cancelBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    modalBtn.addEventListener('click', function(){
        modal.classList.remove('hidden');
    });

})();