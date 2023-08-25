describe('Formulário de Contato e Orçamento para Locação', () => {
  beforeEach(() => {
    cy.visit('https://www.upgeradores.com.br/locacao');
  });
  it('Cenário 1: Preenche formulário com dados válidos', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
  it('Cenário 2: Não preenche o campo "nome"', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
  it('Cenário 3: Não preenche o campo "Empresa"', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
  it('Cenário 4: Não preenche o campo "E-mail"', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.get('#comp-l83ibgtj').should('be.visible');
  });
  it('Cenário 5: Não preenche o campo "Telefone"', () => {
     cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
  it('Cenário 6: Não preenche o campo "Potência do Gerador"', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
  it('Cenário 7: Não preenche o campo "Periodo de Locação"', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
  it('Cenário 8: Não preenche o campo "Quantas horas por dia o gerador será usado"', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
  it('Cenário 9: Não preenche o campo "Local de Entrega"', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#textarea_comp-l83ibgwb').type('Observações importantes teste');
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
  it.only('Cenário : Não preenche o campo "Observações"', () => {
    cy.get('[style="font-size:35px;"] > .wixui-rich-text__text').should('be.visible');
    cy.wait(2000)
    cy.get('#input_comp-l83ibgui').type('Pedro Castro');
    cy.get('#input_comp-l83ibgvq').type('Teste ltda.');
    cy.get('#input_comp-l83ibgw5').type('teste@email.com');
    cy.get('#input_comp-l83iehvp').type('(11) 98765-4321');
    cy.get('#input_comp-l83iey6z').type('100 kW');
    cy.get('#input_comp-l83ig5hf').type('7 dias');
    cy.get('#input_comp-l83ih0jh').type('10 horas');
    cy.get('#input_comp-l83iiw6m').type('Rua Firmino 155');
    
    cy.get('[data-testid="buttonElement"]').click();
    cy.wait(4000)
    cy.get('[data-testid="title"]').should('be.visible');
  });
});
