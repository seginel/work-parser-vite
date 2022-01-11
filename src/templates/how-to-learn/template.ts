import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { DEV_MIX } from '../common';

export const html = `
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex">
    <title>Научиться учиться</title>
    <link rel="stylesheet" href="./styles/normalize.css">
    <link rel="stylesheet" href="./styles/style.css">
  </head>
  <body>
    <div class="page">
      <header class="header">
        <div class="logo logo_place_header"></div>
        <!--Опционально: <a class="logo logo_place_header"></a> -->
        <h1 class="header__title">
          Научиться учиться
        </h1>
        <p class="header__subtitle">
          Какие современные и эффективные подходы к обучению вы можете использовать в своей жизни?
          <a href="#" target="_blank" class="header__link">Узнать &rarr;</a>
        </p>
        <img src="./images/header-image.png" alt="Картина 'Опять Двойка'" class="header__main-illustration">
        <!--Опционально: "Можно лучше" если изображение вставлено как div - рассказать про важность контентных изображений и правильных альтов. -->
        <div class="header__square-pic"></div>
        <!--Опционально: "Можно лучше" вставить как псевдоэлемент блока header. По завершению второго спринта.-->
      </header>
      <main class="content">
        <section class="description">
          <div class="two-columns">
            <!--Можно лучше: взять article-->
            <h2 class="two-columns__brief">
              Главные проблемы в обучении
            </h2>
            <!-- Не смотря на размер шрифта - это важный заголовок уровня h2 -->
            <div class="two-columns__main-text">
              <!--Это не список, а обертка для текстового содержимого. Здесь уместно использовать DIV.-->
              <p class="two-columns__paragraph">
                Ни в школе, ни в институте нас не учат тому, как правильно изучать материал. Мы готовимся к экзаменам и учим билеты. Мы тренируемся решать однообразные задачи, чтобы лучше сдать тест, но часто в итоге это не дает нам реального знания. Зубрежка быстро
                выветривается и не приносит пользы.
              </p>
              <p class="two-columns__paragraph">
                <span class="two-columns__span-accent">Вывод:</span> учиться тоже нужно уметь, но почему-то этому мало где учат. Что с этим делать?
                <!--<b> <strong> здесь не должны использоваться. <b> презентационный тег, <strong> семантически неуместен. -->
              </p>
              <p class="two-columns__paragraph">
                Конкретные техники и упражнения помогают изменить подход к обучению, сделать его эффективным и захватывающим. Эти же техники применяются на примере обучения в Практикуме.
              </p>
            </div>
          </div>
        </section>

        <section class="digits">
          <h2 class="section-title">
            Цифры и факты
          </h2>
          <p class="section-subtitle">
            Про учебу и мозг
          </p>
          <!--Допустим заголовок для section-subtitle-->
          <ul class="table">
            <!--Реализация table через div допустима, но можно посоветовать ul-->
            <li class="table__cell">
              <!--Чтобы отступы не стакалить - в table__cell можно не использовать флекс. -->
              <h3 class="table__heading">
                86 миллиардов
              </h3>
              <p class="table__text">
                Число нейронов в мозге человека
              </p>
              <!--Допустимо использовать заголовок.-->
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                2.1 миллиарда
              </h3>
              <p class="table__text">
                Число нуждающихся в повышении квалификации
              </p>
              <p class="table__text">
                Всемирный Банк, 2017
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                1000 терабайт
              </h3>
              <p class="table__text">
                Объём памяти человека
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                500 триллионов
              </h3>
              <p class="table__text">
                Число ответственных за обучение нервных синапсов у взрослого человека
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                420 миллионов
              </h3>
              <p class="table__text">
                Число взрослых людей моложе 25 лет, не имеющих образования для трудоустройства
              </p>
              <p class="table__text">
                Всемирный Банк, 2017
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                17–20 лет
              </h3>
              <p class="table__text">
                Пик обучаемости
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                1885 год
              </h3>
              <p class="table__text">
                Открытие кривой забывания
              </p>
            </li>
            <li class="table__cell">
              <h3 class="table__heading">
                1889 год
              </h3>
              <p class="table__text">
                Открытие условного рефлекса
              </p>
            </li>
          </ul>
        </section>

        <section class="feynman">
          <h2 class="feynman__title">
            Метод Фейнмана
          </h2>
          <p class="feynman__subtitle">
            Выучить и не забыть
          </p>
          <a href="#" class="feynman__link">
            Подробнее &rarr;
          </a>
          <!--Допустимо по брифу завести img.feynman__image. Расскажите студенту в "Можно лучше" о том, какие изображения контентные, а какие - декоративные-->
        </section>

        <section class="kaufman">
          <h2 class="section-title section-title_theme_dark">
            Принципы обучения
          </h2>
          <p class="section-subtitle section-subtitle_theme_dark">
            от Джоша Кауфмана
          </p>
          <ul class="table table_theme_dark">
          <!--
            Допустимая реализация для блока с модификатором _theme_dark - упорядоченный список <ol>.
            Об этом можно рассказать студентам после сдачи проектной работы.

            Стандартное отображение чисел убрать через lst: none;

            Использовать counter-reset у table_theme_dark
            Использовать counter-increment у table__cell_theme_dark
            Использовать псевдоэлемент table__cell_theme_dark::before со значением content: counter
          -->
            <!--Реализация table через div допустима, но можно посоветовать ul-->
            <li class="table__cell table__cell_theme_dark">
              <!--Чтобы отступы не стакалить - в table__cell можно не использовать флекс. -->
              <h3 class="table__heading table__heading_theme_dark">
                1
              </h3>
              <p class="table__text table__text_theme_dark">
                Выберите привлекательный проект.
              </p>
              <!--Допустимо использовать заголовок.-->
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                2
              </h3>
              <p class="table__text table__text_theme_dark">
                Сосредоточьтесь на каком-то одном навыке.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                3
              </h3>
              <p class="table__text table__text_theme_dark">
                Определите целевой уровень мастерства.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                4
              </h3>
              <p class="table__text table__text_theme_dark">
                Разбейте навык на элементы.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                5
              </h3>
              <p class="table__text table__text_theme_dark">
                Приготовьте всё необходимое для занятий.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                6
              </h3>
              <p class="table__text table__text_theme_dark">
                Устраните препятствия для занятий.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                7
              </h3>
              <p class="table__text table__text_theme_dark">
                Выделите специальное время для занятий.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                8
              </h3>
              <p class="table__text table__text_theme_dark">
                Создайте быстрые петли обратной связи.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                9
              </h3>
              <p class="table__text table__text_theme_dark">
                Занимайтесь по расписанию, короткими интенсивными интервалами.
              </p>
            </li>
            <li class="table__cell table__cell_theme_dark">
              <h3 class="table__heading table__heading_theme_dark">
                10
              </h3>
              <p class="table__text table__text_theme_dark">
                Уделяйте внимание количеству и скорости.
              </p>
            </li>
          </ul>
          <div class="kaufman__triangle"></div>
          <!-- Только фоновое изображение. Допустимо реализовать как псевдоэлемент у блока kaufman -->
        </section>
      </main>
      <footer class="footer">
        <div class="footer__columns">
          <!-- Используется отдельная обертка для основных колонок -->
          <div class="footer__column footer__column_content_copyright">
            <div class="logo logo_place_footer"></div>
            <p class="footer__author">
              &copy; 2021
            </p>
          </div>
          <div class="footer__column footer__column_content_info">
            <h4 class="footer__column-heading">
              О Практикуме
            </h4>
            <nav class="footer__column-links">
              <ul class="footer__list">
                <!-- Опциональное название класса -->
                <li>
                  <a href="#" class="footer__column-link">
                Главная
              </a>
                </li>
                <li>
                  <a href="#" class="footer__column-link">
                Концепция
              </a>
                </li>
                <li>
                  <a href="#" class="footer__column-link">
                Наставники
              </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="footer__column footer__column_content_social">
            <h4 class="footer__column-heading">
              Соцсети
            </h4>
            <nav class="footer__column-links">
              <ul class="footer__list">
                <!-- Опциональное название класса -->
                <li>
                  <a href="#" class="footer__column-link">
                    <img src="./images/facebook_color_white.svg" alt="Иконка Facebook" class="footer__social-icon"> Facebook
                  </a>
                </li>
                <li>
                  <a href="#" class="footer__column-link">
                    <img src="./images/vk_color_white.svg" alt="Иконка Вконтакте" class="footer__social-icon"> ВКонтакте
                  </a>
                </li>
                <li>
                  <a href="#" class="footer__column-link">
                    <img src="./images/instagram_color_white.svg" alt="Иконка Instagram" class="footer__social-icon"> Instagram
                  </a>
                </li>
              </ul>
            </nav>
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
  /* мы ещё не умеем делать мобильную версию сайта, */
  /* поэтому выше установлена минимальная ширина страницы */
  max-width: 1600px;
  /* выше установили ограничение по максимальной ширине */
  margin: 0 auto;
  /* выше для экранов больше 1600px отцентрировали весь контент */
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.header {
  height: 100vh;
  min-height: 600px;
  max-height: 756px;
  /* выше установили ограничения для секции */
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f2f2f2;
  position: relative;
  /* Релативное позиционирование должно быть именно у шапки */
  z-index: 1;
  /* Используем z-index на шапке со значением 1, чтобы квадрат не падал под фон. */
}

.header__title {
  /* Можно лучше: используйте свойство max-width для текстовых элементов, а не width */
  max-width: 730px;
  font-size: 102px;
  line-height: 96px;
  margin-left: 64px;
}

.header__subtitle {
  width: 388px;
  /* Можно лучше: используйте свойство max-width для текстовых элементов */
  line-height: 25px;
  font-size: 18px;
  position: absolute;
  bottom: 30px;
  left: 64px;
}

.header__link {
  color: #2f80ed;
  text-decoration: none;
}

/* ниже мы привели пример двух селекторов, чтобы вы вспомнили запись элемента */
.header__square-pic {
  height: 568px;
  width: 568px;
  background: #2f80ed;
  position: absolute;
  top: 64px;
  right: 0;
  z-index: -1;
  /* Используем понижение z-index здесь для того, чтобы  */
}

.header__main-illustration {
  width: 765px;
  height: 608px;
  object-fit: cover;
  /*
  Можно лучше: Изображения могут искажаться в пропорциях. На всякий случай, хорошо бы задавать поведения для фонового или контентного изображения изображения.
  Ссылка на object-fit;
  */
  position: absolute;
  right: 0;
  bottom: 0;
  /* Можно лучше: указывая значение 0 для margin/padding/top/left не стоит использовать единицу измерения */
}

.logo {
  width: 183px;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  /* В блок выносим только общие описательные стили, не влияющие на внешнюю геометрию и позиционирование */
}

.logo_place_header {
  height: 32px;
  background-image: url("../images/logo_place_header.svg");
  position: absolute;
  top: 30px;
  left: 64px;
  /* Изменяющиеся стили и позиционирование */
}

.logo_place_footer {
  height: 35px;
  /* Если слегка обрезается - допустимо, ничего критичного. */
  background-image: url("../images/logo_place_footer.svg");
}

.description {
  margin: 100px 0;
  /*
  Допустимо, если студент замиксует дополнительно two-columns от description и там использует margin.
  На данном этапе не особо принципиально, откуда даются отступы.  Но как "Можно лучше" - писать можно
  */
}

.two-columns {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
}

.two-columns__brief {
  max-width: 175px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: normal;
  color: #2f80ed;
  margin: 0;
}

.two-columns__main-text {
  min-width: 784px;
  width: 80%;
  line-height: 34px;
  font-size: 24px;
}

.two-columns__paragraph {
  margin-top: 0;
  margin-bottom: 30px;
}

.two-columns__paragraph:last-child {
  margin-bottom: 0;
}

.two-columns__span-accent {
  /* Можно лучше: в данном случае можно опустить размеры шрифта и интерлиньяж, они наследуются. Но в целом, так делать - не лучшая практика относительно БЭМ */
  font-weight: bold;
}

.digits {
  max-width: 1100px;
  /*
  Допустим использовать здесь flex заместо margin: auto. Это кажется лишним, но выглядит корректно
  вместе с блоком kaufman. Ни один из подходов не является ошибочный.
  */
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 100px auto;
}

.section-title {
  width: 60%;
  font-size: 60px;
  line-height: 1.15;
  text-align: center;
  margin: 0 auto;
}

.section-title_theme_dark {
  color: white;
  /* "Можно лучше": задавать цвета в едином формате. */
}

.section-subtitle {
  width: 60%;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  margin: 20px auto 0;
  /* Допустимо миксовать от родителя для создания отступов. Как "Можно лучше" */
}

.section-subtitle_theme_dark {
  color: white;
}

.table {
  width: 1100px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.table__cell {
  width: 250px;
  margin: 60px 0 0;
}

/*
Советуйте в реализации "Можно лучше"
.table {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding: 0;
}

.table__cell {
  width: calc(100% / 4 - 40px)
  margin: 60px 20px 0;
}

*/

.table__cell_theme_dark {
  width: 200px;
  color: white;
  margin-right: 0;
  margin-top: 80px;
}

.table__heading {
  font-size: 24px;
  line-height: 1.15;
  margin: 0 0 20px;
  /*
  Отступы схлопнуться. Это "Можно лучше" - если текста не будет, а будет другое содержимое - у заголовка будут собственные отступы, создающие пространство
  между элементами.
   */
}

.table__heading_theme_dark {
  color: white;
}

.table__text {
  line-height: 1.2;
  font-size: 18px;
  margin: 20px 0;
}

.table__text_theme_dark {
  color: white;
}

.table__text:last-of-type {
  margin-bottom: 0;
}

.feynman {
  box-sizing: border-box;
  min-height: 890px;
  /* Можно лучше: использовать flex-column с центровкой. */
  /*
  Не хорошо делать высоту фиксированной. Фиксированные значения могут привести к проблемой с версткой при добавлении
  контента
  */
  background: #f2f2f2;
  background-image: url("../images/feynman.png");
  background-repeat: no-repeat;
  background-size: 867px 637px;
  background-position: left bottom;
  /*
  Можно посоветовать shorthand:
  background: no-repeat left bottom url('../images/feynman.png'),
  #F2F2F2;
  background-size: 867px 637px;
  */
  position: relative;
  padding-top: 100px;
  /*Используем padding, чтобы не терять цвет фона*/
}

.feynman__title {
  max-width: 648px;
  font-size: 120px;
  line-height: 1.15;
  text-align: center;
  margin: 0 auto 0;
}

.feynman__subtitle {
  /* Допустимо ограничить ширину. */
  text-align: center;
  font-size: 36px;
  line-height: 51px;
  margin: 70px 0;
}

.feynman__link {
  line-height: 51px;
  font-size: 36px;
  color: #2f80ed;
  text-decoration: none;
  position: absolute;
  top: 50%;
  right: 48px;
}

.kaufman {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1f1f1f;
  position: relative;
  overflow: hidden;
  padding: 90px 0;
  z-index: 1;
}

.kaufman__triangle {
  width: 877px;
  height: 877px;
  background: no-repeat url("../images/kaufman-triangle.svg");
  background-size: cover;
  position: absolute;
  top: 0;
  right: -210px;
  z-index: -1;
}

.footer {
  min-height: 350px;
  display: flex;
  /* Допустимо использовать здесь флекс для того, чтобы расправить footer__columns. Альтернатива height: 100% */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  /* Изменяем box-sizing, все влезло в min-height, в том числе и внутренние отступы */
  background: #1f1f1f;
  padding: 60px 0 40px;
}

.footer__columns {
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.footer__column {
  display: flex;
  flex-direction: column;
}

.footer__column_content_copyright {
  justify-content: space-between;
  flex-basis: 711px;
}

.footer__author {
  color: white;
  /* Цветами управляем императивно, без наследования. Но допустимо наследовать. Это не будет ошибкой */
  font-size: 18px;
  line-height: 25px;
  margin: 18px 0;
}

.footer__column-heading {
  color: white;
  font-size: 18px;
  line-height: 30px;

  margin: 0;
}

.footer__column-links {
  margin: 20px 0 16px;
}

.footer__column-link {
  color: white;
  font-size: 18px;
  line-height: 30px;
  /* Создает необходимый отступ между элементами. Добавление дополнительного отступа - "Можно лучше". */
  text-decoration: none;
}

.footer__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer__social-icon {
  margin-right: 10px;
}

`;

export const FIRST_WORK_HTML_TEMPLATE = getBodyFromHtmlWithStyle(
    html,
    css,
    DEV_MIX,
);
