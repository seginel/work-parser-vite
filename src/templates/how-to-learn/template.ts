import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { normalizeCss } from '../normalize';

export const html = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Научиться учиться</title>
  <link rel="stylesheet" href="styles/normalize.css">
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <div class="page">
    <header class="header">
      <img src="images/logo_place_header.svg" alt="Логотип Яндекс.Практикум" class="logo logo_place_header">
      <h1 class="header__title">Научиться учиться</h1>
      <p class="header__subtitle">Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни? <a href="#" class="header__link">Узнать &rarr;</a>
      </p>
      <img src="images/header-image.png" alt="Фрагмент картины Снова двойка" class="header__main-illustration">
      <div class="header__square-pic"></div>
    </header>
    <main class="content">
      <section class="description">
       <article class="two-columns">
          <h2 class="two-columns__brief">Главные проблемы в обучении</h2>
          <div class="two-columns__main-text">
            <p class="two-columns__paragraph">
              Ни в школе, ни в институте нас не учат тому, как правильно изучать материал. Мы готовимся к экзаменам и учим билеты. Мы тренируемся решать однообразные задачи, чтобы лучше сдать тест, но часто в итоге это не дает нам реального знания. Зубрежка быстро выветривается и не приносит пользы.
            </p>
            <p class="two-columns__paragraph"><span class="two-columns__span-accent">Вывод:</span> учиться тоже нужно уметь, но почему-то этому мало где учат. Что с этим делать?</p>
            <p class="two-columns__paragraph">Конкретные техники и упражнения помогают изменить подход к обучению, сделать его эффективным и захватывающим. Эти же техники применяются на примере обучения в Практикуме.
            </p>
          </div>
        </article>
      </section>

      <section class="digits">
        <h2 class="section-title">Цифры и факты</h2>
        <p class="section-subtitle">Про учёбу и мозг</p>
        <ul class="table">
          <li class="table__cell">
            <h3 class="table__heading">86 миллиардов</h3>
            <p class="table__text">Число нейронов в мозге человека</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">2,1 миллиарда</h3>
            <p class="table__text">Число нуждающихся в повышении квалификации</p>
            <p class="table__text">Всемирный Банк, 2017</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">1000 терабайт</h3>
            <p class="table__text">Объём памяти человека</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">500 триллионов</h3>
            <p class="table__text">Число ответственных за обучение нервных синапсов у взрослого человека</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">420 миллионов</h3>
            <p class="table__text">Число взрослых людей моложе 25 лет, не имеющих образования для трудоустройства</p>
            <p class="table__text">Всемирный Банк, 2017</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">17–20 лет</h3>
            <p class="table__text">Пик обучаемости</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">1885 год</h3>
            <p class="table__text">Открытие кривой забывания</p>
          </li>
          <li class="table__cell">
            <h3 class="table__heading">1889 год</h3>
            <p class="table__text">Открытие условного рефлекса</p>
          </li>
        </ul>
      </section>

      <section class="feynman">
        <h2 class="feynman__title">Метод Фейнмана</h2>
        <p class="feynman__subtitle">Выучить и не забыть.</p>
        <a href="#" class="feynman__link">Подробнее &rarr;</a>
      </section>

      <section class="kaufman">
        <h2 class="section-title section-title_theme_dark">Принципы обучения</h2>
        <p class="section-subtitle section-subtitle_theme_dark">от Джоша Кауфмана</p>
        <ul class="table table_theme_dark">
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">1</h3>
            <p class="table__text table__text_theme_dark">Выберите привлекательный проект.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">2</h3>
            <p class="table__text table__text_theme_dark">Сосредоточьтесь на каком-то одном навыке.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">3</h3>
            <p class="table__text table__text_theme_dark">Определите целевой уровень мастерства.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">4</h3>
            <p class="table__text table__text_theme_dark">Разбейте навык на элементы.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">5</h3>
            <p class="table__text table__text_theme_dark">Приготовьте всё необходимое для занятий.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">6</h3>
            <p class="table__text table__text_theme_dark">Устраните препятствия для занятий.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">7</h3>
            <p class="table__text table__text_theme_dark">Выделите специальное время для занятий.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">8</h3>
            <p class="table__text table__text_theme_dark">Создайте быстрые петли обратной связи.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">9</h3>
            <p class="table__text table__text_theme_dark">Занимайтесь по расписанию, короткими интенсивными интервалами.</p>
          </li>
          <li class="table__cell table__cell_theme_dark">
            <h3 class="table__heading table__heading_theme_dark">10</h3>
            <p class="table__text table__text_theme_dark">Уделяйте внимание количеству и скорости.</p>
          </li>
        </ul>
        <div class="kaufman__triangle"></div>
      </section>
    </main>
    <footer class="footer">
      <div class="footer__columns">
        <div class="footer__column footer__column_content_copyright">
          <img src="images/logo_place_footer.svg" alt="Логотип Яндекс.Практикум в подвале сайта" class="logo logo_place_footer">
          <p class="footer__author">&copy; 2019. Виктор Абанькин</p>
        </div>
        <div class="footer__column footer__column_content_info">
          <h4 class="footer__column-heading">О Практикуме</h4>
          <nav>
            <ul class="footer__column-links">
              <li>
                <a href="#" class="footer__column-link">Главная</a>
              </li>
              <li>
                <a href="#" class="footer__column-link">Концепция</a>
              </li>
              <li>
                <a href="#" class="footer__column-link">Наставники</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="footer__column footer__column_content_social">
          <h4 class="footer__column-heading">Соцсети</h4>
          <ul class="footer__column-links">
            <li>
              <a href="#" class="footer__column-link">
                <img src="images/facebook_color_white.svg" alt="Иконка Facebook" class="footer__social-icon">Facebook
              </a>
            </li>
            <li>
              <a href="#" class="footer__column-link">
                <img src="images/vk_color_white.svg" alt="Иконка Вконтакте" class="footer__social-icon">Вконтакте
              </a>
            </li>
            <li>
              <a href="#" class="footer__column-link">
                <img src="images/instagram_color_white.svg" alt="Иконка Instagram" class="footer__social-icon">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</body>
