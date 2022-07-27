    document.getElementById('myBtn1').addEventListener('click', () => myFunction1())
    function myFunction1() {
      var dots = document.getElementById('dots1');
      var moreText = document.getElementById('more1');

      if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';
        moreText.style.display = 'inline';
      }
    }
    document.getElementById('myBtn2').addEventListener('click', () => myFunction2())
    function myFunction2() {
      var dots = document.getElementById('dots2');
      var moreText = document.getElementById('more2');

      if (dots.style.display === 'none') {
        dots.style.display = 'inline';

        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';

          moreText.style.display = 'inline';
        }
        
    }
    document.getElementById('myBtn3').addEventListener('click', () => myFunction3())
    function myFunction3() {
      var dots = document.getElementById('dots3');
      var moreText = document.getElementById('more3');

      if (dots.style.display === 'none') {
        dots.style.display = 'inline';

        moreText.style.display = 'none';
      } else {
        dots.style.display = 'none';

        moreText.style.display = 'inline';
      }
    }
  