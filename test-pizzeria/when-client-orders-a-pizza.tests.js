//# Домашнее задание
//* Выбрать предметную область
//* Написать юнит-тесты на предложенные сценарии
// TODO: Добавить свои собственные сценарии и написать тесты
// TODO: Выбрать 5-10 тестов и предложить несколько вариантов их именования, выбрать лучшее и объяснить, почему это имя лучше других
// =====================

/**
* ## Заказ пиццы на сайте
* Клиент может заказать пиццу на сайте
* Если у клиента день рождения, ему полагается специальная сладкая пицца
* При вводе промокода "ABCD", скидка 100 рублей
* При заказе 2х пицц с 10:00 по 16:00 скидка 20%
* 5% от заказа на бонусный счет
* Для оплаты заказа можно использовать средства с бонусного счета
*/

var assert = require('assert');
var User = require('../src/user');
var Pizza = require('../src/pizza');
var Utils = require('../src/utils');

describe('When client orders a pizza', ()=>{
    let client,
        shop;

    beforeEach(()=>{
        client = new Client();
        shop = new Shop();
    });

    describe('if it\'s his birthday', ()=>{
		let someDate = Utils.makeDatetime('12 april');
		shop.setTime(someDate);
		client.setBirthday(someDate);

        it('special sweet free pizza is added to his cart', ()=>{
            // arrange
            let somePizza = new Pizza({id: 'margarita'});
            let specialPizza = new Pizza({id: 'specialSweetForBirthday'});

            // act
            client.addToCart(somePizza);

            // assert
            let clientCart = client.getCart();
            assert(true, clientCart.contains(specialPizza));
        });
    });


    describe('if promocode "ABCD" provided', ()=>{
        it('discount 100 rubles', ()=>{
            // arrange
            let somePizza = new Pizza({id: 'margarita'});

            // act
            client.addToCart(somePizza);
            client.setPromocode("ABCD");

            // assert
            let orderDiscount = client.getCart().getDiscount();
            assertEqual('100 rubles', orderDiscount);
        });
    });


    describe('if 2 pizzas ordered and it\'s 10:00-16:00', ()=>{
        it('discount is 20%', ()=>{
            // arrange
            let somePizza = new Pizza({id: 'margarita'});
            let someOtherPizza = new Pizza({id: 'pepperoni'});

            // act
            client.addToCart(somePizza);
            client.addToCart(someOtherPizza);

            // assert
            let orderDiscount = client.getCart().getDiscount();
            assertEqual('20 %', orderDiscount);
        });
    });


    describe('if order is paid', ()=>{
        it('client gets 5% as a bonus', ()=>{
            // arrange
            let somePizza = new Pizza({id: 'margarita'});
            let someOtherPizza = new Pizza({id: 'pepperoni'});
            client.addToCart(somePizza);
            client.addToCart(someOtherPizza);

            // act
            let orderCost = client.getCart().getCost();
            client.purchase();

            // assert
            let bonus = client.getLastAddedBonus();
            assertEqual(5/100, bonus/orderCost);
        });
    });


    describe('if bonus account is not empty', ()=>{
        it('client can use bonus points to purchase', ()=>{
            // arrange
            client.addBonusPoints(123);

            // act
            let paymentMethods = client.getAvailablePaymentMethods();

            // assert
            assert(true, paymentMethods.contains('bonusPoints'));
        });
    });
});
