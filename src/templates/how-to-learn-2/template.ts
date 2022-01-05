import { getBodyFromHtmlWithStyle } from '../../utils/html.utils';
import { normalizeCss } from '../normalize';

const html = `
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex">
  <title>Научиться учиться</title>
  <link rel="stylesheet" href="./vendor/normalize.css">
  <link rel="stylesheet" href="./pages/index.css">
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
        <a href="#" target="_blank" class="header__link">
          Узнать &rarr;
        </a>
        <!--
        Обратите внимание, что мы не подмиксовываем к header__link общий блок типа link,
        содержащий элемент наведения.
       -->
      </p>
      <img src="./images/header-image.png" alt="Картина 'Опять Двойка'" class="header__main-illustration">
      <!--Опционально: "Можно лучше" -- Если изображение вставлено как div - рассказать про важность контентных изображений и правильных альтов. -->
      <div class="header__square-pic rotation"></div>
      <!--Опционально: "Можно лучше" -- вставить как псевдоэлемент блока header. По завершению второго спринта.-->
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
              Ни в школе, ни в институте нас не учат тому, как правильно изучать материал. Мы готовимся к экзаменам и
              учим билеты. Мы тренируемся решать однообразные задачи, чтобы лучше сдать тест, но часто в итоге это не
              дает нам реального знания. Зубрежка быстро выветривается и не приносит пользы.
            </p>
            <p class="two-columns__paragraph">
              <span class="two-columns__span-accent">Вывод:</span> учиться тоже нужно уметь, но почему-то этому мало где
              учат. Что с этим делать?
              <!--Никаких <b> <strong> -- это презентационные теги. -->
            </p>
            <p class="two-columns__paragraph">
              Конкретные техники и упражнения помогают изменить подход к обучению, сделать его эффективным и
              захватывающим. Эти же техники применяются на примере обучения в Практикуме.
            </p>
          </div>
        </div>
      </section>

      <section class="techniques">
        <h2 class="section-title">
          Техники обучения
        </h2>
        <p class="section-subtitle">
          Пять практик от Барбары Оакли
        </p>
        <ul class="cards">
          <li class="cards__item">
            <img src="./images/cards-attention.png" alt="Книга в руках" class="cards__image">
            <h3 class="cards__title">
              Два вида внимания
            </h3>
            <p class="cards__description">
              Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.
            </p>
          </li>
          <li class="cards__item">
            <img src="./images/cards-recall.png" alt="Статуя" class="cards__image">
            <h3 class="cards__title">
              Recall
            </h3>
            <p class="cards__description">
              Вспоминайте изученное – это позволит соединить разрозненные порции памяти.
            </p>
          </li>
          <li class="cards__item">
            <img src="./images/cards-interliving.png" alt="Зал" class="cards__image">
            <h3 class="cards__title">
              Интерливинг
            </h3>
            <p class="cards__description">
              Изучайте несколько навыков одновременно, они обогащают друг друга.
            </p>
          </li>
          <li class="cards__item">
            <img src="./images/cards-question.png" alt="Белая комната" class="cards__image">
            <h3 class="cards__title">
              Вопросы
            </h3>
            <p class="cards__description">
              Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.
            </p>
          </li>
          <li class="cards__item">
            <img src="./images/cards-competence.png" alt="Стопка книг" class="cards__image">
            <h3 class="cards__title">
              Иллюзия компетентности
            </h3>
            <p class="cards__description">
              Повторите про себя, запишите, расскажите другу: вам только кажется, что вы владеете новой темой.
            </p>
          </li>
        </ul>
      </section>

      <section class="video">
        <h2 class="section-title">Видео на TED</h2>
        <p class="section-subtitle">Для тех, кто любит прокрастинировать</p>
        <ul class="video__iframes">
          <!-- Этот список рекомендую выписывать как "Можно лучше" -->
          <li>
            <iframe class="video__iframe" allowfullscreen src="https://www.youtube.com/embed/5MgBikgcWnY"></iframe>
          </li>
          <li>
            <iframe class="video__iframe" allowfullscreen src="https://www.youtube.com/embed/arj7oStGLkU"></iframe>
          </li>
        </ul>
      </section>

      <section class="oakley">
        <div class="two-columns">
          <h2 class="two-columns__brief">
            История Барбары Оакли
          </h2>
          <div class="two-columns__main-text">
            <p class="two-columns__paragraph">
              С детства Барбаре не давалась математика. Она считала себя законченным гуманитарием, причём далеко не
              самым умным. В армии она изучала русский язык, чтобы получить надбавку, да так успешно, что её выдвинули
              в командиры. Но для продвижения по службе нужно было сдавать математику. И тогда Барбара придумала свой
              подход к точным наукам. Оказалось, если вам что-то «плохо даётся», ваши добытые трудом знания гораздо
              глубже, чем у тех, кому всё ясно с первого взгляда.
            </p>
          </div>
        </div>
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

      <section class="khan">
        <div class="khan__container">
          <p class="khan__author">
            Салман Хан
          </p>
          <h2 class="khan__title">
            Весь мир – школа
          </h2>
          <blockquote class="khan__quote">
            Страсть и новаторство Сала Хана меняют процесс обучения миллионов студентов по всему миру. Книгу «Весь мир —
            школа» нужно прочитать всем, кто занимается образованием — так учащиеся повсюду смогут получить навыки и
            знания, которые приносят успех в школе, карьере и жизни.
          </blockquote>
          <h3 class="khan__quote-author">
            Джордж Лукас
          </h3>
          <!-- address тут не совсем применим. Семантически он относится к другим сущностям. -->
          <p class="khan__quote-author-subline">
            Кинорежиссер, продюсер
          </p>
          <div class="khan__book-container">
            <img class="khan__book-pic" src="./images/khan-book.jpg" alt="Обложка книги Салман Хан">
            <a href="#" class="khan__buy-link" target="_blank" rel="noopener noreferrer">
              Купить книгу &rarr;
            </a>
          </div>
        </div>
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
        <div class="kaufman__triangle rotation"></div>
        <!-- Только фоновое изображение. Допустимо реализовать как псевдоэлемент у блока kaufman -->
      </section>

      <section class="resources">
        <h2 class="section-title">
          Полезные ресурсы
        </h2>
        <p class="section-subtitle">
          Больше материалов о техниках и лайфхаках обучения
        </p>
        <ul class="resources__logo-zone">
          <li>
            <a href="https://arzamas.academy/" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo/resources-arzamas.svg" alt="Логотип портала Арзамас" class="resources__logo">
            </a>
          </li>
          <li>
            <a href="https://nplus1.ru/" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo/resources-n1.svg" alt="Логотип портала N+1" class="resources__logo">
            </a>
          </li>
          <li>
            <a href="https://strelka.com/" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo/resources-strelka.svg" alt="Логотип портала Стрелка" class="resources__logo">
            </a>
          </li>
          <li>
            <a href="https://polka.academy/" target="_blank" rel="noopener noreferrer">
              <img src="./images/logo/resources-polka.svg" alt="Логотип портала Полка" class="resources__logo">
            </a>
          </li>
        </ul>
      </section>

    </main>

    <footer class="footer">
      <div class="footer__columns">
        <!-- Используется отдельная обертка для основных колонок -->
        <div class="footer__column footer__column_content_copyright">
          <div class="logo logo_place_footer"></div>
          <p class="footer__author">
            &copy; 2020
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
                  <img src="./images/facebook_color_white.svg" alt="Иконка Facebook" class="footer__social-icon">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" class="footer__column-link">
                  <img src="./images/vk_color_white.svg" alt="Иконка Вконтакте" class="footer__social-icon">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" class="footer__column-link">
                  <img src="./images/instagram_color_white.svg" alt="Иконка Instagram" class="footer__social-icon">
                  Instagram
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

const css = `
.page {
    min-width: 1100px;
    /* мы ещё не умеем делать мобильную версию сайта, */
    /* поэтому выше установлена минимальная ширина страницы */
    max-width: 1600px;
    /* выше установили ограничение по максимальной ширине */
    margin: 0 auto;
    /* выше для экранов больше 1600px отцентрировали весь контент */
    font-family: 'Helvetica Neue', Arial, sans-serif;
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
    background-image: url('../../../images/logo_place_header.svg');
    position: absolute;
    top: 30px;
    left: 64px;
    /* Изменяющиеся стили и позиционирование */
}

