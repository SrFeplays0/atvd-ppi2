import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

var listaUsuario = [];

const app = express();

app.use(express.static('./publico'));

app.use('/cadastrarUsuario',(req,resp)=>{

    const nome = req.query.nome;
    const areainteresse = req.query.areainteresse;
    const telefone = req.query.telefone;
    const comentarios = req.query.comentarios;

    listaUsuario.push({
        nome: nome,
        areainteresse: areainteresse,
        telefone: telefone,
        comentarios: comentarios
    });
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>atvd2</title>');
    resp.write('<meta charset="UTF-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write(`<h1>Usuario ${nome} Cadastro Realizado com sucesso!</h1>`);
    resp.write(`<a href="/index.html">Continuar Cadastro!</a>`);
    resp.write('<br/>');
    resp.write(`<a href="/listarUsuario">Listar Usuario!</a>`);
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
    
});

app.use('/listarUsuario', (req,resp)=> {
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<style>');
                resp.write('.table {');
                resp.write('    width: 100%;');
                resp.write('    border-collapse: collapse;');
                resp.write('}');
                resp.write('.table th, .table td {');
                resp.write('    padding: 8px;');
                resp.write('    border-bottom: 1px solid #ddd;');
                resp.write('    text-align: left;');
                resp.write('}');
                resp.write('.table th {');
                resp.write('    background-color: #f2f2f2;');
                resp.write('    color: #333;');
                resp.write('}');
                resp.write('.table-striped tbody tr:nth-child(odd) {');
                resp.write('    background-color: #f9f9f9;');
                resp.write('}');
    resp.write('</style>');
    resp.write('<title>atvd2</title>');
    resp.write('<meta charset="UTF-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Lista de Usuarios</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>Area de interesse</th>');
    resp.write('<th>Telefone</th>');
    resp.write('<th>Comentarios</th>');
    resp.write('</tr>');
    for (let i=0; i<listaUsuario.length; i++){
        resp.write('<tr>');
        resp.write(`<td>${listaUsuario[i].nome}</td>`);
        resp.write(`<td>${listaUsuario[i].areainteresse}</td>`);
        resp.write(`<td>${listaUsuario[i].telefone}</td>`);
        resp.write(`<td>${listaUsuario[i].comentarios}</td>`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write(`<a href="/">Voltar</a>`);
    resp.write('</body>');
    resp.write('</html>');

    resp.end();
});

app.listen(porta , host,() => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
})