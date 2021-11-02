<template>
  <div>
    <main>
      <input type="text" class="search" />
      <div class="line-1"></div>
      <div class="line-2"></div>
    </main>
  </div>

</template>

<script>
export default {
  name: 'searchBar',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken', {
        username: this.username,
        password: this.password,
      })
          .then(() => {
            this.$router.push({ name: 'search' })
          })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #1abc9c;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

main {
  width: auto;
  height: auto;
}

::selection {
  background: #16a085;
  color: #fff;
}

.line-1 {
  width: 5px;
  height: 40px;
  background: #fff;
  margin: auto;
  position: relative;
  left: 45px;
  top: -20px;
  transform: rotate(-45deg);
  transition: .5s;
  transition-timing-function: cubic-bezier(1,0,.3,1);
  cursor: pointer;
}

.line-2 {
  width: 5px;
  height: 0px;
  background: #fff;
  margin: auto;
  transform: rotate(-45deg);
  position: relative;
  left: 0;
  top: -40px;
  opacity: 0;
  transition: .5s ease-in-out;
  transition-timing-function: cubic-bezier(1,0,.3,1);
  cursor: pointer;
}

.search {
  font-weight: 900;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  width: 100px;
  height: 100px;
  border: 5px solid #fff;
  border-radius: 100px;
  cursor: default;
  transition: .7s;
  transition-timing-function:cubic-bezier(1,-0.5,0,1.5);
  text-align: left;
  box-sizing: border-box;
  padding-left: 15px;
  outline: none;
  font-size: 32px;
  background: transparent;
}


.active {
  width: 500px;
  height: 100px;
  border: 5px solid #fff;
  border-radius: 20px;
  margin-bottom: 20px;
}

</style>

<script>
$(document).ready(function() {
  $('.search').click(function() {
    $('.search').addClass('active');
    $('.line-1').css({
      'transform': 'rotate(45deg)',
      'top': '0px',
      'left': '0px'
    });
    $('.line-2').css({
      'height':'40px',
      'opacity':'1'
    });
  });
  $('.line-1, .line-2').click(function() {
    $('.search').removeClass('active').val('');
    $('.line-1').css({
      'transform': 'rotate(-45deg)',
      'top': '-20px',
      'left': '45px'
    });
    $('.line-2').css({
      'height':'0px',
      'opacity':'0'
    });

  });
});
</script>
