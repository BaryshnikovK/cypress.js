
describe('Тестирование поиска картинок сайта yandex.ru', function () {
    
    it('Открываю главную страницу сайта staya.dog', function () {
        cy.visit('https://yandex.ru/');
        cy.get('#text').type('Котята');
        cy.get('.search2__button > .button').click();
        cy.contains('Картинки по запросу «Котята»');
         })
})