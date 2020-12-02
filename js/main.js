$(document).ready(function(){
	
	// scrollTo

  $('a[href^="#"]').click(function (){
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
    return false;
  })

  	// tabs

	+function () {
		function selectPanel (e) { 
		    let target = e.target.dataset.target 
		    document.querySelectorAll('.catalog-tab, .tab-panel').forEach(el => el.classList.remove('active'))
		    e.target.classList.add('active')
		    document.querySelectorAll('.' + target).forEach(el => el.classList.add('active'))
		}

		document.querySelectorAll('.catalog-tab, .btn-link').forEach(el => {
		    el.addEventListener('click', selectPanel)
		})

	}()

	// Modal

	const modal = document.getElementById("myModal");
		const modalTitle = document.getElementById("modal-title");
		const modalImg = document.getElementById("modal-img");
		const select = document.getElementById("select");
		const btn = document.querySelectorAll(".buy");
		const span = document.getElementsByClassName("close")[0];
		const productname = document.getElementById("productname");

		btn.forEach(el => el.addEventListener('click', function(e){
			const id = e.target;
			const img = id.parentNode.querySelector('img');
			const title = id.parentNode.querySelector('h4');
			const optionList = id.parentNode.querySelectorAll('.sizes__item');
			const optionListFilter = Array.from(optionList).filter( i => i.className !== "sizes__item disabled");
			modalImg.innerHTML = `<img src="${img.src}" alt="" />`;
			modalTitle.textContent = title.textContent;
			select.innerHTML = optionListFilter.map(i => `<option value=${i.innerText}>${i.innerText}</option>`)
			modal.style.display = "block";
			productname.value = title.textContent;
		}))

		span.onclick = function() {
		  modal.style.display = "none";
		}

		window.onclick = function(e) {
		  if (e.target == modal) {
		    modal.style.display = "none";
		  }
		}

});

