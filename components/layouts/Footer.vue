<template>
  <div class="footer-background">
    <footer class="footer">
      <div class="footer__section">
        <h3>Help Center</h3>
        <p>If you have any questions?</p>
        <button class="footer__button">GET ANSWERS</button>
        <div class="footer__socials">
          <a href="#" class="footer__icon"><img src="@/assets/icons/telegram.svg" alt="Telegram"></a>
          <a href="#" class="footer__icon"><img src="@/assets/icons/facebook.svg" alt="Facebook"></a>
          <a href="#" class="footer__icon"><img src="@/assets/icons/instagram.svg" alt="Instagram"></a>
          <a href="#" class="footer__icon"><img src="@/assets/icons/twitter.svg" alt="Twitter"></a>
        </div>
      </div>
      <div class="footer__section">
        <h4>Games</h4>
        <ul>
          <li><a href="#">Game 1</a></li>
          <li><a href="#">Game 2</a></li>
          <li><a href="#">Game 3</a></li>
          <li><a href="#">Game 14</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4>About</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Promotions</a></li>
          <li><a href="#">VIP</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Awards & Certificates</a></li>
          <li><a href="#">App</a></li>
        </ul>
      </div>
      <div class="footer__section">
        <h4>Legal Information</h4>
        <ul>
          <li><a href="#">General Terms & Conditions</a></li>
          <li><a href="#">Responsible Gaming Policy</a></li>
          <li><a href="#">Sports Betting Rules</a></li>
          <li><a href="#">Privacy and Cookies Policy</a></li>
          <li><a href="#">Payment Methods</a></li>
          <li><a href="#">Limits</a></li>
        </ul>
      </div>
      <div class="footer__apps">
        <div class="footer__app-links">
          <a href="#"><img src="@/assets/icons/mac.svg" alt="Mac OS"></a>
          <div>
            <a href="#"><img src="@/assets/icons/android.svg" alt="Android"></a>
            <a href="#"><img src="@/assets/icons/ios.svg" alt="iOS"></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.footer-background {
  min-width: 100%;
  padding: 0;
  margin-top: 2rem;

  @media (max-width: 960px) {
    display: none;
  }
}

.footer {
  background-color: #12294A;
  color: #fff;
  display: flex;
  justify-content: space-between;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding: 64px 32px;

  .footer__section {
    h3 {
      margin-bottom: 1rem;
      font-family: "Jost", Arial, sans-serif;
    }

    p {
      color: #90A2BD;
      margin-bottom: 1rem;
    }

    h4 {
      padding-bottom: 16px;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 1.25rem;

        a {
          color: #90A2BD;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .footer__button {
      background-color: #3555FF;
      color: #fff;
      padding: 0.8rem 3.38rem;
      border: none;
      border-radius: 10px;
      cursor: pointer;

      &:hover {
        background-color: #2a36a6;
      }
    }

    .footer__socials {
      display: flex;
      gap: 1.5rem;
      margin-top: 1rem;

      .footer__icon {
        display: inline-block;
        width: 30px;
        height: 30px;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }

  .footer__apps {

    .footer__app-links {
      padding-top: 1rem;
      gap: 1rem;

      a {
        width: 40px;
        height: 40px;

        img {
          max-width: 100%;
          max-height: 100%;
          margin: 0.25rem;
        }
      }
    }
  }
}
</style>