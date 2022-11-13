
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './home.scss';

const Home = () => {
    return(
        <div className='home'>
            <div className="home-car">
                <Carousel>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/110B8.jpg" />
                        <p className="legend">BMW 3 SERIES</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/BMW_212.jpg" />
                        <p className="legend">BMW 3 SERIES</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/BMW_311.jpg" />
                        <p className="legend">BMW 3 SERIES</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/6A70.jpg" />
                        <p className="legend">BMW 3 SERIES</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/BMW_6F.jpg" />
                        <p className="legend">BMW 3 SERIES</p>
                    </div>
                </Carousel>
                <div className="home-car-info">
                    <h1>BMW</h1>
                    <p>На початку жовтня 2018 року на подіумах міжнародного паризького автосалону німецький виробник представив абсолютно нову BMW 3 Series. Новинка є абсолютно новим, уже сьомим, поколінням. Воно отримало індекс G20, нову модульну платформу, змінену лінійку силових агрегатів, набір досить цікавих та незвичайних опцій, перекроєний салон, а також нову зовнішність. Виробник заздалегідь не показував концепт-версії. Третє сімейство є одним із найконсервативніших.</p>
                    <div className="home-car-info-characteristic">
                        <p>Двигун: <span>265 Л.С.</span></p>
                        <p>Привід: <span>Повний</span></p>
                        <p>Топливо: <span>ДП</span></p>
                        <p>Розхід: <span>4.7/6.4</span></p>
                        <p>До сотні: <span>5.1 с</span></p>
                        <p>Макс. швидкість: <span>250 км/год</span></p>
                    </div>
                    <a href="http://www.motorpage.ru/BMW/3series/last/" >
                        <button className='home-car-info-btn'>Детальна інформація</button>
                    </a>
                </div>
            </div>
            <div className="home-car">
                <div className="home-car-info">
                    <h1>MERCEDES</h1>
                    <p>Mercedes-Benz AMG GT прийшов на зміну легендарній моделі SLS AMG і загалом перейняв усі ключові риси легендарного попередника. Перше покоління постало перед широкою публікою у 2014 році та протрималося до 2017, коли виробник представив оновлену версію. Фактично, вона є першим і здебільшого іміджевим рестайлінгом. Загалом, технічна начинка автомобіля збереглася в тому ж вигляді, однак, на базі цього автомобіля з'явилися більш просунуті моделі з літерами «C» і «R» у назві.</p>
                    <div className="home-car-info-characteristic">
                        <p>Двигун: <span>476 Л.С.</span></p>
                        <p>Привід: <span>Задній</span></p>
                        <p>Топливо: <span>Бензин</span></p>
                        <p>Розхід: <span>7.9/12.5</span></p>
                        <p>До сотні: <span>4 с</span></p>
                        <p>Макс. швидкість: <span>304 км/год</span></p>
                    </div>
                    <a href="http://www.motorpage.ru/MercedesBenz/amg_gt/last/" >
                        <button className='home-car-info-btn'>Детальна інформація</button>
                    </a>
                </div>
                <Carousel>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/110E4.jpg" />
                        <p className="legend">MERCEDES-BENZ AMG GT</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/3D0F.jpg" />
                        <p className="legend">MERCEDES-BENZ AMG GT</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/108B8.jpg" />
                        <p className="legend">MERCEDES-BENZ AMG GT</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/124D8.jpg" />
                        <p className="legend">MERCEDES-BENZ AMG GT</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/115AF.jpg" />
                        <p className="legend">MERCEDES-BENZ AMG GT</p>
                    </div>
                </Carousel>
            </div>
            <div className="home-car">
                <Carousel>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/2F7C.jpg" />
                        <p className="legend">LEXUS GX</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/6A16.jpg" />
                        <p className="legend">LEXUS GX</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/980B.jpg" />
                        <p className="legend">LEXUS GX</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/11752.jpg" />
                        <p className="legend">LEXUS GX</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/10848.jpg" />
                        <p className="legend">LEXUS GX</p>
                    </div>
                </Carousel>
                <div className="home-car-info">
                    <h1>LEXUS</h1>
                    <p>Друге покоління Lexus GX вийшло на світовий ринок у 2009 році і випускалося без значних змін до 2013 року, коли виробник вирішив провести перший рестайлінг, що протримався до 2019 року. Очевидно, платформа автомобіля виявилася вдалою і залишилася актуальною через 10 років. У 2020 модельному році автомобіль отримає оновлення, що фактично є другим і не дуже глибоким рестайлінгом.</p>
                    <div className="home-car-info-characteristic">
                        <p>Двигун: <span>296 Л.С.</span></p>
                        <p>Привід: <span>Повний</span></p>
                        <p>Топливо: <span>Бензин</span></p>
                        <p>Розхід: <span>9.9/17.7</span></p>
                        <p>До сотні: <span>8.3 с</span></p>
                        <p>Макс. швидкість: <span>175 км/год</span></p>
                    </div>
                    <a href="http://www.motorpage.ru/BMW/3series/last/" >
                        <button className='home-car-info-btn'>Детальна інформація</button>
                    </a>
                </div>
            </div>
            <div className="home-car">
                <div className="home-car-info">
                    <h1>HYUNDAI</h1>
                    <p>Нова генерація Hyundai Santa Fe постала перед світовою громадськістю на спеціальному заході 22 лютого 2018 року. Це вже повноцінне четверте покоління, а не черговий плановий рестайлінг. Новинка набула маси кардинальних змін. Виробник модернізував технічну начинку, подарував їй новий інтер'єр та повністю перекроїв дизайн. У вічі впадає незвичайна двоповерхова оптика головного освітлення. Зверху розташувалися вузькі витягнуті секції світлодіодних денних ходових вогнів, з'єднаних візуально витонченою хромованою накладкою.</p>
                    <div className="home-car-info-characteristic">
                        <p>Двигун: <span>182 Л.С.</span></p>
                        <p>Привід: <span>Повний</span></p>
                        <p>Топливо: <span>Бензин</span></p>
                        <p>Розхід: <span>8.5/12.2</span></p>
                        <p>До сотні: <span>6.8 с</span></p>
                        <p>Макс. швидкість: <span>245 км/год</span></p>
                    </div>
                    <a href="http://www.motorpage.ru/Hyundai/Santa_Fe/last/" >
                        <button className='home-car-info-btn'>Детальна інформація</button>
                    </a>
                </div>
                <Carousel>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/1E14.jpg" />
                        <p className="legend">HYUNDAI SANTA FE</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/77EE.jpg" />
                        <p className="legend">HYUNDAI SANTA FE</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/12396.jpg" />
                        <p className="legend">HYUNDAI SANTA FE</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/142B1.jpg" />
                        <p className="legend">HYUNDAI SANTA FE</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/106B7.jpg" />
                        <p className="legend">HYUNDAI SANTA FE</p>
                    </div>
                </Carousel>
            </div>
            <div className="home-car">
                <Carousel>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/116D8.jpg" />
                        <p className="legend">JAGUAR F-TYPE</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/7ABE.jpg" />
                        <p className="legend">JAGUAR F-TYPE</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/10968.jpg" />
                        <p className="legend">JAGUAR F-TYPE</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/116D9.jpg" />
                        <p className="legend">JAGUAR F-TYPE</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/12536.jpg" />
                        <p className="legend">JAGUAR F-TYPE</p>
                    </div>
                </Carousel>
                <div className="home-car-info">
                    <h1>JAGUAR</h1>
                    <p>Дебют оригінального Jaguar F-Type пройшов майже сім років тому, а автомобіль так і не змінив покоління, що досить незвичайно для спортивних моделей. За цей час було зроблено безліч технічних доробок і навіть провели один рестайлінг. Примітно, що зовнішність він торкнувся не сильно. Незважаючи на поважний вік, виробник не планує розлучатися з цією генерацією і під кінець 2019 року викочує ще один, другий за рахунком, рестайлінг оригінального покоління.</p>
                    <div className="home-car-info-characteristic">
                        <p>Двигун: <span>380 Л.С.</span></p>
                        <p>Привід: <span>Задній</span></p>
                        <p>Топливо: <span>Бензин</span></p>
                        <p>Розхід: <span>10.7/15.1</span></p>
                        <p>До сотні: <span>5.1 с</span></p>
                        <p>Макс. швидкість: <span>275 км/год</span></p>
                    </div>
                    <a href="http://www.motorpage.ru/BMW/3series/last/" >
                        <button className='home-car-info-btn'>Детальна інформація</button>
                    </a>
                </div>
            </div>
            <div className="home-car">
                <div className="home-car-info">
                    <h1>AUDI</h1>
                    <p>Дебют оригінального Jaguar F-Type пройшов майже сім років тому, а автомобіль так і не змінив покоління, що досить незвичайно для спортивних моделей. За цей час було зроблено безліч технічних доробок і навіть провели один рестайлінг. Примітно, що зовнішність він торкнувся не сильно. Незважаючи на поважний вік, виробник не планує розлучатися з цією генерацією і під кінець 2019 року викочує ще один, другий за рахунком, рестайлінг оригінального покоління.</p>
                    <div className="home-car-info-characteristic">
                        <p>Двигун: <span>340 Л.С.</span></p>
                        <p>Привід: <span>Повний</span></p>
                        <p>Топливо: <span>Бензин</span></p>
                        <p>Розхід: <span>10.3/14.4</span></p>
                        <p>До сотні: <span>5.3 с</span></p>
                        <p>Макс. швидкість: <span>250 км/год</span></p>
                    </div>
                    <a href="http://www.motorpage.ru/Audi/A7/last/" >
                        <button className='home-car-info-btn'>Детальна інформація</button>
                    </a>
                </div>
                <Carousel>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/1DC0.jpg" />
                        <p className="legend">AUDI A7</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/8720.jpg" />
                        <p className="legend">AUDI A7</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/Audi_2F.jpg" />
                        <p className="legend">AUDI A7</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/Audi_3E.jpg" />
                        <p className="legend">AUDI A7</p>
                    </div>
                    <div>
                        <img src="http://cdn.motorpage.ru/Photos/800/Audi_69.jpg" />
                        <p className="legend">AUDI A7</p>
                    </div>
                </Carousel>
            </div>
        </div>
    )
};

export default Home;