</html>

`;

export const css = `
.page {
  min-width: 1100px;
  max-width: 1600px;
  margin: 0 auto;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.header {
  height: 100vh;
  min-height: 600px;
  max-height: 756px;
  background-color: #f2f2f2;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
}

.logo_place_header {
  position: absolute;
  z-index: 5;
  top: 30px;
  left: 64px;
}

.header__title {
  padding-left: 64px;
  max-width: 730px;
  line-height: 96px;
  font-size: 102px;
  font-weight: bold;
  margin: 0;
  z-index: 2;
}

.header__subtitle {
  max-width: 388px;
  position: absolute;
  left: 64px;
  bottom: 30px;
  margin: 0;
  line-height: 25px;
  font-size: 18px;
  font-weight: normal;
  z-index: 2;
}

.header__link {
  color: #2f80ed;
  text-decoration: none;
}

.header__main-illustration {
  width: 765px;
  height: 608px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.header__square-pic {
  min-height: 568px;
  min-width: 568px;
  background-color: #2f80ed;
  position: absolute;
  top: 64px;
  right: 0;
}

.description {
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
}

.two-columns {
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.two-columns__brief {
  max-width: 175px;
  color: #2f80ed;
  margin: 0;
  line-height: 1.2;
  font-size: 18px;
  font-weight: normal;
}

.two-columns__main-text {
  width: 80%;
  min-width: 784px;
}

.two-columns__paragraph {
  margin: 0 0 30px;
  line-height: 34px;
  font-size: 24px;
  font-weight: normal;
}

.two-columns__span-accent {
  font-weight: bold;
}

.two-columns__paragraph:last-of-type {
  margin-bottom: 0;
}

.digits {
  max-width: 1100px;
  margin: 0 auto 100px;
}

.section-title {
  width: 60%;
  line-height: 1.15;
  font-size: 60px;
  font-weight: bold;
  margin: 0 auto 20px;
  text-align: center;
}

.section-subtitle {
  width: 60%;
  line-height: 34px;
  font-size: 24px;
  font-weight: normal;
  margin: 0 auto;
  text-align: center;
}

.table {
  max-width: 1100px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  justify-content: space-between;
}

.table__cell {
  width: 250px;
  margin-top: 60px;
}

.table__heading {
  line-height: 1.15;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 20px;
}

.table__text {
  line-height: 1.2;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
}

.table__text:first-of-type:not(:only-of-type) {
  margin-bottom: 20px;
}

.feynman {
  min-height: 890px;
  background-color: #f2f2f2;
  background-image: url(../images/feynman.png);
  background-repeat: no-repeat;
  background-position: left bottom;
  position: relative;
}

.feynman__title {
  max-width: 648px;
  line-height: 1.15;
  font-size: 120px;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  padding-top: 100px;
  margin-bottom: 70px;
}

.feynman__subtitle {
  margin: 0 auto;
  text-align: center;
  line-height: 51px;
  font-size: 36px;
  font-weight: normal;
}

.feynman__link {
  line-height: 51px;
  font-size: 36px;
  font-weight: normal;
  color: #2f80ed;
  position: absolute;
  top: 50%;
  right: 48px;
  text-decoration: none;
}

.kaufman {
  background-color: #1f1f1f;
  position: relative;
  overflow: hidden;
  padding: 90px 0;
}

.section-title_theme_dark {
  color: white;
  position: relative;
  z-index: 2;
}

.section-subtitle_theme_dark {
  color: white;
  position: relative;
  z-index: 2;
}

.table_theme_dark {
  margin: 0 auto;
  justify-content: space-between;
}

.table__cell_theme_dark {
  max-width: 200px;
  color: white;
  margin-right: 0;
  margin-top: 80px;
  z-index: 2;
}

.table__text_theme_dark {
  margin-bottom: 0;
}

.kaufman__triangle {
  background-image: url(../images/kaufman-triangle.svg);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  right: -210px;
  min-width: 877px;
  min-height: 877px;
}

.footer {
  min-height: 350px;
  box-sizing: border-box;
  display: flex;
  background-color: #1f1f1f;
  padding: 60px 0 40px;
}

.footer__columns {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}

.footer__column_content_copyright {
  flex-basis: 711px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.logo_place_footer {
  max-width: 183px;
}

.footer__author {
  margin: 18px 0;
  line-height: 25px;
  font-size: 18px;
  font-weight: normal;
  color: white;
}

.footer__column-heading {
  margin:  0 0 20px;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.footer__column-links {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
}

.footer__column-link {
  text-decoration: none;
  line-height: 30px;
  font-size: 18px;
  font-weight: normal;
  color: white;
}

.footer__social-icon {
  margin-right: 10px;
  width: 16px;
  height: 16px;
}

`;

export const FIRST_WORK_HTML_TEMPLATE = getBodyFromHtmlWithStyle(html, css);
