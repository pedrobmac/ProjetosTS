const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        //se tiver erro no cadastro, mostrar com mensagem flash e redirecionar de volta para a página de login
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso');
        req.session.save(() => {
            return res.redirect('/login/index');
        });

    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        //se tiver erro no login, mostrar com mensagem flash e redirecionar de volta para a página de login
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Login bem-sucedido');
        req.session.user = login.user;
        req.session.save(() => {
            return res.redirect('/');
        });

    } catch (e) {
        console.log(e);
        return res.render('404');
    }

};

exports.logout = async (req, res) => {
    req.session.destroy();
    return res.redirect('/login/index');
};