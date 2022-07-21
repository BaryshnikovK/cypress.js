
describe('Тестирование формы логина и пароля сайта staya.dog с корректными данными', function () {
    
    it('Открываю главную страницу сайта staya.dog', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('kosti4koo@yandex.ru');
        cy.get('.auth-form > form > [type="password"]').type('Kate5411');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');

         })
})