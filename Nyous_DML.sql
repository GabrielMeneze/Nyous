INSERT INTO Acesso (Tipo) VALUES
('Administrador'),
('Padr�o');

INSERT INTO Categoria (Titulo) VALUES
   ('MeetUp'),
   ('WorkShop'),
   ('BootCamp'),
   ('Live');

INSERT INTO Localizacao (Logradouro, Numero, Complemento, Bairro, Cidade, UF, CEP) VALUES

('Alameda bar�o de limeira',539,NULL,'Santa Cecilia','S�o Paulo','SP','00023-467');


INSERT INTO Usuario (Nome,Email,Senha,DataNascimento,IdAcesso) VALUES
('Gabriel','gabriel@gmail.com','123456789','1890-08-02T00:00:00',1);

INSERT INTO Evento (Evento,IdLocalizacao,IdCategoria) VALUES
('2020-09-25T22:00:00',1,1)