.logo_place_footer {
    height: 35px;
    /* Если слегка обрезается - допустимо, ничего критичного. */
    background-image: url('../../../images/logo_place_footer.svg');
}

@keyframes rotation {
    from {
        -webkit-transform: rotate(-15deg);
        transform: rotate(-15deg);
    }
    to {
        -webkit-transform: rotate(345deg);
        transform: rotate(345deg);
    }
}

.rotation {
    animation: rotation linear infinite 20s;
}

.section-title {
    max-width: 60%;
    font-size: 60px;
    line-height: 1.15;
    text-align: center;
    margin: 0 auto;
    /* Можно лучше: добавьте margin-top 100 для заголовка, убрав его у секций, где используется данный блок */
}

.section-title_theme_dark {
    color: white;
    /* "Можно лучше": задавать цвета в едином формате. */
}

.section-subtitle {
    max-width: 60%;
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

.table__text:last-of-type {
    margin-bottom: 0;
}

.table__text_theme_dark {
    color: white;
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
    overflow: hidden;
    /* для блока rotation */
}

.header__link {
    color: #2f80ed;
    text-decoration: none;
    transition: opacity 1s ease-out;
    /* Можно лучше, использовать transition */
}

.header__link:hover {
    opacity: 0.3;
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

.header__subtitle {
    width: 388px;
    /* Можно лучше: используйте свойство max-width для текстовых элементов */
    line-height: 25px;
    font-size: 18px;
    position: absolute;
    bottom: 30px;
    left: 64px;
}

.header__title {
    width: 730px;
    /* Можно лучше: используйте свойство max-width для текстовых элементов */
    font-size: 102px;
    line-height: 96px;
    margin-left: 64px;
}

.description {
    margin: 100px 0;
    /*
    Допустимо, если студент замиксует дополнительно two-columns от description и там использует margin. На данном этапе не особо принципиально, откуда даются отступы.
    Но как "Можно лучше" - писать можно
    */
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

.feynman {
    min-height: 790px;
    /* Можно лучше: использовать flex-column с центровкой. */
    /*
  Не хорошо делать высоту фиксированной. Фиксированные значения могут привести к проблемой с версткой при добавлении
  контента
  */
    background: #f2f2f2;
    background-image: url('../../images/feynman.png');
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
    /* Хороший повод побить студента, если он будет глобально вешать bxbb. Из-за этого данный блок сломается. */
    /*Используем padding, чтобы не терять цвет фона*/
}

.feynman__link {
    line-height: 51px;
    font-size: 36px;
    color: #000;
    text-decoration: none;
    position: absolute;
    top: 50%;
    right: 48px;
    transition: opacity 1s ease-out;
    /* Можно лучше, использовать transition */
}

.feynman__link:hover {
    opacity: 0.3;
}

.feynman__title {
    max-width: 648px;
    font-size: 120px;
    line-height: 1.15;
    text-align: center;
    margin: 0 auto;
}

.feynman__subtitle {
    /* Допустимо ограничить ширину. */
    text-align: center;
    font-size: 36px;
    line-height: 51px;
    margin: 70px 0;
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

.footer__author {
    color: white;
    /* Цветами управляем императивно, без наследования. Но допустимо наследовать. Это не будет ошибкой */
    font-size: 18px;
    line-height: 25px;
    margin: 18px 0;
}

.footer__column {
    display: flex;
    flex-direction: column;
}

.footer__column_content_copyright {
    justify-content: space-between;
    flex-basis: 711px;
}

.footer__column-heading {
    color: white;
    font-size: 18px;
    line-height: 30px;

    margin: 0;
}

.footer__column-link {
    color: white;
    font-size: 18px;
    line-height: 30px;
    /* Создает необходимый отступ между элементами. Добавление дополнительного отступа - "Можно лучше". */
    text-decoration: none;
    transition: opacity 1s ease-out;
    /* Можно лучше, использовать transition */
}

.footer__column-link:hover {
    opacity: 0.3;
}

.footer__column-links {
    margin: 20px 0 16px;
}

.footer__columns {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.footer__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.footer__social-icon {
    margin-right: 10px;
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
    background: no-repeat url('../../../images/kaufman-triangle.svg');
    background-size: cover;
    position: absolute;
    top: 0;
    right: -210px;
    z-index: -1;
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
    max-width: 80%;
    line-height: 34px;
    font-size: 24px;
}

.two-columns__paragraph:first-child {
    margin-top: 0;
}

.two-columns__paragraph:last-child {
    margin-bottom: 0;
}

.two-columns__span-accent {
    /* Можно лучше: в данном случае можно опустить размеры шрифта и интерлиньяж, они наследуются. Но в целом, так делать - не лучшая практика относительно БЭМ */
    font-weight: bold;
}

.techniques {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.cards {
    width: 920px;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
}

.cards__item {
    width: 240px;
    text-align: center;
    /* Можно точечно задавать у каждого текстового элемента */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 100px 0 0;
}

.cards__item:nth-child(3n + 3) {
    margin-right: 0;
}

.cards__image {
    width: 160px;
    height: 160px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}

.cards__title {
    line-height: 1.15;
    font-size: 24px;
    margin: 43px 0 16px;
}

.cards__description {
    line-height: 23px;
    font-size: 18px;
    margin: 0;
}

.video {
    margin: 100px 0 -50px;
    /*
    Это спорная практика. Во-первых, мы, как обычно, пишем марджины блоку.
    Во-вторых, отрицательный марджин у такого блока может "сожрать" часть другого при изменении расположения.
    Конечно, где-то в другом мире хорошо бы поднять отрицательным марджином "безопасный" блок oakley при помощи модификатора.
    */
}

.video__iframe {
    width: 515px;
    height: 316px;
    border: none;
    position: relative;
    z-index: 1;
    margin-right: 20px;
    /*
    Если студент использует top, как можно лучше обратите его внимание на получившиеся размеры блока li.
    */
}

.video__iframe:nth-child(2n + 2) {
    margin-right: 0;
}

.video__iframes {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 50px 0 0;
    padding: 0;
    /*
    Подвинуть можно и этот блок
    */
}

.khan {
    background: #f2f2f2;
    padding-top: 105px;
}

.khan__author {
    line-height: 42px;
    font-size: 30px;
    margin: 0;
}

.khan__book-container {
    display: flex;
    margin: 68px 0 0;
}

.khan__buy-link {
    line-height: 42px;
    font-size: 30px;
    text-decoration: none;
    color: #2f80ed;
    align-self: flex-start;
    /* Ссылка не должна быть на весь контейнер, т.к. может перекрывать другие контентные области */
    transition: opacity 1s ease-out;
    /* Можно лучше для transition с докой */
}

.khan__buy-link:hover {
    opacity: 0.3;
}

.khan__book-pic {
    width: 620px;
    height: 608px;
    object-fit: cover;
    object-position: top;
    /* Советуйте такую реализацию с использование object-fit&-position. Ссылайтесь на доку.
       Т.к. студенты не знают данного свойства
     */
    margin-right: 48px;
}

.khan__container {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.khan__quote {
    width: 790px;
    font-size: 24px;
    line-height: 34px;
    margin: 26px 0;
}

.khan__quote-author {
    font-size: 24px;
    line-height: 1.15;
    margin: 10px 0;
}

.khan__quote-author-subline {
    line-height: 1.15;
    font-size: 24px;
    margin: 0;
}

.khan__title {
    line-height: 1.15;
    font-size: 60px;
    margin: 0 0 24px;
}

.oakley {
    background-color: #f2f2f2;
    padding: 160px 0 80px;
}

.resources {
    margin-top: 100px;
}

.resources__logo-zone {
    max-width: 1100px;
    list-style-type: none;
    display: flex;
    margin: 80px auto 217px;
}

.resources__logo {
    padding: 0;
    width: 270px;
    height: 38px;
    object-fit: contain;
    transition: opacity 0.5s ease-out, transform 0.5s ease-in-out;
}

.resources__logo:hover {
    opacity: 0.3;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}

`;

export const DEV_MIX = `
* {
    animation: none !important;
    transform: none !important;
}

.video__iframe {
  background-color: black;
}
`;

export const SECOND_WORK_HTML_TEMPLATE = getBodyFromHtmlWithStyle(
    html,
    css,
    DEV_MIX,
);
